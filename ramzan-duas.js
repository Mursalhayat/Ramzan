/**
 * Ramzan Duas Collection
 * Contains various duas for Ramzan with Arabic text, English and Urdu translations
 */

// Collection of duas for Ramzan
const ramzanDuas = [
    {
        id: 1,
        title: {
            en: "Dua for Beginning of Ramzan",
            ur: "رمضان کے آغاز کی دعا"
        },
        arabic: "اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، رَبِّي وَرَبُّكَ اللَّهُ",
        translation: {
            en: "O Allah, make this month a source of peace, faith, safety, and submission to Your will. My Lord and your Lord is Allah.",
            ur: "اے اللہ، اس مہینے کو امن، ایمان، سلامتی اور تیری مرضی کے سامنے جھکنے کا ذریعہ بنا۔ میرا رب اور تمہارا رب اللہ ہے۔"
        },
        source: "Tirmidhi"
    },
    {
        id: 2,
        title: {
            en: "Dua for Sighting the Moon",
            ur: "چاند دیکھنے کی دعا"
        },
        arabic: "اللَّهُمَّ أَهْلِلْهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ، هِلَالُ خَيْرٍ وَرُشْدٍ، آمَنْتُ بِالَّذِي خَلَقَكَ",
        translation: {
            en: "O Allah! Let this moon appear on us with blessing and faith, with safety and Islam. (O moon!) My Lord and your Lord is Allah. May this moon be a moon of goodness and guidance.",
            ur: "اے اللہ! اس چاند کو ہم پر برکت، ایمان، سلامتی اور اسلام کے ساتھ طلوع فرما۔ (اے چاند!) میرا رب اور تیرا رب اللہ ہے۔ یہ چاند خیر اور ہدایت کا چاند ہو۔"
        },
        source: "Tirmidhi"
    },
    {
        id: 3,
        title: {
            en: "Dua for Breaking Fast (Iftar)",
            ur: "روزہ افطار کرنے کی دعا"
        },
        arabic: "اللَّهُمَّ لَكَ صُمْتُ، وَعَلَى رِزْقِكَ أَفْطَرْتُ، ذَهَبَ الظَّمَأُ، وَابْتَلَّتِ الْعُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
        translation: {
            en: "O Allah! I fasted for You and I believe in You and I break my fast with Your sustenance. Thirst has gone, the veins are moistened and the reward is confirmed, if Allah wills.",
            ur: "اے اللہ! میں نے تیرے لیے روزہ رکھا، تجھ پر ایمان لایا اور تیرے دیے ہوئے رزق سے افطار کیا۔ پیاس ختم ہوگئی، رگیں تر ہوگئیں اور اجر ثابت ہوگیا، انشاء اللہ۔"
        },
        source: "Abu Dawud"
    },
    {
        id: 4,
        title: {
            en: "Dua Before Eating Suhoor",
            ur: "سحری کھانے سے پہلے کی دعا"
        },
        arabic: "نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ",
        translation: {
            en: "I intend to keep the fast for tomorrow in the month of Ramadan.",
            ur: "میں نے ماہ رمضان کے کل کے روزے کی نیت کی۔"
        },
        source: "Bukhari"
    },
    {
        id: 5,
        title: {
            en: "Dua for Laylatul Qadr (Night of Power)",
            ur: "لیلۃ القدر کی دعا"
        },
        arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
        translation: {
            en: "O Allah, You are the One Who pardons greatly, and You love to pardon, so pardon me.",
            ur: "اے اللہ! تو معاف کرنے والا ہے، معافی کو پسند کرتا ہے، پس مجھے معاف فرما۔"
        },
        source: "Tirmidhi"
    },
    {
        id: 6,
        title: {
            en: "Dua for Forgiveness",
            ur: "مغفرت کی دعا"
        },
        arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        translation: {
            en: "Our Lord! Forgive me and my parents and the believers on the Day when the reckoning will be established.",
            ur: "اے ہمارے رب! مجھے اور میرے والدین کو اور تمام مومنین کو بخش دے اس دن جب حساب قائم ہوگا۔"
        },
        source: "Quran 14:41"
    },
    {
        id: 7,
        title: {
            en: "Dua for Last 10 Days of Ramzan",
            ur: "رمضان کے آخری دس دنوں کی دعا"
        },
        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
        translation: {
            en: "O Allah, I seek refuge in Your pleasure from Your anger, and in Your forgiveness from Your punishment. I seek refuge in You from You. I cannot praise You enough; You are as You have praised Yourself.",
            ur: "اے اللہ! میں تیری رضا کے ذریعے تیرے غضب سے، تیری معافی کے ذریعے تیری سزا سے پناہ مانگتا ہوں۔ میں تجھ سے تیری ہی پناہ مانگتا ہوں۔ میں تیری ثنا کا حق ادا نہیں کرسکتا، تو ویسا ہی ہے جیسا تو نے خود اپنی ثنا بیان کی ہے۔"
        },
        source: "Muslim"
    },
    {
        id: 8,
        title: {
            en: "Dua for Acceptance of Deeds",
            ur: "اعمال کی قبولیت کی دعا"
        },
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ",
        translation: {
            en: "Our Lord! Accept from us. Indeed, You are the All-Hearing, the All-Knowing.",
            ur: "اے ہمارے رب! ہم سے قبول فرما۔ بیشک تو سب کچھ سننے والا اور جاننے والا ہے۔"
        },
        source: "Quran 2:127"
    },
    {
        id: 9,
        title: {
            en: "Dua for Seeking Allah's Mercy",
            ur: "اللہ کی رحمت طلب کرنے کی دعا"
        },
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        translation: {
            en: "Our Lord! Grant us good in this world and good in the Hereafter, and save us from the torment of the Fire.",
            ur: "اے ہمارے رب! ہمیں دنیا میں بھی بھلائی عطا فرما اور آخرت میں بھی بھلائی عطا فرما اور ہمیں آگ کے عذاب سے بچا۔"
        },
        source: "Quran 2:201"
    }
];

// Initialize the Duas Rotator
class DuasRotator {
    constructor(duasArray, rotationInterval = 30000) {
        this.duas = duasArray;
        this.currentIndex = 0;
        this.interval = rotationInterval; // Default 30 seconds
        this.timer = null;
        this.duaSection = document.querySelector('.dua-section');
        this.duaTitle = this.duaSection ? this.duaSection.querySelector('h3') : null;
        this.duaArabic = this.duaSection ? this.duaSection.querySelector('.arabic-text') : null;
        this.duaTranslation = this.duaSection ? this.duaSection.querySelector('.dua-translation') : null;
        this.language = document.documentElement.lang || 'en';
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        // Add navigation controls
        this.addControls();
        
        // Add source citation
        this.addSourceCitation();
        
        // Add touch support
        this.addTouchSupport();
        
        // Add keyboard navigation
        this.addKeyboardNavigation();
        
        // Start rotation
        this.startRotation();
        
        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            this.language = e.detail.language;
            this.updateDua();
        });
        
        // Pause rotation when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Clear timer when page is not visible
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            } else {
                // Restart timer when page becomes visible again
                if (!this.timer) {
                    this.resetTimer();
                }
            }
        });
        
        // Adjust for screen size changes
        window.addEventListener('resize', () => {
            this.adjustForScreenSize();
        });
        
        // Initial adjustment for screen size
        this.adjustForScreenSize();
    }
    
    addControls() {
        if (!this.duaSection) return;
        
        // Create controls container
        const controlsContainer = document.createElement('div');
        controlsContainer.className = 'dua-controls';
        
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'dua-nav-btn prev-dua';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.title = 'Previous Dua';
        prevBtn.setAttribute('aria-label', 'Previous Dua');
        prevBtn.addEventListener('click', () => this.prevDua());
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'dua-nav-btn next-dua';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.title = 'Next Dua';
        nextBtn.setAttribute('aria-label', 'Next Dua');
        nextBtn.addEventListener('click', () => this.nextDua());
        
        // Add buttons to container
        controlsContainer.appendChild(prevBtn);
        controlsContainer.appendChild(nextBtn);
        
        // Add container to dua section
        this.duaSection.appendChild(controlsContainer);
        
        // Add dua counter
        const duaCounter = document.createElement('div');
        duaCounter.className = 'dua-counter';
        duaCounter.innerHTML = `<span class="current-dua">1</span>/<span class="total-duas">${this.duas.length}</span>`;
        duaCounter.setAttribute('aria-live', 'polite');
        this.duaCounter = duaCounter;
        this.duaSection.appendChild(duaCounter);
    }
    
    addSourceCitation() {
        if (!this.duaSection) return;
        
        // Create source citation element
        const sourceElement = document.createElement('div');
        sourceElement.className = 'dua-source';
        this.sourceElement = sourceElement;
        
        // Add to dua section
        this.duaSection.appendChild(sourceElement);
        
        // Update source for initial dua
        this.updateSource();
    }
    
    updateSource() {
        if (!this.sourceElement) return;
        
        const currentDua = this.duas[this.currentIndex];
        this.sourceElement.textContent = `Source: ${currentDua.source}`;
    }
    
    addTouchSupport() {
        if (!this.duaSection) return;
        
        // Add touch event listeners
        this.duaSection.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.duaSection.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }
    
    handleSwipe() {
        const swipeThreshold = 50; // Minimum distance for swipe
        const swipeDistance = this.touchEndX - this.touchStartX;
        
        if (swipeDistance > swipeThreshold) {
            // Swipe right - go to previous dua
            this.prevDua();
        } else if (swipeDistance < -swipeThreshold) {
            // Swipe left - go to next dua
            this.nextDua();
        }
    }
    
    addKeyboardNavigation() {
        // Add keyboard navigation when dua section is focused
        this.duaSection.tabIndex = 0; // Make it focusable
        
        this.duaSection.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                // Left arrow - previous dua
                this.prevDua();
                e.preventDefault();
            } else if (e.key === 'ArrowRight') {
                // Right arrow - next dua
                this.nextDua();
                e.preventDefault();
            }
        });
    }
    
    adjustForScreenSize() {
        if (!this.duaSection) return;
        
        // Adjust font size based on screen width
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 320) {
            // Extra small screens
            this.duaArabic.style.fontSize = '1.1rem';
            this.duaTranslation.style.fontSize = '0.85rem';
        } else {
            // Reset to CSS defaults
            this.duaArabic.style.fontSize = '';
            this.duaTranslation.style.fontSize = '';
        }
    }
    
    updateDua() {
        if (!this.duaSection) return;
        
        const currentDua = this.duas[this.currentIndex];
        
        // Add fade-out class
        this.duaSection.classList.add('dua-fade-out');
        
        // After animation completes, update content and fade back in
        setTimeout(() => {
            // Update title
            if (this.duaTitle) {
                this.duaTitle.textContent = currentDua.title[this.language];
            }
            
            // Update Arabic text
            if (this.duaArabic) {
                this.duaArabic.textContent = currentDua.arabic;
            }
            
            // Update translation
            if (this.duaTranslation) {
                this.duaTranslation.textContent = currentDua.translation[this.language];
            }
            
            // Update counter
            if (this.duaCounter) {
                this.duaCounter.querySelector('.current-dua').textContent = this.currentIndex + 1;
            }
            
            // Update source
            this.updateSource();
            
            // Remove fade-out class and add fade-in class
            this.duaSection.classList.remove('dua-fade-out');
            this.duaSection.classList.add('dua-fade-in');
            
            // Remove fade-in class after animation completes
            setTimeout(() => {
                this.duaSection.classList.remove('dua-fade-in');
            }, 500);
        }, 500);
    }
    
    nextDua() {
        // Reset timer
        this.resetTimer();
        
        // Move to next dua
        this.currentIndex = (this.currentIndex + 1) % this.duas.length;
        this.updateDua();
    }
    
    prevDua() {
        // Reset timer
        this.resetTimer();
        
        // Move to previous dua
        this.currentIndex = (this.currentIndex - 1 + this.duas.length) % this.duas.length;
        this.updateDua();
    }
    
    startRotation() {
        // Display initial dua
        this.updateDua();
        
        // Set up rotation timer
        this.timer = setInterval(() => {
            this.nextDua();
        }, this.interval);
    }
    
    resetTimer() {
        // Clear existing timer
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Start new timer
        this.timer = setInterval(() => {
            this.nextDua();
        }, this.interval);
    }
}

// Initialize the duas rotator when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the duas rotator with 30 second rotation interval
    window.duasRotator = new DuasRotator(ramzanDuas, 30000);
}); 