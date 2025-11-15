// ==========================================
// CALENDAR TRANSLATIONS - ENGLISH TO HEBREW
// ==========================================
// 
// Usage: Import this file and use translations.he[key] for Hebrew text
// Example: translations.he.buttons.today → "היום"

const translations = {
    // English (default)
    en: {
        // Navigation buttons
        buttons: {
            previous: "Previous",
            today: "Today",
            next: "Next",
            day: "Day",
            week: "Week",
            month: "Month"
        },

        // Keyboard shortcuts overlay
        shortcuts: {
            title: "Keyboard Shortcuts",
            showHelp: "Show this help",
            goToToday: "Go to today",
            previous: "Previous",
            next: "Next",
            toggleDarkMode: "Toggle dark mode",
            openNowView: "Open Now View",
            swipeMobile: "Swipe left/right (mobile)",
            navigateDays: "Navigate days",
            closeInstructions: "Press Esc or click outside to close"
        },

        // Now View (full-screen)
        nowView: {
            closeButton: "Close (Esc)",
            openButton: "Open Now View",
            sectionTitles: {
                earlierToday: "Earlier Today",
                now: "Now",
                comingUp: "Coming Up"
            },
            betweenEvents: {
                title: "Between Classes",
                nextPrefix: "Next:",
                inSuffix: "in",
                allDone: "All Done for Today!",
                noMoreEvents: "No more events scheduled"
            },
            timeUnits: {
                min: "min",
                hours: "hours",
                days: "days",
                left: "left",
                endingSoon: "ending soon",
                startingSoon: "starting soon"
            }
        },

        // Calendar views
        calendar: {
            title: "Calendar",
            noEvents: "No events",
            allDay: "All day",
            noEventsScheduled: "No events scheduled"
        },

        // Day names (short)
        daysShort: {
            sun: "Sun",
            mon: "Mon",
            tue: "Tue",
            wed: "Wed",
            thu: "Thu",
            fri: "Fri",
            sat: "Sat"
        },

        // Day names (full)
        daysFull: {
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday"
        },

        // Month names
        months: {
            january: "January",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December"
        },

        // Error messages
        errors: {
            loadingEvents: "Loading events...",
            unableToLoad: "Unable to load calendar events. Please check your connection and try again.",
            connectionError: "Connection error"
        },

        // Theme toggle
        theme: {
            toggleTooltip: "Toggle theme"
        },

        // Time formats
        time: {
            am: "AM",
            pm: "PM"
        }
    },

    // Hebrew translations
    he: {
        // Navigation buttons
        buttons: {
            previous: "הקודם",
            today: "היום",
            next: "הבא",
            day: "יום",
            week: "שבוע",
            month: "חודש"
        },

        // Keyboard shortcuts overlay
        shortcuts: {
            title: "קיצורי מקלדת",
            showHelp: "הצג עזרה זו",
            goToToday: "עבור להיום",
            previous: "הקודם",
            next: "הבא",
            toggleDarkMode: "החלף מצב כהה",
            openNowView: "פתח תצוגת עכשיו",
            swipeMobile: "החלק שמאלה/ימינה (נייד)",
            navigateDays: "נווט בין ימים",
            closeInstructions: "לחץ Esc או לחץ מחוץ לחלון כדי לסגור"
        },

        // Now View (full-screen)
        nowView: {
            closeButton: "סגור (Esc)",
            openButton: "פתח תצוגת עכשיו",
            sectionTitles: {
                earlierToday: "מוקדם יותר היום",
                now: "עכשיו",
                comingUp: "בקרוב"
            },
            betweenEvents: {
                title: "בין שיעורים",
                nextPrefix: "הבא:",
                inSuffix: "בעוד",
                allDone: "סיימנו להיום!",
                noMoreEvents: "אין עוד אירועים מתוכננים"
            },
            timeUnits: {
                min: "דק'",
                hours: "שעות",
                days: "ימים",
                left: "נותרו",
                endingSoon: "מסתיים בקרוב",
                startingSoon: "מתחיל בקרוב"
            }
        },

        // Calendar views
        calendar: {
            title: "לוח שנה",
            noEvents: "אין אירועים",
            allDay: "כל היום",
            noEventsScheduled: "אין אירועים מתוכננים"
        },

        // Day names (short)
        daysShort: {
            sun: "א'",
            mon: "ב'",
            tue: "ג'",
            wed: "ד'",
            thu: "ה'",
            fri: "ו'",
            sat: "ש'"
        },

        // Day names (full)
        daysFull: {
            sunday: "יום ראשון",
            monday: "יום שני",
            tuesday: "יום שלישי",
            wednesday: "יום רביעי",
            thursday: "יום חמישי",
            friday: "יום שישי",
            saturday: "שבת"
        },

        // Month names
        months: {
            january: "ינואר",
            february: "פברואר",
            march: "מרץ",
            april: "אפריל",
            may: "מאי",
            june: "יוני",
            july: "יולי",
            august: "אוגוסט",
            september: "ספטמבר",
            october: "אוקטובר",
            november: "נובמבר",
            december: "דצמבר"
        },

        // Error messages
        errors: {
            loadingEvents: "טוען אירועים...",
            unableToLoad: "לא ניתן לטעון אירועי לוח שנה. אנא בדוק את החיבור שלך ונסה שוב.",
            connectionError: "שגיאת חיבור"
        },

        // Theme toggle
        theme: {
            toggleTooltip: "החלף ערכת נושא"
        },

        // Time formats
        time: {
            am: "לפנה\"צ",
            pm: "אחה\"צ"
        }
    }
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get translation for current language
 * @param {string} lang - Language code ('en' or 'he')
 * @param {string} path - Dot notation path to translation (e.g., 'buttons.today')
 * @returns {string} Translated text
 */
function t(lang, path) {
    const keys = path.split('.');
    let value = translations[lang];
    
    for (const key of keys) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            return path; // Return path if translation not found
        }
    }
    
    return value || path;
}

/**
 * Get time until event in localized format
 * @param {Date} eventDate - The event date
 * @param {string} lang - Language code
 * @returns {string} Formatted time string
 */
function getTimeUntilLocalized(eventDate, lang = 'en') {
    const now = new Date();
    const diff = eventDate - now;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    const units = translations[lang].nowView.timeUnits;
    
    if (days > 0) {
        return lang === 'he' 
            ? `${units.inSuffix} ${days} ${units.days}`
            : `${units.inSuffix} ${days} ${units.days}`;
    } else if (hours > 0) {
        return lang === 'he'
            ? `${units.inSuffix} ${hours} ${units.hours}`
            : `${units.inSuffix} ${hours} ${units.hours}`;
    } else if (minutes > 0) {
        return lang === 'he'
            ? `${units.inSuffix} ${minutes} ${units.min}`
            : `${units.inSuffix} ${minutes} ${units.min}`;
    } else {
        return units.startingSoon;
    }
}

/**
 * Get time left in event in localized format
 * @param {number} minutesLeft - Minutes remaining
 * @param {string} lang - Language code
 * @returns {string} Formatted time string
 */
function getTimeLeftLocalized(minutesLeft, lang = 'en') {
    const units = translations[lang].nowView.timeUnits;
    
    if (minutesLeft > 60) {
        const hours = Math.floor(minutesLeft / 60);
        return lang === 'he'
            ? `${hours} ${units.hours} ${units.left}`
            : `${hours} ${units.hours} ${units.left}`;
    } else if (minutesLeft > 0) {
        return lang === 'he'
            ? `${minutesLeft} ${units.min} ${units.left}`
            : `${minutesLeft} ${units.min} ${units.left}`;
    } else {
        return units.endingSoon;
    }
}

/**
 * Format day name (short) based on day index
 * @param {number} dayIndex - Day index (0 = Sunday, 6 = Saturday)
 * @param {string} lang - Language code
 * @returns {string} Localized day name
 */
function getDayNameShort(dayIndex, lang = 'en') {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    return translations[lang].daysShort[days[dayIndex]];
}

/**
 * Format day name (full) based on day index
 * @param {number} dayIndex - Day index (0 = Sunday, 6 = Saturday)
 * @param {string} lang - Language code
 * @returns {string} Localized day name
 */
function getDayNameFull(dayIndex, lang = 'en') {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return translations[lang].daysFull[days[dayIndex]];
}

/**
 * Format month name based on month index
 * @param {number} monthIndex - Month index (0 = January, 11 = December)
 * @param {string} lang - Language code
 * @returns {string} Localized month name
 */
function getMonthName(monthIndex, lang = 'en') {
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
                   'july', 'august', 'september', 'october', 'november', 'december'];
    return translations[lang].months[months[monthIndex]];
}

// ==========================================
// EXPORT
// ==========================================

// For ES6 modules
// export { translations, t, getTimeUntilLocalized, getTimeLeftLocalized, getDayNameShort, getDayNameFull, getMonthName };

// For Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        translations, 
        t, 
        getTimeUntilLocalized, 
        getTimeLeftLocalized, 
        getDayNameShort, 
        getDayNameFull, 
        getMonthName 
    };
}
