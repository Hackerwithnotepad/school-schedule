# 🗓️ School Schedule

A simple, minimal, and fast web app for viewing and managing a school schedule.  
Built with **HTML**, **JavaScript**, and **Tailwind CSS** — no frameworks, no dependencies, just clean code.

## 🚀 Features

- 📅 **Week view** and **day view** calendar modes  
- 🧭 Simple navigation between dates  
- ⚡ Lightweight and fast loading  
- 🎨 Styled entirely with TailwindCSS  
- 💾 Easy to customize or integrate with your own data

## 🛠️ Tech Stack

- **Frontend:** HTML, JavaScript (vanilla)
- **Styling:** Tailwind CSS (via CDN or PostCSS)
- **Version control:** Git + GitHub Pages

## 💡 Usage

Clone this repository and open `index.html` in your browser:

```bash
git clone https://github.com/Hackerwithnotepad/school-schedule
cd school-schedule
open index.html
```

## 📝 Setup Your Own Schedule

To use your own events instead of the sample data:

1. **Google Calendar Integration (via Cloudflare Pages)**
   - Set up a Google Calendar and get an API key.
   - Create a Cloudflare Pages project and add the following environment variables:
     - `GOOGLE_API_KEY` – your Google API key
     - `CALENDAR_ID` – the ID of your calendar
   - The app will fetch events automatically from your calendar.

2. **Local JSON / Custom Data**
   - You can modify the `events` array in `index.html` directly.
   - Each event object should have:
     ```js
     {
       id: 'unique-id',
       title: 'Event Name',
       start: 'YYYY-MM-DDTHH:MM:SS',
       end: 'YYYY-MM-DDTHH:MM:SS',
       allDay: false,      // true for all-day events
       description: 'Optional notes',
       location: 'Optional location'
     }
     ```
   - Save and refresh the page to see your custom events.

3. **Filtering and Tags**
   - Use hashtags like `#Test` or `#Other` in your event titles to categorize them.
   - Toggle filters in the settings panel to show only tests or other events.

## 📜 License

This project is licensed under the [MIT License](./LICENSE).


