/**
 * Uma Musume Career Planner - Application Controller Module
 * Contains main application logic, rendering, and initialization
 */

// Define the application controller module
(function() {
    'use strict';
    
    /**
     * Main App Render Function
     * Handles view switching and preserves UI state during re-renders
     */
    function renderApp() {
        const root = document.getElementById('root');
        
        // Preserve search input focus and cursor position if it exists
        const currentSearchInput = document.querySelector('#search-input');
        const wasSearchFocused = currentSearchInput && document.activeElement === currentSearchInput;
        const cursorPosition = wasSearchFocused ? currentSearchInput.selectionStart : null;
        
        root.innerHTML = '';
        
        if (appState.currentView === 'home') {
            root.appendChild(createHomePage());
            
            // Restore search input focus and cursor position after render
            if (wasSearchFocused) {
                // Use requestAnimationFrame for better mobile compatibility
                requestAnimationFrame(() => {
                    const newSearchInput = document.querySelector('#search-input');
                    if (newSearchInput) {
                        // Force focus with additional mobile-specific handling
                        newSearchInput.focus();
                        
                        // Mobile devices may need additional time for virtual keyboard
                        setTimeout(() => {
                            if (document.activeElement !== newSearchInput) {
                                newSearchInput.focus();
                            }
                            
                            // Restore cursor position
                            if (cursorPosition !== null) {
                                try {
                                    newSearchInput.setSelectionRange(cursorPosition, cursorPosition);
                                } catch (e) {
                                    // Fallback for mobile browsers that may not support setSelectionRange
                                    newSearchInput.selectionStart = cursorPosition;
                                    newSearchInput.selectionEnd = cursorPosition;
                                }
                            }
                        }, 50); // Longer timeout for mobile virtual keyboard
                    }
                });
            }
        } else if (appState.currentView === 'planner') {
            root.appendChild(createCharacterPlanner());
        }
    }

    /**
     * Initialize Progressive Web App functionality
     * Registers service worker for offline capabilities
     */
    function initializePWA() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    /**
     * Initialize the entire application
     * Sets up event system, PWA functionality, and renders initial view
     */
    function initializeApp() {
        try {
            // Initialize event system
            if (typeof initializeEventSystem === 'function') {
                initializeEventSystem();
            } else {
                console.error('Event system not available');
                return;
            }
            
            // Initialize PWA functionality
            initializePWA();
            
            // Render initial view
            renderApp();
            
            console.log('✅ Uma Musume Career Planner initialized successfully');
        } catch (error) {
            console.error('❌ Application initialization failed:', error);
            
            // Show error message to user
            const root = document.getElementById('root');
            if (root) {
                root.innerHTML = `
                    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(to bottom right, #fef3c7, #dbeafe, #f3e8ff);">
                        <div style="text-align: center; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                            <h2 style="color: #dc2626; margin-bottom: 10px;">⚠️ Application Error</h2>
                            <p style="color: #374151; margin-bottom: 10px;">Failed to initialize Uma Musume Career Planner</p>
                            <button onclick="window.location.reload()" style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
                                Reload Application
                            </button>
                        </div>
                    </div>
                `;
            }
        }
    }

    /**
     * Handle application errors gracefully
     * @param {Error} error - The error that occurred
     * @param {string} context - Context where the error occurred
     */
    function handleAppError(error, context = 'Application') {
        console.error(`${context} Error:`, error);
        
        // In development, show more detailed error information
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.error('Stack trace:', error.stack);
        }
    }

    // Register the application controller module
    if (window.Uma) {
        window.Uma.App = {
            renderApp,
            initializePWA,
            initializeApp,
            handleAppError
        };
    } else {
        window.Uma = {
            App: {
                renderApp,
                initializePWA,
                initializeApp,
                handleAppError
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('app');
    }

    console.log('Application controller module loaded successfully');
})();