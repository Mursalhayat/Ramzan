/**
 * Windows Time Updater for Ramzan Website
 * This script automatically synchronizes the local time with online time servers
 * to ensure accurate Iftar countdown timing.
 */

class TimeUpdater {
    constructor() {
        this.timeServers = [
            'time.windows.com',
            'time.google.com',
            'pool.ntp.org',
            'time.nist.gov'
        ];
        this.currentServer = 0;
        this.timeDifference = 0;
        this.isInitialized = false;
        this.syncInterval = 3600000; // 1 hour in milliseconds
    }

    /**
     * Initialize the time updater
     */
    init() {
        if (this.isInitialized) return;
        
        console.log('Initializing Windows Time Updater...');
        this.syncTime();
        
        // Set up periodic sync
        setInterval(() => this.syncTime(), this.syncInterval);
        
        this.isInitialized = true;
        
        // Add event listener for online/offline status
        window.addEventListener('online', () => {
            console.log('Internet connection restored. Syncing time...');
            this.syncTime();
        });
    }

    /**
     * Synchronize time with online servers
     */
    syncTime() {
        if (!navigator.onLine) {
            console.log('No internet connection. Using local time.');
            this.showNotification('Time sync failed', 'No internet connection. Using local time.');
            return;
        }

        const serverUrl = this.timeServers[this.currentServer];
        console.log(`Syncing time with ${serverUrl}...`);
        
        // In a real implementation, we would use a proper time protocol
        // Since browsers don't have direct access to NTP, we'll use a workaround
        this.fetchTimeFromServer(serverUrl)
            .then(serverTime => {
                const localTime = new Date().getTime();
                this.timeDifference = serverTime - localTime;
                
                console.log(`Time synchronized. Difference: ${this.timeDifference}ms`);
                localStorage.setItem('timeDifference', this.timeDifference);
                
                if (Math.abs(this.timeDifference) > 10000) { // If more than 10 seconds off
                    this.showNotification(
                        'Time Updated', 
                        `Your clock was ${Math.abs(Math.round(this.timeDifference/1000))} seconds ${this.timeDifference > 0 ? 'behind' : 'ahead'}. It has been adjusted.`
                    );
                }
                
                // Dispatch event for other scripts to know time was updated
                window.dispatchEvent(new CustomEvent('timeUpdated', {
                    detail: { timeDifference: this.timeDifference }
                }));
            })
            .catch(error => {
                console.error(`Failed to sync with ${serverUrl}:`, error);
                // Try next server
                this.currentServer = (this.currentServer + 1) % this.timeServers.length;
                this.syncTime();
            });
    }

    /**
     * Get the current accurate time
     * @returns {Date} The corrected date object
     */
    getCurrentTime() {
        const now = new Date();
        if (this.timeDifference !== 0) {
            now.setTime(now.getTime() + this.timeDifference);
        }
        return now;
    }

    /**
     * Fetch time from a time server
     * This is a simulation since browsers can't directly access NTP
     * In a real implementation, you would use a backend service or API
     * @param {string} server - The time server URL
     * @returns {Promise<number>} - Promise resolving to server timestamp
     */
    fetchTimeFromServer(server) {
        return new Promise((resolve, reject) => {
            // In a real implementation, this would be an API call to a time service
            // For demonstration, we'll use a HEAD request to get the server's date
            fetch(`https://cors-anywhere.herokuapp.com/${server}`, {
                method: 'HEAD',
                mode: 'cors'
            })
            .then(response => {
                const dateStr = response.headers.get('date');
                if (dateStr) {
                    const serverTime = new Date(dateStr).getTime();
                    resolve(serverTime);
                } else {
                    reject(new Error('No date header in response'));
                }
            })
            .catch(error => {
                // Fallback: use worldtimeapi.org as it provides CORS headers
                fetch('https://worldtimeapi.org/api/ip')
                    .then(response => response.json())
                    .then(data => {
                        const serverTime = new Date(data.datetime).getTime();
                        resolve(serverTime);
                    })
                    .catch(fallbackError => {
                        reject(fallbackError);
                    });
            });
        });
    }

    /**
     * Show a notification to the user
     * @param {string} title - Notification title
     * @param {string} message - Notification message
     */
    showNotification(title, message) {
        // Check if the browser supports notifications
        if (!("Notification" in window)) {
            console.log(`${title}: ${message}`);
            return;
        }

        // Check if permission is already granted
        if (Notification.permission === "granted") {
            new Notification(title, { body: message, icon: 'https://i.imgur.com/8mH9xS3.png' });
        }
        // Otherwise, request permission
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, { body: message, icon: 'https://i.imgur.com/8mH9xS3.png' });
                }
            });
        }
    }
}

// Create and initialize the time updater
const windowsTimeUpdater = new TimeUpdater();

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    windowsTimeUpdater.init();
    
    // Check if there's a stored time difference
    const storedDiff = localStorage.getItem('timeDifference');
    if (storedDiff) {
        windowsTimeUpdater.timeDifference = parseInt(storedDiff, 10);
    }
});

// Export the time updater for use in other scripts
window.windowsTimeUpdater = windowsTimeUpdater; 