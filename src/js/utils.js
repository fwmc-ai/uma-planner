/**
 * Uma Musume Career Planner - Utility Functions Module
 * Contains all utility functions for UI rendering, data processing, and helpers
 */

// Define the utils module
(function() {
    'use strict';
    
    /**
     * Create a DOM element with optional class and innerHTML
     * @param {string} tag - HTML tag name
     * @param {string} className - CSS class names (optional)
     * @param {string} innerHTML - Inner HTML content (optional)
     * @returns {HTMLElement} Created DOM element
     */
    function createElement(tag, className = '', innerHTML = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    }

    /**
     * Generate star rating display for character rarity
     * @param {number} rarity - Character rarity (1-3)
     * @returns {string} String of star characters
     */
    function getRarityStars(rarity) {
        return '★'.repeat(rarity);
    }

    /**
     * Get CSS classes for running style color coding
     * @param {string} style - Running style (front-runner, pace-chaser, etc.)
     * @returns {string} CSS class string for styling
     */
    function getStyleColor(style) {
        const colors = {
            'front-runner': 'bg-red-100 text-red-800',
            'pace-chaser': 'bg-blue-100 text-blue-800',
            'late-surger': 'bg-green-100 text-green-800',
            'end-closer': 'bg-purple-100 text-purple-800'
        };
        return colors[style] || 'bg-gray-100 text-gray-800';
    }

    /**
     * Convert internal style names to user-friendly display names
     * @param {string} style - Internal style name
     * @returns {string} Human-readable style name
     */
    function getStyleDisplayName(style) {
        const displayNames = {
            'front-runner': 'Front Runner',
            'pace-chaser': 'Pace Chaser',
            'late-surger': 'Late Surger',
            'end-closer': 'End Closer'
        };
        return displayNames[style] || style;
    }

    /**
     * Get CSS classes for aptitude grade color coding
     * @param {string} aptitude - Aptitude grade (S, A, B, C, D, E, F, G)
     * @returns {string} CSS class string for styling
     */
    function getAptitudeColor(aptitude) {
        const colors = {
            'S': 'text-pink-600 font-bold',
            'A': 'text-green-600 font-bold',
            'B': 'text-blue-600 font-semibold',
            'C': 'text-yellow-600',
            'D': 'text-orange-600',
            'E': 'text-red-600',
            'F': 'text-red-700 font-bold',
            'G': 'text-gray-500'
        };
        return colors[aptitude] || 'text-gray-600';
    }



    // Register the utils module
    if (window.Uma) {
        window.Uma.Utils = {
            createElement,
            getRarityStars,
            getStyleColor,
            getStyleDisplayName,
            getAptitudeColor
        };
    } else {
        window.Uma = {
            Utils: {
                createElement,
                getRarityStars,
                getStyleColor,
                getStyleDisplayName,
                getAptitudeColor
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('utils');
    }

    console.log('Utils module loaded successfully');
})();