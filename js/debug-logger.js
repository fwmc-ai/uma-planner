/**
 * Debug Logger - Writes console output to files for easier debugging
 * Usage: 
 *   import { debugLog, clearDebugLog } from './debug-logger.js';
 *   debugLog('training', 'Training calculation', { value: 125, stats: {...} });
 */

class DebugLogger {
    constructor() {
        this.logs = new Map();
        this.enabled = false; // Set to true when debugging
    }

    /**
     * Enable/disable file logging
     * @param {boolean} enabled 
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        if (enabled) {
            console.log('🔧 Debug logging enabled - outputs will be saved to project files');
        }
    }

    /**
     * Log debug information to a specific file category
     * @param {string} category - File category (e.g., 'training', 'stats', 'ui')
     * @param {string} message - Log message
     * @param {*} data - Data to log (objects, arrays, etc.)
     */
    log(category, message, data = null) {
        if (!this.enabled) return;

        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        const logEntry = {
            timestamp,
            message,
            data: data ? this.stringifyData(data) : null
        };

        if (!this.logs.has(category)) {
            this.logs.set(category, []);
        }

        this.logs.get(category).push(logEntry);

        // Auto-save when we hit certain thresholds
        if (this.logs.get(category).length % 10 === 0) {
            this.saveToFile(category);
        }
    }

    /**
     * Convert data to readable string format
     * @param {*} data 
     * @returns {string}
     */
    stringifyData(data) {
        try {
            if (typeof data === 'object') {
                return JSON.stringify(data, null, 2);
            }
            return String(data);
        } catch (error) {
            return `[Object could not be stringified: ${error.message}]`;
        }
    }

    /**
     * Save logs to a downloadable file
     * @param {string} category 
     */
    saveToFile(category) {
        const logs = this.logs.get(category) || [];
        const content = logs.map(log => {
            let output = `[${log.timestamp}] ${log.message}`;
            if (log.data) {
                output += `\n${log.data}`;
            }
            return output + '\n' + '-'.repeat(80) + '\n';
        }).join('\n');

        const filename = `debug-${category}-${new Date().toISOString().split('T')[0]}.log`;
        this.downloadFile(filename, content);
    }

    /**
     * Download content as a file
     * @param {string} filename 
     * @param {string} content 
     */
    downloadFile(filename, content) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log(`📁 Debug log saved: ${filename}`);
    }

    /**
     * Clear logs for a category
     * @param {string} category 
     */
    clear(category) {
        if (category) {
            this.logs.delete(category);
            console.log(`🗑️ Cleared ${category} debug logs`);
        } else {
            this.logs.clear();
            console.log('🗑️ Cleared all debug logs');
        }
    }

    /**
     * Save all current logs to files
     */
    saveAll() {
        for (const category of this.logs.keys()) {
            this.saveToFile(category);
        }
    }

    /**
     * Get current log categories and counts
     */
    getStatus() {
        const status = {};
        for (const [category, logs] of this.logs.entries()) {
            status[category] = logs.length;
        }
        console.log('📊 Debug log status:', status);
        return status;
    }
}

// Create global instance
const debugLogger = new DebugLogger();

// Export convenience functions
export function enableDebugLogging() {
    debugLogger.setEnabled(true);
}

export function disableDebugLogging() {
    debugLogger.setEnabled(false);
}

export function debugLog(category, message, data) {
    debugLogger.log(category, message, data);
}

export function clearDebugLog(category) {
    debugLogger.clear(category);
}

export function saveDebugLogs() {
    debugLogger.saveAll();
}

export function debugStatus() {
    return debugLogger.getStatus();
}

// Global access for console debugging
window.DebugLogger = {
    enable: enableDebugLogging,
    disable: disableDebugLogging,
    log: debugLog,
    clear: clearDebugLog,
    save: saveDebugLogs,
    status: debugStatus
};