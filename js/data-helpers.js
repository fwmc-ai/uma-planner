/**
 * Uma Musume Career Planner - Data Helpers Module
 * Contains data processing functions, search, filtering, and character manipulation
 */

// Define the data helpers module
(function() {
    'use strict';
    
    /**
     * Filter characters based on search term
     * @returns {Array} Filtered character array
     */
    function getFilteredCharacters() {
        return CHARACTERS.filter(char => {
            return char.name.toLowerCase().includes(appState.searchTerm.toLowerCase());
        });
    }

    // Register the data helpers module
    if (window.Uma) {
        window.Uma.DataHelpers = {
            getFilteredCharacters
        };
    } else {
        window.Uma = {
            DataHelpers: {
                getFilteredCharacters
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('data-helpers');
    }

    console.log('Data helpers module loaded successfully');
})();