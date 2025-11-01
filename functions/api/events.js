// functions/api/events.js
export async function onRequest(context) {
  // Secrets are injected by Cloudflare Pages into context.env
  const GOOGLE_API_KEY = context.env.GOOGLE_API_KEY;
  const CALENDAR_ID = context.env.CALENDAR_ID;
  
  if (!GOOGLE_API_KEY || !CALENDAR_ID) {
    return new Response(JSON.stringify({ error: 'Missing GOOGLE_API_KEY or CALENDAR_ID in environment' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  try {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
    const end = new Date(now.getFullYear(), now.getMonth() + 2, 0).toISOString();
    
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${encodeURIComponent(GOOGLE_API_KEY)}&timeMin=${encodeURIComponent(start)}&timeMax=${encodeURIComponent(end)}&singleEvents=true&orderBy=startTime&maxResults=2500`;
    
    const res = await fetch(url);
    
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      return new Response(JSON.stringify({ error: `Google API error: ${res.status}`, details: txt }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const data = await res.json();
    
    // You can set caching headers here if you want to reduce requests to Google:
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=60'  // Cache for 60 seconds
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Fetch failed', details: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}