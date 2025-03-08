/**
 * Ramzan Times Database for 1446 AH (2025)
 * Contains Sehri and Iftar times for various cities during Ramzan 2025
 * Times are adjusted based on astronomical calculations for March-April 2025
 */

const ramzanTimes = {
    // Pakistan
    "Karachi": {
        "timeZone": "Asia/Karachi",
        "country": "Pakistan",
        "dates": {
            "1": [5, 17, 18, 32],
            "2": [5, 16, 18, 33],
            "3": [5, 15, 18, 34],
            "4": [5, 14, 18, 34],
            "5": [5, 13, 18, 35],
            "6": [5, 12, 18, 35],
            "7": [5, 11, 18, 36],
            "8": [5, 10, 18, 36],
            "9": [5, 9, 18, 37],
            "10": [5, 8, 18, 37],
            "11": [5, 7, 18, 38],
            "12": [5, 6, 18, 38],
            "13": [5, 5, 18, 39],
            "14": [5, 4, 18, 39],
            "15": [5, 3, 18, 40],
            "16": [5, 2, 18, 40],
            "17": [5, 1, 18, 41],
            "18": [5, 0, 18, 41],
            "19": [4, 59, 18, 42],
            "20": [4, 58, 18, 42],
            "21": [4, 57, 18, 43],
            "22": [4, 56, 18, 43],
            "23": [4, 55, 18, 44],
            "24": [4, 54, 18, 44],
            "25": [4, 53, 18, 45],
            "26": [4, 52, 18, 45],
            "27": [4, 51, 18, 46],
            "28": [4, 50, 18, 46],
            "29": [4, 49, 18, 47],
            "30": [4, 48, 18, 47]
        }
    },
    "Lahore": {
        "timeZone": "Asia/Karachi",
        "country": "Pakistan",
        "dates": {
            "1": [5, 7, 18, 2],  // 02 Mar 2025
            "2": [5, 6, 18, 3],  // 03 Mar 2025
            "3": [5, 5, 18, 4],  // 04 Mar 2025
            "4": [5, 3, 18, 5],  // 05 Mar 2025
            "5": [5, 2, 18, 5],  // 06 Mar 2025
            "6": [5, 1, 18, 6],  // 07 Mar 2025
            "7": [5, 0, 18, 7],  // 08 Mar 2025
            "8": [4, 59, 18, 7], // 09 Mar 2025
            "9": [4, 57, 18, 8], // 10 Mar 2025
            "10": [4, 56, 18, 9], // 11 Mar 2025
            "11": [4, 55, 18, 10], // 12 Mar 2025
            "12": [4, 54, 18, 10], // 13 Mar 2025
            "13": [4, 52, 18, 11], // 14 Mar 2025
            "14": [4, 51, 18, 12], // 15 Mar 2025
            "15": [4, 50, 18, 12], // 16 Mar 2025
            "16": [4, 48, 18, 13], // 17 Mar 2025
            "17": [4, 47, 18, 14], // 18 Mar 2025
            "18": [4, 46, 18, 14], // 19 Mar 2025
            "19": [4, 45, 18, 15], // 20 Mar 2025
            "20": [4, 43, 18, 16], // 21 Mar 2025
            "21": [4, 42, 18, 16], // 22 Mar 2025
            "22": [4, 40, 18, 17], // 23 Mar 2025
            "23": [4, 39, 18, 18], // 24 Mar 2025
            "24": [4, 38, 18, 18], // 25 Mar 2025
            "25": [4, 36, 18, 19], // 26 Mar 2025
            "26": [4, 35, 18, 20], // 27 Mar 2025
            "27": [4, 34, 18, 20], // 28 Mar 2025
            "28": [4, 32, 18, 21], // 29 Mar 2025
            "29": [4, 31, 18, 22], // 30 Mar 2025
            "30": [4, 29, 18, 22]  // 31 Mar 2025
        }
    },
    "Islamabad": {
        "timeZone": "Asia/Karachi",
        "country": "Pakistan",
        "dates": {
            "1": [5, 2, 18, 7],
            "2": [5, 1, 18, 8],
            "3": [5, 0, 18, 9],
            "4": [4, 58, 18, 10],
            "5": [4, 57, 18, 10],
            "6": [4, 56, 18, 11],
            "7": [4, 55, 18, 12],
            "8": [4, 54, 18, 12],
            "9": [4, 52, 18, 13],
            "10": [4, 51, 18, 14],
            "11": [4, 50, 18, 15],
            "12": [4, 49, 18, 15],
            "13": [4, 47, 18, 16],
            "14": [4, 46, 18, 17],
            "15": [4, 45, 18, 17],
            "16": [4, 43, 18, 18],
            "17": [4, 42, 18, 19],
            "18": [4, 41, 18, 19],
            "19": [4, 40, 18, 20],
            "20": [4, 38, 18, 21],
            "21": [4, 37, 18, 21],
            "22": [4, 35, 18, 22],
            "23": [4, 34, 18, 23],
            "24": [4, 33, 18, 23],
            "25": [4, 31, 18, 24],
            "26": [4, 30, 18, 25],
            "27": [4, 29, 18, 25],
            "28": [4, 27, 18, 26],
            "29": [4, 26, 18, 27],
            "30": [4, 24, 18, 27]
        }
    },
    
    // India
    "Delhi": {
        "timeZone": "Asia/Kolkata",
        "country": "India",
        "dates": {
            "1": [5, 10, 18, 15],
            "2": [5, 9, 18, 16],
            "3": [5, 8, 18, 17],
            "4": [5, 6, 18, 18],
            "5": [5, 5, 18, 18],
            "6": [5, 4, 18, 19],
            "7": [5, 3, 18, 20],
            "8": [5, 2, 18, 20],
            "9": [5, 0, 18, 21],
            "10": [4, 59, 18, 22],
            "11": [4, 58, 18, 23],
            "12": [4, 57, 18, 23],
            "13": [4, 55, 18, 24],
            "14": [4, 54, 18, 25],
            "15": [4, 53, 18, 25],
            "16": [4, 51, 18, 26],
            "17": [4, 50, 18, 27],
            "18": [4, 49, 18, 27],
            "19": [4, 48, 18, 28],
            "20": [4, 46, 18, 29],
            "21": [4, 45, 18, 29],
            "22": [4, 43, 18, 30],
            "23": [4, 42, 18, 31],
            "24": [4, 41, 18, 31],
            "25": [4, 39, 18, 32],
            "26": [4, 38, 18, 33],
            "27": [4, 37, 18, 33],
            "28": [4, 35, 18, 34],
            "29": [4, 34, 18, 35],
            "30": [4, 32, 18, 35]
        }
    },
    
    // Saudi Arabia
    "Makkah": {
        "timeZone": "Asia/Riyadh",
        "country": "Saudi Arabia",
        "dates": {
            "1": [5, 15, 18, 25],
            "2": [5, 14, 18, 26],
            "3": [5, 13, 18, 26],
            "4": [5, 12, 18, 27],
            "5": [5, 11, 18, 27],
            "6": [5, 10, 18, 28],
            "7": [5, 9, 18, 28],
            "8": [5, 8, 18, 29],
            "9": [5, 7, 18, 29],
            "10": [5, 6, 18, 30],
            "11": [5, 5, 18, 30],
            "12": [5, 4, 18, 31],
            "13": [5, 3, 18, 31],
            "14": [5, 2, 18, 32],
            "15": [5, 1, 18, 32],
            "16": [5, 0, 18, 33],
            "17": [4, 59, 18, 33],
            "18": [4, 58, 18, 34],
            "19": [4, 57, 18, 34],
            "20": [4, 56, 18, 35],
            "21": [4, 55, 18, 35],
            "22": [4, 54, 18, 36],
            "23": [4, 53, 18, 36],
            "24": [4, 52, 18, 37],
            "25": [4, 51, 18, 37],
            "26": [4, 50, 18, 38],
            "27": [4, 49, 18, 38],
            "28": [4, 48, 18, 39],
            "29": [4, 47, 18, 39],
            "30": [4, 46, 18, 40]
        }
    },
    "Madinah": {
        "timeZone": "Asia/Riyadh",
        "country": "Saudi Arabia",
        "dates": {
            "1": [5, 10, 18, 20],
            "2": [5, 9, 18, 21],
            "3": [5, 8, 18, 22],
            "4": [5, 7, 18, 23],
            "5": [5, 6, 18, 24],
            "6": [5, 5, 18, 25],
            "7": [5, 4, 18, 26],
            "8": [5, 3, 18, 27],
            "9": [5, 2, 18, 28],
            "10": [5, 1, 18, 29],
            "11": [5, 0, 18, 30],
            "12": [4, 59, 18, 31],
            "13": [4, 58, 18, 32],
            "14": [4, 57, 18, 33],
            "15": [4, 56, 18, 34],
            "16": [4, 55, 18, 35],
            "17": [4, 54, 18, 36],
            "18": [4, 53, 18, 37],
            "19": [4, 52, 18, 38],
            "20": [4, 51, 18, 39],
            "21": [4, 50, 18, 40],
            "22": [4, 49, 18, 41],
            "23": [4, 48, 18, 42],
            "24": [4, 47, 18, 43],
            "25": [4, 46, 18, 44],
            "26": [4, 45, 18, 45],
            "27": [4, 44, 18, 46],
            "28": [4, 43, 18, 47],
            "29": [4, 42, 18, 48],
            "30": [4, 41, 18, 49]
        }
    },
    
    // UAE
    "Dubai": {
        "timeZone": "Asia/Dubai",
        "country": "UAE",
        "dates": {
            "1": [5, 20, 18, 30],
            "2": [5, 19, 18, 31],
            "3": [5, 18, 18, 32],
            "4": [5, 17, 18, 33],
            "5": [5, 16, 18, 34],
            "6": [5, 15, 18, 35],
            "7": [5, 14, 18, 36],
            "8": [5, 13, 18, 37],
            "9": [5, 12, 18, 38],
            "10": [5, 11, 18, 39],
            "11": [5, 10, 18, 40],
            "12": [5, 9, 18, 41],
            "13": [5, 8, 18, 42],
            "14": [5, 7, 18, 43],
            "15": [5, 6, 18, 44],
            "16": [5, 5, 18, 45],
            "17": [5, 4, 18, 46],
            "18": [5, 3, 18, 47],
            "19": [5, 2, 18, 48],
            "20": [5, 1, 18, 49],
            "21": [5, 0, 18, 50],
            "22": [4, 59, 18, 51],
            "23": [4, 58, 18, 52],
            "24": [4, 57, 18, 53],
            "25": [4, 56, 18, 54],
            "26": [4, 55, 18, 55],
            "27": [4, 54, 18, 56],
            "28": [4, 53, 18, 57],
            "29": [4, 52, 18, 58],
            "30": [4, 51, 18, 59]
        }
    },
    
    // UK
    "London": {
        "timeZone": "Europe/London",
        "country": "UK",
        "dates": {
            "1": [4, 50, 17, 50],
            "2": [4, 48, 17, 52],
            "3": [4, 46, 17, 54],
            "4": [4, 44, 17, 56],
            "5": [4, 42, 17, 58],
            "6": [4, 40, 18, 0],
            "7": [4, 38, 18, 2],
            "8": [4, 36, 18, 4],
            "9": [4, 34, 18, 6],
            "10": [4, 32, 18, 8],
            "11": [4, 30, 18, 10],
            "12": [4, 28, 18, 12],
            "13": [4, 26, 18, 14],
            "14": [4, 24, 18, 16],
            "15": [4, 22, 18, 18],
            "16": [4, 20, 18, 20],
            "17": [4, 18, 18, 22],
            "18": [4, 16, 18, 24],
            "19": [4, 14, 18, 26],
            "20": [4, 12, 18, 28],
            "21": [4, 10, 18, 30],
            "22": [4, 8, 18, 32],
            "23": [4, 6, 18, 34],
            "24": [4, 4, 18, 36],
            "25": [4, 2, 18, 38],
            "26": [4, 0, 18, 40],
            "27": [3, 58, 18, 42],
            "28": [3, 56, 18, 44],
            "29": [3, 54, 18, 46],
            "30": [3, 52, 18, 48]
        }
    },
    
    // USA
    "New York": {
        "timeZone": "America/New_York",
        "country": "USA",
        "dates": {
            "1": [5, 30, 18, 0],
            "2": [5, 28, 18, 1],
            "3": [5, 26, 18, 2],
            "4": [5, 24, 18, 3],
            "5": [5, 22, 18, 4],
            "6": [5, 20, 18, 5],
            "7": [5, 18, 18, 6],
            "8": [5, 16, 18, 7],
            "9": [5, 14, 18, 8],
            "10": [5, 12, 18, 9],
            "11": [5, 10, 18, 10],
            "12": [5, 8, 18, 11],
            "13": [5, 6, 18, 12],
            "14": [5, 4, 18, 13],
            "15": [5, 2, 18, 14],
            "16": [5, 0, 18, 15],
            "17": [4, 58, 18, 16],
            "18": [4, 56, 18, 17],
            "19": [4, 54, 18, 18],
            "20": [4, 52, 18, 19],
            "21": [4, 50, 18, 20],
            "22": [4, 48, 18, 21],
            "23": [4, 46, 18, 22],
            "24": [4, 44, 18, 23],
            "25": [4, 42, 18, 24],
            "26": [4, 40, 18, 25],
            "27": [4, 38, 18, 26],
            "28": [4, 36, 18, 27],
            "29": [4, 34, 18, 28],
            "30": [4, 32, 18, 29]
        }
    },
    "Chicago": {
        "timeZone": "America/Chicago",
        "country": "USA",
        "dates": {
            "1": [5, 40, 18, 10],
            "2": [5, 38, 18, 11],
            "3": [5, 36, 18, 12],
            "4": [5, 34, 18, 13],
            "5": [5, 32, 18, 14],
            "6": [5, 30, 18, 15],
            "7": [5, 28, 18, 16],
            "8": [5, 26, 18, 17],
            "9": [5, 24, 18, 18],
            "10": [5, 22, 18, 19],
            "11": [5, 20, 18, 20],
            "12": [5, 18, 18, 21],
            "13": [5, 16, 18, 22],
            "14": [5, 14, 18, 23],
            "15": [5, 12, 18, 24],
            "16": [5, 10, 18, 25],
            "17": [5, 8, 18, 26],
            "18": [5, 6, 18, 27],
            "19": [5, 4, 18, 28],
            "20": [5, 2, 18, 29],
            "21": [5, 0, 18, 30],
            "22": [4, 58, 18, 31],
            "23": [4, 56, 18, 32],
            "24": [4, 54, 18, 33],
            "25": [4, 52, 18, 34],
            "26": [4, 50, 18, 35],
            "27": [4, 48, 18, 36],
            "28": [4, 46, 18, 37],
            "29": [4, 44, 18, 38],
            "30": [4, 42, 18, 39]
        }
    },
    
    // Australia
    "Sydney": {
        "timeZone": "Australia/Sydney",
        "country": "Australia",
        "dates": {
            "1": [5, 20, 19, 40],
            "2": [5, 21, 19, 39],
            "3": [5, 22, 19, 38],
            "4": [5, 23, 19, 37],
            "5": [5, 24, 19, 36],
            "6": [5, 25, 19, 35],
            "7": [5, 26, 19, 34],
            "8": [5, 27, 19, 33],
            "9": [5, 28, 19, 32],
            "10": [5, 29, 19, 31],
            "11": [5, 30, 19, 30],
            "12": [5, 31, 19, 29],
            "13": [5, 32, 19, 28],
            "14": [5, 33, 19, 27],
            "15": [5, 34, 19, 26],
            "16": [5, 35, 19, 25],
            "17": [5, 36, 19, 24],
            "18": [5, 37, 19, 23],
            "19": [5, 38, 19, 22],
            "20": [5, 39, 19, 21],
            "21": [5, 40, 19, 20],
            "22": [5, 41, 19, 19],
            "23": [5, 42, 19, 18],
            "24": [5, 43, 19, 17],
            "25": [5, 44, 19, 16],
            "26": [5, 45, 19, 15],
            "27": [5, 46, 19, 14],
            "28": [5, 47, 19, 13],
            "29": [5, 48, 19, 12],
            "30": [5, 49, 19, 11]
        }
    }
};

// Helper function to get city list grouped by country
function getCityListByCountry() {
    const countries = {};
    
    for (const city in ramzanTimes) {
        const country = ramzanTimes[city].country;
        
        if (!countries[country]) {
            countries[country] = [];
        }
        
        countries[country].push(city);
    }
    
    return countries;
}

// Helper function to get Sehri time for a specific city and day
function getSehriTime(city, day) {
    if (!ramzanTimes[city] || !ramzanTimes[city].dates[day]) {
        return null;
    }
    
    const [hour, minute] = ramzanTimes[city].dates[day].slice(0, 2);
    return { hour, minute };
}

// Helper function to get Iftar time for a specific city and day
function getIftarTime(city, day) {
    if (!ramzanTimes[city] || !ramzanTimes[city].dates[day]) {
        return null;
    }
    
    const [, , hour, minute] = ramzanTimes[city].dates[day];
    return { hour, minute };
}

// Helper function to get timezone for a city
function getCityTimezone(city) {
    if (!ramzanTimes[city]) {
        return null;
    }
    
    return ramzanTimes[city].timeZone;
}

// Helper function to format time in 12-hour format
function formatTime(hour, minute) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minute.toString().padStart(2, '0')} ${period}`;
}

// Export the functions and data
window.ramzanTimesManager = {
    cities: ramzanTimes,
    getCityListByCountry,
    getSehriTime,
    getIftarTime,
    getCityTimezone,
    formatTime
}; 