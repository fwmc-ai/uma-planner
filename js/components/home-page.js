/**
 * Uma Musume Career Planner - Home Page Component
 * Contains home page UI, character browsing, search interface, and costume toggle system
 */

// Define the home page component module
(function() {
    'use strict';
    
    /**
     * Create the home page with character browsing, search, and costume toggles
     * @returns {HTMLElement} Complete home page container
     */
    function createHomePage() {
        const container = createElement('div', 'min-h-screen');
        
        const mainContainer = createElement('div', 'container mx-auto px-4 py-6');
        
        // Header
        const header = createElement('div', 'text-center mb-8');
        header.innerHTML = `
            <div class="flex justify-center items-center mb-4">
                <!-- Logo container - smart fallback system with click functionality -->
                <div id="site-logo" class="transition-opacity duration-300 cursor-pointer" onclick="window.location.reload();">
                    <img id="logo-img" src="./logo.png" alt="Uma Musume Career Planner" 
                         class="h-36 md:h-48 w-auto max-w-4xl mx-auto hover:opacity-80 transition-opacity" style="display: block;">
                    <div id="logo-fallback" class="text-center hover:opacity-80 transition-opacity" style="display: none;">
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-1">🏇 Uma Musume</h1>
                        <p class="text-base md:text-lg text-gray-600">Career Planner</p>
                    </div>
                </div>
            </div>
        `;

        // Smart logo loading with fallback
        setTimeout(() => {
            const logoImg = document.getElementById('logo-img');
            const logoFallback = document.getElementById('logo-fallback');
            
            if (logoImg) {
                logoImg.onerror = () => {
                    // If logo.png fails, show text fallback
                    logoImg.style.display = 'none';
                    logoFallback.style.display = 'block';
                };
            }
        }, 0);
        
        // Controls
        const controls = createElement('div', 'mb-6 space-y-4');
        
        // Search bar
        const searchContainer = createElement('div', 'relative');
        searchContainer.innerHTML = `
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">${Icons.Search}</span>
            <input type="text" id="search-input" placeholder="Search characters..." 
                   class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                   style="font-size: 16px; -webkit-appearance: none; -webkit-tap-highlight-color: transparent;"
                   value="${appState.searchTerm}">
        `;
        
        const searchInput = searchContainer.querySelector('input');
        
        // Enhanced mobile-friendly search input handling
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            
            // Immediate update for responsiveness, but still debounce
            searchTimeout = setTimeout(() => {
                updateAppState({ searchTerm: e.target.value });
            }, 50); // Reduced delay for better responsiveness
        });
        
        // Prevent mobile keyboard issues
        searchInput.addEventListener('focus', (e) => {
            // Ensure input stays focused on mobile
            e.target.style.webkitUserSelect = 'text';
            e.target.style.userSelect = 'text';
        });
        
        // Additional mobile-specific event handling
        searchInput.addEventListener('keydown', (e) => {
            // Prevent form submission on mobile keyboards
            if (e.key === 'Enter') {
                e.preventDefault();
                searchInput.blur(); // Hide mobile keyboard
            }
        });
        
        // Get characters based on search only
        const filteredCharacters = getFilteredCharacters();
        
        controls.appendChild(searchContainer);
        
        // Character sections by rarity
        const characterContainer = createElement('div', 'space-y-8');
        
        // Group characters by rarity
        const charactersByRarity = {
            3: filteredCharacters.filter(char => char.rarity === 3),
            2: filteredCharacters.filter(char => char.rarity === 2),
            1: filteredCharacters.filter(char => char.rarity === 1)
        };
        
        // Create sections for each rarity (show only if there are characters)
        [3, 2, 1].forEach(rarity => {
            const characters = charactersByRarity[rarity];
            if (characters.length === 0) return;
            
            const section = createElement('div', 'space-y-4');
            
            // Rarity header with responsive mobile layout
            const header = createElement('div', 'pb-2 border-b border-gray-200 space-y-3 sm:space-y-0 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between');
            const isFirstSection = rarity === 3; // Keep reference for unique IDs
            const showToggle = true; // Show toggle on all sections
            header.innerHTML = `
                <div class="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div class="flex items-center gap-3">
                        <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm sm:text-base font-bold">${getRarityStars(rarity)} Characters</span>
                        <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm sm:text-base">${characters.length} available</span>
                    </div>
                </div>
                ${showToggle ? `
                    <div class="flex items-center bg-gray-100 rounded-lg p-1 w-fit mx-auto sm:mx-0">
                        <button id="costume-school${isFirstSection ? '' : '-' + rarity}" class="px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${appState.costumeMode === 'school' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}">
                            🏫 School
                        </button>
                        <button id="costume-secondary${isFirstSection ? '' : '-' + rarity}" class="px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${appState.costumeMode === 'secondary' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}">
                            ✨ Secondary
                        </button>
                    </div>
                ` : ''}
            `;

            // Add costume toggle event handlers for each section
            if (showToggle) {
                const schoolBtn = header.querySelector(`#costume-school${isFirstSection ? '' : '-' + rarity}`);
                const secondaryBtn = header.querySelector(`#costume-secondary${isFirstSection ? '' : '-' + rarity}`);
                
                schoolBtn.addEventListener('click', () => {
                    updateAppState({ costumeMode: 'school' });
                });
                
                secondaryBtn.addEventListener('click', () => {
                    updateAppState({ costumeMode: 'secondary' });
                });
            }
            
            // Character grid for this rarity with mobile optimizations
            const grid = createElement('div', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6');
            
            characters.forEach(character => {
            const card = createElement('div', 'character-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 overflow-hidden');
            
            // Check if character has an image file and add background styling
            const hasCharacterImage = character.id; // We'll check if file exists
            const imagePath = appState.costumeMode === 'school' ? 
                `./umaicons/school/${character.id}.webp` : 
                `./umaicons/secondary/${character.id}.webp`;
            const backgroundStyle = hasCharacterImage ? 
                `background-image: url('${imagePath}'); background-position: right center; background-repeat: no-repeat; background-size: contain; background-blend-mode: multiply;` : '';
            
            card.innerHTML = `
                <div class="p-6 relative transition-all duration-300 ease-in-out" style="${backgroundStyle}">
                    <div class="absolute inset-0 bg-white bg-opacity-10 rounded-xl transition-opacity duration-300"></div>
                    <div class="relative z-10">
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-4xl">${character.image}</div>
                            <div class="text-yellow-500 font-bold text-sm">${getRarityStars(character.rarity)}</div>
                        </div>
                        <div class="mb-3">
                            <h3 class="text-lg font-bold text-gray-800 mb-1 truncate">${character.name}</h3>
                            <div class="flex flex-nowrap gap-1 overflow-x-auto">
                                ${character.styles ? character.styles.map(style => `
                                    <span class="px-2 py-1 rounded-full text-xs font-medium bg-opacity-90 whitespace-nowrap flex-shrink-0 ${getStyleColor(style)}">
                                        ${getStyleDisplayName(style)}
                                    </span>
                                `).join('') : `
                                    <span class="px-2 py-1 rounded-full text-xs font-medium bg-opacity-90 whitespace-nowrap flex-shrink-0 ${getStyleColor(character.defaultStyle)}">
                                        ${getStyleDisplayName(character.defaultStyle)}
                                    </span>
                                `}
                            </div>
                        </div>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="text-sm text-gray-600">Turf/Dirt:</span>
                            <div class="flex gap-1">
                                <span class="${getAptitudeColor(character.aptitudes.turf)}">${character.aptitudes.turf}</span>
                                <span class="text-gray-400">/</span>
                                <span class="${getAptitudeColor(character.aptitudes.dirt)}">${character.aptitudes.dirt}</span>
                            </div>
                        </div>
                        <div class="space-y-1">
                            <div class="text-xs text-gray-500">Distance Aptitudes:</div>
                            <div class="flex flex-wrap gap-2 text-xs">
                                <span>Sprint: <span class="${getAptitudeColor(character.aptitudes.sprint)}">${character.aptitudes.sprint}</span></span>
                                <span>Mile: <span class="${getAptitudeColor(character.aptitudes.mile)}">${character.aptitudes.mile}</span></span>
                                <span>Medium: <span class="${getAptitudeColor(character.aptitudes.medium)}">${character.aptitudes.medium}</span></span>
                                <span>Long: <span class="${getAptitudeColor(character.aptitudes.long)}">${character.aptitudes.long}</span></span>
                            </div>
                        </div>
                        <div class="pt-2">
                            <div class="text-xs text-gray-500 mb-1">Fan Goals:</div>
                            <div class="flex flex-wrap gap-1">
                                ${character.fanGoalThresholds.map(threshold => 
                                    `<span class="px-2 py-1 bg-gray-100 text-xs rounded">${threshold.toLocaleString()}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                updateAppState({ 
                    selectedCharacter: character, 
                    currentView: 'planner',
                    style: character.defaultStyle,
                    stats: character.baseStats // Initialize with character's base stats
                });
                
                // Scroll to top when entering character planner
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
            });
            
            grid.appendChild(card);
            });
            
            section.appendChild(header);
            section.appendChild(grid);
            characterContainer.appendChild(section);
        });
        
        // No results message
        if (filteredCharacters.length === 0) {
            const noResults = createElement('div', 'text-center py-12');
            noResults.innerHTML = `
                <div class="text-gray-400 text-xl mb-2">🔍</div>
                <p class="text-gray-500">No characters found matching your search.</p>
            `;
            characterContainer.appendChild(noResults);
        }
        
        mainContainer.appendChild(header);
        mainContainer.appendChild(controls);
        mainContainer.appendChild(characterContainer);
        container.appendChild(mainContainer);
        
        return container;
    }

    // Register the home page component module
    if (window.Uma) {
        window.Uma.Components = window.Uma.Components || {};
        window.Uma.Components.HomePage = {
            createHomePage
        };
    } else {
        window.Uma = {
            Components: {
                HomePage: {
                    createHomePage
                }
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('components/home-page');
    }

    console.log('Home page component module loaded successfully');
})();