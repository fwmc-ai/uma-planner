/**
 * Uma Musume Career Planner - State Management Module
 * Contains application state object and state update functions
 */

// Define the state management module
(function() {
    'use strict';
    
    /**
     * Application State
     * Central state object for the entire Uma Musume Career Planner application
     */
    let appState = {
        currentView: 'home',
        selectedCharacter: null,
        searchTerm: '',
        targetTrack: 'mile',
        style: 'pace-chaser',
        costumeMode: 'school', // 'school' or 'secondary'
        currentMood: 'normal', // Phase 4A Enhancement: Character mood for training efficiency (5 moods only)
        selectedSupportCards: [], // Phase 4B Enhancement: Support card selection
        stats: {
            speed: 300,
            stamina: 300,
            power: 300,
            guts: 300,
            wit: 300
        }
    };

    /**
     * Update application state and trigger re-render
     * @param {Object} updates - State updates to apply
     */
    function updateAppState(updates) {
        // Check if this is a search term update - we need special handling on mobile
        const isSearchUpdate = updates.hasOwnProperty('searchTerm');
        
        // If it's a search update, we need to delay the render to prevent focus loss
        if (isSearchUpdate) {
            Object.assign(appState, updates);
            
            // Use a micro-task to ensure the input change is processed first
            Promise.resolve().then(() => {
                renderApp();
            });
        } else {
            Object.assign(appState, updates);
            renderApp();
        }
    }

    /**
     * Get current application state (read-only access)
     * @returns {Object} Current application state
     */
    function getAppState() {
        return appState;
    }

    /**
     * Initialize application state with default values
     * Used during app startup
     */
    function initializeAppState() {
        // State is already initialized with default values above
        // This function can be used for any future initialization logic
        console.log('Application state initialized');
    }

    // Register the state management module
    if (window.Uma) {
        window.Uma.State = {
            appState,
            updateAppState,
            getAppState,
            initializeAppState
        };
    } else {
        window.Uma = {
            State: {
                appState,
                updateAppState,
                getAppState,
                initializeAppState
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('state');
    }

    console.log('State management module loaded successfully');
})();