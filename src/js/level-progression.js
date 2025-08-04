/**
 * Unified Support Card Level Progression API
 * 
 * This module provides a unified interface to access level progression data
 * across all support card rarities. It coordinates between the separate
 * rarity-specific modules for optimal performance and organization.
 * 
 * Dependencies:
 * - level-progression-r.js (R cards: 9 levels)
 * - level-progression-sr.js (SR cards: 10 levels)  
 * - level-progression-ssr.js (SSR cards: 11 levels)
 */

/**
 * Unified API for getting support card level progression data
 * Automatically routes to the appropriate rarity-specific module
 * @param {string} cardId - The card identifier
 * @param {number} level - The card level
 * @returns {Object|null} Level progression data or null if not found
 */
function getSupportCardLevelData(cardId, level) {
    // Try R cards first (most common)
    if (window.RSupportCardLevelProgression && window.RSupportCardLevelProgression.hasRSupportCardLevelProgression(cardId)) {
        return window.RSupportCardLevelProgression.getRSupportCardLevelData(cardId, level);
    }
    
    // Try SR cards
    if (window.SRSupportCardLevelProgression && window.SRSupportCardLevelProgression.hasSRSupportCardLevelProgression(cardId)) {
        return window.SRSupportCardLevelProgression.getSRSupportCardLevelData(cardId, level);
    }
    
    // Try SSR cards
    if (window.SSRSupportCardLevelProgression && window.SSRSupportCardLevelProgression.hasSSRSupportCardLevelProgression(cardId)) {
        return window.SSRSupportCardLevelProgression.getSSRSupportCardLevelData(cardId, level);
    }
    
    return null;
}

/**
 * Get all available levels for any support card
 * @param {string} cardId - The card identifier
 * @returns {number[]} Array of available levels or empty array if not found
 */
function getSupportCardAvailableLevels(cardId) {
    // Try R cards first
    if (window.RSupportCardLevelProgression && window.RSupportCardLevelProgression.hasRSupportCardLevelProgression(cardId)) {
        return window.RSupportCardLevelProgression.getRSupportCardAvailableLevels(cardId);
    }
    
    // Try SR cards
    if (window.SRSupportCardLevelProgression && window.SRSupportCardLevelProgression.hasSRSupportCardLevelProgression(cardId)) {
        return window.SRSupportCardLevelProgression.getSRSupportCardAvailableLevels(cardId);
    }
    
    // Try SSR cards
    if (window.SSRSupportCardLevelProgression && window.SSRSupportCardLevelProgression.hasSSRSupportCardLevelProgression(cardId)) {
        return window.SSRSupportCardLevelProgression.getSSRSupportCardAvailableLevels(cardId);
    }
    
    return [];
}

/**
 * Get complete card information including all level progression data
 * @param {string} cardId - The card identifier
 * @returns {Object|null} Complete card data or null if not found
 */
function getSupportCardComplete(cardId) {
    // Try R cards first
    if (window.RSupportCardLevelProgression && window.RSupportCardLevelProgression.hasRSupportCardLevelProgression(cardId)) {
        return window.RSupportCardLevelProgression.getRSupportCardComplete(cardId);
    }
    
    // Try SR cards
    if (window.SRSupportCardLevelProgression && window.SRSupportCardLevelProgression.hasSRSupportCardLevelProgression(cardId)) {
        return window.SRSupportCardLevelProgression.getSRSupportCardComplete(cardId);
    }
    
    // Try SSR cards
    if (window.SSRSupportCardLevelProgression && window.SSRSupportCardLevelProgression.hasSSRSupportCardLevelProgression(cardId)) {
        return window.SSRSupportCardLevelProgression.getSSRSupportCardComplete(cardId);
    }
    
    return null;
}

/**
 * Check if any support card has level progression data implemented
 * @param {string} cardId - The card identifier
 * @returns {boolean} True if card has level progression data
 */
function hasSupportCardLevelProgression(cardId) {
    return (window.RSupportCardLevelProgression && window.RSupportCardLevelProgression.hasRSupportCardLevelProgression(cardId)) ||
           (window.SRSupportCardLevelProgression && window.SRSupportCardLevelProgression.hasSRSupportCardLevelProgression(cardId)) ||
           (window.SSRSupportCardLevelProgression && window.SSRSupportCardLevelProgression.hasSSRSupportCardLevelProgression(cardId));
}

/**
 * Get statistics about level progression implementation
 * @returns {Object} Implementation statistics
 */
function getLevelProgressionStats() {
    const rCards = window.RSupportCardLevelProgression ? window.RSupportCardLevelProgression.getAllRSupportCardIds().length : 0;
    const srCards = window.SRSupportCardLevelProgression ? window.SRSupportCardLevelProgression.getAllSRSupportCardIds().length : 0;
    const ssrCards = window.SSRSupportCardLevelProgression ? window.SSRSupportCardLevelProgression.getAllSSRSupportCardIds().length : 0;
    
    return {
        totalImplemented: rCards + srCards + ssrCards,
        rImplemented: rCards,
        srImplemented: srCards,
        ssrImplemented: ssrCards,
        rTotal: 57, // Total R cards in project
        srTotal: 25, // Total SR cards in project  
        ssrTotal: 30, // Total SSR cards in project
        completionPercentage: Math.round(((rCards + srCards + ssrCards) / 112) * 100)
    };
}

/**
 * Get all implemented support card IDs across all rarities
 * @returns {Object} Object with arrays of implemented card IDs by rarity
 */
function getAllImplementedCardIds() {
    return {
        r: window.RSupportCardLevelProgression ? window.RSupportCardLevelProgression.getAllRSupportCardIds() : [],
        sr: window.SRSupportCardLevelProgression ? window.SRSupportCardLevelProgression.getAllSRSupportCardIds() : [],
        ssr: window.SSRSupportCardLevelProgression ? window.SSRSupportCardLevelProgression.getAllSSRSupportCardIds() : []
    };
}

// Export unified API for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        getSupportCardLevelData,
        getSupportCardAvailableLevels,
        getSupportCardComplete,
        hasSupportCardLevelProgression,
        getLevelProgressionStats,
        getAllImplementedCardIds
    };
} else {
    // Browser environment - attach to window
    window.LevelProgression = {
        getSupportCardLevelData,
        getSupportCardAvailableLevels,
        getSupportCardComplete,
        hasSupportCardLevelProgression,
        getLevelProgressionStats,
        getAllImplementedCardIds
    };
}