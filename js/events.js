/**
 * Uma Musume Career Planner - Event Management Module
 * Contains global event delegation system for all user interactions
 */

// Define the event management module
(function() {
    'use strict';
    
    /**
     * Setup global event delegation for stat controls to prevent duplicate listeners
     * Handles all stat control interactions through event delegation
     */
    function setupGlobalEventDelegation() {
        // Handle stat button clicks (plus/minus and quick increment)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('stat-btn-plus') || e.target.classList.contains('stat-btn-minus')) {
                const stat = e.target.dataset.stat;
                const action = e.target.dataset.action;
                const input = document.querySelector(`.stat-input[data-stat="${stat}"]`);
                if (!input) return;
                
                const currentValue = parseInt(input.value) || 0;
                let newValue;
                if (action === 'plus') {
                    newValue = Math.min(1200, currentValue + 1);
                } else {
                    newValue = Math.max(0, currentValue - 1);
                }
                
                input.value = newValue;
                // Update state without re-rendering to avoid duplicating listeners
                const numValue = parseInt(newValue) || 0;
                const clampedValue = Math.max(0, Math.min(1200, numValue));
                appState.stats = { ...appState.stats, [stat]: clampedValue };
                // Trigger a re-render
                renderApp();
                
            } else if (e.target.classList.contains('quick-add-btn')) {
                const stat = e.target.dataset.stat;
                const increment = parseInt(e.target.dataset.amount);
                const input = document.querySelector(`.stat-input[data-stat="${stat}"]`);
                if (!input) return;
                
                const currentValue = parseInt(input.value) || 0;
                const newValue = Math.max(0, Math.min(1200, currentValue + increment));
                
                input.value = newValue;
                // Update state without re-rendering to avoid duplicating listeners
                const numValue = parseInt(newValue) || 0;
                const clampedValue = Math.max(0, Math.min(1200, numValue));
                appState.stats = { ...appState.stats, [stat]: clampedValue };
                // Trigger a re-render
                renderApp();
            }
        });
        
        // Handle stat input changes
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('stat-input')) {
                const value = Math.max(0, Math.min(1200, parseInt(e.target.value) || 0));
                e.target.value = value; // Update display
                const stat = e.target.dataset.stat;
                
                // Update state without re-rendering to avoid duplicating listeners
                const numValue = parseInt(value) || 0;
                const clampedValue = Math.max(0, Math.min(1200, numValue));
                appState.stats = { ...appState.stats, [stat]: clampedValue };
                // Trigger a re-render
                renderApp();
            }
        });
    }

    /**
     * Initialize event system
     * Sets up all global event listeners
     */
    function initializeEventSystem() {
        setupGlobalEventDelegation();
        console.log('Event system initialized');
    }

    /**
     * Add custom event listener with automatic cleanup
     * @param {string} selector - CSS selector for target elements
     * @param {string} event - Event type (click, change, etc.)
     * @param {Function} handler - Event handler function
     */
    function addEventDelegate(selector, event, handler) {
        document.addEventListener(event, (e) => {
            if (e.target.matches(selector)) {
                handler(e);
            }
        });
    }

    // Register the event management module
    if (window.Uma) {
        window.Uma.Events = {
            setupGlobalEventDelegation,
            initializeEventSystem,
            addEventDelegate
        };
    } else {
        window.Uma = {
            Events: {
                setupGlobalEventDelegation,
                initializeEventSystem,
                addEventDelegate
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('events');
    }

    console.log('Event management module loaded successfully');
})();