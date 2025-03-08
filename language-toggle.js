/**
 * Language Toggle Functionality for Ramzan Website
 * Supports English and Urdu languages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get language toggle buttons
    const langEn = document.getElementById('lang-en');
    const langUr = document.getElementById('lang-ur');
    
    if (langEn && langUr) {
        // Add event listeners
        langEn.addEventListener('click', () => setLanguage('en'));
        langUr.addEventListener('click', () => setLanguage('ur'));
        
        // Set initial language based on localStorage or default to English
        const savedLang = localStorage.getItem('language') || 'en';
        setLanguage(savedLang);
    }
});

function setLanguage(lang) {
    // Save language preference
    localStorage.setItem('language', lang);
    
    // Update active button state
    const langEn = document.getElementById('lang-en');
    const langUr = document.getElementById('lang-ur');
    
    if (langEn && langUr) {
        if (lang === 'en') {
            langEn.classList.add('active');
            langUr.classList.remove('active');
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('urdu-font');
        } else {
            langUr.classList.add('active');
            langEn.classList.remove('active');
            document.documentElement.lang = 'ur';
            document.documentElement.dir = 'rtl';
            document.body.classList.add('urdu-font');
        }
    }
    
    // Dispatch language changed event
    document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: lang }
    }));
    
    // Complete translations for all page text
    const translations = {
        en: {
            // Header
            title: "Ramzan Mubarak",
            
            // Main message
            message: "May the divine blessings of Allah bring you hope, faith, and joy on the occasion of Ramzan. Wishing you and your family a blessed and peaceful Ramzan.",
            quote: "\"Ramadan is the month whose beginning is mercy, whose middle is forgiveness and whose end is freedom from fire.\" - Prophet Muhammad (PBUH)",
            
            // City selector
            selectCityHeading: "Select Your City for Sehri & Iftar Times",
            selectCountry: "Select Country",
            selectCity: "Select City",
            
            // Day selector
            ramzanDay: "Ramzan Day:",
            
            // Prayer times
            sehri: "Sehri",
            iftar: "Iftar",
            
            // Dua section
            duaHeading: "Dua for Beginning of Ramzan",
            duaTranslation: "\"O Allah, make this month a source of peace, faith, safety, and submission to Your will. My Lord and your Lord is Allah.\"",
            
            // Countdown
            timeUntilIftar: "Time until Iftar",
            timeUntilSehri: "Time until Sehri",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
            
            // Time status
            timeSource: "Time Source:",
            localTime: "Local Time",
            synchronized: "Synchronized",
            
            // Buttons
            setLocation: "Set My Location for Accurate Iftar Time",
            syncTime: "Sync Time with Server",
            today: "Today",
            
            // Share section
            shareGreeting: "Share this greeting",
            
            // Footer
            acceptPrayers: "May Allah accept your prayers and fasting",
            ramzanDates: "Ramzan 1446 AH (2025)",
            copyright: "© 2025 Ramzan Mubarak"
        },
        ur: {
            // Header
            title: "رمضان مبارک",
            
            // Main message
            message: "اللہ کی الٰہی برکتیں آپ کو رمضان کے موقع پر امید، ایمان اور خوشی لائیں۔ آپ اور آپ کے خاندان کو مبارک اور پرامن رمضان کی مبارکباد۔",
            quote: "\"رمضان وہ مہینہ ہے جس کا آغاز رحمت، درمیان مغفرت اور اختتام آگ سے آزادی ہے۔\" - حضرت محمد (ﷺ)",
            
            // City selector
            selectCityHeading: "سحری اور افطار کے اوقات کے لیے اپنا شہر منتخب کریں",
            selectCountry: "ملک منتخب کریں",
            selectCity: "شہر منتخب کریں",
            
            // Day selector
            ramzanDay: "رمضان کا دن:",
            
            // Prayer times
            sehri: "سحری",
            iftar: "افطار",
            
            // Dua section
            duaHeading: "رمضان کے آغاز کی دعا",
            duaTranslation: "\"اے اللہ، اس مہینے کو امن، ایمان، سلامتی اور تیری مرضی کے سامنے جھکنے کا ذریعہ بنا۔ میرا رب اور تمہارا رب اللہ ہے۔\"",
            
            // Countdown
            timeUntilIftar: "افطار تک کا وقت",
            timeUntilSehri: "سحری تک کا وقت",
            hours: "گھنٹے",
            minutes: "منٹ",
            seconds: "سیکنڈ",
            
            // Time status
            timeSource: "وقت کا ذریعہ:",
            localTime: "مقامی وقت",
            synchronized: "ہم وقت",
            
            // Buttons
            setLocation: "درست افطار وقت کے لیے میرا مقام سیٹ کریں",
            syncTime: "سرور کے ساتھ وقت کو سنک کریں",
            today: "آج",
            
            // Share section
            shareGreeting: "یہ مبارکباد شیئر کریں",
            
            // Footer
            acceptPrayers: "اللہ آپ کی عبادات اور روزے قبول فرمائے",
            ramzanDates: "رمضان ۱۴۴۶ ھ (۲۰۲۵)",
            copyright: "© ۲۰۲۵ رمضان مبارک"
        }
    };
    
    // Apply translations
    const t = translations[lang];
    
    // Update header
    const headerTitle = document.querySelector('.header h2');
    if (headerTitle) {
        headerTitle.textContent = t.title;
    }
    
    // Update main message
    const messageElements = document.querySelectorAll('.message p');
    if (messageElements.length >= 2) {
        messageElements[0].textContent = t.message;
        messageElements[1].textContent = t.quote;
    }
    
    // Update city selector heading
    const cityHeading = document.querySelector('.city-selector-section h3');
    if (cityHeading) {
        cityHeading.textContent = t.selectCityHeading;
    }
    
    // Update select placeholders
    const countrySelect = document.getElementById('country-select');
    const citySelect = document.getElementById('city-select');
    
    if (countrySelect && countrySelect.options[0]) {
        countrySelect.options[0].text = t.selectCountry;
    }
    
    if (citySelect && citySelect.options[0]) {
        citySelect.options[0].text = t.selectCity;
    }
    
    // Update day selector label
    const dayLabel = document.querySelector('.day-selector label');
    if (dayLabel) {
        dayLabel.textContent = t.ramzanDay;
    }
    
    // Update today button title
    const todayBtn = document.getElementById('today-btn');
    if (todayBtn) {
        todayBtn.title = t.today;
    }
    
    // Update prayer time headings
    document.querySelectorAll('.prayer-details h4').forEach(el => {
        if (el.textContent.trim().toLowerCase() === 'sehri') {
            el.textContent = t.sehri;
        } else if (el.textContent.trim().toLowerCase() === 'iftar') {
            el.textContent = t.iftar;
        }
    });
    
    // Update dua section
    const duaHeading = document.querySelector('.dua-section h3');
    if (duaHeading) {
        duaHeading.textContent = t.duaHeading;
    }
    
    const duaTranslation = document.querySelector('.dua-translation');
    if (duaTranslation) {
        duaTranslation.textContent = t.duaTranslation;
    }
    
    // Update countdown heading
    const countdownHeading = document.querySelector('.countdown h3');
    if (countdownHeading) {
        if (countdownHeading.textContent.includes('Iftar')) {
            countdownHeading.textContent = t.timeUntilIftar;
        } else if (countdownHeading.textContent.includes('Sehri')) {
            countdownHeading.textContent = t.timeUntilSehri;
        }
    }
    
    // Update time units
    document.querySelectorAll('.label').forEach(el => {
        if (el.textContent.trim().toLowerCase() === 'hours') {
            el.textContent = t.hours;
        } else if (el.textContent.trim().toLowerCase() === 'minutes') {
            el.textContent = t.minutes;
        } else if (el.textContent.trim().toLowerCase() === 'seconds') {
            el.textContent = t.seconds;
        }
    });
    
    // Update time status label
    const timeStatusLabel = document.querySelector('.time-status-label');
    if (timeStatusLabel) {
        timeStatusLabel.textContent = t.timeSource;
    }
    
    // Update time status text if needed
    const timeStatus = document.querySelector('.time-status');
    if (timeStatus) {
        if (timeStatus.textContent.trim() === 'Local Time') {
            timeStatus.textContent = t.localTime;
        } else if (timeStatus.textContent.trim() === 'Synchronized') {
            timeStatus.textContent = t.synchronized;
        }
    }
    
    // Update buttons
    const locationBtn = document.querySelector('.location-btn');
    if (locationBtn) {
        locationBtn.textContent = t.setLocation;
    }
    
    const syncBtn = document.querySelector('.sync-btn');
    if (syncBtn) {
        syncBtn.textContent = t.syncTime;
    }
    
    // Update share section
    const shareHeading = document.querySelector('.share-section h3');
    if (shareHeading) {
        shareHeading.textContent = t.shareGreeting;
    }
    
    // Update footer
    const footerElements = document.querySelectorAll('.footer p');
    if (footerElements.length >= 1) {
        footerElements[0].textContent = t.acceptPrayers;
    }
    
    const ramzanDates = document.querySelector('.ramzan-dates p');
    if (ramzanDates) {
        ramzanDates.textContent = t.ramzanDates;
    }
    
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        copyright.innerHTML = t.copyright.replace('2025', `<span id="year">2025</span>`);
    }
} 