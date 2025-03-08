// Enhanced Ramzan Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Check if ramzanTimesManager is available
    if (!window.ramzanTimesManager) {
        console.error('Error: ramzanTimesManager is not available.');
        document.body.innerHTML += '<div style="color: red; padding: 20px; background: #ffeeee; border: 1px solid #ff0000; margin: 20px;">Error: Prayer times database not loaded. Please refresh the page or contact support.</div>';
        
        // Hide loading screen even if there's an error
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        return;
    }
    
    console.log('ramzanTimesManager is available');
    console.log('Countries:', window.ramzanTimesManager.getCityListByCountry());

    // Define the RamzanApp class
    class RamzanApp {
        constructor() {
            this.initializeVariables();
            this.initializeEventListeners();
            this.initializeTimeUpdater();
            this.setupCitySelector();
            this.startCountdown();
            this.setupSocialSharing();
            this.setupAnimations();
            this.handleThemePreference();
            this.setupAutoRefresh();
            
            // Show notification that times are for 2025 with corrected times
            setTimeout(() => {
                this.showNotification('Showing accurate Sehri and Iftar times for Ramzan 1446 AH (2025)', 'success');
            }, 2000);
        }

        initializeVariables() {
            console.log('Initializing variables');
            // Get saved preferences
            this.selectedCountry = localStorage.getItem('selectedCountry');
            this.selectedCity = localStorage.getItem('selectedCity');
            
            // Calculate current Ramzan day or use saved value
            const savedDay = localStorage.getItem('currentDay');
            const calculatedDay = this.calculateRamzanDay();
            
            // Use saved day only if it's within a reasonable range of the calculated day
            // This prevents showing outdated days if the user hasn't visited in a while
            if (savedDay && Math.abs(parseInt(savedDay) - calculatedDay) <= 2) {
                this.currentDay = parseInt(savedDay);
            } else {
                this.currentDay = calculatedDay;
                localStorage.setItem('currentDay', this.currentDay);
            }
            
            // Store DOM elements
            this.elements = {
                countrySelect: document.getElementById('country-select'),
                citySelect: document.getElementById('city-select'),
                currentDayDisplay: document.getElementById('current-day'),
                prevDayBtn: document.getElementById('prev-day'),
                nextDayBtn: document.getElementById('next-day'),
                sehriTimeDisplay: document.getElementById('sehri-time'),
                iftarTimeDisplay: document.getElementById('iftar-time'),
                syncBtn: document.querySelector('.sync-btn'),
                locationBtn: document.querySelector('.location-btn'),
                timerDisplay: document.getElementById('timer'),
                timeStatus: document.querySelector('.time-status')
            };
            
            // Update the current day display
            if (this.elements.currentDayDisplay) {
                this.elements.currentDayDisplay.textContent = this.currentDay;
            }
            
            console.log('DOM elements:', this.elements);
            console.log('Current Ramzan day:', this.currentDay);
        }

        initializeEventListeners() {
            // Country and city selection
            this.elements.countrySelect.addEventListener('change', () => this.handleCountryChange());
            this.elements.citySelect.addEventListener('change', () => this.handleCityChange());
            
            // Day navigation
            this.elements.prevDayBtn.addEventListener('click', () => this.navigateDay(-1));
            this.elements.nextDayBtn.addEventListener('click', () => this.navigateDay(1));
            
            // Make current day display clickable to show day selector
            this.elements.currentDayDisplay.addEventListener('click', () => this.showDaySelector());
            this.elements.currentDayDisplay.style.cursor = 'pointer';
            
            // Today button
            const todayBtn = document.getElementById('today-btn');
            if (todayBtn) {
                todayBtn.addEventListener('click', () => this.goToToday());
            }
            
            // Language toggle
            const langEn = document.getElementById('lang-en');
            const langUr = document.getElementById('lang-ur');
            
            if (langEn && langUr) {
                langEn.addEventListener('click', () => this.setLanguage('en'));
                langUr.addEventListener('click', () => this.setLanguage('ur'));
                
                // Set initial language based on localStorage or default to English
                const savedLang = localStorage.getItem('language') || 'en';
                this.setLanguage(savedLang);
            }
            
            // Time sync and location
            if (this.elements.syncBtn) {
                this.elements.syncBtn.addEventListener('click', () => this.initializeTimeUpdater());
            }
            
            if (this.elements.locationBtn) {
                this.elements.locationBtn.addEventListener('click', () => this.requestLocation());
            }
            
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => this.handleSmoothScroll(e));
            });
        }

        async initializeTimeUpdater() {
            try {
                const timeUpdater = new TimeUpdater();
                await timeUpdater.initialize();
                this.timeUpdater = timeUpdater;
                this.updateTimeStatus('Synchronized');
            } catch (error) {
                console.error('Time sync failed:', error);
                this.updateTimeStatus('Local Time');
            }
        }

        setupCitySelector() {
            console.log('Setting up city selector');
            const countries = window.ramzanTimesManager.getCityListByCountry();
            console.log('Countries:', countries);
            
            // Populate country dropdown
            Object.keys(countries).sort().forEach(country => {
                const option = new Option(country, country);
                this.elements.countrySelect.add(option);
            });

            console.log('Country dropdown populated');

            // Restore saved selections
            if (this.selectedCountry) {
                this.elements.countrySelect.value = this.selectedCountry;
                this.handleCountryChange();
                if (this.selectedCity) {
                    this.elements.citySelect.value = this.selectedCity;
                    this.handleCityChange();
                }
            }
        }

        handleCountryChange() {
            const country = this.elements.countrySelect.value;
            const cities = window.ramzanTimesManager.getCityListByCountry()[country] || [];

            // Clear and disable city select
            this.elements.citySelect.innerHTML = '<option value="">Select City</option>';
            this.elements.citySelect.disabled = cities.length === 0;

            // Populate cities
            cities.sort().forEach(city => {
                const option = new Option(city, city);
                this.elements.citySelect.add(option);
            });

            // Save selection
            this.selectedCountry = country;
            localStorage.setItem('selectedCountry', country);
        }

        handleCityChange() {
            this.selectedCity = this.elements.citySelect.value;
            localStorage.setItem('selectedCity', this.selectedCity);
            this.updatePrayerTimes();
        }

        updatePrayerTimes() {
            if (!this.selectedCity) return;
            
            const sehriTime = window.ramzanTimesManager.getSehriTime(this.selectedCity, this.currentDay.toString());
            const iftarTime = window.ramzanTimesManager.getIftarTime(this.selectedCity, this.currentDay.toString());
            
            if (sehriTime && iftarTime) {
                this.elements.sehriTimeDisplay.textContent = window.ramzanTimesManager.formatTime(sehriTime.hour, sehriTime.minute);
                this.elements.iftarTimeDisplay.textContent = window.ramzanTimesManager.formatTime(iftarTime.hour, iftarTime.minute);
                this.updateCountdown(iftarTime);
            }
            
            // Update Gregorian date display
            this.updateGregorianDate();
        }
        
        updateGregorianDate() {
            // Ramzan 1446 AH starts on March 2, 2025
            const ramzanStartDate = new Date(2025, 2, 2); // Month is 0-indexed (2 = March)
            const currentDate = new Date(ramzanStartDate);
            
            // Add days to the start date based on current Ramzan day
            currentDate.setDate(ramzanStartDate.getDate() + (this.currentDay - 1));
            
            // Format the date
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const formattedDate = currentDate.toLocaleDateString(undefined, options);
            
            // Update the date display if it exists
            if (document.getElementById('gregorian-date')) {
                document.getElementById('gregorian-date').textContent = formattedDate;
            } else if (document.querySelector('.day-selector')) {
                // Create date display if it doesn't exist
                const dateDisplay = document.createElement('div');
                dateDisplay.id = 'gregorian-date';
                dateDisplay.className = 'gregorian-date';
                dateDisplay.textContent = formattedDate;
                
                document.querySelector('.day-selector').appendChild(dateDisplay);
            }
            
            // Update the year in the footer
            const yearElement = document.getElementById('year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
        }

        navigateDay(delta) {
            const newDay = this.currentDay + delta;
            
            if (newDay >= 1 && newDay <= 30) {
                this.currentDay = newDay;
                this.elements.currentDayDisplay.textContent = newDay;
                localStorage.setItem('currentDay', newDay);
                this.updatePrayerTimes();
                this.updateGregorianDate();
                
                // Add animation class
                this.elements.currentDayDisplay.classList.add('day-change');
                setTimeout(() => {
                    this.elements.currentDayDisplay.classList.remove('day-change');
                }, 500);
                
                // Show notification for day change
                this.showNotification(`Showing times for Ramzan Day ${newDay}`, 'info');
            } else {
                // Show notification if trying to navigate beyond valid range
                if (newDay < 1) {
                    this.showNotification("You're already at the first day of Ramzan", 'warning');
                } else {
                    this.showNotification("You've reached the last day of Ramzan", 'warning');
                }
            }
        }

        showDaySelector() {
            // Create day selector popup if it doesn't exist
            if (!document.getElementById('day-selector-popup')) {
                const popup = document.createElement('div');
                popup.id = 'day-selector-popup';
                popup.className = 'day-selector-popup';
                popup.setAttribute('role', 'dialog');
                popup.setAttribute('aria-labelledby', 'day-selector-title');
                
                // Create header
                const header = document.createElement('div');
                header.className = 'day-selector-header';
                const title = document.createElement('h4');
                title.id = 'day-selector-title';
                title.textContent = 'Select Ramzan Day';
                header.appendChild(title);
                
                // Create close button
                const closeBtn = document.createElement('button');
                closeBtn.className = 'day-selector-close';
                closeBtn.innerHTML = '&times;';
                closeBtn.setAttribute('aria-label', 'Close');
                closeBtn.addEventListener('click', () => {
                    this.closeDaySelector();
                });
                header.appendChild(closeBtn);
                
                // Create today button
                const todayBtn = document.createElement('button');
                todayBtn.className = 'today-btn';
                todayBtn.textContent = 'Go to Today';
                todayBtn.addEventListener('click', () => {
                    this.goToToday();
                    this.closeDaySelector();
                });
                
                // Create days grid
                const daysGrid = document.createElement('div');
                daysGrid.className = 'days-grid';
                
                // Create day buttons
                for (let i = 1; i <= 30; i++) {
                    const dayBtn = document.createElement('button');
                    dayBtn.className = 'day-grid-btn';
                    dayBtn.textContent = i;
                    dayBtn.dataset.day = i;
                    
                    // Add Gregorian date as tooltip
                    const gregorianDate = this.getGregorianDateForDay(i);
                    dayBtn.title = gregorianDate;
                    
                    dayBtn.addEventListener('click', () => {
                        this.currentDay = parseInt(dayBtn.dataset.day);
                        this.elements.currentDayDisplay.textContent = this.currentDay;
                        localStorage.setItem('currentDay', this.currentDay);
                        this.updatePrayerTimes();
                        this.updateGregorianDate();
                        this.closeDaySelector();
                        
                        // Show notification
                        this.showNotification(`Showing times for Ramzan Day ${this.currentDay}`, 'success');
                    });
                    
                    daysGrid.appendChild(dayBtn);
                }
                
                // Assemble popup
                popup.appendChild(header);
                popup.appendChild(todayBtn);
                popup.appendChild(daysGrid);
                
                // Create backdrop
                const backdrop = document.createElement('div');
                backdrop.id = 'day-selector-backdrop';
                backdrop.className = 'day-selector-backdrop';
                backdrop.addEventListener('click', () => {
                    this.closeDaySelector();
                });
                
                // Add to DOM
                document.body.appendChild(backdrop);
                document.body.appendChild(popup);
                
                // Add keyboard navigation
                popup.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        this.closeDaySelector();
                    }
                });
            }
            
            // Update active day
            const popup = document.getElementById('day-selector-popup');
            const backdrop = document.getElementById('day-selector-backdrop');
            
            document.querySelectorAll('.day-grid-btn').forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.dataset.day) === this.currentDay) {
                    btn.classList.add('active');
                    // Scroll to make active button visible if needed
                    setTimeout(() => btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 100);
                }
            });
            
            // Show popup and backdrop
            popup.classList.add('show');
            backdrop.classList.add('show');
            
            // Focus trap for accessibility
            this.setupFocusTrap(popup);
        }
        
        closeDaySelector() {
            const popup = document.getElementById('day-selector-popup');
            const backdrop = document.getElementById('day-selector-backdrop');
            
            if (popup && backdrop) {
                popup.classList.remove('show');
                backdrop.classList.remove('show');
            }
        }
        
        setupFocusTrap(element) {
            // Get all focusable elements
            const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            
            if (focusableElements.length > 0) {
                // Focus the first element
                focusableElements[0].focus();
                
                // Set up the focus trap
                element.addEventListener('keydown', (e) => {
                    if (e.key === 'Tab') {
                        // If shift+tab on first element, move to last
                        if (e.shiftKey && document.activeElement === focusableElements[0]) {
                            e.preventDefault();
                            focusableElements[focusableElements.length - 1].focus();
                        }
                        // If tab on last element, move to first
                        else if (!e.shiftKey && document.activeElement === focusableElements[focusableElements.length - 1]) {
                            e.preventDefault();
                            focusableElements[0].focus();
                        }
                    }
                });
            }
        }
        
        getGregorianDateForDay(day) {
            // Ramzan 1446 AH starts on March 2, 2025
            const ramzanStartDate = new Date(2025, 2, 2); // Month is 0-indexed (2 = March)
            const date = new Date(ramzanStartDate);
            
            // Add days to the start date based on current Ramzan day
            date.setDate(ramzanStartDate.getDate() + (day - 1));
            
            // Format the date
            return date.toLocaleDateString(undefined, { 
                month: 'short', 
                day: 'numeric' 
            });
        }
        
        calculateRamzanDay() {
            // Ramzan 1446 AH starts on March 2, 2025
            const ramzanStartDate = new Date(2025, 2, 2); // Month is 0-indexed (2 = March)
            
            // Get current date with time set to midnight for accurate day calculation
            const now = new Date();
            const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            
            // Calculate the difference in days
            const timeDiff = currentDate.getTime() - ramzanStartDate.getTime();
            const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;
            
            // Ensure the day is within the valid range (1-30)
            if (dayDiff < 1) return 1;
            if (dayDiff > 30) return 30;
            
            return dayDiff;
        }

        startCountdown() {
            if (this.timeUpdateInterval) {
                clearInterval(this.timeUpdateInterval);
            }

            this.timeUpdateInterval = setInterval(() => {
                this.updateCountdown();
            }, 1000);
        }

        // Helper function to get current time
        getCurrentTime() {
            return new Date();
        }
        
        updateCountdown(iftarTime) {
            if (!this.selectedCity || !iftarTime) return;
            
            // Clear any existing interval
            if (this.countdownInterval) {
                clearInterval(this.countdownInterval);
            }
            
            // Function to update the timer
            const updateTimer = () => {
                // Get current time
                const now = this.getCurrentTime();
                
                // Create a date object for today's iftar time
                const iftarDate = new Date(now);
                iftarDate.setHours(iftarTime.hour, iftarTime.minute, 0, 0);
                
                // Calculate time difference
                let diff = iftarDate.getTime() - now.getTime();
                
                // If iftar time has passed for today
                if (diff < 0) {
                    // Check if we have tomorrow's sehri time
                    const nextDay = this.currentDay < 30 ? this.currentDay + 1 : 1;
                    const nextSehri = window.ramzanTimesManager.getSehriTime(this.selectedCity, nextDay.toString());
                    
                    if (nextSehri) {
                        // Create a date object for tomorrow's sehri time
                        const nextSehriDate = new Date(now);
                        nextSehriDate.setDate(now.getDate() + 1);
                        nextSehriDate.setHours(nextSehri.hour, nextSehri.minute, 0, 0);
                        
                        // Update countdown label to show "Time until Sehri"
                        const countdownLabel = document.querySelector('.countdown h3');
                        if (countdownLabel) {
                            countdownLabel.textContent = 'Time until Sehri';
                        }
                        
                        diff = nextSehriDate.getTime() - now.getTime();
                    } else {
                        // If we can't get tomorrow's sehri time, show zeros
                        this.updateTimerDisplay(0);
                        return;
                    }
                } else {
                    // Ensure the countdown label shows "Time until Iftar"
                    const countdownLabel = document.querySelector('.countdown h3');
                    if (countdownLabel) {
                        countdownLabel.textContent = 'Time until Iftar';
                    }
                }
                
                // Update the timer display
                this.updateTimerDisplay(diff);
            };
            
            // Update immediately and then set interval
            updateTimer();
            this.countdownInterval = setInterval(updateTimer, 1000);
        }
        
        updateTimerDisplay(timeDiff) {
            if (timeDiff < 0) timeDiff = 0;
            
            // Calculate hours, minutes, seconds
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            // Update the display
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            
            // Add visual indicator when time is close (less than 10 minutes)
            const timerElement = document.getElementById('timer');
            if (timerElement) {
                if (timeDiff <= 10 * 60 * 1000 && timeDiff > 0) {
                    timerElement.classList.add('time-close');
                } else {
                    timerElement.classList.remove('time-close');
                }
            }
        }

        async requestLocation() {
            try {
                const position = await this.getCurrentPosition();
                const nearestCity = await this.findNearestCity(position.coords);
                if (nearestCity) {
                    this.selectCity(nearestCity);
                }
            } catch (error) {
                this.showNotification('Location access denied. Please select your city manually.', 'error');
            }
        }

        getCurrentPosition() {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        }

        async findNearestCity(coords) {
            // Implementation for finding nearest city based on coordinates
            // This would require a database of city coordinates
            return null;
        }

        selectCity(city) {
            const countryOfCity = Object.entries(window.ramzanTimesManager.getCityListByCountry())
                .find(([, cities]) => cities.includes(city))?.[0];

            if (countryOfCity) {
                this.elements.countrySelect.value = countryOfCity;
                this.handleCountryChange();
                this.elements.citySelect.value = city;
                this.handleCityChange();
            }
        }

        setupSocialSharing() {
            const shareButtons = document.querySelectorAll('.social-icon');
            shareButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const platform = e.currentTarget.getAttribute('data-platform');
                    this.sharePage(platform);
                });
            });
        }

        sharePage(platform) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent('Check out this beautiful Ramzan website!');
            
            const shareUrls = {
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                whatsapp: `https://wa.me/?text=${text} ${url}`,
                telegram: `https://t.me/share/url?url=${url}&text=${text}`
            };

            if (shareUrls[platform]) {
                window.open(shareUrls[platform], '_blank');
            }
        }

        setupAnimations() {
            // Add intersection observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

        handleThemePreference() {
            // Watch for system theme changes
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleThemeChange = (e) => {
                document.body.classList.toggle('dark-theme', e.matches);
            };
            
            mediaQuery.addListener(handleThemeChange);
            handleThemeChange(mediaQuery);
        }

        handleSmoothScroll(e) {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }, 3000);
            }, 100);
        }

        updateTimeStatus(status) {
            this.elements.timeStatus.textContent = status;
            this.elements.timeStatus.className = `time-status ${status.toLowerCase()}`;
        }

        setupAutoRefresh() {
            // Check if day has changed at midnight
            const checkDayChange = () => {
                const now = this.getCurrentTime();
                
                // If it's midnight (or close to it), recalculate the day
                if (now.getHours() === 0 && now.getMinutes() <= 5) {
                    const newDay = this.calculateRamzanDay();
                    
                    // If the day has changed, update everything
                    if (newDay !== this.currentDay) {
                        this.currentDay = newDay;
                        localStorage.setItem('currentDay', newDay);
                        
                        // Update the display
                        if (this.elements.currentDayDisplay) {
                            this.elements.currentDayDisplay.textContent = newDay;
                        }
                        
                        // Update prayer times and date
                        this.updatePrayerTimes();
                        
                        // Show notification
                        this.showNotification(`It's a new day! Now showing Ramzan Day ${newDay}`, 'info');
                    }
                }
            };
            
            // Check every 5 minutes
            setInterval(checkDayChange, 5 * 60 * 1000);
            
            // Also check for time sync every hour
            setInterval(() => this.initializeTimeUpdater(), 60 * 60 * 1000);
        }

        goToToday() {
            const calculatedDay = this.calculateRamzanDay();
            if (calculatedDay !== this.currentDay) {
                this.currentDay = calculatedDay;
                this.elements.currentDayDisplay.textContent = calculatedDay;
                localStorage.setItem('currentDay', calculatedDay);
                this.updatePrayerTimes();
                this.updateGregorianDate();
                
                // Add animation class
                this.elements.currentDayDisplay.classList.add('day-change');
                setTimeout(() => {
                    this.elements.currentDayDisplay.classList.remove('day-change');
                }, 500);
                
                // Show notification
                this.showNotification(`Showing times for today (Ramzan Day ${calculatedDay})`, 'success');
            } else {
                // If already on today, just show a notification
                this.showNotification(`Already showing today's times (Ramzan Day ${calculatedDay})`, 'info');
            }
        }
        
        setLanguage(lang) {
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
                } else {
                    langUr.classList.add('active');
                    langEn.classList.remove('active');
                    document.documentElement.lang = 'ur';
                    document.documentElement.dir = 'rtl';
                }
            }
        }
    }

    // Initialize the app
    const app = new RamzanApp();
    window.ramzanApp = app; // Make it accessible globally if needed
    
    // Hide loading screen with fade effect
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1000);
}); 