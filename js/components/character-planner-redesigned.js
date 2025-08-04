/**
 * Uma Musume Career Planner - Character Planner Redesigned Component
 * Phase 5A: Tabbed interface with improved UX and support card integration
 */

// Define the redesigned character planner component module
(function() {
    'use strict';
    
    /**
     * Create an HTML element with classes
     * @param {string} tag - HTML tag name
     * @param {string} classes - CSS classes
     * @returns {HTMLElement} Created element
     */
    function createElement(tag, classes = '') {
        const element = document.createElement(tag);
        if (classes) {
            element.className = classes;
        }
        return element;
    }
    
    /**
     * Get current app state from global or module
     * @returns {Object} Current application state
     */
    function getAppState() {
        return window.appState || window.Uma?.State?.appState || {
            plannerState: {
                activeTab: 'character-info',
                selectedSupportCards: [null, null, null, null, null, null],
                selectedSupportCardLevels: [1, 1, 1, 1, 1, 1],
                selectedSupportCardAssignments: [null, null, null, null, null, null], // training assignments: 'speed', 'stamina', 'power', 'guts', 'wit', null
                selectedSupportCardRainbowStatus: [false, false, false, false, false, false], // rainbow training status: true = orange bond (rainbow active)
                supportCardFilters: { search: '', rarity: 'all', type: 'all' }
            },
            selectedCharacter: null,
            targetTrack: 'mile',
            style: 'pace-chaser',
            currentMood: 'normal',
            stats: { speed: 300, stamina: 300, power: 300, guts: 300, wit: 300 }
        };
    }
    
    /**
     * Update app state using global or module function
     * @param {Object} updates - State updates to apply
     */
    function updateAppState(updates) {
        const updateFn = window.updateAppState || window.Uma?.State?.updateAppState;
        if (updateFn) {
            updateFn(updates);
        } else {
            // Fallback to local update if global function is not available
            const currentState = getAppState();
            Object.assign(currentState, updates);
        }
    }
    
    /**
     * Update planner state locally without triggering re-render
     * @param {Object} updates - State updates to apply
     */
    function updatePlannerStateLocally(updates) {
        const currentState = getAppState();
        Object.assign(currentState, updates);
    }
    
    /**
     * Calculate effective stats (base stats + support card bonuses)
     * @returns {Object} Effective stats including support card bonuses
     */
    function calculateEffectiveStats() {
        const appState = getAppState();
        const baseStats = appState.stats;
        
        // Get current deck configuration
        const selectedCards = appState.plannerState.selectedSupportCards || [null, null, null, null, null, null];
        const cardLevels = appState.plannerState.selectedSupportCardLevels || [1, 1, 1, 1, 1, 1];
        
        const deckCards = selectedCards.map((cardId, index) => {
            if (!cardId) return null;
            const card = window.SupportCards?.getSupportCard(cardId);
            const level = cardLevels[index] || 1;
            return card ? { card: card, level: level } : null;
        }).filter(cardData => cardData);
        
        const deckBonuses = window.SupportCards?.calculateSupportCardStatBonuses ? 
            window.SupportCards.calculateSupportCardStatBonuses(deckCards) : 
            { speed: 0, stamina: 0, power: 0, guts: 0, wit: 0 };
        
        // Calculate effective stats with null checks and ensure minimum values
        const effectiveStats = {
            speed: Math.max((baseStats?.speed || 0) + (deckBonuses?.speed || 0), 0),
            stamina: Math.max((baseStats?.stamina || 0) + (deckBonuses?.stamina || 0), 0),
            power: Math.max((baseStats?.power || 0) + (deckBonuses?.power || 0), 0),
            guts: Math.max((baseStats?.guts || 0) + (deckBonuses?.guts || 0), 0),
            wit: Math.max((baseStats?.wit || 0) + (deckBonuses?.wit || 0), 0)
        };
        
        // If all stats are somehow 0, use default starting stats of 300
        if (effectiveStats.speed === 0 && effectiveStats.stamina === 0 && 
            effectiveStats.power === 0 && effectiveStats.guts === 0 && effectiveStats.wit === 0) {
            effectiveStats.speed = 300;
            effectiveStats.stamina = 300;
            effectiveStats.power = 300;
            effectiveStats.guts = 300;
            effectiveStats.wit = 300;
        }
        
        return { effectiveStats, deckBonuses };
    }
    
    /**
     * Update the Current Performance Status display with new stats
     * @param {Object} character - Current character data
     * @param {Object} stats - New stats to display
     */
    function updatePerformanceStatusDisplay(character, stats) {
        // Find ALL performance status containers across all tabs using the class we added
        const performanceContainers = document.querySelectorAll('.performance-status-container');
        
        
        // If no containers found, try the old method as fallback
        if (performanceContainers.length === 0) {
            const headers = document.querySelectorAll('h3');
            const fallbackContainers = [];
            
            for (let header of headers) {
                if (header.textContent.includes('Current Performance Status')) {
                    // Go up to find the actual container with the stats grid
                    let container = header.parentElement;
                    while (container && !container.querySelector('.grid')) {
                        container = container.parentElement;
                    }
                    if (container) {
                        fallbackContainers.push(container);
                    }
                }
            }
            
            if (fallbackContainers.length === 0) {
                console.warn('Could not find any performance status containers');
                return;
            }
            
            // Use fallback containers
            fallbackContainers.forEach((performanceContainer, index) => {
                updateSinglePerformanceContainer(performanceContainer, index, character, stats);
            });
            return;
        }
        
        // Update all performance status containers using the class selector
        performanceContainers.forEach((performanceContainer, index) => {
            updateSinglePerformanceContainer(performanceContainer, index, character, stats);
        });
        
        // Re-attach double-click event listeners to all updated stat numbers
        attachStatEditingListeners();
    }
    
    /**
     * Update a single performance status container
     * @param {HTMLElement} performanceContainer - Container element
     * @param {number} index - Container index for debugging
     * @param {Object} character - Character data
     * @param {Object} stats - Stats data
     */
    function updateSinglePerformanceContainer(performanceContainer, index, character, stats) {
        const appState = getAppState();
        const fullStyleName = mapStyleToFullName(appState.style);
        const thresholds = getCharacterAdjustedThresholds(character, appState.targetTrack, fullStyleName);
        
        // Find the stats grid - try multiple selectors to ensure we find it
        let statsGrid = performanceContainer.querySelector('div.grid.grid-cols-2');
        
        if (!statsGrid) {
            statsGrid = performanceContainer.querySelector('.grid');
        }
        if (!statsGrid) {
            statsGrid = performanceContainer.querySelector('div[class*="grid-cols-2"]');
        }
        if (!statsGrid) {
            statsGrid = performanceContainer.querySelector('div[class*="grid-cols-5"]');
        }
        
        if (statsGrid) {
            // Calculate effective stats including support card bonuses for accurate display
            const { effectiveStats, deckBonuses } = calculateEffectiveStats();
            
            const newHTML = Object.entries(effectiveStats).map(([stat, effectiveValue]) => {
                const baseValue = appState.stats[stat];
                const bonus = deckBonuses[stat];
                const threshold = thresholds[stat];
                const color = getStatColor(effectiveValue, threshold, stat);
                return `
                    <div class="text-center">
                        <div class="${color} font-bold text-lg stat-number cursor-pointer hover:bg-white hover:bg-opacity-50 rounded px-3 py-2 md:px-2 md:py-1 transition-colors min-h-[44px] md:min-h-auto flex items-center justify-center touch-manipulation" 
                             data-stat="${stat}" 
                             data-value="${baseValue}"
                             title="Double-click to edit ${stat} (mobile: tap and hold)">
                            ${effectiveValue}${bonus > 0 ? `<span class="text-green-600 text-xs ml-1">(+${bonus})</span>` : ''}
                        </div>
                        <div class="text-gray-600 text-xs uppercase">${stat}</div>
                        <div class="text-gray-500 text-xs">Target: ${threshold}</div>
                    </div>
                `;
            }).join('');
            
            statsGrid.innerHTML = newHTML;
        } else {
            console.warn(`Could not find stats grid within performance container ${index + 1}`);
        }
    }
    
    /**
     * Completely refresh the current tab by re-rendering its content
     * @param {Object} character - Selected character object
     * @param {HTMLElement} tabContainer - Tab content container
     */
    function refreshCurrentTabCompletely(character, tabContainer) {
        // Find the currently active tab to determine what to render
        const activeTabBtn = document.querySelector('.tab-btn.bg-blue-600, .tab-btn.bg-blue-500, .tab-btn[class*="bg-blue"]');
        if (!activeTabBtn) {
            return;
        }
        
        const tabType = activeTabBtn.textContent.trim().toLowerCase();
        
        // Re-render the appropriate tab content
        if (tabType.includes('character info') || tabType.includes('info')) {
            tabContainer.innerHTML = createCharacterInfoTab(character);
        } else if (tabType.includes('support cards') || tabType.includes('cards')) {
            tabContainer.innerHTML = createSupportCardsTab();
            // Re-setup support card event listeners
            setTimeout(() => setupSupportCardEventListeners(), 10);
        } else if (tabType.includes('skills')) {
            tabContainer.innerHTML = createSkillsTab(character);
        } else if (tabType.includes('guide')) {
            tabContainer.innerHTML = createGuideTab(character);
        }
        
        // Always re-attach event listeners after content refresh
        setTimeout(() => {
            attachStatEditingListeners();
            setupPerformanceStatusQuickImport();
        }, 10);
    }
    
    /**
     * Refresh content specific to the current active tab
     */
    function refreshCurrentTabContent() {
        // Find the currently active tab - look for the correct active classes
        let activeTab = document.querySelector('.border-blue-500.text-blue-600.bg-blue-50');
        if (!activeTab) {
            activeTab = document.querySelector('[data-tab].bg-blue-50');
        }
        if (!activeTab) {
            activeTab = document.querySelector('[data-tab].text-blue-600');
        }
        if (!activeTab) {
            activeTab = document.querySelector('[data-tab][class*="border-blue-500"]');
        }
        if (!activeTab) {
            // Try to find any active-looking tab
            activeTab = document.querySelector('.tab-btn.active, .tab-btn[aria-selected="true"]');
        }
        
        if (!activeTab) {
            return;
        }
        
        const tabType = activeTab.textContent.trim().toLowerCase();
        
        // For Support Cards tab, refresh any stat-dependent calculations
        if (tabType.includes('support cards') || tabType.includes('cards')) {
            // Refresh any deck analysis or stat calculations
            const deckAnalysisContainer = document.querySelector('.deck-analysis, [class*="deck-analysis"]');
            if (deckAnalysisContainer) {
                // Trigger any deck-related recalculations
                const refreshEvent = new CustomEvent('statsUpdated');
                document.dispatchEvent(refreshEvent);
            }
        }
        
        // For Skills tab, refresh skills recommendations completely
        if (tabType.includes('skills')) {
            const currentState = getAppState();
            const character = currentState.selectedCharacter;
            
            if (character) {
                // Find the tab content container and refresh the Skills tab completely
                const tabContainer = document.getElementById('tab-content');
                
                if (tabContainer) {
                    // Completely re-render the Skills tab with updated settings
                    tabContainer.innerHTML = createSkillsTab(character);
                    
                    // Re-attach event listeners after content refresh
                    setTimeout(() => {
                        attachStatEditingListeners();
                        setupPerformanceStatusQuickImport();
                    }, 10);
                }
            }
        }
        
        // For Guide tab, refresh any character-specific advice or thresholds
        if (tabType.includes('guide')) {
            // Update any stat-dependent training advice
            const adviceElements = document.querySelectorAll('.text-blue-700, .text-green-700, .text-orange-700');
            adviceElements.forEach(element => {
                if (element.textContent.includes('stats') || element.textContent.includes('training')) {
                    // This would update any stat-dependent advice displays
                    const refreshEvent = new CustomEvent('adviceRefresh');
                    element.dispatchEvent(refreshEvent);
                }
            });
        }
        
        // Universal: Update any visible stat numbers that might not be in Performance Status boxes
        const statNumbers = document.querySelectorAll('.stat-number, [data-stat], .text-lg.font-bold');
        statNumbers.forEach(element => {
            const statType = element.getAttribute('data-stat');
            if (statType && getAppState().stats[statType]) {
                const currentValue = getAppState().stats[statType];
                const displayedValue = element.getAttribute('data-value');
                if (displayedValue && parseInt(displayedValue) !== currentValue) {
                    // Update the displayed value if it doesn't match current state
                    element.setAttribute('data-value', currentValue);
                    // Update the text content if it's just a number
                    if (element.textContent.match(/^\d+$/)) {
                        element.textContent = currentValue;
                    }
                }
            }
        });
    }
    
    /**
     * Refresh Training Recommendations section with current settings
     */
    function refreshTrainingRecommendations() {
        const trainingRecommendationsContainer = document.querySelector('.training-recommendations-container');
        if (trainingRecommendationsContainer) {
            const appState = getAppState();
            const character = appState.selectedCharacter;
            
            // Ensure we have valid character and stats before proceeding
            if (character && appState.stats && 
                typeof appState.stats.speed === 'number' && 
                typeof appState.stats.stamina === 'number' && 
                typeof appState.stats.power === 'number' && 
                typeof appState.stats.guts === 'number' && 
                typeof appState.stats.wit === 'number') {
                
                // Re-generate training recommendations with current settings
                const trainingRecommendations = getTrainingRecommendations(character);
                
                // Find the recommendations list and update it
                const recommendationsList = trainingRecommendationsContainer.querySelector('.space-y-3');
                if (recommendationsList && trainingRecommendations && Array.isArray(trainingRecommendations)) {
                    // Use the same format as the original display to maintain consistency
                    recommendationsList.innerHTML = trainingRecommendations.slice(0, 5).map((training, idx) => `
                        <div class="p-3 bg-gray-50 rounded-md border-l-4 ${
                            idx === 0 ? 'border-green-500' : 
                            idx === 1 ? 'border-blue-500' : 
                            idx === 2 ? 'border-yellow-500' : 'border-gray-300'
                        }">
                            <div class="flex items-center justify-between mb-2">
                                <div class="flex items-center gap-3">
                                    <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                        idx === 0 ? 'bg-green-500' : 
                                        idx === 1 ? 'bg-blue-500' : 
                                        idx === 2 ? 'bg-yellow-500' : 'bg-gray-400'
                                    }">${idx + 1}</span>
                                    <span class="font-medium text-sm">${training.name}</span>
                                </div>
                                <div class="text-right">
                                    <div class="text-xs font-semibold text-gray-700">Value: ${training.totalValue !== undefined ? Math.round(training.totalValue) : 'ERROR'}</div>
                                    <div class="text-xs text-gray-500">Energy: ${training.energyCost > 0 ? `-${training.energyCost}` : `+${Math.abs(training.energyCost)}`}</div>
                                    ${training.efficiency && training.efficiency.pointsPerEnergy !== Infinity ? 
                                        `<div class="text-xs text-blue-600">${training.efficiency.pointsPerEnergy.toFixed(1)} pts/energy</div>` : ''}
                                    ${training.risk && training.risk.failChance > 0 ? 
                                        `<div class="text-xs ${training.risk.riskLevel === 'High' || training.risk.riskLevel === 'Very High' ? 'text-red-600' : 
                                          training.risk.riskLevel === 'Moderate' ? 'text-yellow-600' : 'text-green-600'}">${Math.round(training.risk.failChance * 100)}% fail risk</div>` : ''}
                                </div>
                            </div>
                            <div class="text-xs text-gray-600">${training.recommendation || ''}</div>
                        </div>
                    `).join('');
                }
                
                // Update the mood effects note
                const moodNote = trainingRecommendationsContainer.querySelector('.bg-blue-50.rounded.text-xs');
                if (moodNote) {
                    const appState = getAppState();
                    const moodText = appState.currentMood !== 'normal' ? 
                        `<br>📊 Mood effect: ${window.Uma?.Constants?.MOOD_MULTIPLIERS?.[appState.currentMood]?.label || appState.currentMood} affects all stat gains shown above.` : '';
                    const contextText = trainingRecommendations.length > 0 && trainingRecommendations[0].contextInfo ? 
                        `<br>🎯 ${trainingRecommendations[0].contextInfo.message}` : '';
                    moodNote.innerHTML = `💡 Enhanced Training System: Research-based recommendations with adaptive context awareness.${contextText}${moodText}`;
                }
            } else {
                // Stats not ready yet - show loading state or default message
                const recommendationsList = trainingRecommendationsContainer.querySelector('.space-y-3');
                if (recommendationsList) {
                    recommendationsList.innerHTML = `
                        <div class="p-4 bg-gray-50 rounded-md text-center text-gray-500">
                            <div class="text-sm">Loading training recommendations...</div>
                            <div class="text-xs mt-1">Please ensure character stats are properly loaded.</div>
                        </div>
                    `;
                }
            }
        }
    }
    
    /**
     * Refresh Skills Recommendations section with current settings
     * Note: This function is now simplified since refreshCurrentTabContent handles complete Skills tab refresh
     */
    function refreshSkillsRecommendations() {
        // This function is kept for compatibility but the actual skills refresh
        // is now handled by refreshCurrentTabContent() for better consistency
        refreshCurrentTabContent();
    }

    /**
     * Update the Current Configuration display with current state
     */
    function updateCurrentConfigurationDisplay() {
        const appState = getAppState();
        
        // Use more specific selectors to avoid conflicting with stat names in Performance Status
        // Update target distance display - look specifically in training tools section
        const trainingToolsSection = document.querySelector('.training-tools-section');
        if (trainingToolsSection) {
            const distanceSpan = trainingToolsSection.querySelector('.capitalize');
            if (distanceSpan && distanceSpan.textContent !== appState.targetTrack) {
                distanceSpan.textContent = appState.targetTrack;
            }
            
            // Update running style display  
            const styleSpans = trainingToolsSection.querySelectorAll('.capitalize');
            if (styleSpans.length >= 2) {
                const styleDisplay = appState.style.replace('-', ' ');
                if (styleSpans[1].textContent !== styleDisplay) {
                    styleSpans[1].textContent = styleDisplay;
                }
            }
            
            // Update mood display
            if (styleSpans.length >= 3) {
                if (styleSpans[2].textContent !== appState.currentMood) {
                    styleSpans[2].textContent = appState.currentMood;
                }
            }
        }
    }
    
    /**
     * Create the redesigned character planner with tabbed interface
     * @returns {HTMLElement} Complete redesigned character planner container
     */
    function createCharacterPlannerRedesigned() {
        const container = createElement('div', 'min-h-screen');
        const mainContainer = createElement('div', 'container mx-auto px-4 py-6');
        
        const appState = getAppState();
        
        // Initialize planner state if not exists - without triggering re-render
        if (!appState.plannerState) {
            appState.plannerState = {
                activeTab: 'character-info',
                selectedSupportCards: [null, null, null, null, null, null],
                selectedSupportCardLevels: [1, 1, 1, 1, 1, 1],
                selectedSupportCardAssignments: [null, null, null, null, null, null],
                supportCardFilters: {
                    search: '',
                    rarity: 'all',
                    type: 'all'
                }
            };
        }
        
        const character = appState.selectedCharacter;
        if (!character) {
            container.innerHTML = '<div class="text-center p-8">No character selected</div>';
            return container;
        }
        
        // Back button
        const backButton = createElement('div', 'flex items-center mb-6');
        const backBtn = createElement('button', 'flex items-center gap-2 px-5 py-3 bg-white bg-opacity-90 text-gray-800 hover:text-gray-900 hover:bg-opacity-100 transition-all text-base font-medium rounded-lg shadow-sm border border-gray-200');
        backBtn.innerHTML = `${window.Icons?.ArrowLeft || '←'} Back`;
        backBtn.addEventListener('click', () => {
            updateAppState({ currentView: 'home', selectedCharacter: null });
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        });
        backButton.appendChild(backBtn);
        
        // Sticky Training Settings Header
        const stickyHeader = createStickyTrainingHeader(character);
        
        // Main tabbed interface
        const tabbedInterface = createTabbedInterface(character);
        
        // Training tools section (below tabs) - only keep stat planning (training settings moved to sticky header)
        const trainingToolsSection = createStreamlinedTrainingToolsSection(character);
        
        // Assemble the interface
        mainContainer.appendChild(backButton);
        mainContainer.appendChild(stickyHeader);
        mainContainer.appendChild(tabbedInterface);
        mainContainer.appendChild(trainingToolsSection);
        container.appendChild(mainContainer);
        
        
        // Set up event listeners after DOM is ready
        setTimeout(() => {
            setupEventListeners();
        }, 0);
        
        return container;
    }
    
    /**
     * Set up event listeners for the character planner
     */
    function setupEventListeners() {
        // Set up character planner listeners
        setupCharacterPlannerListeners();
        
        // Set up Quick Import functionality in Performance Status
        setupPerformanceStatusQuickImport();
    }
    
    /**
     * Set up Quick Import functionality within Performance Status
     */
    function setupPerformanceStatusQuickImport() {
        // Remove previous event listeners to prevent duplicates
        document.querySelectorAll('.quick-import-toggle').forEach(btn => {
            btn.replaceWith(btn.cloneNode(true));
        });
        document.querySelectorAll('.performance-import-btn').forEach(btn => {
            btn.replaceWith(btn.cloneNode(true));
        });
        document.querySelectorAll('.performance-import-close').forEach(btn => {
            btn.replaceWith(btn.cloneNode(true));
        });
        
        // Set up event listeners for all performance status instances
        document.querySelectorAll('.quick-import-toggle').forEach(toggleBtn => {
            const uniqueId = toggleBtn.getAttribute('data-unique-id');
            const container = document.querySelector(`.performance-status-container[data-unique-id="${uniqueId}"]`);
            if (!container) return;
            
            const importForm = container.querySelector('.quick-import-form');
            const importBtn = container.querySelector('.performance-import-btn');
            const closeBtn = container.querySelector('.performance-import-close');
            const importText = container.querySelector('.performance-stats-import');
            
            if (!importForm) return;
            
            // Toggle import form visibility
            toggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isVisible = importForm.style.display !== 'none';
                importForm.style.display = isVisible ? 'none' : 'block';
                if (!isVisible && importText) {
                    setTimeout(() => importText.focus(), 100);
                }
            });
            
            // Close button
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    importForm.style.display = 'none';
                });
            }
            
            // Quick Import functionality
            if (importBtn && importText) {
                const performImport = () => {
                    const text = importText.value.trim();
                    if (!text) return;
                    
                    let imported = 0;
                    const stats = ['speed', 'stamina', 'power', 'guts', 'wit'];
                    let newStats = { ...getAppState().stats };
                    
                    // Parse numbers from text
                    const numbers = text.match(/\d+/g);
                    if (numbers && numbers.length >= 5) {
                        stats.forEach((stat, index) => {
                            if (numbers[index]) {
                                const value = Math.max(0, Math.min(1200, parseInt(numbers[index])));
                                newStats[stat] = value;
                                imported++;
                            }
                        });
                    }
                    
                    if (imported > 0) {
                        // Update state using the global state update function
                        updateAppState({ stats: newStats });
                        
                        // Immediately refresh training recommendations after stat update
                        refreshTrainingRecommendations();
                        
                        // If global state update doesn't trigger re-render, wait and force re-render
                        setTimeout(() => {
                            const currentDisplayedStats = document.querySelector('.stat-number[data-stat="speed"]');
                            const expectedValue = newStats.speed;
                            
                            if (currentDisplayedStats && parseInt(currentDisplayedStats.getAttribute('data-value')) !== expectedValue) {
                                const character = getAppState().selectedCharacter;
                                const activeTabContainer = document.getElementById('tab-content');
                                if (character && activeTabContainer) {
                                    refreshCurrentTabCompletely(character, activeTabContainer);
                                }
                            } else {
                            }
                        }, 100);
                        
                        // Re-attach stat editing listeners since display was updated
                        setTimeout(() => attachStatEditingListeners(), 10);
                        
                        // Success feedback - only update this specific form
                        importText.value = '';
                        importText.placeholder = `✅ Imported ${imported} stats!`;
                        setTimeout(() => {
                            importText.placeholder = '450 550 400 350 300';
                            importForm.style.display = 'none';
                        }, 1500);
                    } else {
                        importText.placeholder = '❌ Please enter 5 numbers';
                        setTimeout(() => {
                            importText.placeholder = '450 550 400 350 300';
                        }, 3000);
                    }
                };

                importBtn.addEventListener('click', performImport);
                
                // Enter key to import
                importText.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        performImport();
                    }
                });
            }
        });
    }
    
    /**
     * Set up sticky header event listeners
     */
    function setupStickyHeaderListeners() {
        // Sticky style selector
        const stickyStyleSelect = document.getElementById('sticky-style-select');
        if (stickyStyleSelect) {
            stickyStyleSelect.addEventListener('change', (e) => {
                const selectedStyle = e.target.value;
                const currentState = getAppState();
                // Update state locally to avoid re-render
                updatePlannerStateLocally({ style: selectedStyle });
                // Update performance status since thresholds changed - use effective stats
                const character = currentState.selectedCharacter;
                if (character) {
                    const { effectiveStats } = calculateEffectiveStats();
                    updatePerformanceStatusDisplay(character, effectiveStats);
                }
                // Update training recommendations and indicator
                refreshTrainingRecommendations();
                updateStickyTrainingIndicator();
                // Update current tab content (handles skills and other tabs)
                refreshCurrentTabContent();
                // Sync with original style selector
                syncStyleSelectors(selectedStyle);
            });
        }
        
        // Sticky distance selector
        const stickyDistanceSelect = document.getElementById('sticky-distance-select');
        if (stickyDistanceSelect) {
            stickyDistanceSelect.addEventListener('change', (e) => {
                const selectedDistance = e.target.value;
                const currentState = getAppState();
                // Update state locally to avoid re-render
                updatePlannerStateLocally({ targetTrack: selectedDistance });
                // Update performance status since thresholds changed - use effective stats
                const character = currentState.selectedCharacter;
                if (character) {
                    const { effectiveStats } = calculateEffectiveStats();
                    updatePerformanceStatusDisplay(character, effectiveStats);
                }
                // Update training recommendations and indicator
                refreshTrainingRecommendations();
                updateStickyTrainingIndicator();
                // Update current tab content (handles skills and other tabs)
                refreshCurrentTabContent();
                // Sync with original distance selector
                syncDistanceSelectors(selectedDistance);
            });
        }
        
        // Sticky mood selector
        const stickyMoodSelect = document.getElementById('sticky-mood-select');
        if (stickyMoodSelect) {
            stickyMoodSelect.addEventListener('change', (e) => {
                const selectedMood = e.target.value;
                // Update state locally to avoid re-render
                updatePlannerStateLocally({ currentMood: selectedMood });
                
                // Update any displays that show the current mood
                updateCurrentConfigurationDisplay();
                
                // Refresh training recommendations since mood affects calculations
                refreshTrainingRecommendations();
                updateStickyTrainingIndicator();
                
                // Sync with original mood selector
                const originalMoodSelect = document.getElementById('mood-select');
                if (originalMoodSelect && originalMoodSelect.value !== selectedMood) {
                    originalMoodSelect.value = selectedMood;
                }
            });
        }
        
        // Initialize training indicator
        updateStickyTrainingIndicator();
    }

    /**
     * Update sticky training indicator with current recommendations
     */
    function updateStickyTrainingIndicator() {
        const indicator = document.getElementById('sticky-training-indicator');
        if (!indicator) return;
        
        const currentState = getAppState();
        const character = currentState.selectedCharacter;
        
        if (!character) {
            indicator.textContent = 'No character';
            return;
        }
        
        // Get training recommendations
        if (typeof getTrainingRecommendations === 'function') {
            const recommendations = getTrainingRecommendations(character);
            
            // Find top recommendation (highest value)
            const sortedRecs = recommendations.filter(rec => rec.value > 0).sort((a, b) => b.value - a.value);
            const topRec = sortedRecs[0];
            
            if (topRec) {
                indicator.textContent = `Train ${topRec.stat}`;
                indicator.className = 'px-3 py-2 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700 font-medium min-w-[120px]';
            } else {
                // Check if we actually have targets met vs no recommendations available
                const hasAnyRecommendations = recommendations.length > 0;
                if (hasAnyRecommendations) {
                    indicator.textContent = 'All targets met';
                    indicator.className = 'px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700 font-medium min-w-[120px]';
                } else {
                    // No recommendations available - likely base stats scenario
                    indicator.textContent = 'Check stats';
                    indicator.className = 'px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-700 font-medium min-w-[120px]';
                }
            }
        } else {
            indicator.textContent = 'Loading...';
            indicator.className = 'px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-medium min-w-[120px]';
        }
    }

    /**
     * Sync style selectors between sticky header and original location
     */
    function syncStyleSelectors(selectedStyle) {
        const originalSelect = document.getElementById('style-select');
        if (originalSelect && originalSelect.value !== selectedStyle) {
            originalSelect.value = selectedStyle;
        }
    }

    /**
     * Sync distance selectors between sticky header and original location
     */
    function syncDistanceSelectors(selectedDistance) {
        const originalSelect = document.getElementById('distance-select');
        if (originalSelect && originalSelect.value !== selectedDistance) {
            originalSelect.value = selectedDistance;
        }
    }

    /**
     * Set up character planner event listeners (existing functionality)
     */
    function setupCharacterPlannerListeners() {
        // Stat editing listeners
        attachStatEditingListeners();
        
        // Sticky header event listeners
        setupStickyHeaderListeners();
        
        // Mood selector
        const moodSelect = document.getElementById('mood-select');
        if (moodSelect) {
            moodSelect.addEventListener('change', (e) => {
                const selectedMood = e.target.value;
                // Update state locally to avoid re-render
                updatePlannerStateLocally({ currentMood: selectedMood });
                
                // Update any displays that show the current mood
                updateCurrentConfigurationDisplay();
                
                // Refresh training recommendations since mood affects calculations
                refreshTrainingRecommendations();
                updateStickyTrainingIndicator();
                
                // Sync with sticky header selector
                const stickyMoodSelect = document.getElementById('sticky-mood-select');
                if (stickyMoodSelect && stickyMoodSelect.value !== selectedMood) {
                    stickyMoodSelect.value = selectedMood;
                }
            });
        }

        // Style selector event listener
        const styleSelect = document.getElementById('style-select');
        if (styleSelect) {
            styleSelect.addEventListener('change', (e) => {
                const selectedStyle = e.target.value;
                const currentState = getAppState();
                // Update state locally to avoid re-render
                updatePlannerStateLocally({ style: selectedStyle });
                // Update performance status since thresholds changed - use effective stats
                const character = currentState.selectedCharacter;
                if (character) {
                    const { effectiveStats } = calculateEffectiveStats();
                    updatePerformanceStatusDisplay(character, effectiveStats);
                }
                // Update training recommendations 
                refreshTrainingRecommendations();
                updateStickyTrainingIndicator();
                // Update current tab content (handles skills and other tabs)
                refreshCurrentTabContent();
                // Sync with sticky header selector
                const stickyStyleSelect = document.getElementById('sticky-style-select');
                if (stickyStyleSelect && stickyStyleSelect.value !== selectedStyle) {
                    stickyStyleSelect.value = selectedStyle;
                }
            });
        }
        
        // Distance selector event listener
        const distanceSelect = document.getElementById('distance-select');
        if (distanceSelect) {
            distanceSelect.addEventListener('change', (e) => {
                const selectedDistance = e.target.value;
                const currentState = getAppState();
                // Update state locally to avoid re-render
                updatePlannerStateLocally({ targetTrack: selectedDistance });
                // Update performance status since thresholds changed - use effective stats
                const character = currentState.selectedCharacter;
                if (character) {
                    const { effectiveStats } = calculateEffectiveStats();
                    updatePerformanceStatusDisplay(character, effectiveStats);
                }
                // Update training recommendations 
                refreshTrainingRecommendations();
                updateStickyTrainingIndicator();
                // Update current tab content (handles skills and other tabs)
                refreshCurrentTabContent();
                // Sync with sticky header selector
                const stickyDistanceSelect = document.getElementById('sticky-distance-select');
                if (stickyDistanceSelect && stickyDistanceSelect.value !== selectedDistance) {
                    stickyDistanceSelect.value = selectedDistance;
                }
            });
        }
    }
    

    /**
     * Create sticky training settings header
     * @param {Object} character - Selected character object
     * @returns {HTMLElement} Sticky header container
     */
    function createStickyTrainingHeader(character) {
        const appState = getAppState();
        
        const headerContainer = createElement('div', 'bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm mb-4 border border-blue-100');
        const headerContent = createElement('div', 'px-4 py-4 sm:px-6');
        
        // Header title and training settings row
        const headerRow = createElement('div', 'flex flex-col gap-4 sm:gap-6');
        
        // Left side - Title
        const titleSection = createElement('div', 'flex items-center gap-3');
        const icon = createElement('div', 'text-2xl');
        icon.textContent = '⚙️';
        const title = createElement('h3', 'text-lg font-semibold text-gray-800');
        title.textContent = 'Training Settings';
        titleSection.appendChild(icon);
        titleSection.appendChild(title);
        
        // Settings controls - optimized for mobile
        const settingsSection = createElement('div', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6');
        
        // Distance selector
        const distanceGroup = createElement('div', 'flex flex-col gap-1');
        const distanceLabel = createElement('label', 'text-xs font-medium text-gray-600 uppercase tracking-wide');
        distanceLabel.textContent = 'Target Distance';
        const distanceSelect = createElement('select', 'w-full px-3 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px] touch-manipulation');
        distanceSelect.id = 'sticky-distance-select';
        distanceSelect.innerHTML = `
            <option value="sprint" ${appState.targetTrack === 'sprint' ? 'selected' : ''}>Sprint (1000-1400m)</option>
            <option value="mile" ${appState.targetTrack === 'mile' ? 'selected' : ''}>Mile (1400-1800m)</option>
            <option value="medium" ${appState.targetTrack === 'medium' ? 'selected' : ''}>Medium (1800-2500m)</option>
            <option value="long" ${appState.targetTrack === 'long' ? 'selected' : ''}>Long (2500m+)</option>
        `;
        distanceGroup.appendChild(distanceLabel);
        distanceGroup.appendChild(distanceSelect);
        
        // Running style selector
        const styleGroup = createElement('div', 'flex flex-col gap-1');
        const styleLabel = createElement('label', 'text-xs font-medium text-gray-600 uppercase tracking-wide');
        styleLabel.textContent = 'Running Style';
        const styleSelect = createElement('select', 'w-full px-3 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px] touch-manipulation');
        styleSelect.id = 'sticky-style-select';
        styleSelect.innerHTML = `
            <option value="front-runner" ${appState.style === 'front-runner' ? 'selected' : ''}>Front Runner</option>
            <option value="pace" ${appState.style === 'pace' ? 'selected' : ''}>Pace Chaser</option>
            <option value="late" ${appState.style === 'late' ? 'selected' : ''}>Late Surger</option>
            <option value="end" ${appState.style === 'end' ? 'selected' : ''}>End Closer</option>
        `;
        styleGroup.appendChild(styleLabel);
        styleGroup.appendChild(styleSelect);
        
        // Character mood selector
        const moodGroup = createElement('div', 'flex flex-col gap-1');
        const moodLabel = createElement('label', 'text-xs font-medium text-gray-600 uppercase tracking-wide');
        moodLabel.textContent = 'Character Mood';
        const moodSelect = createElement('select', 'w-full px-3 py-3 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[44px] touch-manipulation');
        moodSelect.id = 'sticky-mood-select';
        moodSelect.innerHTML = `
            <option value="very-good" ${appState.currentMood === 'very-good' ? 'selected' : ''}>Very Good 😊</option>
            <option value="good" ${appState.currentMood === 'good' ? 'selected' : ''}>Good 🙂</option>
            <option value="normal" ${appState.currentMood === 'normal' ? 'selected' : ''}">Normal 😐</option>
            <option value="bad" ${appState.currentMood === 'bad' ? 'selected' : ''}>Bad 😞</option>
            <option value="very-bad" ${appState.currentMood === 'very-bad' ? 'selected' : ''}>Very Bad 😢</option>
        `;
        moodGroup.appendChild(moodLabel);
        moodGroup.appendChild(moodSelect);
        
        // Training recommendations indicator (compact)
        const recSection = createElement('div', 'flex flex-col gap-1');
        const recLabel = createElement('label', 'text-xs font-medium text-gray-600 uppercase tracking-wide');
        recLabel.textContent = 'Top Recommendation';
        const recIndicator = createElement('div', 'w-full px-3 py-3 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-medium min-h-[44px] flex items-center');
        recIndicator.id = 'sticky-training-indicator';
        recIndicator.textContent = 'Loading...';
        recSection.appendChild(recLabel);
        recSection.appendChild(recIndicator);
        
        // Assemble settings section
        settingsSection.appendChild(distanceGroup);
        settingsSection.appendChild(styleGroup);
        settingsSection.appendChild(moodGroup);
        settingsSection.appendChild(recSection);
        
        // Assemble header row
        headerRow.appendChild(titleSection);
        headerRow.appendChild(settingsSection);
        
        // Add to header content
        headerContent.appendChild(headerRow);
        headerContainer.appendChild(headerContent);
        
        return headerContainer;
    }

    /**
     * Create the main tabbed interface
     * @param {Object} character - Selected character object
     * @returns {HTMLElement} Tabbed interface container
     */
    function createTabbedInterface(character) {
        const tabbedContainer = createElement('div', 'bg-white rounded-xl shadow-lg mb-6 overflow-hidden');
        
        // Tab navigation
        const tabNav = createElement('div', 'border-b border-gray-200');
        const tabList = createElement('div', 'flex space-x-0 overflow-x-auto scrollbar-hide');
        
        const tabs = [
            { id: 'character-info', label: 'Character Info', icon: '👤' },
            { id: 'support-cards', label: 'Support Cards', icon: '🎴' },
            { id: 'skills', label: 'Skills', icon: '⚡' },
            { id: 'guide', label: 'Guide', icon: '📋' }
        ];
        
        tabs.forEach((tab, index) => {
            const tabButton = createElement('button', 
                `flex items-center justify-center gap-1 sm:gap-2 px-2 py-3 sm:px-4 sm:py-4 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap min-h-[48px] touch-manipulation flex-1 ${
                    getAppState().plannerState.activeTab === tab.id 
                        ? 'border-blue-500 text-blue-600 bg-blue-50' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
            );
            tabButton.setAttribute('data-tab', tab.id);
            // Mobile-optimized tab labels: remove emojis on mobile, shorten text
            const isMobile = window.innerWidth <= 640;
            const mobileLabels = {
                'character-info': 'Character',
                'support-cards': 'Cards', 
                'skills': 'Skills',
                'guide': 'Guide'
            };
            const displayLabel = isMobile ? mobileLabels[tab.id] || tab.label : tab.label;
            const iconHtml = isMobile ? '' : `<span class="text-lg sm:text-xl">${tab.icon}</span>`;
            const labelHtml = `<span class="text-xs sm:text-sm ${isMobile ? '' : 'ml-1 sm:ml-2'}">${displayLabel}</span>`;
            
            tabButton.innerHTML = iconHtml + labelHtml;
            tabButton.addEventListener('click', () => switchTab(tab.id));
            tabList.appendChild(tabButton);
        });
        
        tabNav.appendChild(tabList);
        
        // Tab content area with transition
        const tabContent = createElement('div', 'p-6 transition-all duration-300 ease-in-out');
        tabContent.id = 'tab-content';
        
        // Initial tab content
        renderTabContent(character, tabContent);
        
        tabbedContainer.appendChild(tabNav);
        tabbedContainer.appendChild(tabContent);
        
        return tabbedContainer;
    }
    
    /**
     * Switch to a different tab
     * @param {string} tabId - ID of the tab to switch to
     */
    function switchTab(tabId) {
        updatePlannerStateLocally({
            plannerState: {
                ...getAppState().plannerState,
                activeTab: tabId
            }
        });
        
        // Update tab navigation appearance
        const tabButtons = document.querySelectorAll('[data-tab]');
        tabButtons.forEach(btn => {
            const isActive = btn.dataset.tab === tabId;
            btn.className = `flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                isActive 
                    ? 'border-blue-500 text-blue-600 bg-blue-50' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`;
        });
        
        // Re-render tab content with smooth transition
        const tabContent = document.getElementById('tab-content');
        if (tabContent) {
            // Add fade-out effect
            tabContent.style.opacity = '0';
            tabContent.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                renderTabContent(getAppState().selectedCharacter, tabContent);
                
                // Add fade-in effect
                setTimeout(() => {
                    tabContent.style.opacity = '1';
                    tabContent.style.transform = 'translateY(0)';
                }, 50);
            }, 150);
        }
    }
    
    /**
     * Render content for the active tab
     * @param {Object} character - Selected character object
     * @param {HTMLElement} container - Tab content container
     */
    function renderTabContent(character, container) {
        const activeTab = getAppState().plannerState.activeTab;
        
        switch (activeTab) {
            case 'character-info':
                container.innerHTML = createCharacterInfoTab(character);
                setTimeout(() => {
                    attachStatEditingListeners();
                    setupPerformanceStatusQuickImport();
                }, 10);
                break;
            case 'support-cards':
                container.innerHTML = createSupportCardsTab();
                // Re-attach event listeners for support cards tab
                setTimeout(() => {
                    setupSupportCardEventListeners();
                    attachStatEditingListeners();
                    setupPerformanceStatusQuickImport();
                }, 50);
                break;
            case 'skills':
                container.innerHTML = createSkillsTab(character);
                setTimeout(() => {
                    attachStatEditingListeners();
                    setupPerformanceStatusQuickImport();
                }, 10);
                break;
            case 'guide':
                container.innerHTML = createGuideTab(character);
                setTimeout(() => {
                    attachStatEditingListeners();
                    setupPerformanceStatusQuickImport();
                }, 10);
                break;
            default:
                container.innerHTML = createCharacterInfoTab(character);
                setTimeout(() => {
                    attachStatEditingListeners();
                    setupPerformanceStatusQuickImport();
                }, 10);
        }
    }
    
    /**
     * Create Current Performance Status component (reusable across all tabs)
     * @param {Object} character - Selected character object
     * @returns {string} HTML content for performance status box
     */
    function createCurrentPerformanceStatus(character) {
        const appState = getAppState();
        const fullStyleName = mapStyleToFullName(appState.style);
        const thresholds = getCharacterAdjustedThresholds(character, appState.targetTrack, fullStyleName);
        
        // Generate unique IDs for this performance status instance
        const uniqueId = 'perf_' + Math.random().toString(36).substr(2, 9);
        
        return `
            <!-- Current Performance Status -->
            <div class="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200 performance-status-container" data-unique-id="${uniqueId}">
                <div class="flex items-center justify-between mb-3">
                    <h3 class="text-lg font-semibold text-blue-800">📈 Current Performance Status</h3>
                    <button class="quick-import-toggle flex items-center gap-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors" title="Quick Import Stats" data-unique-id="${uniqueId}">
                        <span>📋</span>
                        <span class="hidden sm:inline">Quick Import</span>
                    </button>
                </div>
                
                <!-- Quick Import Form (initially hidden) -->
                <div class="quick-import-form mb-4 p-3 bg-white rounded-lg border border-blue-200 shadow-sm" style="display: none;" data-unique-id="${uniqueId}">
                    <div class="text-xs text-blue-600 mb-2">
                        Enter 5 numbers: Speed, Stamina, Power, Guts, Wit<br>
                        <span class="font-medium">⌨️ Press Enter to import!</span>
                    </div>
                    <div class="flex gap-2">
                        <textarea class="performance-stats-import flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                                  placeholder="450 550 400 350 300" 
                                  rows="1" data-unique-id="${uniqueId}"></textarea>
                        <button class="performance-import-btn px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors" data-unique-id="${uniqueId}">
                            Import
                        </button>
                        <button class="performance-import-close px-2 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors" data-unique-id="${uniqueId}">
                            ✕
                        </button>
                    </div>
                </div>
                <div class="text-xs text-gray-600 mb-2">
                    <span class="hidden md:inline">💡 Double-click any stat number to edit it directly</span>
                    <span class="md:hidden">💡 Tap and hold any stat number to edit it</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                    ${(() => {
                        const { effectiveStats, deckBonuses } = calculateEffectiveStats();
                        return Object.entries(effectiveStats).map(([stat, effectiveValue]) => {
                            const baseValue = getAppState().stats[stat];
                            const bonus = deckBonuses[stat];
                            const threshold = thresholds[stat];
                            const color = getStatColor(effectiveValue, threshold, stat);
                            return `
                                <div class="text-center">
                                    <div class="${color} font-bold text-lg stat-number cursor-pointer hover:bg-white hover:bg-opacity-50 rounded px-3 py-2 md:px-2 md:py-1 transition-colors min-h-[44px] md:min-h-auto flex items-center justify-center touch-manipulation" 
                                         data-stat="${stat}" 
                                         data-value="${baseValue}"
                                         title="Double-click to edit ${stat} (mobile: tap and hold)">
                                        ${effectiveValue}${bonus > 0 ? `<span class="text-green-600 text-xs ml-1">(+${bonus})</span>` : ''}
                                    </div>
                                    <div class="text-gray-600 text-xs uppercase">${stat}</div>
                                    <div class="text-gray-500 text-xs">Target: ${threshold}</div>
                                </div>
                            `;
                        }).join('');
                    })()}
                </div>
            </div>
        `;
    }

    /**
     * Create Character Info tab content
     * @param {Object} character - Selected character object
     * @returns {string} HTML content for character info tab
     */
    function createCharacterInfoTab(character) {
        const appState = getAppState();
        const fullStyleName = mapStyleToFullName(appState.style);
        const thresholds = getCharacterAdjustedThresholds(character, appState.targetTrack, fullStyleName);
        
        return `
            <div class="space-y-6">
                ${createCurrentPerformanceStatus(character)}
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Character Portrait and Basic Info -->
                <div class="space-y-4">
                    <div class="text-center lg:text-left">
                        <div class="text-6xl mb-4">${character.image}</div>
                        <h1 class="text-3xl font-bold text-gray-800 mb-2">${character.name}</h1>
                        <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                                ${'⭐'.repeat(getRarityStarCount(character.rarity))} ${character.rarity}-Star
                            </span>
                            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                ${character.defaultStyle.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                        </div>
                        ${character.description ? `<p class="text-gray-600 mt-3 text-sm">${character.description}</p>` : ''}
                    </div>
                    
                    <!-- Base Stats -->
                    <div class="bg-gray-50 rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <span>📊</span> Base Stats
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Speed:</span>
                                <span class="font-medium">${character.baseStats.speed} <span class="text-green-600">(+${character.statGrowth.speed}%)</span></span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Stamina:</span>
                                <span class="font-medium">${character.baseStats.stamina} <span class="text-green-600">(+${character.statGrowth.stamina}%)</span></span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Power:</span>
                                <span class="font-medium">${character.baseStats.power} <span class="text-green-600">(+${character.statGrowth.power}%)</span></span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Guts:</span>
                                <span class="font-medium">${character.baseStats.guts} <span class="text-green-600">(+${character.statGrowth.guts}%)</span></span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Wit:</span>
                                <span class="font-medium">${character.baseStats.wit} <span class="text-green-600">(+${character.statGrowth.wit}%)</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Aptitudes -->
                <div class="space-y-4">
                    <!-- Distance Aptitudes -->
                    <div class="bg-blue-50 rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-blue-800 mb-3">🏁 Distance Aptitudes</h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Sprint:</span>
                                <span class="${getAptitudeColor(character.aptitudes.sprint)} text-lg">${character.aptitudes.sprint}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Mile:</span>
                                <span class="${getAptitudeColor(character.aptitudes.mile)} text-lg">${character.aptitudes.mile}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Medium:</span>
                                <span class="${getAptitudeColor(character.aptitudes.medium)} text-lg">${character.aptitudes.medium}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Long:</span>
                                <span class="${getAptitudeColor(character.aptitudes.long)} text-lg">${character.aptitudes.long}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Surface Aptitudes -->
                    <div class="bg-green-50 rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-green-800 mb-3">🌱 Surface Aptitudes</h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Turf:</span>
                                <span class="${getAptitudeColor(character.aptitudes.turf)} text-lg">${character.aptitudes.turf}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Dirt:</span>
                                <span class="${getAptitudeColor(character.aptitudes.dirt)} text-lg">${character.aptitudes.dirt}</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Running Style Aptitudes -->
                    <div class="bg-purple-50 rounded-lg p-4">
                        <h3 class="text-lg font-semibold text-purple-800 mb-3">🏃 Running Style Aptitudes</h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Front:</span>
                                <span class="${getAptitudeColor(character.runningStyles.front)} text-lg">${character.runningStyles.front}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Pace:</span>
                                <span class="${getAptitudeColor(character.runningStyles.pace)} text-lg">${character.runningStyles.pace}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">Late:</span>
                                <span class="${getAptitudeColor(character.runningStyles.late)} text-lg">${character.runningStyles.late}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-700">End:</span>
                                <span class="${getAptitudeColor(character.runningStyles.end)} text-lg">${character.runningStyles.end}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Create Support Cards tab content - Complete 6-slot deck builder
     * @returns {string} HTML content for support cards tab
     */
    function createSupportCardsTab() {
        const selectedCards = getAppState().plannerState.selectedSupportCards || [null, null, null, null, null, null];
        const filters = getAppState().plannerState.supportCardFilters || { search: '', rarity: 'all', type: 'all' };
        
        // Get all available support cards
        const allCards = [];
        const seenIds = new Set();
        
        if (window.SupportCards) {
            ['Speed', 'Stamina', 'Power', 'Guts', 'Wit', 'Friend'].forEach(type => {
                const cards = window.SupportCards.getSupportCardsByType(type) || [];
                // Deduplicate cards by ID
                cards.forEach(card => {
                    if (!seenIds.has(card.id)) {
                        seenIds.add(card.id);
                        allCards.push(card);
                    }
                });
            });
        }
        
        // Filter cards based on current filters
        let filteredCards = allCards.filter(card => {
            const matchesSearch = !filters.search || 
                card.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                card.character.toLowerCase().includes(filters.search.toLowerCase());
            const matchesRarity = filters.rarity === 'all' || card.rarity === filters.rarity;
            const matchesType = filters.type === 'all' || card.type === filters.type;
            
            return matchesSearch && matchesRarity && matchesType;
        });
        
        // Calculate current deck bonuses
        const cardLevels = getAppState().plannerState.selectedSupportCardLevels || [1, 1, 1, 1, 1, 1];
        const deckCards = selectedCards.map((cardId, index) => {
            if (!cardId) return null;
            const card = window.SupportCards?.getSupportCard(cardId);
            const level = cardLevels[index] || 1;
            return card ? { card: card, level: level } : null;
        }).filter(cardData => cardData);
        
        const deckBonuses = window.SupportCards?.calculateSupportCardStatBonuses ? 
            window.SupportCards.calculateSupportCardStatBonuses(deckCards) : 
            { speed: 0, stamina: 0, power: 0, guts: 0, wit: 0 };
        
        return `
            <div class="space-y-6">
                ${createCurrentPerformanceStatus(getAppState().selectedCharacter)}
                
                <!-- Search and Filter Section -->
                <div class="bg-gray-50 rounded-lg p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">🔍 Find Support Cards</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <div class="sm:col-span-2">
                            <input type="text" id="card-search" placeholder="Search cards or characters..." 
                                   value="${filters.search}"
                                   class="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm min-h-[44px] touch-manipulation">
                        </div>
                        <div>
                            <select id="rarity-filter" class="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm min-h-[44px] touch-manipulation">
                                <option value="all" ${filters.rarity === 'all' ? 'selected' : ''}>All Rarities</option>
                                <option value="SSR" ${filters.rarity === 'SSR' ? 'selected' : ''}>SSR</option>
                                <option value="SR" ${filters.rarity === 'SR' ? 'selected' : ''}>SR</option>
                                <option value="R" ${filters.rarity === 'R' ? 'selected' : ''}>R</option>
                            </select>
                        </div>
                        <div>
                            <select id="type-filter" class="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm min-h-[44px] touch-manipulation">
                                <option value="all" ${filters.type === 'all' ? 'selected' : ''}>All Types</option>
                                <option value="Speed" ${filters.type === 'Speed' ? 'selected' : ''}>Speed</option>
                                <option value="Stamina" ${filters.type === 'Stamina' ? 'selected' : ''}>Stamina</option>
                                <option value="Power" ${filters.type === 'Power' ? 'selected' : ''}>Power</option>
                                <option value="Guts" ${filters.type === 'Guts' ? 'selected' : ''}>Guts</option>
                                <option value="Wit" ${filters.type === 'Wit' ? 'selected' : ''}>Wit</option>
                                <option value="Friend" ${filters.type === 'Friend' ? 'selected' : ''}>Friend</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <!-- Current Deck Display -->
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-gray-800">🎴 Your Support Deck</h3>
                        <div class="text-sm text-gray-600">
                            ${selectedCards.filter(card => card).length}/6 cards selected
                        </div>
                    </div>
                    
                    <!-- 6-Slot Deck Display -->
                    <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mb-4">
                        ${selectedCards.map((cardId, index) => {
                            const card = cardId ? window.SupportCards?.getSupportCard(cardId) : null;
                            const cardLevels = getAppState().plannerState.selectedSupportCardLevels || [1, 1, 1, 1, 1, 1];
                            const cardAssignments = getAppState().plannerState.selectedSupportCardAssignments || [null, null, null, null, null, null];
                            const cardRainbowStatus = getAppState().plannerState.selectedSupportCardRainbowStatus || [false, false, false, false, false, false];
                            const currentLevel = cardLevels[index] || 1;
                            const currentAssignment = cardAssignments[index] || null;
                            const currentRainbowStatus = cardRainbowStatus[index] || false;
                            
                            // Get available levels for this card
                            let availableLevels = [1]; // Default fallback
                            if (card && cardId) {
                                const levels = window.LevelProgression?.getSupportCardAvailableLevels(cardId);
                                if (levels && levels.length > 0) {
                                    availableLevels = levels;
                                }
                            }
                            
                            return `
                                <div class="border-2 border-dashed border-gray-300 rounded-lg p-3 sm:p-2 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer deck-slot touch-manipulation min-h-[140px] sm:min-h-[120px] ${currentRainbowStatus ? 'rainbow-shimmer' : ''}" 
                                     data-slot="${index}">
                                    ${card ? `
                                        <div class="h-full flex flex-col">
                                            <div class="text-center mb-1">
                                                <div class="text-xs font-bold text-${card.rarity === 'SSR' ? 'yellow' : card.rarity === 'SR' ? 'purple' : 'blue'}-600">
                                                    ${card.rarity}
                                                </div>
                                            </div>
                                            <div class="flex-1 bg-gradient-to-b ${getCardGradient(card.type)} rounded text-white p-1 mb-2">
                                                <div class="text-xs font-medium text-center leading-tight">
                                                    ${card.name}
                                                </div>
                                                <div class="text-xs text-center mt-1 opacity-90">
                                                    ${card.type}
                                                </div>
                                            </div>
                                            <!-- Level Selection Squares -->
                                            <div class="mb-2">
                                                <div class="text-xs text-gray-600 mb-1 text-center">Level</div>
                                                <div class="grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-0.5">
                                                    ${availableLevels.map(level => `
                                                        <button class="level-select-btn h-8 sm:h-5 text-xs border rounded flex items-center justify-center transition-colors font-medium touch-manipulation min-w-[32px] sm:min-w-auto ${
                                                            level === currentLevel 
                                                                ? 'bg-blue-500 text-white border-blue-600 shadow-sm' 
                                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-400'
                                                        }" 
                                                                data-slot="${index}" 
                                                                data-level="${level}"
">
                                                            ${level}
                                                        </button>
                                                    `).join('')}
                                                </div>
                                            </div>
                                            <!-- Training Assignment -->
                                            <div class="mb-2">
                                                <div class="text-xs text-gray-600 mb-1 text-center">Training</div>
                                                <select class="training-assignment-select w-full text-xs px-2 py-2 sm:px-1 sm:py-1 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-h-[32px] sm:min-h-auto touch-manipulation" 
                                                        data-slot="${index}">
                                                    <option value="" ${!currentAssignment ? 'selected' : ''}>Unassigned</option>
                                                    <option value="speed" ${currentAssignment === 'speed' ? 'selected' : ''}>⚡ Speed</option>
                                                    <option value="stamina" ${currentAssignment === 'stamina' ? 'selected' : ''}>🫁 Stamina</option>
                                                    <option value="power" ${currentAssignment === 'power' ? 'selected' : ''}>💪 Power</option>
                                                    <option value="guts" ${currentAssignment === 'guts' ? 'selected' : ''}>❤️ Guts</option>
                                                    <option value="wit" ${currentAssignment === 'wit' ? 'selected' : ''}>🧠 Wit</option>
                                                </select>
                                            </div>
                                            <!-- Rainbow Training Toggle -->
                                            <div class="mb-2">
                                                <div class="text-xs text-gray-600 mb-1 text-center">Rainbow</div>
                                                <div class="flex items-center justify-center">
                                                    <button class="rainbow-toggle-btn text-lg hover:scale-110 transition-transform ${currentRainbowStatus ? 'text-rainbow' : 'text-gray-400'}" 
                                                            data-slot="${index}" 
                                                            title="${currentRainbowStatus ? 'Rainbow Training Active (Orange Bond)' : 'Click to activate Rainbow Training'}">
                                                        🌈
                                                    </button>
                                                </div>
                                            </div>
                                            <button class="remove-card-btn text-xs text-red-600 hover:text-red-800" 
                                                    data-slot="${index}">Remove</button>
                                        </div>
                                    ` : `
                                        <div class="h-full flex flex-col items-center justify-center text-gray-400">
                                            <div class="text-xl mb-1">+</div>
                                            <div class="text-xs text-center">Slot ${index + 1}</div>
                                        </div>
                                    `}
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    <!-- Deck Analysis -->
                    ${deckCards.length > 0 ? `
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <h4 class="font-semibold text-blue-800 mb-2">📊 Deck Analysis</h4>
                            <div class="grid grid-cols-5 gap-4 text-sm">
                                ${Object.entries(deckBonuses).map(([stat, bonus]) => `
                                    <div class="text-center">
                                        <div class="font-medium text-gray-800 capitalize">${stat}</div>
                                        <div class="text-lg font-bold text-blue-600">+${bonus}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="mt-3 flex flex-col sm:flex-row gap-2">
                        <button id="clear-deck-btn" class="px-4 py-3 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition-colors touch-manipulation min-h-[44px]">
                            Clear Deck
                        </button>
                        <button id="auto-build-btn" class="px-4 py-3 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors touch-manipulation min-h-[44px]">
                            Auto-Build Deck
                        </button>
                    </div>
                </div>
                
                <!-- Available Cards List -->
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">📋 Available Cards</h3>
                    <div class="text-sm text-gray-600 mb-3">
                        Showing ${filteredCards.length} of ${allCards.length} cards
                    </div>
                    
                    <div class="max-h-96 overflow-y-auto">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${filteredCards.map(card => `
                                <div class="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer available-card"
                                     data-card-id="${card.id}">
                                    <div class="flex items-center justify-between mb-2">
                                        <div class="font-medium text-gray-800">${card.name}</div>
                                        <div class="flex gap-1">
                                            <span class="text-xs px-2 py-1 rounded ${getRarityBadgeColor(card.rarity)}">
                                                ${card.rarity}
                                            </span>
                                            <span class="text-xs px-2 py-1 rounded ${getTypeBadgeColor(card.type)}">
                                                ${card.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="text-sm text-gray-600 mb-2">${card.character}</div>
                                    <div class="text-xs text-gray-500 flex-1">
                                        Stat Bonuses: ${Object.entries(card.statGain || {})
                                            .filter(([stat, gain]) => gain > 0)
                                            .map(([stat, gain]) => `${stat.charAt(0).toUpperCase() + stat.slice(1)}: +${gain}`)
                                            .join(', ') || 'None'}
                                    </div>
                                    ${selectedCards.includes(card.id) ? 
                                        '<div class="mt-2 text-xs text-green-600 font-medium">✓ Already in deck</div>' : 
                                        '<div class="mt-2 text-xs text-blue-600">Click to add to deck</div>'
                                    }
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Create Skills tab content with comprehensive recommendations
     * @param {Object} character - Selected character object
     * @returns {string} HTML content for skills tab
     */
    function createSkillsTab(character) {
        // Get skill recommendations using existing system
        const appState = getAppState();
        
        const skillRecommendations = (typeof getSkillRecommendations === 'function') ? 
            getSkillRecommendations(character, appState.targetTrack, appState.style) :
            { essential: [], recommended: [], conditional: [] };
        
        return `
            <div class="space-y-6">
                ${createCurrentPerformanceStatus(character)}
                
                <!-- Skill Overview -->
                <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-200">
                    <h3 class="text-lg font-semibold text-purple-800 mb-2">⚡ Skill Strategy Overview</h3>
                    <p class="text-sm text-purple-700 mb-3">
                        Skills are crucial for competitive success. Focus on <strong>Essential skills</strong> first, 
                        then add <strong>Recommended skills</strong> based on your preferred racing strategy.
                    </p>
                    <div class="grid grid-cols-3 gap-4 text-center text-xs">
                        <div>
                            <div class="font-bold text-red-700">Essential (${skillRecommendations.essential.length})</div>
                            <div class="text-red-600">Must-have skills</div>
                        </div>
                        <div>
                            <div class="font-bold text-blue-700">Recommended (${skillRecommendations.recommended.length})</div>
                            <div class="text-blue-600">Strong additions</div>
                        </div>
                        <div>
                            <div class="font-bold text-green-700">Conditional (${skillRecommendations.conditional.length})</div>
                            <div class="text-green-600">Situational picks</div>
                        </div>
                    </div>
                </div>

                <!-- Essential Skills (S-Tier) -->
                ${skillRecommendations.essential.length > 0 ? `
                    <div class="bg-white rounded-lg border border-red-200 p-4" data-skill-category="essential">
                        <h3 class="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                            <span class="w-3 h-3 bg-red-500 rounded-full"></span>
                            Essential Skills (S-Tier)
                        </h3>
                        <div class="text-sm text-red-700 mb-4 bg-red-50 p-3 rounded">
                            <strong>💡 Priority:</strong> Learn these skills first! They provide the biggest performance impact for ${character.name}.
                        </div>
                        <div class="space-y-3">
                            ${skillRecommendations.essential.map((skill, index) => `
                                <div class="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <div class="flex items-center justify-between mb-2">
                                        <div class="flex items-center gap-2">
                                            <span class="w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                                                ${index + 1}
                                            </span>
                                            <span class="font-semibold text-red-900">${skill.name}</span>
                                        </div>
                                        <span class="text-xs px-2 py-1 rounded-full ${getSkillTypeBadge(skill.type)}">
                                            ${skill.type}
                                        </span>
                                    </div>
                                    <p class="text-sm text-red-800">${skill.reason}</p>
                                    ${skill.activation ? `
                                        <div class="mt-2 text-xs text-red-600 bg-red-100 p-2 rounded">
                                            <strong>Activation:</strong> ${skill.activation}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Recommended Skills (A-Tier) -->
                ${skillRecommendations.recommended.length > 0 ? `
                    <div class="bg-white rounded-lg border border-blue-200 p-4" data-skill-category="recommended">
                        <h3 class="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <span class="w-3 h-3 bg-blue-500 rounded-full"></span>
                            Recommended Skills (A-Tier)
                        </h3>
                        <div class="text-sm text-blue-700 mb-4 bg-blue-50 p-3 rounded">
                            <strong>📈 Strategy:</strong> Strong skills that complement ${character.name}'s racing style and provide consistent value.
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            ${skillRecommendations.recommended.map(skill => `
                                <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="font-semibold text-blue-900">${skill.name}</span>
                                        <span class="text-xs px-2 py-1 rounded-full ${getSkillTypeBadge(skill.type)}">
                                            ${skill.type}
                                        </span>
                                    </div>
                                    <p class="text-sm text-blue-800">${skill.reason}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Conditional Skills (B-Tier) -->
                ${skillRecommendations.conditional.length > 0 ? `
                    <div class="bg-white rounded-lg border border-green-200 p-4" data-skill-category="conditional">
                        <h3 class="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                            Conditional Skills (B-Tier)
                        </h3>
                        <div class="text-sm text-green-700 mb-4 bg-green-50 p-3 rounded">
                            <strong>🎯 Situational:</strong> These skills excel in specific scenarios or complement particular strategies.
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            ${skillRecommendations.conditional.map(skill => `
                                <div class="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="font-medium text-green-900 text-sm">${skill.name}</span>
                                        <span class="text-xs px-1 py-0.5 rounded ${getSkillTypeBadge(skill.type)}">
                                            ${skill.type}
                                        </span>
                                    </div>
                                    <p class="text-xs text-green-800">${skill.reason}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Skill Learning Strategy -->
                <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">🎓 Skill Learning Strategy</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 class="font-semibold text-gray-700 mb-2">📋 Learning Priority</h4>
                            <ol class="space-y-1 text-gray-600">
                                <li>1. Focus on Essential skills first</li>
                                <li>2. Learn skills that match your racing distance</li>
                                <li>3. Add Recommended skills for consistency</li>
                                <li>4. Consider Conditional skills for specialization</li>
                            </ol>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-700 mb-2">💡 Pro Tips</h4>
                            <ul class="space-y-1 text-gray-600">
                                <li>• Learn speed/acceleration skills early</li>
                                <li>• Balance offensive and recovery skills</li>
                                <li>• Prioritize skills matching ${appState.targetTrack} distance</li>
                                <li>• Consider your preferred running style</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Current Target Context -->
                <div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h4 class="font-semibold text-yellow-800 mb-2">🎯 Current Training Target</h4>
                    <div class="text-sm text-yellow-700">
                        Skills shown are optimized for <strong>${appState.targetTrack}</strong> distance racing 
                        with <strong>${appState.style.replace('-', ' ')}</strong> running style.
                        Change your target distance or style to see different recommendations.
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Create Guide tab content with comprehensive training strategies
     * @param {Object} character - Selected character object
     * @returns {string} HTML content for guide tab
     */
    function createGuideTab(character) {
        // Get character advice using existing system
        const appState = getAppState();
        const fullStyleName = mapStyleToFullName(appState.style);
        const characterAdvice = (typeof getCharacterTrainingAdvice === 'function') ? 
            getCharacterTrainingAdvice(character, appState.targetTrack, fullStyleName) :
            { priority: [], secondary: [], avoid: [], tips: [] };
        
        // Get enhanced advice if available (Phase 4A system)
        const enhancedAdvice = window.Uma?.CharacterAdvice?.getEnhancedTrainingRecommendations ? 
            window.Uma.CharacterAdvice.getEnhancedTrainingRecommendations(character, appState.stats, appState.targetTrack, fullStyleName, appState.currentMood) :
            null;
        
        // Determine character archetype
        const archetype = getCharacterArchetype(character);
        
        return `
            <div class="space-y-6">
                ${createCurrentPerformanceStatus(character)}
                
                <!-- Character Overview -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                    <h3 class="text-lg font-semibold text-blue-800 mb-2">📋 ${character.name} Training Guide</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 class="font-semibold text-blue-700 mb-2">🎭 Character Archetype</h4>
                            <div class="bg-blue-100 p-3 rounded">
                                <div class="font-medium text-blue-900">${archetype.name}</div>
                                <div class="text-blue-700 text-xs mt-1">${archetype.description}</div>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-semibold text-blue-700 mb-2">🏁 Best Distances</h4>
                            <div class="bg-blue-100 p-3 rounded">
                                ${getOptimalDistances(character).map(distance => `
                                    <div class="flex justify-between text-blue-900">
                                        <span class="capitalize">${distance.name}:</span>
                                        <span class="font-medium ${getAptitudeColor(distance.grade)}">${distance.grade}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Training Priority -->
                ${characterAdvice.priority.length > 0 || enhancedAdvice?.moodAdjustedPriorities ? `
                    <div class="bg-white rounded-lg border border-green-200 p-4">
                        <h3 class="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <span>🎯</span>
                            Training Priority
                        </h3>
                        <div class="space-y-3">
                            ${(enhancedAdvice?.moodAdjustedPriorities || characterAdvice.priority).map((advice, index) => `
                                <div class="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                    <span class="w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                        ${index + 1}
                                    </span>
                                    <div class="flex-1 text-sm text-green-800">${advice}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Secondary Focus -->
                ${characterAdvice.secondary.length > 0 ? `
                    <div class="bg-white rounded-lg border border-blue-200 p-4">
                        <h3 class="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <span>📈</span>
                            Secondary Focus
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            ${characterAdvice.secondary.map(advice => `
                                <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                    <div class="text-sm text-blue-800">${advice}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Enhanced Analysis -->
                ${enhancedAdvice ? `
                    <div class="bg-white rounded-lg border border-purple-200 p-4">
                        <h3 class="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
                            <span>🧠</span>
                            Advanced Analysis
                        </h3>
                        
                        ${enhancedAdvice.skillActivation ? `
                            <div class="mb-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                                <h4 class="font-semibold text-indigo-800 mb-2">⚡ Skill Activation</h4>
                                <div class="text-sm text-indigo-800">${enhancedAdvice.skillActivation.feedback}</div>
                                <div class="text-xs text-indigo-600 mt-1">
                                    Current rate: ${enhancedAdvice.skillActivation.rate}% (${appState.stats.wit} Wit)
                                </div>
                            </div>
                        ` : ''}
                        
                        ${enhancedAdvice.archetype ? `
                            <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <h4 class="font-semibold text-purple-800 mb-2">🎭 Archetype Guidance</h4>
                                <div class="space-y-2">
                                    ${enhancedAdvice.archetype.advice.map(advice => `
                                        <div class="text-sm text-purple-800 bg-purple-100 p-2 rounded">${advice}</div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                <!-- Training Tips -->
                ${characterAdvice.tips.length > 0 ? `
                    <div class="bg-white rounded-lg border border-green-200 p-4">
                        <h3 class="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <span>💡</span>
                            Pro Tips
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            ${characterAdvice.tips.map(tip => `
                                <div class="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                                    <div class="text-sm text-green-800">${tip}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Things to Avoid -->
                ${characterAdvice.avoid.length > 0 ? `
                    <div class="bg-white rounded-lg border border-red-200 p-4">
                        <h3 class="text-lg font-semibold text-red-800 mb-3 flex items-center gap-2">
                            <span>⚠️</span>
                            Avoid These Mistakes
                        </h3>
                        <div class="space-y-2">
                            ${characterAdvice.avoid.map(advice => `
                                <div class="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <div class="text-sm text-red-800">${advice}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Statistical Overview -->
                <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-800 mb-3">📊 Character Statistics</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 class="font-semibold text-gray-700 mb-2">Base Stats (★${character.rarity})</h4>
                            <div class="space-y-1">
                                ${Object.entries(character.baseStats).map(([stat, value]) => `
                                    <div class="flex justify-between">
                                        <span class="capitalize text-gray-600">${stat}:</span>
                                        <span class="font-medium">${value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-700 mb-2">Growth Bonuses</h4>
                            <div class="space-y-1">
                                ${Object.entries(character.statGrowth).map(([stat, growth]) => `
                                    <div class="flex justify-between">
                                        <span class="capitalize text-gray-600">${stat}:</span>
                                        <span class="font-medium text-green-600">+${growth}%</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-700 mb-2">Running Styles</h4>
                            <div class="space-y-1">
                                ${Object.entries(character.runningStyles).map(([style, grade]) => `
                                    <div class="flex justify-between">
                                        <span class="capitalize text-gray-600">${style}:</span>
                                        <span class="font-bold ${getAptitudeColor(grade)}">${grade}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Current Configuration -->
                <div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h4 class="font-semibold text-yellow-800 mb-2">⚙️ Current Configuration</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-yellow-700">
                        <div>
                            <span class="font-medium">Target Distance:</span><br>
                            <span class="capitalize">${appState.targetTrack}</span>
                        </div>
                        <div>
                            <span class="font-medium">Running Style:</span><br>
                            <span class="capitalize">${appState.style.replace('-', ' ')}</span>
                        </div>
                        <div>
                            <span class="font-medium">Character Mood:</span><br>
                            <span class="capitalize">${appState.currentMood}</span>
                        </div>
                        <div>
                            <span class="font-medium">Support Cards:</span><br>
                            <span>${(appState.plannerState?.selectedSupportCards || []).filter(card => card).length}/6 selected</span>
                        </div>
                    </div>
                    <div class="mt-2 text-xs text-yellow-600">
                        💡 Change these settings to see updated recommendations throughout the interface.
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Create training tools section (below tabs)
     * @param {Object} character - Selected character object
     * @returns {HTMLElement} Training tools container
     */
    function createTrainingToolsSection(character) {
        const section = createElement('div', 'training-tools-section grid grid-cols-1 lg:grid-cols-2 gap-6');
        
        // Left column: Planning Tools
        const leftColumn = createElement('div', 'space-y-6');
        
        // Training Settings section (moved from right column)
        const appState = getAppState();
        const trainingSettingsSection = createElement('div', 'bg-white rounded-lg shadow-lg p-6');
        trainingSettingsSection.innerHTML = `
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>⚙️</span> Training Settings
            </h2>
            <div class="space-y-4">
                <!-- Character Mood -->
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">😊 Character Mood</label>
                    <div class="text-xs text-gray-600 mb-2">
                        Character mood affects training efficiency. Select current mood for more accurate recommendations.
                    </div>
                    <select id="mood-select" class="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm min-h-[44px] touch-manipulation">
                        <option value="great" ${appState.currentMood === 'great' ? 'selected' : ''}>Great 😊 (+20% efficiency)</option>
                        <option value="good" ${appState.currentMood === 'good' ? 'selected' : ''}>Good 🙂 (+10% efficiency)</option>
                        <option value="normal" ${appState.currentMood === 'normal' ? 'selected' : ''}>Normal 😐 (baseline)</option>
                        <option value="bad" ${appState.currentMood === 'bad' ? 'selected' : ''}>Bad 😟 (-10% efficiency)</option>
                        <option value="awful" ${appState.currentMood === 'awful' ? 'selected' : ''}>Awful 😫 (-20% efficiency)</option>
                    </select>
                </div>

                <!-- Target Style Selection -->
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">🏃 Target Running Style</label>
                    <div class="text-xs text-gray-600 mb-2">
                        Select your preferred running style for stat recommendations and thresholds.
                    </div>
                    <select id="style-select" class="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm min-h-[44px] touch-manipulation">
                        ${window.Uma?.Constants?.RUNNING_STYLES ? Object.entries(window.Uma.Constants.RUNNING_STYLES).map(([key, style]) => `
                            <option value="${key}" ${appState.style === key ? 'selected' : ''}>
                                ${style.displayName}
                            </option>
                        `).join('') : `
                            <option value="front" ${appState.style === 'front' ? 'selected' : ''}>Front Runner</option>
                            <option value="pace" ${appState.style === 'pace' ? 'selected' : ''}>Pace Chaser</option>
                            <option value="late" ${appState.style === 'late' ? 'selected' : ''}>Late Surger</option>
                            <option value="end" ${appState.style === 'end' ? 'selected' : ''}>End Closer</option>
                        `}
                    </select>
                </div>

                <!-- Target Distance Selection -->
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">🏁 Target Race Distance</label>
                    <div class="text-xs text-gray-600 mb-2">
                        Select your target race distance for optimized stat thresholds and recommendations.
                    </div>
                    <select id="distance-select" class="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm min-h-[44px] touch-manipulation">
                        <option value="sprint" ${appState.targetTrack === 'sprint' ? 'selected' : ''}>Sprint (1000m+)</option>
                        <option value="mile" ${appState.targetTrack === 'mile' ? 'selected' : ''}>Mile (1400m+)</option>
                        <option value="medium" ${appState.targetTrack === 'medium' ? 'selected' : ''}>Medium (1800m+)</option>
                        <option value="long" ${appState.targetTrack === 'long' ? 'selected' : ''}>Long (2500m+)</option>
                    </select>
                </div>
            </div>
        `;
        
        leftColumn.appendChild(trainingSettingsSection);
        
        // Right column: Training Recommendations
        const rightColumn = createElement('div', 'space-y-6');
        
        
        // Training Recommendations section
        const trainingRecommendationsSection = createElement('div', 'training-recommendations-container bg-white rounded-lg shadow-lg p-6');
        
        // Generate training recommendations
        const trainingRecommendations = getTrainingRecommendations(character);
        
        const trainingHTML = `
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>🎯</span> Training Recommendations
            </h2>
            <div class="space-y-3">
                ${trainingRecommendations.slice(0, 5).map((training, idx) => `
                    <div class="p-3 bg-gray-50 rounded-md border-l-4 ${
                        idx === 0 ? 'border-green-500' : 
                        idx === 1 ? 'border-blue-500' : 
                        idx === 2 ? 'border-yellow-500' : 'border-gray-300'
                    }">
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center gap-3">
                                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                    idx === 0 ? 'bg-green-500' : 
                                    idx === 1 ? 'bg-blue-500' : 
                                    idx === 2 ? 'bg-yellow-500' : 'bg-gray-400'
                                }">${idx + 1}</span>
                                <span class="font-medium text-sm">${training.name}</span>
                            </div>
                            <div class="text-right">
                                <div class="text-xs font-semibold text-gray-700">Value: ${training.totalValue !== undefined ? Math.round(training.totalValue) : 'ERROR'}</div>
                                <div class="text-xs text-gray-500">Energy: ${training.energyCost > 0 ? `-${training.energyCost}` : `+${Math.abs(training.energyCost)}`}</div>
                                ${training.efficiency && training.efficiency.pointsPerEnergy !== Infinity ? 
                                    `<div class="text-xs text-blue-600">${training.efficiency.pointsPerEnergy.toFixed(1)} pts/energy</div>` : ''}
                                ${training.risk && training.risk.failChance > 0 ? 
                                    `<div class="text-xs ${training.risk.riskLevel === 'High' || training.risk.riskLevel === 'Very High' ? 'text-red-600' : 
                                      training.risk.riskLevel === 'Moderate' ? 'text-yellow-600' : 'text-green-600'}">${Math.round(training.risk.failChance * 100)}% fail risk</div>` : ''}
                            </div>
                        </div>
                        <div class="text-xs text-gray-600">${training.recommendation}</div>
                    </div>
                `).join('')}
            </div>
            <!-- SESSION 5: Enhanced explanation section with toggle -->
            <div class="mt-3 space-y-3">
                <!-- Context information -->
                <div class="p-2 bg-blue-50 rounded text-xs text-blue-600">
                    💡 Enhanced Training System: Research-based recommendations with adaptive context awareness.
                    ${trainingRecommendations.length > 0 && trainingRecommendations[0].contextInfo ? 
                        `<br>🎯 ${trainingRecommendations[0].contextInfo.message}` : ''}
                    ${appState.currentMood !== 'normal' ? `<br>📊 Mood effect: ${window.Uma?.Constants?.MOOD_MULTIPLIERS?.[appState.currentMood]?.label || appState.currentMood} affects all stat gains shown above.` : ''}
                </div>
                
                <!-- Expandable detailed explanations -->
                ${trainingRecommendations.length > 0 && trainingRecommendations[0].strategyExplanation ? `
                    <div class="border border-gray-200 rounded">
                        <button class="w-full p-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between" 
                                onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('.toggle-icon').textContent = this.nextElementSibling.classList.contains('hidden') ? '▶' : '▼';">
                            <span>📚 Detailed Strategy & Tips</span>
                            <span class="toggle-icon">▼</span>
                        </button>
                        <div class="space-y-2 p-3 border-t border-gray-200">
                            <!-- Strategy explanation -->
                            <div class="p-2 bg-green-50 border border-green-200 rounded text-xs">
                                <div class="font-semibold text-green-700 mb-1">📋 Training Strategy</div>
                                <div class="text-green-600 mb-1"><strong>Situation:</strong> ${trainingRecommendations[0].strategyExplanation.currentSituation}</div>
                                <div class="text-green-600 mb-1"><strong>Approach:</strong> ${trainingRecommendations[0].strategyExplanation.recommendedApproach}</div>
                                ${trainingRecommendations[0].strategyExplanation.keyConsiderations.length > 0 ? `
                                    <div class="text-green-600 mt-1">
                                        ${trainingRecommendations[0].strategyExplanation.keyConsiderations.map(point => `<div>• ${point}</div>`).join('')}
                                    </div>
                                ` : ''}
                            </div>
                            
                            <!-- Top recommendation explanation -->
                            ${trainingRecommendations[0].explanation ? `
                                <div class="p-2 bg-yellow-50 border border-yellow-200 rounded text-xs">
                                    <div class="font-semibold text-yellow-700 mb-1">🏆 Why "${trainingRecommendations[0].name}"</div>
                                    <div class="text-yellow-600 mb-1"><strong>Reason:</strong> ${trainingRecommendations[0].explanation.primaryReason}</div>
                                    ${trainingRecommendations[0].explanation.detailedAnalysis.slice(0, 2).map(point => `<div class="text-yellow-600">• ${point}</div>`).join('')}
                                </div>
                            ` : ''}
                            
                            <!-- Educational tips -->
                            ${trainingRecommendations[0].educationalTips ? `
                                <div class="p-2 bg-purple-50 border border-purple-200 rounded text-xs">
                                    <div class="font-semibold text-purple-700 mb-1">🎓 Tips</div>
                                    ${trainingRecommendations[0].educationalTips.slice(0, 2).map(tip => `
                                        <div class="text-purple-600 mb-1">
                                            ${tip.icon} <strong>${tip.category}:</strong> ${tip.tip}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                            
                            <!-- Fallback Options -->
                            ${trainingRecommendations[0].trainingAlternatives && trainingRecommendations[0].trainingAlternatives.length > 0 ? `
                                <div class="p-2 bg-orange-50 border border-orange-200 rounded text-xs">
                                    <div class="font-semibold text-orange-700 mb-1">🔄 Alternative Options</div>
                                    ${trainingRecommendations[0].trainingAlternatives.map(alt => `
                                        <div class="text-orange-600 mb-1">
                                            <div><strong>${alt.option}:</strong> ${alt.reason}</div>
                                            <div class="text-orange-500 ml-2 text-xs italic">Trade-offs: ${alt.tradeoffs}</div>
                                        </div>
                                    `).join('')}
                                    ${trainingRecommendations[0].fallbackExplanations ? `
                                        <div class="mt-2 pt-2 border-t border-orange-200">
                                            <div class="text-orange-700 font-medium">When to Consider Alternatives:</div>
                                            ${trainingRecommendations[0].fallbackExplanations.whenToConsider.map(point => `
                                                <div class="text-orange-600 text-xs">• ${point}</div>
                                            `).join('')}
                                            ${trainingRecommendations[0].fallbackExplanations.timeConsiderations.length > 0 ? `
                                                <div class="text-orange-700 font-medium mt-1">Timing Considerations:</div>
                                                ${trainingRecommendations[0].fallbackExplanations.timeConsiderations.map(point => `
                                                    <div class="text-orange-600 text-xs">• ${point}</div>
                                                `).join('')}
                                            ` : ''}
                                        </div>
                                    ` : ''}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        
        trainingRecommendationsSection.innerHTML = trainingHTML;
        
        rightColumn.appendChild(trainingRecommendationsSection);
        
        section.appendChild(leftColumn);
        section.appendChild(rightColumn);
        
        return section;
    }

    /**
     * Create streamlined training tools section (without training settings - moved to sticky header)
     * @param {Object} character - Selected character object
     * @returns {HTMLElement} Streamlined training tools container
     */
    function createStreamlinedTrainingToolsSection(character) {
        // Single full-width training recommendations section
        const section = createElement('div', 'training-tools-section');
        
        // Training Recommendations section - enhanced full-width design
        const trainingRecommendationsSection = createElement('div', 'training-recommendations-container bg-white rounded-lg shadow-lg p-6 mb-6');
        
        // Generate training recommendations with error handling
        let trainingRecommendations = [];
        try {
            if (typeof getTrainingRecommendations === 'function') {
                trainingRecommendations = getTrainingRecommendations(character) || [];
            }
        } catch (error) {
            console.warn('Error getting training recommendations:', error);
            trainingRecommendations = [];
        }
        
        const trainingHTML = `
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <span>🎯</span> Training Recommendations
                </h2>
                <div class="text-sm text-gray-500">
                    Based on current stats and target settings
                </div>
            </div>
            
            ${trainingRecommendations.length > 0 ? `
                <!-- Top 3 Priority Training in Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    ${trainingRecommendations.slice(0, 3).map((training, idx) => {
                        const name = training?.name || training?.stat || training?.primaryStat || 'Unknown';
                        const value = typeof training?.totalValue === 'number' ? training.totalValue : 0;
                        const reasoning = training?.recommendation || training?.reasoning || training?.description || 'No reasoning available';
                        
                        const colors = [
                            { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', accent: 'bg-green-500' },
                            { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', accent: 'bg-blue-500' },
                            { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', accent: 'bg-yellow-500' }
                        ];
                        const color = colors[idx] || colors[2];
                        
                        return `
                            <div class="relative ${color.bg} ${color.border} border rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow touch-manipulation">
                                <div class="absolute -top-2 -left-2 w-8 h-8 ${color.accent} rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    ${idx + 1}
                                </div>
                                <div class="mt-2">
                                    <h3 class="font-semibold ${color.text} mb-2">${name}</h3>
                                    <div class="text-2xl font-bold ${color.text} mb-2">
                                        ${Math.round(value)}
                                    </div>
                                    <p class="text-xs ${color.text} opacity-80">
                                        ${reasoning}
                                    </p>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <!-- Remaining Recommendations as Compact List -->
                ${trainingRecommendations.length > 3 ? `
                    <div class="border-t pt-4">
                        <h3 class="text-sm font-medium text-gray-600 mb-3">Additional Options</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            ${trainingRecommendations.slice(3).map((training, idx) => {
                                const name = training?.name || training?.stat || 'Unknown';
                                const value = typeof training?.totalValue === 'number' ? training.totalValue : 0;
                                
                                return `
                                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded text-sm touch-manipulation min-h-[48px]">
                                        <span class="text-gray-700 font-medium">${name}</span>
                                        <span class="font-bold ${value > 0 ? 'text-gray-600' : 'text-gray-400'} text-base">
                                            ${Math.round(value)}
                                        </span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            ` : `
                <div class="text-center py-12 text-gray-500">
                    <div class="text-6xl mb-4">🎯</div>
                    <div class="text-lg font-medium mb-2">No training recommendations available</div>
                    <div class="text-sm">Adjust your character stats or training settings in the header above</div>
                </div>
            `}
        `;
        
        trainingRecommendationsSection.innerHTML = trainingHTML;
        section.appendChild(trainingRecommendationsSection);
        
        return section;
    }
    
    /**
     * Helper function to get stat color based on threshold
     * @param {number} value - Current stat value
     * @param {number} threshold - Target threshold
     * @param {string} stat - Stat name
     * @returns {string} CSS class for color
     */
    function getStatColor(value, threshold, stat) {
        // Check for diminishing returns first
        if ((stat === 'speed' && value > 1200) || 
            ((stat === 'guts' || stat === 'wit') && value > 400)) {
          return value >= threshold ? 'text-orange-500' : 'text-red-600';
        }
        
        if (value >= threshold) return 'text-green-600';
        if (value >= threshold * 0.8) return 'text-yellow-600';
        return 'text-red-600';
    }
    
    /**
     * Map short style names to full style names used in constants
     * @param {string} shortStyle - Short style name (front, pace, late, end)
     * @returns {string} Full style name for constants lookup
     */
    function mapStyleToFullName(shortStyle) {
        const styleMapping = {
            'front': 'front-runner',
            'pace': 'pace-chaser',
            'late': 'late-surger',
            'end': 'end-closer'
        };
        return styleMapping[shortStyle] || shortStyle;
    }

    /**
     * Calculate character-specific adjusted thresholds based on growth bonuses and aptitudes
     * @param {Object} character - Character object with statGrowth and aptitudes
     * @param {string} distance - Target distance (sprint, mile, medium, long)
     * @param {string} style - Running style (full name like 'front-runner')
     * @returns {Object} Adjusted threshold object
     */
    function getCharacterAdjustedThresholds(character, distance, style) {
        // Get base thresholds from constants
        const baseThresholds = window.Uma?.Constants?.STAT_THRESHOLDS?.[distance]?.[style] || 
                              { speed: 800, stamina: 800, power: 800, guts: 800, wit: 800 };
        
        const adjustedThresholds = {};
        
        Object.entries(baseThresholds).forEach(([stat, threshold]) => {
            let adjusted = threshold;
            
            // Apply growth bonus reduction (characters with growth bonuses need less raw stats)
            const growthBonus = character.statGrowth?.[stat] || 0;
            if (growthBonus >= 20) {
                adjusted *= 0.85;      // -15% threshold for 20% growth bonus
            } else if (growthBonus >= 15) {
                adjusted *= 0.90;      // -10% threshold for 15% growth bonus  
            } else if (growthBonus >= 10) {
                adjusted *= 0.95;      // -5% threshold for 10% growth bonus
            }
            
            // Apply aptitude penalty for poor distance aptitude
            const distanceAptitude = character.aptitudes?.[distance];
            if (distanceAptitude && window.Uma?.Constants?.APTITUDE_MULTIPLIERS) {
                const aptMultiplier = window.Uma.Constants.APTITUDE_MULTIPLIERS[distanceAptitude] || 1.0;
                if (aptMultiplier < 1.0) {
                    // Poor aptitude = need higher stats to compensate
                    // B=1.11×, C=1.18×, D=1.25×, E=1.33×, F=1.43×, G=1.67×
                    adjusted *= (2.0 - aptMultiplier);
                }
            }
            
            // Apply running style aptitude penalty
            const shortStyleName = Object.keys({
                'front': 'front-runner',
                'pace': 'pace-chaser', 
                'late': 'late-surger',
                'end': 'end-closer'
            }).find(key => mapStyleToFullName(key) === style) || 'pace';
            
            const styleAptitude = character.runningStyles?.[shortStyleName];
            if (styleAptitude && window.Uma?.Constants?.APTITUDE_MULTIPLIERS) {
                const styleMultiplier = window.Uma.Constants.APTITUDE_MULTIPLIERS[styleAptitude] || 1.0;
                if (styleMultiplier < 1.0) {
                    // Poor style aptitude = need higher stats (smaller penalty than distance)
                    adjusted *= (1.5 - (styleMultiplier * 0.5));
                }
            }
            
            adjustedThresholds[stat] = Math.round(adjusted);
        });
        
        return adjustedThresholds;
    }

    /**
     * Get aptitude color class based on grade
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
    
    /**
     * Get card gradient class based on type
     * @param {string} type - Support card type
     * @returns {string} CSS gradient classes
     */
    function getCardGradient(type) {
        const gradients = {
            'Speed': 'from-red-500 to-red-600',
            'Stamina': 'from-green-500 to-green-600',
            'Power': 'from-blue-500 to-blue-600',
            'Guts': 'from-pink-500 to-pink-600',
            'Wit': 'from-purple-500 to-purple-600',
            'Friend': 'from-yellow-400 to-yellow-500'
        };
        return gradients[type] || 'from-gray-500 to-gray-600';
    }
    
    /**
     * Get card type color class for badges
     * @param {string} type - Support card type
     * @returns {string} CSS color classes
     */
    function getCardTypeColor(type) {
        const colors = {
            'Speed': 'bg-red-100 text-red-800',
            'Stamina': 'bg-green-100 text-green-800',
            'Power': 'bg-blue-100 text-blue-800',
            'Guts': 'bg-pink-100 text-pink-800',
            'Wit': 'bg-purple-100 text-purple-800',
            'Friend': 'bg-yellow-100 text-yellow-800'
        };
        return colors[type] || 'bg-gray-100 text-gray-800';
    }
    
    /**
     * Convert rarity string to star count
     * @param {string} rarity - Rarity string (SSR, SR, R)
     * @returns {number} Number of stars
     */
    function getRarityStarCount(rarity) {
        const starCounts = {
            'SSR': 3,
            'SR': 2,
            'R': 1
        };
        return starCounts[rarity] || 1;
    }
    
    /**
     * Get rarity badge color classes
     * @param {string} rarity - Rarity string (SSR, SR, R)
     * @returns {string} CSS color classes
     */
    function getRarityBadgeColor(rarity) {
        const colors = {
            'SSR': 'bg-yellow-100 text-yellow-800',
            'SR': 'bg-purple-100 text-purple-800',
            'R': 'bg-gray-100 text-gray-800'
        };
        return colors[rarity] || 'bg-gray-100 text-gray-800';
    }
    
    /**
     * Get type badge color classes  
     * @param {string} type - Support card type
     * @returns {string} CSS color classes
     */
    function getTypeBadgeColor(type) {
        return getCardTypeColor(type); // Reuse the same logic
    }
    
    /**
     * Get character archetype based on stats and aptitudes
     * @param {Object} character - Character object
     * @returns {Object} Archetype information
     */
    function getCharacterArchetype(character) {
        // Analyze character's stat growth and aptitudes
        const statGrowth = character.statGrowth;
        const baseStats = character.baseStats;
        
        // Determine primary focus
        const speedFocus = (statGrowth.speed || 0) + (baseStats.speed || 0) / 10;
        const staminaFocus = (statGrowth.stamina || 0) + (baseStats.stamina || 0) / 10;
        const powerFocus = (statGrowth.power || 0) + (baseStats.power || 0) / 10;
        const gutsFocus = (statGrowth.guts || 0) + (baseStats.guts || 0) / 10;
        
        if (speedFocus >= 15) {
            return {
                name: 'Speed Specialist',
                description: 'Excels in high-speed racing with excellent acceleration and velocity'
            };
        } else if (staminaFocus >= 15) {
            return {
                name: 'Endurance Runner',
                description: 'Built for long-distance racing with superior stamina and consistency'
            };
        } else if (powerFocus >= 12) {
            return {
                name: 'Power Runner',
                description: 'Strong finisher with excellent burst power in crucial moments'
            };
        } else if (gutsFocus >= 12) {
            return {
                name: 'Mental Fortress',
                description: 'Resilient competitor who performs well under pressure'
            };
        } else {
            return {
                name: 'Balanced Athlete',
                description: 'Well-rounded performer adaptable to various racing strategies'
            };
        }
    }
    
    /**
     * Get optimal distances for character based on aptitudes
     * @param {Object} character - Character object
     * @returns {Array} Distance information sorted by aptitude
     */
    function getOptimalDistances(character) {
        const distances = [
            { name: 'sprint', grade: character.aptitudes.sprint },
            { name: 'mile', grade: character.aptitudes.mile },
            { name: 'medium', grade: character.aptitudes.medium },
            { name: 'long', grade: character.aptitudes.long }
        ];
        
        // Sort by aptitude grade (S > A > B > C > D > E > F > G)
        const gradeOrder = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
        return distances.sort((a, b) => 
            gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade)
        );
    }
    
    
    /**
     * Get rarity badge color classes
     * @param {string} rarity - Card rarity
     * @returns {string} CSS classes for rarity badge
     */
    function getRarityBadgeColor(rarity) {
        const colors = {
            'SSR': 'bg-yellow-100 text-yellow-800',
            'SR': 'bg-purple-100 text-purple-800',
            'R': 'bg-blue-100 text-blue-800'
        };
        return colors[rarity] || 'bg-gray-100 text-gray-800';
    }
    
    /**
     * Get type badge color classes
     * @param {string} type - Card type
     * @returns {string} CSS classes for type badge
     */
    function getTypeBadgeColor(type) {
        const colors = {
            'Speed': 'bg-red-100 text-red-800',
            'Stamina': 'bg-green-100 text-green-800',
            'Power': 'bg-blue-100 text-blue-800',
            'Guts': 'bg-pink-100 text-pink-800',
            'Wit': 'bg-purple-100 text-purple-800',
            'Friend': 'bg-yellow-100 text-yellow-800'
        };
        return colors[type] || 'bg-gray-100 text-gray-800';
    }
    
    /**
     * Get skill type badge color classes
     * @param {string} type - Skill type
     * @returns {string} CSS classes for skill type badge
     */
    function getSkillTypeBadge(type) {
        const colors = {
            'Gold': 'bg-yellow-100 text-yellow-800',
            'Silver': 'bg-gray-100 text-gray-800',
            'Green': 'bg-green-100 text-green-800',
            'Recovery': 'bg-blue-100 text-blue-800',
            'Acceleration': 'bg-red-100 text-red-800',
            'Speed': 'bg-orange-100 text-orange-800'
        };
        return colors[type] || 'bg-gray-100 text-gray-800';
    }
    
    /**
     * ENHANCED TRAINING SYSTEM - Session 1: Multi-Context Awareness
     * Detect training context and character characteristics for adaptive recommendations
     */
    
    /**
     * Detect current training phase based on stats and thresholds
     * @param {Object} effectiveStats - Current effective stats
     * @param {Object} thresholds - Target stat thresholds
     * @returns {string} Training phase: 'survival', 'building', 'optimization'
     */
    function detectTrainingPhase(effectiveStats, thresholds) {
        // Count critical deficits (stats below minimum survival thresholds)
        let criticalDeficits = 0;
        let totalDeficits = 0;
        
        Object.entries(thresholds).forEach(([stat, threshold]) => {
            const current = effectiveStats[stat] || 0;
            const deficit = Math.max(0, threshold - current);
            
            if (deficit > 0) {
                totalDeficits++;
                // Critical deficit is > 30% below threshold
                if (deficit > threshold * 0.3) {
                    criticalDeficits++;
                }
            }
        });
        
        // Survival phase: Any critical deficits that would cause race failure
        if (criticalDeficits > 0) {
            return 'survival';
        }
        
        // Building phase: Some deficits remain but not critical
        if (totalDeficits >= 2) {
            return 'building';
        }
        
        // Optimization phase: At or near all thresholds
        return 'optimization';
    }
    
    /**
     * Analyze character specialization and growth patterns
     * @param {Object} character - Character data
     * @returns {Object} Character analysis with specialization info
     */
    function analyzeCharacterType(character) {
        const growthBonus = character.statGrowth || {};
        const aptitudes = character.aptitudes || {};
        
        // Find stat with highest growth bonus
        let primarySpecialty = null;
        let maxGrowth = 0;
        Object.entries(growthBonus).forEach(([stat, growth]) => {
            if (growth > maxGrowth) {
                maxGrowth = growth;
                primarySpecialty = stat;
            }
        });
        
        // Categorize specialization level
        let specializationType = 'balanced';
        if (maxGrowth >= 20) {
            specializationType = 'specialist';
        } else if (maxGrowth >= 15) {
            specializationType = 'focused';
        }
        
        // Check for problem stats (poor aptitudes)
        const problemStats = [];
        Object.entries(aptitudes).forEach(([distance, aptitude]) => {
            if (aptitude && ['D', 'E', 'F', 'G'].includes(aptitude)) {
                problemStats.push(distance);
            }
        });
        
        return {
            type: specializationType,
            primarySpecialty,
            maxGrowth,
            problemStats,
            hasProblems: problemStats.length > 0
        };
    }
    
    /**
     * Detect current support deck context for rainbow optimization
     * @param {Array} supportCards - Current support card configuration
     * @returns {Object} Deck analysis with rainbow potential
     */
    function analyzeSupportDeckContext(supportCards) {
        const statCounts = {
            speed: 0,
            stamina: 0, 
            power: 0,
            guts: 0,
            wit: 0,
            friend: 0
        };
        
        // Count cards by primary stat type
        supportCards.forEach(card => {
            if (card && card.cardId) {
                const cardData = window.SupportCards?.getSupportCard(card.cardId);
                if (cardData && cardData.type) {
                    const type = cardData.type.toLowerCase();
                    if (statCounts.hasOwnProperty(type)) {
                        statCounts[type]++;
                    }
                }
            }
        });
        
        // Find dominant stat
        let dominantStat = null;
        let maxCount = 0;
        Object.entries(statCounts).forEach(([stat, count]) => {
            if (stat !== 'friend' && count > maxCount) {
                maxCount = count;
                dominantStat = stat;
            }
        });
        
        // Categorize deck type
        let deckType = 'balanced';
        if (maxCount >= 5) {
            deckType = 'rainbow-rich';
        } else if (maxCount >= 4) {
            deckType = 'focused';
        }
        
        return {
            type: deckType,
            dominantStat,
            dominantCount: maxCount,
            statDistribution: statCounts,
            totalCards: supportCards.filter(card => card && card.cardId).length
        };
    }
    
    /**
     * SESSION 2: Dynamic Threshold System - Research-based stat priorities
     * Implement adaptive priority system from Franco Lopez research findings  
     */
    
    /**
     * Get distance-specific guts thresholds from research
     * @param {string} distance - Target distance
     * @returns {number} Guts threshold where stamina becomes more valuable
     */
    function getGutsThreshold(distance) {
        const gutsThresholds = {
            'sprint': 210,
            'mile': 260, 
            'medium': 320,
            'long': 380
        };
        return gutsThresholds[distance] || 260;
    }
    
    /**
     * Calculate stat-specific multipliers based on research thresholds
     * @param {Object} effectiveStats - Current effective stats
     * @param {Object} thresholds - Target stat thresholds  
     * @param {string} distance - Target distance
     * @param {string} phase - Training phase context
     * @returns {Object} Stat priority multipliers
     */
    function calculateStatPriorities(effectiveStats, thresholds, distance, phase) {
        const priorities = {
            speed: 1.0,
            stamina: 1.0, 
            power: 1.0,
            guts: 1.0,
            wit: 1.0
        };
        
        // Research Finding: Stamina deficits are critical - massive performance impact
        const staminaDeficit = Math.max(0, thresholds.stamina - effectiveStats.stamina);
        if (staminaDeficit > 0) {
            // Critical stamina deficit gets highest priority
            if (staminaDeficit > thresholds.stamina * 0.3) {
                priorities.stamina = 4.0; // Emergency priority
            } else if (staminaDeficit > thresholds.stamina * 0.15) {
                priorities.stamina = 2.5; // High priority  
            } else {
                priorities.stamina = 1.8; // Moderate priority
            }
        }
        
        // Research Finding: Guts vs Stamina threshold system
        const gutsThreshold = getGutsThreshold(distance);
        const currentGuts = effectiveStats.guts || 0;
        const gutsDeficit = Math.max(0, gutsThreshold - currentGuts);
        
        if (currentGuts < gutsThreshold) {
            // Below threshold: Guts is MORE valuable than stamina
            const deficitRatio = gutsDeficit / gutsThreshold;
            if (deficitRatio > 0.5) {
                priorities.guts = 3.0; // Major guts deficit
            } else if (deficitRatio > 0.25) {
                priorities.guts = 2.0; // Moderate guts deficit
            } else {
                priorities.guts = 1.5; // Minor guts deficit
            }
        } else if (currentGuts > gutsThreshold + 50) {
            // Well above threshold: Guts has diminishing returns
            priorities.guts = 0.6;
        }
        
        // Research Finding: Wit thresholds for skill proc rates
        const currentWit = effectiveStats.wit || 0;
        if (currentWit < 300) {
            priorities.wit = 2.0; // Low wit is critical for skill procs
        } else if (currentWit < 500) {
            priorities.wit = 1.3; // Moderate wit still valuable
        } else {
            priorities.wit = 0.8; // Diminishing returns above 500
        }
        
        // FIXED: Speed priority - deficit-based scaling like other stats
        const speedDeficit = Math.max(0, thresholds.speed - effectiveStats.speed);
        if (speedDeficit > 0) {
            const speedDeficitRatio = speedDeficit / thresholds.speed;
            if (speedDeficitRatio > 0.6) {
                priorities.speed = 3.5; // Critical speed deficit - higher than most other stats
            } else if (speedDeficitRatio > 0.4) {
                priorities.speed = 2.8; // Major speed deficit
            } else if (speedDeficitRatio > 0.2) {
                priorities.speed = 2.2; // Moderate speed deficit
            } else {
                priorities.speed = 1.6; // Minor speed deficit
            }
        } else if (effectiveStats.speed > thresholds.speed + 50) {
            priorities.speed = 0.7; // Diminishing returns when well above threshold
        }
        
        // FIXED: Power priority - deficit-based scaling with distance modifiers
        const powerDeficit = Math.max(0, thresholds.power - effectiveStats.power);
        if (powerDeficit > 0) {
            const powerDeficitRatio = powerDeficit / thresholds.power;
            let basePriority = 1.0;
            
            if (powerDeficitRatio > 0.6) {
                basePriority = 3.2; // Critical power deficit
            } else if (powerDeficitRatio > 0.4) {
                basePriority = 2.5; // Major power deficit
            } else if (powerDeficitRatio > 0.2) {
                basePriority = 1.8; // Moderate power deficit
            } else {
                basePriority = 1.4; // Minor power deficit
            }
            
            // Distance modifiers
            if (distance === 'sprint' || distance === 'mile') {
                priorities.power = basePriority * 1.1; // 10% bonus for short distances
            } else {
                priorities.power = basePriority * 0.9; // 10% penalty for long distances
            }
        } else if (effectiveStats.power > thresholds.power + 50) {
            priorities.power = 0.6; // Diminishing returns when well above threshold
        }
        
        return priorities;
    }
    
    /**
     * Apply research-based training value calculation with dynamic priorities
     * @param {Object} training - Training option
     * @param {Object} effectiveStats - Current stats
     * @param {Object} thresholds - Target thresholds
     * @param {Object} priorities - Stat priority multipliers
     * @param {Object} context - Training context info
     * @returns {Object} Enhanced training value calculation
     */
    function calculateEnhancedTrainingValue(training, effectiveStats, thresholds, priorities, context) {
        let totalValue = 0;
        let reasoning = [];
        let specialNotes = [];
        
        // Calculate primary stat value with dynamic priority
        const primaryStat = training.primaryStat;
        const primaryGain = training.primaryGain || 0;
        const currentPrimary = effectiveStats[primaryStat] || 0;
        const thresholdPrimary = thresholds[primaryStat] || 0;
        const primaryDeficit = Math.max(0, thresholdPrimary - currentPrimary);
        const primaryPriority = priorities[primaryStat] || 1.0;
        
        // Apply mood and growth multipliers
        const appState = getAppState();
        const moodMultiplier = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[appState.currentMood]?.value || 1.0;
        const growthBonus = context.character.primarySpecialty === primaryStat ? context.character.maxGrowth : 0;
        let growthMultiplier = 1.0;
        if (growthBonus >= 20) growthMultiplier = 1.20;
        else if (growthBonus >= 15) growthMultiplier = 1.15;
        else if (growthBonus >= 10) growthMultiplier = 1.10;
        
        const adjustedPrimaryGain = Math.round(primaryGain * moodMultiplier * growthMultiplier);
        
        // Calculate diminishing returns factor based on current stat level
        let diminishingReturns = 1.0;
        const statLevel = currentPrimary;
        
        // Diminishing returns kick in progressively as stats increase
        if (statLevel >= 400) {
            diminishingReturns = 0.2; // Very high stats get minimal value
        } else if (statLevel >= 350) {
            diminishingReturns = 0.3;
        } else if (statLevel >= 300) {
            diminishingReturns = 0.4;
        } else if (statLevel >= 250) {
            diminishingReturns = 0.5;
        } else if (statLevel >= 200) {
            diminishingReturns = 0.6;
        } else if (statLevel >= 150) {
            diminishingReturns = 0.7;
        } else if (statLevel >= 100) {
            diminishingReturns = 0.8;
        }
        // Stats below 100 get full value (diminishingReturns = 1.0)
        
        // Priority-based value calculation with diminishing returns
        if (primaryDeficit > 0) {
            // Deficit value with priority multiplier and diminishing returns
            const deficitValue = Math.min(adjustedPrimaryGain, primaryDeficit) * primaryPriority * 2.0 * diminishingReturns;
            const surplusValue = Math.max(0, adjustedPrimaryGain - primaryDeficit) * 0.5 * diminishingReturns;
            totalValue += deficitValue + surplusValue;
            
            if (primaryPriority >= 2.0) {
                reasoning.push(`Critical ${primaryStat} need (${primaryDeficit} deficit)`);
                if (primaryPriority >= 3.0) {
                    specialNotes.push(`URGENT: Critical ${primaryStat} deficit!`);
                }
            }
        } else {
            // Above threshold value with priority consideration and diminishing returns
            const aboveThresholdValue = adjustedPrimaryGain * primaryPriority * 0.8 * diminishingReturns;
            totalValue += aboveThresholdValue;
        }
        
        // Add diminishing returns note when significant
        if (diminishingReturns <= 0.7) {
            specialNotes.push(`⬇️ Diminishing returns (${primaryStat}: ${statLevel})`);
        }
        
        // Secondary stats with priorities and diminishing returns
        Object.entries(training.secondaryStats || {}).forEach(([stat, gain]) => {
            const secondaryPriority = priorities[stat] || 1.0;
            const secondaryGain = Math.round(gain * moodMultiplier);
            const secondaryDeficit = Math.max(0, (thresholds[stat] || 0) - (effectiveStats[stat] || 0));
            
            // Calculate diminishing returns for secondary stat
            const secondaryStatLevel = effectiveStats[stat] || 0;
            let secondaryDiminishing = 1.0;
            if (secondaryStatLevel >= 400) secondaryDiminishing = 0.2;
            else if (secondaryStatLevel >= 350) secondaryDiminishing = 0.3;
            else if (secondaryStatLevel >= 300) secondaryDiminishing = 0.4;
            else if (secondaryStatLevel >= 250) secondaryDiminishing = 0.5;
            else if (secondaryStatLevel >= 200) secondaryDiminishing = 0.6;
            else if (secondaryStatLevel >= 150) secondaryDiminishing = 0.7;
            else if (secondaryStatLevel >= 100) secondaryDiminishing = 0.8;
            
            if (secondaryDeficit > 0) {
                const secondaryValue = Math.min(secondaryGain, secondaryDeficit) * secondaryPriority * secondaryDiminishing;
                totalValue += secondaryValue;
            } else {
                const secondaryValue = secondaryGain * secondaryPriority * 0.6 * secondaryDiminishing;
                totalValue += secondaryValue;
            }
        });
        
        
        // Energy efficiency consideration
        const energyCost = training.energyCost || 0;
        let energyEfficiency = 1.0;
        if (energyCost < 0) {
            // Energy recovery is valuable
            energyEfficiency = 1.3;
            specialNotes.push(`Restores ${Math.abs(energyCost)} energy`);
        } else if (energyCost > 25) {
            // High energy cost is penalized
            energyEfficiency = 0.85;
        }
        
        totalValue *= energyEfficiency;
        
        // Ensure minimum value - even bad training should have some small positive value
        const finalValue = Math.max(5, Math.round(totalValue)); // Minimum 5 points
        
        return {
            value: finalValue,
            reasoning: reasoning.join(', '),
            specialNotes,
            priorities: {
                primary: primaryPriority,
                energyEffect: energyEfficiency
            }
        };
    }

    /**
     * SESSION 3: Efficiency Engine - Advanced calculations for rainbow frequency, energy, and skill points
     * Based on Franco Lopez research on training optimization
     */
    
    /**
     * Calculate rainbow training frequency based on deck composition
     * @param {Object} deckContext - Support deck analysis
     * @param {string} trainingStat - Primary stat being trained
     * @returns {Object} Rainbow probability and frequency data
     */
    function calculateRainbowFrequency(deckContext, trainingStat) {
        const statDistribution = deckContext.statDistribution;
        const totalCards = deckContext.totalCards;
        const cardsOfType = statDistribution[trainingStat] || 0;
        
        // Research: Rainbow frequency based on support card count
        // 1 card = ~8%, 2 cards = ~17%, 3 cards = ~25%, 4 cards = ~33%, 5 cards = ~40%, 6 cards = ~50%
        const rainbowFrequency = Math.min(cardsOfType * 0.08 + (cardsOfType - 1) * 0.01, 0.50);
        
        // Quality factor based on deck type
        let qualityMultiplier = 1.0;
        if (deckContext.type === 'rainbow-rich' && deckContext.dominantStat === trainingStat) {
            qualityMultiplier = 1.3; // 30% better rainbow efficiency
        } else if (deckContext.type === 'focused' && deckContext.dominantStat === trainingStat) {
            qualityMultiplier = 1.15; // 15% better rainbow efficiency
        }
        
        return {
            frequency: rainbowFrequency,
            quality: qualityMultiplier,
            cardsOfType,
            expectedRainbowsPerTurn: rainbowFrequency * qualityMultiplier
        };
    }
    
    /**
     * Calculate training efficiency based on energy cost and stat gains
     * Research: G1 races = 2.86 points per energy, Level 3 training needs 66+ points to compete
     * @param {Object} training - Training option
     * @param {number} totalStatGains - Total adjusted stat gains
     * @param {number} skillPointValue - Skill point contribution
     * @returns {Object} Efficiency metrics
     */
    function calculateTrainingEfficiency(training, totalStatGains, skillPointValue) {
        const energyCost = training.energyCost || 0;
        
        // Handle energy recovery (wit training)
        if (energyCost <= 0) {
            return {
                pointsPerEnergy: Infinity, // Energy recovery is always efficient
                efficiencyRating: 'Excellent',
                raceComparison: 'Better than G1 races',
                energyBonus: Math.abs(energyCost)
            };
        }
        
        // Calculate total value including skill points (Research: skill points = 0.5 stat value)
        const totalValue = totalStatGains + (skillPointValue * 0.5);
        const pointsPerEnergy = totalValue / energyCost;
        
        // Compare to research benchmarks
        let efficiencyRating = 'Poor';
        let raceComparison = 'Worse than OP races (1.97)';
        
        if (pointsPerEnergy >= 2.86) {
            efficiencyRating = 'Excellent';
            raceComparison = 'Better than G1 races (2.86)';
        } else if (pointsPerEnergy >= 2.23) {
            efficiencyRating = 'Good';
            raceComparison = 'Better than G2/G3 races (2.23)';
        } else if (pointsPerEnergy >= 1.97) {
            efficiencyRating = 'Fair';
            raceComparison = 'Better than OP races (1.97)';
        }
        
        return {
            pointsPerEnergy,
            efficiencyRating,
            raceComparison,
            energyBonus: 0
        };
    }
    
    /**
     * Calculate skill point value based on training type and research
     * @param {Object} training - Training option
     * @param {string} trainingPhase - Current training phase
     * @returns {number} Effective skill point value
     */
    function calculateSkillPointValue(training, trainingPhase) {
        let baseSkillPoints = training.skillPoints || 2;
        
        // Research: Wit training gives double skill points
        if (training.type === 'wit') {
            baseSkillPoints = 4;
        }
        
        // Phase-based skill point priority
        let phaseMultiplier = 1.0;
        if (trainingPhase === 'optimization') {
            phaseMultiplier = 1.5; // Skill points more valuable in optimization phase
        } else if (trainingPhase === 'survival') {
            phaseMultiplier = 0.7; // Skill points less critical in survival phase
        }
        
        return baseSkillPoints * phaseMultiplier;
    }
    
    /**
     * Apply rainbow training bonus calculations
     * Research: Rainbow training significantly increases stat gains
     * @param {Object} training - Training option
     * @param {Object} rainbowData - Rainbow frequency data
     * @param {Object} deckContext - Deck composition context
     * @returns {Object} Rainbow bonus calculations
     */
    function calculateRainbowBonus(training, rainbowData, deckContext) {
        const isRainbowStat = deckContext.dominantStat === training.primaryStat;
        let rainbowMultiplier = 1.0;
        let rainbowNotes = [];
        
        if (isRainbowStat && rainbowData.frequency > 0.25) {
            // High rainbow frequency for this stat
            rainbowMultiplier = 1.0 + (rainbowData.frequency * 0.8); // Up to 40% bonus
            rainbowNotes.push(`${Math.round(rainbowData.frequency * 100)}% rainbow chance`);
            
            if (deckContext.type === 'rainbow-rich') {
                rainbowNotes.push('Frequent rainbows available');
                rainbowMultiplier *= 1.1; // Additional 10% for rainbow-rich decks
            }
        } else if (rainbowData.frequency > 0.15) {
            // Moderate rainbow frequency
            rainbowMultiplier = 1.0 + (rainbowData.frequency * 0.6); // Up to 30% bonus
            rainbowNotes.push(`${Math.round(rainbowData.frequency * 100)}% rainbow chance`);
        }
        
        return {
            multiplier: rainbowMultiplier,
            notes: rainbowNotes,
            isFrequentRainbow: rainbowData.frequency > 0.25
        };
    }
    
    /**
     * Enhanced training value calculation with efficiency engine
     * @param {Object} training - Training option
     * @param {Object} effectiveStats - Current stats
     * @param {Object} thresholds - Target thresholds
     * @param {Object} priorities - Stat priority multipliers
     * @param {Object} context - Training context info
     * @param {Object} deckContext - Support deck context
     * @param {string} trainingPhase - Current training phase
     * @returns {Object} Complete efficiency analysis
     */
    function calculateAdvancedTrainingValue(training, effectiveStats, thresholds, priorities, context, deckContext, trainingPhase) {
        // Get base calculation from Session 2
        const baseResult = calculateEnhancedTrainingValue(training, effectiveStats, thresholds, priorities, context);
        
        // SESSION 3: Add efficiency engine calculations
        const rainbowData = calculateRainbowFrequency(deckContext, training.primaryStat);
        const rainbowBonus = calculateRainbowBonus(training, rainbowData, deckContext);
        const skillPointValue = calculateSkillPointValue(training, trainingPhase);
        
        // Calculate total stat gains for efficiency analysis
        const appState = getAppState();
        const moodMultiplier = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[appState.currentMood]?.value || 1.0;
        
        let totalStatGains = 0;
        const growthBonus = context.character.primarySpecialty === training.primaryStat ? context.character.maxGrowth : 0;
        let growthMultiplier = 1.0;
        if (growthBonus >= 20) growthMultiplier = 1.20;
        else if (growthBonus >= 15) growthMultiplier = 1.15;
        else if (growthBonus >= 10) growthMultiplier = 1.10;
        
        totalStatGains += (training.primaryGain || 0) * moodMultiplier * growthMultiplier;
        
        Object.values(training.secondaryStats || {}).forEach(gain => {
            totalStatGains += gain * moodMultiplier;
        });
        
        // Apply rainbow bonus to stat gains
        totalStatGains *= rainbowBonus.multiplier;
        
        const efficiency = calculateTrainingEfficiency(training, totalStatGains, skillPointValue);
        
        // Combine all factors for final value
        let enhancedValue = baseResult.value || 5; // baseResult.value should always exist, fallback to minimum 5
        
        // Apply rainbow bonus
        enhancedValue *= rainbowBonus.multiplier;
        
        // Apply efficiency bonus for high-efficiency training
        if (efficiency.pointsPerEnergy >= 2.86) {
            enhancedValue *= 1.15; // 15% bonus for excellent efficiency
        } else if (efficiency.pointsPerEnergy >= 2.23) {
            enhancedValue *= 1.05; // 5% bonus for good efficiency
        }
        
        // Skill point contribution
        enhancedValue += skillPointValue * 3; // Each skill point worth 3 value units
        
        // Combine all special notes
        const allNotes = [
            ...baseResult.specialNotes,
            ...rainbowBonus.notes,
            ...(efficiency.energyBonus > 0 ? [`Restores ${efficiency.energyBonus} energy`] : []),
            ...(efficiency.efficiencyRating !== 'Poor' ? [`${efficiency.efficiencyRating} efficiency`] : [])
        ];
        
        const finalResult = {
            value: Math.max(5, Math.round(enhancedValue)), // Ensure minimum 5 points
            reasoning: baseResult.reasoning,
            specialNotes: allNotes,
            priorities: baseResult.priorities,
            efficiency: efficiency,
            rainbow: rainbowBonus,
            skillPoints: skillPointValue
        };
        return finalResult;
    }

    /**
     * SESSION 4: Risk Assessment - Fail chance calculations and energy management
     * Based on Franco Lopez research on training risk optimization
     */
    
    /**
     * Calculate training fail chance based on energy and mood
     * Research: Higher energy cost = higher fail chance, mood affects success rates
     * @param {Object} training - Training option
     * @param {number} currentEnergy - Current energy level (0-100)
     * @param {string} currentMood - Current mood state
     * @returns {Object} Fail chance analysis
     */
    function calculateFailChance(training, currentEnergy = 70, currentMood = 'normal') {
        const energyCost = training.energyCost || 0;
        
        // Base fail chance calculation (research approximation)
        let baseFailChance = 0;
        
        if (energyCost <= 0) {
            baseFailChance = 0; // Wit training never fails
        } else if (energyCost <= 20) {
            baseFailChance = 0.05; // 5% base fail chance for low energy training
        } else if (energyCost <= 25) {
            baseFailChance = 0.10; // 10% for moderate energy training
        } else if (energyCost <= 27) {
            baseFailChance = 0.15; // 15% for standard training
        } else {
            baseFailChance = 0.25; // 25% for high energy training (Guts)
        }
        
        // Energy level modifiers
        let energyModifier = 1.0;
        if (currentEnergy < 30) {
            energyModifier = 2.5; // Very high fail chance when low energy
        } else if (currentEnergy < 50) {
            energyModifier = 1.8; // High fail chance when moderate energy
        } else if (currentEnergy < 70) {
            energyModifier = 1.3; // Moderate increase when decent energy
        } else if (currentEnergy >= 90) {
            energyModifier = 0.7; // Reduced fail chance when high energy
        }
        
        // Mood modifiers (research: good mood improves success)
        let moodModifier = 1.0;
        const moodData = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[currentMood];
        if (moodData) {
            if (currentMood === 'excellent') {
                moodModifier = 0.6; // 40% reduction in fail chance
            } else if (currentMood === 'good') {
                moodModifier = 0.8; // 20% reduction in fail chance
            } else if (currentMood === 'bad') {
                moodModifier = 1.4; // 40% increase in fail chance
            } else if (currentMood === 'terrible') {
                moodModifier = 1.8; // 80% increase in fail chance
            }
        }
        
        const finalFailChance = Math.min(0.60, baseFailChance * energyModifier * moodModifier);
        
        return {
            failChance: finalFailChance,
            riskLevel: finalFailChance < 0.1 ? 'Low' : 
                      finalFailChance < 0.25 ? 'Moderate' : 
                      finalFailChance < 0.4 ? 'High' : 'Very High',
            energyImpact: energyModifier > 1.2 ? 'Negative' : 
                         energyModifier < 0.8 ? 'Positive' : 'Neutral',
            moodImpact: moodModifier > 1.2 ? 'Negative' : 
                       moodModifier < 0.8 ? 'Positive' : 'Neutral'
        };
    }
    
    /**
     * Assess energy management for training planning
     * Research: Energy recovery timing and rest vs training decisions
     * @param {number} currentEnergy - Current energy level
     * @param {Array} trainingOptions - Available training options
     * @param {string} trainingPhase - Current training phase
     * @returns {Object} Energy management recommendations
     */
    function assessEnergyManagement(currentEnergy = 70, trainingOptions, trainingPhase) {
        const energyAssessment = {
            currentLevel: currentEnergy,
            status: 'Normal',
            recommendation: 'Continue training',
            riskyTraining: [],
            safeTraining: [],
            recoveryNeeded: false
        };
        
        // Categorize energy status
        if (currentEnergy < 20) {
            energyAssessment.status = 'Critical';
            energyAssessment.recommendation = 'Rest immediately or use Wit training';
            energyAssessment.recoveryNeeded = true;
        } else if (currentEnergy < 40) {
            energyAssessment.status = 'Low';
            energyAssessment.recommendation = 'Prefer low-energy training or Wit';
            energyAssessment.recoveryNeeded = true;
        } else if (currentEnergy < 60) {
            energyAssessment.status = 'Moderate';
            energyAssessment.recommendation = 'Avoid high-energy training';
        } else if (currentEnergy >= 90) {
            energyAssessment.status = 'Excellent';
            energyAssessment.recommendation = 'All training options safe';
        }
        
        // Categorize training options by energy safety
        trainingOptions.forEach(training => {
            const failData = calculateFailChance(training, currentEnergy);
            if (failData.riskLevel === 'High' || failData.riskLevel === 'Very High') {
                energyAssessment.riskyTraining.push({
                    name: training.name,
                    energyCost: training.energyCost,
                    failChance: failData.failChance,
                    riskLevel: failData.riskLevel
                });
            } else {
                energyAssessment.safeTraining.push({
                    name: training.name,
                    energyCost: training.energyCost,
                    failChance: failData.failChance,
                    riskLevel: failData.riskLevel
                });
            }
        });
        
        return energyAssessment;
    }
    
    /**
     * Apply risk-adjusted value calculation
     * Research: "Don't do training if stats gained < 2x fail chance percentage"
     * @param {number} baseValue - Base training value
     * @param {Object} failData - Fail chance analysis
     * @param {number} totalStatGains - Total stat gains from training
     * @param {string} trainingPhase - Current training phase
     * @returns {Object} Risk-adjusted value and recommendations
     */
    function applyRiskAdjustment(baseValue, failData, totalStatGains, trainingPhase) {
        const failChance = failData.failChance;
        const failChancePercent = failChance * 100;
        
        // Research rule: Don't train if gains < 1.5x fail chance percentage (less strict than 2x)
        const minGainsThreshold = failChancePercent * 1.5;
        const meetsThreshold = totalStatGains >= minGainsThreshold;
        
        let riskAdjustedValue = baseValue;
        let riskNotes = [];
        let riskRecommendation = 'Proceed';
        
        // Apply much lighter penalties that don't destroy the base algorithm
        if (!meetsThreshold && failChance > 0.4) {
            // Only apply severe penalty for extremely high risk situations
            riskAdjustedValue *= 0.7; // Moderate penalty instead of 0.3
            riskNotes.push('⚠️ High risk, low reward');
            riskRecommendation = 'Consider alternatives';
        } else if (failChance > 0.5) {
            // Very high fail chance (>50%)
            riskAdjustedValue *= 0.8; // Light penalty instead of 0.5
            riskNotes.push('⚠️ Very high fail chance');
            riskRecommendation = 'High risk - evaluate carefully';
        } else if (failChance > 0.35) {
            // High fail chance but might be worth it
            riskAdjustedValue *= 0.9; // Very light penalty instead of 0.7
            riskNotes.push('⚠️ High fail chance');
            riskRecommendation = 'Moderate risk';
        } else if (failChance > 0.25) {
            // Moderate fail chance
            riskAdjustedValue *= 0.95; // Minimal penalty instead of 0.85
            riskNotes.push('⚠️ Moderate risk');
        }
        
        // Phase-specific risk tolerance (much lighter adjustments)
        if (trainingPhase === 'survival') {
            // Lower risk tolerance in survival phase
            if (failChance > 0.3) {
                riskAdjustedValue *= 0.9; // Light penalty instead of 0.6
                riskNotes.push('⚠️ Critical phase - be cautious');
            }
        } else if (trainingPhase === 'optimization') {
            // Higher risk tolerance in optimization phase
            if (failChance < 0.3) {
                riskAdjustedValue *= 1.05; // Small bonus for calculated risks
            }
        }
        
        // Energy recovery bonus (Wit training)
        if (failChance === 0) {
            riskNotes.push('✅ No fail risk');
            riskRecommendation = 'Safe choice';
        }
        
        return {
            adjustedValue: Math.round(riskAdjustedValue),
            riskNotes,
            riskRecommendation,
            meetsThreshold,
            failChancePercent: Math.round(failChancePercent),
            minGainsNeeded: Math.round(minGainsThreshold)
        };
    }
    
    /**
     * Enhanced training value calculation with risk assessment
     * @param {Object} training - Training option
     * @param {Object} effectiveStats - Current stats
     * @param {Object} thresholds - Target thresholds
     * @param {Object} priorities - Stat priority multipliers
     * @param {Object} context - Training context info
     * @param {Object} deckContext - Support deck context
     * @param {string} trainingPhase - Current training phase
     * @param {number} currentEnergy - Current energy level
     * @param {string} currentMood - Current mood
     * @returns {Object} Complete risk-assessed analysis
     */
    function calculateRiskAssessedTrainingValue(training, effectiveStats, thresholds, priorities, context, deckContext, trainingPhase, currentEnergy = 70, currentMood = 'normal') {
        // Get advanced calculation from Session 3
        const advancedResult = calculateAdvancedTrainingValue(training, effectiveStats, thresholds, priorities, context, deckContext, trainingPhase);
        
        // SESSION 4: Add risk assessment
        const failData = calculateFailChance(training, currentEnergy, currentMood);
        
        // Calculate total stat gains for risk analysis
        const appState = getAppState();
        const moodMultiplier = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[currentMood]?.value || 1.0;
        
        const growthBonus = context.character.primarySpecialty === training.primaryStat ? context.character.maxGrowth : 0;
        let growthMultiplier = 1.0;
        if (growthBonus >= 20) growthMultiplier = 1.20;
        else if (growthBonus >= 15) growthMultiplier = 1.15;
        else if (growthBonus >= 10) growthMultiplier = 1.10;
        
        let totalStatGains = (training.primaryGain || 0) * moodMultiplier * growthMultiplier;
        Object.values(training.secondaryStats || {}).forEach(gain => {
            totalStatGains += gain * moodMultiplier;
        });
        
        // Apply rainbow bonus to stat gains
        if (advancedResult.rainbow) {
            totalStatGains *= advancedResult.rainbow.multiplier;
        }
        
        const riskAssessment = applyRiskAdjustment(advancedResult.value, failData, totalStatGains, trainingPhase);
        
        
        // Combine all notes
        const allNotes = [
            ...advancedResult.specialNotes,
            ...riskAssessment.riskNotes
        ];
        
        return {
            value: riskAssessment.adjustedValue,
            reasoning: advancedResult.reasoning,
            specialNotes: allNotes,
            priorities: advancedResult.priorities,
            efficiency: advancedResult.efficiency,
            rainbow: advancedResult.rainbow,
            skillPoints: advancedResult.skillPoints,
            risk: {
                failChance: failData.failChance,
                riskLevel: failData.riskLevel,
                recommendation: riskAssessment.riskRecommendation,
                meetsThreshold: riskAssessment.meetsThreshold,
                energyImpact: failData.energyImpact,
                moodImpact: failData.moodImpact
            }
        };
    }

    /**
     * SESSION 5: Explanation System - Clear reasoning and educational content
     * Help users understand recommendations and learn optimal training strategies
     */
    
    /**
     * Generate detailed explanation for training recommendation
     * @param {Object} training - Training option
     * @param {Object} enhancedResult - Complete analysis result
     * @param {Object} effectiveStats - Current stats
     * @param {Object} thresholds - Target thresholds
     * @param {Object} contextInfo - Training context
     * @returns {Object} Detailed explanation with educational content
     */
    function generateTrainingExplanation(training, enhancedResult, effectiveStats, thresholds, contextInfo) {
        const explanation = {
            primaryReason: '',
            detailedAnalysis: [],
            educationalTips: [],
            tradeOffs: [],
            alternatives: []
        };
        
        const primaryStat = training.primaryStat;
        const currentStat = effectiveStats[primaryStat] || 0;
        const thresholdStat = thresholds[primaryStat] || 0;
        const deficit = Math.max(0, thresholdStat - currentStat);
        const priority = enhancedResult.priorities?.primary || 1.0;
        
        // Determine primary reason for recommendation
        if (priority >= 3.0) {
            explanation.primaryReason = `Critical ${primaryStat} deficit - urgent training needed`;
            explanation.detailedAnalysis.push(`Your current ${primaryStat} (${currentStat}) is ${deficit} points below the target (${thresholdStat})`);
            explanation.educationalTips.push(`💡 Critical deficits can cause race failures. Priority training this stat until you reach the threshold.`);
        } else if (priority >= 2.0) {
            explanation.primaryReason = `High priority ${primaryStat} training for optimal performance`;
            explanation.detailedAnalysis.push(`You need ${deficit} more ${primaryStat} points to reach optimal performance`);
        } else if (deficit > 0) {
            explanation.primaryReason = `Moderate ${primaryStat} improvement recommended`;
            explanation.detailedAnalysis.push(`${deficit} point gap in ${primaryStat} - good progress opportunity`);
        } else {
            explanation.primaryReason = `${primaryStat} maintenance and skill point generation`;
            explanation.detailedAnalysis.push(`${primaryStat} is adequate (${currentStat}/${thresholdStat}) - training provides skill points and minor gains`);
        }
        
        // Add context-specific analysis
        if (contextInfo.phase === 'survival') {
            explanation.detailedAnalysis.push(`⚠️ Survival Phase: Focus on critical deficits to avoid race failures`);
            explanation.educationalTips.push(`In survival phase, prioritize reaching minimum thresholds over optimization`);
        } else if (contextInfo.phase === 'optimization') {
            explanation.detailedAnalysis.push(`🎯 Optimization Phase: Balance stat improvements with skill point accumulation `);
            explanation.educationalTips.push(`In optimization phase, consider efficiency and rainbow opportunities`);
        }
        
        // Efficiency analysis
        if (enhancedResult.efficiency) {
            const eff = enhancedResult.efficiency;
            if (eff.efficiencyRating === 'Excellent') {
                explanation.detailedAnalysis.push(`⚡ Excellent efficiency (${eff.pointsPerEnergy.toFixed(1)} pts/energy) - ${eff.raceComparison}`);
                explanation.educationalTips.push(`Training with >2.86 pts/energy is more efficient than G1 races`);
            } else if (eff.efficiencyRating === 'Poor') {
                explanation.tradeOffs.push(`Low efficiency (${eff.pointsPerEnergy.toFixed(1)} pts/energy) but may be necessary for critical stats`);
            }
        }
        
        // Rainbow analysis
        if (enhancedResult.rainbow && enhancedResult.rainbow.isFrequentRainbow) {
            explanation.detailedAnalysis.push(`🌈 High rainbow frequency for this stat with your current deck`);
            explanation.educationalTips.push(`Rainbow training provides significant stat bonuses - prioritize when available`);
        }
        
        // Risk analysis
        if (enhancedResult.risk) {
            const risk = enhancedResult.risk;
            if (risk.riskLevel === 'High' || risk.riskLevel === 'Very High') {
                explanation.tradeOffs.push(`⚠️ High fail risk (${Math.round(risk.failChance * 100)}%) - ${risk.recommendation}`);
                explanation.educationalTips.push(`High-risk training should only be attempted with good energy and mood`);
            } else if (risk.failChance === 0) {
                explanation.detailedAnalysis.push(`✅ No fail risk - always safe to attempt`);
            }
        }
        
        // Growth bonus analysis
        if (contextInfo.character.primarySpecialty === primaryStat) {
            const growthBonus = contextInfo.character.maxGrowth;
            explanation.detailedAnalysis.push(`🌟 Character specialty: +${growthBonus}% ${primaryStat} growth bonus`);
            explanation.educationalTips.push(`Leverage character specialties for efficient stat building`);
        }
        
        // Secondary stats analysis
        const secondaryStats = Object.keys(training.secondaryStats || {});
        if (secondaryStats.length > 0) {
            explanation.detailedAnalysis.push(`📈 Also trains: ${secondaryStats.join(', ')} (multi-stat efficiency)`);
            if (secondaryStats.length > 1) {
                explanation.educationalTips.push(`Multi-stat training maximizes turn efficiency in limited training scenarios`);
            }
        }
        
        return explanation;
    }
    
    /**
     * Generate educational tips based on current training situation
     * @param {Array} recommendations - All training recommendations
     * @param {Object} contextInfo - Training context
     * @returns {Array} Educational tips and strategy advice
     */
    function generateEducationalTips(recommendations, contextInfo) {
        const tips = [];
        
        // Phase-specific tips
        if (contextInfo.phase === 'survival') {
            tips.push({
                category: 'Priority Strategy',
                tip: 'Focus on reaching minimum stat thresholds before optimizing. A failed race is worse than suboptimal stats.',
                icon: '⚠️'
            });
        } else if (contextInfo.phase === 'building') {
            tips.push({
                category: 'Building Strategy', 
                tip: 'Balance deficit filling with rainbow opportunities. Don\'t ignore secondary stats completely.',
                icon: '🏗️'
            });
        } else if (contextInfo.phase === 'optimization') {
            tips.push({
                category: 'Optimization Strategy',
                tip: 'Focus on efficiency and skill point accumulation. Consider rainbow frequency and energy costs.',
                icon: '🎯'
            });
        }
        
        // Character-specific tips
        if (contextInfo.character.type === 'specialist') {
            tips.push({
                category: 'Character Specialty',
                tip: `Leverage your ${contextInfo.character.primarySpecialty} specialty (+${contextInfo.character.maxGrowth}%) but don't neglect other stats.`,
                icon: '🌟'
            });
        }
        
        // Deck-specific tips
        if (contextInfo.deck.type === 'rainbow-rich') {
            tips.push({
                category: 'Rainbow Strategy',
                tip: `Your deck excels at ${contextInfo.deck.dominantStat} rainbows. Wait for double/triple rainbows when possible.`,
                icon: '🌈'
            });
        } else if (contextInfo.deck.type === 'balanced') {
            tips.push({
                category: 'Balanced Strategy',
                tip: 'Balanced decks require careful stat prioritization. Focus on deficits and avoid overtraining adequate stats.',
                icon: '⚖️'
            });
        }
        
        // Energy management tips
        if (contextInfo.energy.status === 'Low' || contextInfo.energy.status === 'Critical') {
            tips.push({
                category: 'Energy Management',
                tip: 'Low energy increases fail chance dramatically. Consider rest or Wit training for recovery.',
                icon: '🔋'
            });
        }
        
        // Risk management tips
        const highRiskTraining = recommendations.filter(r => r.risk && (r.risk.riskLevel === 'High' || r.risk.riskLevel === 'Very High'));
        if (highRiskTraining.length > 0) {
            tips.push({
                category: 'Risk Management',
                tip: 'High-risk training should provide at least 2x the fail chance percentage in stat gains (Franco Lopez rule).',
                icon: '⚠️'
            });
        }
        
        // General optimization tips
        if (contextInfo.phase !== 'survival') {
            tips.push({
                category: 'General Strategy',
                tip: 'Excellent efficiency (>2.86 pts/energy) beats G1 races. Good efficiency (>2.23) beats G2/G3 races.',
                icon: '⚡'
            });
        }
        
        return tips;
    }
    
    /**
     * Generate comprehensive training strategy explanation
     * @param {Array} recommendations - Top training recommendations
     * @param {Object} contextInfo - Training context
     * @param {Object} effectiveStats - Current stats
     * @param {Object} thresholds - Target thresholds
     * @returns {Object} Complete strategy explanation
     */
    function generateStrategyExplanation(recommendations, contextInfo, effectiveStats, thresholds) {
        const strategy = {
            currentSituation: '',
            recommendedApproach: '',
            keyConsiderations: [],
            nextSteps: []
        };
        
        // Analyze current situation
        const criticalDeficits = Object.entries(thresholds).filter(([stat, threshold]) => {
            const current = effectiveStats[stat] || 0;
            const deficit = threshold - current;
            return deficit > threshold * 0.3; // >30% below threshold
        });
        
        if (criticalDeficits.length > 0) {
            strategy.currentSituation = `Critical situation: ${criticalDeficits.length} stats severely below thresholds`;
            strategy.recommendedApproach = 'Emergency deficit filling - prioritize survival over optimization';
            strategy.nextSteps.push('Focus exclusively on critical deficits until reaching safe thresholds');
            strategy.nextSteps.push('Avoid high-risk training until energy/mood improves');
        } else {
            const totalDeficits = Object.entries(thresholds).filter(([stat, threshold]) => {
                const current = effectiveStats[stat] || 0;
                return current < threshold;
            }).length;
            
            if (totalDeficits >= 3) {
                strategy.currentSituation = `Building phase: ${totalDeficits} stats need improvement`;
                strategy.recommendedApproach = 'Systematic deficit reduction with efficiency focus';
                strategy.nextSteps.push('Address largest deficits first while maintaining rainbow opportunities');
                strategy.nextSteps.push('Balance primary and secondary stat gains');
            } else if (totalDeficits > 0) {
                strategy.currentSituation = `Optimization phase: ${totalDeficits} minor improvements needed`;
                strategy.recommendedApproach = 'Efficiency-focused training with skill point accumulation';
                strategy.nextSteps.push('Maximize efficiency and rainbow training');
                strategy.nextSteps.push('Focus on skill point generation for race performance');
            } else {
                strategy.currentSituation = 'All thresholds met - maintenance and skill focus';
                strategy.recommendedApproach = 'Skill point maximization and minor optimizations';
                strategy.nextSteps.push('Prioritize Wit training for skill points and energy');
                strategy.nextSteps.push('Maintain stats through efficient training');
            }
        }
        
        // Key considerations based on context
        if (contextInfo.deck.type === 'rainbow-rich') {
            strategy.keyConsiderations.push(`🌈 Rainbow-rich deck: Wait for ${contextInfo.deck.dominantStat} rainbows when possible`);
        }
        
        if (contextInfo.character.type === 'specialist') {
            strategy.keyConsiderations.push(`🌟 Character specialty: Leverage ${contextInfo.character.primarySpecialty} growth bonus efficiently`);
        }
        
        if (contextInfo.energy.status !== 'Normal' && contextInfo.energy.status !== 'Excellent') {
            strategy.keyConsiderations.push(`🔋 Energy management: ${contextInfo.energy.recommendation}`);
        }
        
        return strategy;
    }

    // Session 6: Fallback Options - Provide alternatives and trade-off explanations
    function analyzeTrainingAlternatives(recommendations, effectiveStats, thresholds, contextInfo) {
        const alternatives = [];
        
        if (recommendations.length === 0) {
            return [{
                option: 'Rest or Outing',
                reason: 'No training recommended - recover energy/mood',
                tradeoffs: 'Time cost vs. safety and future efficiency'
            }];
        }
        
        const topRecommendation = recommendations[0];
        const topValue = topRecommendation.totalValue;
        
        // Find alternative options within reasonable range (>70% of top value)
        const viableAlternatives = recommendations.slice(1, 4).filter(rec => 
            rec.totalValue >= topValue * 0.7
        );
        
        viableAlternatives.forEach(alt => {
            const alternative = {
                option: `Train ${alt.name}`,
                reason: alt.explanation?.primaryReason || 'Alternative training approach',
                tradeoffs: generateTradeoffAnalysis(topRecommendation, alt, contextInfo)
            };
            alternatives.push(alternative);
        });
        
        // Add strategic alternatives based on context
        const strategicAlts = generateStrategicAlternatives(topRecommendation, effectiveStats, thresholds, contextInfo);
        alternatives.push(...strategicAlts);
        
        return alternatives.slice(0, 3); // Limit to top 3 alternatives
    }
    
    function generateTradeoffAnalysis(primary, alternative, contextInfo) {
        const tradeoffs = [];
        
        // Compare efficiency
        if (alternative.efficiency < primary.efficiency) {
            const effDiff = ((primary.efficiency - alternative.efficiency) / primary.efficiency * 100).toFixed(0);
            tradeoffs.push(`${effDiff}% less efficient`);
        } else if (alternative.efficiency > primary.efficiency) {
            const effDiff = ((alternative.efficiency - primary.efficiency) / primary.efficiency * 100).toFixed(0);
            tradeoffs.push(`${effDiff}% more efficient`);
        }
        
        // Compare risk
        if (alternative.failChance > primary.failChance) {
            const riskDiff = (alternative.failChance - primary.failChance).toFixed(0);
            tradeoffs.push(`+${riskDiff}% fail risk`);
        } else if (alternative.failChance < primary.failChance) {
            const riskDiff = (primary.failChance - alternative.failChance).toFixed(0);
            tradeoffs.push(`-${riskDiff}% safer`);
        }
        
        // Compare stat focus
        if (primary.primaryStat !== alternative.primaryStat) {
            tradeoffs.push(`Builds ${alternative.primaryStat} instead of ${primary.primaryStat}`);
        }
        
        // Rainbow considerations
        if (contextInfo.deck.type === 'rainbow-rich') {
            if (alternative.rainbowFrequency > primary.rainbowFrequency) {
                tradeoffs.push('Better rainbow potential');
            } else if (alternative.rainbowFrequency < primary.rainbowFrequency) {
                tradeoffs.push('Lower rainbow chance');
            }
        }
        
        return tradeoffs.join(', ') || 'Similar overall value';
    }
    
    function generateStrategicAlternatives(topRecommendation, effectiveStats, thresholds, contextInfo) {
        const strategic = [];
        
        // Energy-focused alternative if current energy is low
        if (contextInfo.energy.current < 50) {
            strategic.push({
                option: 'Wit Training (Energy Recovery)',
                reason: 'Restore energy while building useful stats',
                tradeoffs: 'Lower immediate gains but enables future high-energy training'
            });
        }
        
        // Rest alternative if high fail risk
        if (topRecommendation.failChance > 15) {
            strategic.push({
                option: 'Rest/Outing',
                reason: 'Recover energy and mood to reduce training risks',
                tradeoffs: 'No stat gains but prevents potential energy loss from failures'
            });
        }
        
        // Rainbow waiting strategy
        if (contextInfo.deck.type === 'rainbow-rich' && contextInfo.deck.dominantStat) {
            const dominantStat = contextInfo.deck.dominantStat;
            const needsDominantStat = (effectiveStats[dominantStat.toLowerCase()] || 0) < (thresholds[dominantStat.toLowerCase()] || 0);
            
            if (needsDominantStat && topRecommendation.primaryStat !== dominantStat.toLowerCase()) {
                strategic.push({
                    option: `Wait for ${dominantStat} Rainbow`,
                    reason: `Your deck has strong ${dominantStat} support - rainbow training could be very efficient`,
                    tradeoffs: 'Risk missing rainbow vs. guaranteed but lower-efficiency training now'
                });
            }
        }
        
        // Conservative approach for critical situations
        const criticalDeficits = Object.entries(thresholds).filter(([stat, threshold]) => {
            const current = effectiveStats[stat] || 0;
            return (threshold - current) > threshold * 0.3;
        });
        
        if (criticalDeficits.length > 2) {
            strategic.push({
                option: 'Safe Deficit Training',
                reason: 'Focus on lowest-risk training to safely address critical deficits',
                tradeoffs: 'Slower progress but reduces risk of setbacks from training failures'
            });
        }
        
        return strategic.slice(0, 2); // Limit strategic alternatives
    }

    function generateFallbackExplanations(alternatives, contextInfo) {
        const explanations = {
            whenToConsider: [],
            riskProfile: 'Moderate',
            timeConsiderations: []
        };
        
        // When to consider alternatives
        if (contextInfo.energy.current < 40) {
            explanations.whenToConsider.push('When energy is critically low (safety first)');
        }
        
        if (contextInfo.phase === 'survival') {
            explanations.whenToConsider.push('During survival phase (avoid risks)');
            explanations.riskProfile = 'Conservative';
        } else if (contextInfo.phase === 'optimization') {
            explanations.whenToConsider.push('During optimization phase (maximize efficiency)');
            explanations.riskProfile = 'Aggressive';
        }
        
        // Time considerations
        if (contextInfo.character.type === 'late-bloomer') {
            explanations.timeConsiderations.push('Late-bloomers can afford patience for rainbow opportunities');
        } else if (contextInfo.character.type === 'early-peaker') {
            explanations.timeConsiderations.push('Early-peakers should prioritize immediate gains');
        }
        
        if (contextInfo.deck.type === 'rainbow-rich') {
            explanations.timeConsiderations.push('Rainbow-rich decks reward strategic waiting');
        } else if (contextInfo.deck.type === 'focused') {
            explanations.timeConsiderations.push('Focused decks benefit from consistent specialization');
        }
        
        return explanations;
    }

    /**
     * Get training recommendations using enhanced research-based algorithm
     * @param {Object} character - Selected character object
     * @returns {Array} Training recommendations sorted by value
     */
    function getTrainingRecommendations(character) {
        const appState = getAppState();
        
        // Debug logging flag - set to true when debugging
        const DEBUG_TRAINING = window.DEBUG_TRAINING || false;
        
        if (DEBUG_TRAINING) {
            console.log('🎯 TRAINING DEBUG: Starting recommendations calculation', {
                character: character?.name,
                targetTrack: appState.targetTrack,
                style: appState.style,
                mood: appState.currentMood
            });
        }
        
        const fullStyleName = mapStyleToFullName(appState.style);
        const thresholds = getCharacterAdjustedThresholds(character, appState.targetTrack, fullStyleName);
        
        // SESSION 1: Multi-Context Awareness - Detect training context
        const { effectiveStats } = calculateEffectiveStats();
        const trainingPhase = detectTrainingPhase(effectiveStats, thresholds);
        const characterAnalysis = analyzeCharacterType(character);
        
        if (DEBUG_TRAINING) {
            console.log('🎯 TRAINING DEBUG: Context analysis', {
                effectiveStats,
                thresholds,
                trainingPhase,
                characterAnalysis
            });
        }
        
        // Get current support deck configuration for context
        const deckConfiguration = (appState.plannerState.selectedSupportCards || []).map((cardId, index) => ({
            cardId,
            level: (appState.plannerState.selectedSupportCardLevels || [])[index] || 1,
            assignment: (appState.plannerState.selectedSupportCardAssignments || [])[index] || null,
            rainbowStatus: (appState.plannerState.selectedSupportCardRainbowStatus || [])[index] || false
        })).filter(item => item.cardId);
        
        const deckContext = analyzeSupportDeckContext(deckConfiguration);
        
        // SESSION 4: Add energy and mood context for risk assessment
        // Since we don't track actual energy, estimate based on training phase and mood
        let estimatedEnergy = 70; // Default energy level
        if (appState.currentMood === 'excellent') {
            estimatedEnergy = 85; // Good mood suggests higher energy
        } else if (appState.currentMood === 'good') {
            estimatedEnergy = 75;
        } else if (appState.currentMood === 'bad') {
            estimatedEnergy = 55; // Poor mood suggests lower energy
        } else if (appState.currentMood === 'terrible') {
            estimatedEnergy = 40; // Very poor mood suggests low energy
        }
        
        // Adjust energy estimate based on training phase
        if (trainingPhase === 'survival') {
            estimatedEnergy -= 10; // Survival mode suggests energy problems
        } else if (trainingPhase === 'optimization') {
            estimatedEnergy += 5; // Optimization suggests better energy management
        }
        
        const trainingOptions = [
            {
                type: 'speed',
                name: 'Speed Training',
                primaryStat: 'speed',
                primaryGain: 14,
                secondaryStats: { power: 7 },
                energyCost: 27,
                skillPoints: 2
            },
            {
                type: 'stamina', 
                name: 'Stamina Training',
                primaryStat: 'stamina',
                primaryGain: 13,
                secondaryStats: { guts: 6 },
                energyCost: 25,
                skillPoints: 2
            },
            {
                type: 'power',
                name: 'Power Training', 
                primaryStat: 'power',
                primaryGain: 12,
                secondaryStats: { stamina: 7 },
                energyCost: 26,
                skillPoints: 2
            },
            {
                type: 'guts',
                name: 'Guts Training',
                primaryStat: 'guts', 
                primaryGain: 12,
                secondaryStats: { speed: 5, power: 5 },
                energyCost: 28,
                skillPoints: 2
            },
            {
                type: 'wit',
                name: 'Wit Training',
                primaryStat: 'wit',
                primaryGain: 13,
                secondaryStats: { speed: 4 },
                energyCost: -5,
                skillPoints: 4
            }
        ];

        // SESSION 4: Add energy assessment to context
        const energyAssessment = assessEnergyManagement(estimatedEnergy, trainingOptions, trainingPhase);
        
        // Context-aware training message (will be used in recommendations display)
        const contextInfo = {
            phase: trainingPhase,
            character: characterAnalysis, 
            deck: deckContext,
            energy: energyAssessment,
            message: `Training Context: ${trainingPhase} phase with ${characterAnalysis.type} character using ${deckContext.type} deck | Energy: ${energyAssessment.status}`
        };

        // Calculate support card effects for the current deck (using existing deckConfiguration)
        
        const supportCardEffects = window.SupportCards?.calculateSupportCardEffects 
            ? window.SupportCards.calculateSupportCardEffects(deckConfiguration)
            : window.SupportCards?.getEmptyEffects?.() || {};
            

        // SESSION 2: Apply Dynamic Threshold System (using effectiveStats from above)
        
        // Calculate research-based stat priorities
        const statPriorities = calculateStatPriorities(
            effectiveStats, 
            thresholds, 
            appState.targetTrack, 
            trainingPhase
        );
        
        const recommendations = trainingOptions.map(training => {
            // SESSION 3: Use advanced calculation (no risk assessment needed)
            let enhancedResult;
            try {
                enhancedResult = calculateAdvancedTrainingValue(
                    training,
                    effectiveStats,
                    thresholds,
                    statPriorities,
                    contextInfo,
                    deckContext,
                    trainingPhase
                );
            } catch (error) {
                console.error(`💥 TRAINING CALCULATION ERROR for ${training.name}:`, error);
                console.error(`💥 Error details:`, {
                    training,
                    effectiveStats,
                    statPriorities,
                    error: error.message,
                    stack: error.stack
                });
                // Fallback to basic calculation with minimal value instead of 0
                const basicValue = Math.max(10, (training.primaryGain || 0) * 5); // Give it some basic value, minimum 10
                enhancedResult = { 
                    value: basicValue, 
                    reasoning: `Basic calculation (${error.message})`, 
                    specialNotes: ['⚠️ Using fallback calculation'] 
                };
            }
            // Create comprehensive recommendation using enhanced system
            const primaryDeficit = Math.max(0, (thresholds[training.primaryStat] || 0) - (effectiveStats[training.primaryStat] || 0));
            
            // Calculate effective gains (mood + growth + support card effects)
            const moodMultiplier = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[appState.currentMood]?.value || 1.0;
            const growthBonus = character.statGrowth?.[training.primaryStat] || 0;
            let growthMultiplier = 1.0;
            if (growthBonus >= 20) growthMultiplier = 1.20;
            else if (growthBonus >= 15) growthMultiplier = 1.15; 
            else if (growthBonus >= 10) growthMultiplier = 1.10;
            
            const supportCardMultiplier = supportCardEffects.trainingMultipliers?.[training.primaryStat] || 1.0;
            const adjustedPrimaryGain = Math.round(training.primaryGain * moodMultiplier * growthMultiplier * supportCardMultiplier);
            
            // Build stat gains object
            let statGains = {
                [training.primaryStat]: adjustedPrimaryGain
            };
            
            Object.entries(training.secondaryStats || {}).forEach(([stat, gain]) => {
                const secondaryGrowthBonus = character.statGrowth?.[stat] || 0;
                let secondaryGrowthMultiplier = 1.0;
                if (secondaryGrowthBonus >= 20) secondaryGrowthMultiplier = 1.20;
                else if (secondaryGrowthBonus >= 15) secondaryGrowthMultiplier = 1.15;
                else if (secondaryGrowthBonus >= 10) secondaryGrowthMultiplier = 1.10;
                
                const secondarySupportMultiplier = supportCardEffects.trainingMultipliers?.[stat] || 1.0;
                statGains[stat] = Math.round(gain * moodMultiplier * secondaryGrowthMultiplier * secondarySupportMultiplier);
            });
            
            // Generate comprehensive recommendation text
            const statGainText = Object.entries(statGains)
                .map(([stat, gain]) => `+${gain} ${stat.charAt(0).toUpperCase() + stat.slice(1)}`)
                .join(', ');
            
            let advice = `Gains: ${statGainText}`;
            
            // Add priority reasoning from enhanced calculation
            if (enhancedResult.reasoning) {
                advice += ` | ${enhancedResult.reasoning}`;
            }
            
            // SESSION 3: Add efficiency engine details to special notes
            const allSpecialNotes = [...enhancedResult.specialNotes];
            
            // Add training-specific bonuses
            if (growthBonus >= 20) {
                allSpecialNotes.push(`+${growthBonus}% growth bonus!`);
            } else if (growthBonus >= 10) {
                allSpecialNotes.push(`+${growthBonus}% growth bonus`);
            }
            
            if (training.type === 'wit') {
                allSpecialNotes.push("Double skill points (+4 SP)");
            }
            
            if (Object.keys(training.secondaryStats || {}).length > 1) {
                allSpecialNotes.push("Trains multiple stats");
            }
            
            // Add efficiency rating to notes
            if (enhancedResult.efficiency && enhancedResult.efficiency.efficiencyRating === 'Excellent') {
                allSpecialNotes.push('⚡ Excellent efficiency');
            } else if (enhancedResult.efficiency && enhancedResult.efficiency.efficiencyRating === 'Good') {
                allSpecialNotes.push('⚡ Good efficiency');
            }
            
            // Add rainbow information
            if (enhancedResult.rainbow && enhancedResult.rainbow.isFrequentRainbow) {
                allSpecialNotes.push('🌈 Frequent rainbows');
            }
            
            // SESSION 4: Add risk assessment to notes (already included in enhancedResult.specialNotes)
            
            if (allSpecialNotes.length > 0) {
                advice += ` | ${allSpecialNotes.join(', ')}`;
            }
            
            
            return {
                ...training,
                totalValue: enhancedResult.value,
                statGains,
                deficit: primaryDeficit,
                specialNotes: allSpecialNotes,
                recommendation: advice,
                enhancedPriority: enhancedResult.priorities,
                efficiency: enhancedResult.efficiency,
                rainbow: enhancedResult.rainbow,
                skillPointValue: enhancedResult.skillPoints,
                risk: enhancedResult.risk
            };
        });

        const sortedRecommendations = recommendations.sort((a, b) => b.totalValue - a.totalValue);
        
        if (DEBUG_TRAINING) {
            console.log('🎯 TRAINING DEBUG: Final recommendations', 
                sortedRecommendations.map(rec => ({
                    name: rec.name,
                    totalValue: rec.totalValue,
                    reasoning: rec.reasoning,
                    primaryStat: rec.primaryStat,
                    efficiency: rec.efficiency?.efficiencyRating
                }))
            );
        }
        
        
        // SESSION 5: Generate explanations and educational content
        const educationalTips = generateEducationalTips(sortedRecommendations, contextInfo);
        const strategyExplanation = generateStrategyExplanation(sortedRecommendations, contextInfo, effectiveStats, thresholds);
        
        // Add detailed explanations to top recommendations
        sortedRecommendations.slice(0, 3).forEach(recommendation => {
            recommendation.explanation = generateTrainingExplanation(
                recommendation,
                recommendation, // Enhanced result is embedded in recommendation
                effectiveStats,
                thresholds,
                contextInfo
            );
        });
        
        // SESSION 6: Generate fallback options and alternatives
        const trainingAlternatives = analyzeTrainingAlternatives(sortedRecommendations, effectiveStats, thresholds, contextInfo);
        const fallbackExplanations = generateFallbackExplanations(trainingAlternatives, contextInfo);
        
        // Add context information and educational content to the first recommendation for display
        if (sortedRecommendations.length > 0) {
            sortedRecommendations[0].contextInfo = contextInfo;
            sortedRecommendations[0].educationalTips = educationalTips;
            sortedRecommendations[0].strategyExplanation = strategyExplanation;
            sortedRecommendations[0].trainingAlternatives = trainingAlternatives;
            sortedRecommendations[0].fallbackExplanations = fallbackExplanations;
        }
        
        return sortedRecommendations;
    }
    
    /**
     * Attach mobile-optimized event listeners to stat numbers for inline editing
     */
    function attachStatEditingListeners() {
        // Detect mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
        
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(statElement => {
            // Skip if already has listeners attached
            if (statElement.hasAttribute('data-listeners-attached')) {
                return;
            }
            statElement.setAttribute('data-listeners-attached', 'true');
            let touchStartTime = 0;
            let touchTimer = null;
            let isLongPress = false;
            
            // Function to start editing
            const startEdit = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const statType = statElement.getAttribute('data-stat');
                const currentValue = statElement.getAttribute('data-value');
                
                // Create input element for inline editing
                const input = document.createElement('input');
                input.type = 'number';
                input.min = '0';
                input.max = '1200';
                input.value = currentValue;
                
                // Mobile-optimized input styling
                input.className = `w-full text-center font-bold text-lg border border-blue-400 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isMobile ? 'text-base min-h-[44px]' : ''}`;
                input.style.background = 'white';
                input.style.fontSize = isMobile ? '16px' : '18px'; // Prevent iOS zoom
                input.style.touchAction = 'manipulation';
                
                // Store original content and replace with input
                const originalContent = statElement.innerHTML;
                const originalClasses = statElement.className;
                statElement.innerHTML = '';
                statElement.appendChild(input);
                statElement.className = 'text-center flex items-center justify-center';
                
                // Focus and select text with mobile-specific timing
                if (isMobile) {
                    setTimeout(() => {
                        input.focus();
                        input.select();
                    }, 100);
                } else {
                    input.focus();
                    input.select();
                }
                
                // Handle input completion
                const finishEdit = () => {
                    // Remove the input element to prevent DOM conflicts
                    const newValue = parseInt(input.value) || 0;
                    const clampedValue = Math.max(0, Math.min(1200, newValue));
                    
                    // Update state first using the global state update function
                    const currentStats = getAppState().stats;
                    const newStats = { ...currentStats, [statType]: clampedValue };
                    updateAppState({ stats: newStats });
                    
                    // Immediately refresh training recommendations after stat update
                    refreshTrainingRecommendations();
                    
                    // Remove event listeners to prevent conflicts  
                    input.removeEventListener('blur', finishEdit);
                    
                    // Restore original element immediately
                    statElement.className = originalClasses;
                    statElement.innerHTML = originalContent;
                    statElement.setAttribute('data-value', clampedValue);
                    
                    // If global state update doesn't trigger re-render, wait and force re-render
                    setTimeout(() => {
                        const currentDisplayedStats = document.querySelector(`.stat-number[data-stat="${statType}"]`);
                        const expectedValue = clampedValue;
                        
                        if (currentDisplayedStats && parseInt(currentDisplayedStats.getAttribute('data-value')) !== expectedValue) {
                            const character = getAppState().selectedCharacter;
                            const activeTabContainer = document.getElementById('tab-content');
                            if (character && activeTabContainer) {
                                refreshCurrentTabCompletely(character, activeTabContainer);
                            }
                        } else {
                        }
                    }, 100);
                };
                
                const cancelEdit = () => {
                    statElement.className = originalClasses;
                    statElement.innerHTML = originalContent;
                };
                
                // Event listeners for input
                input.addEventListener('blur', finishEdit);
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        finishEdit();
                    } else if (e.key === 'Escape') {
                        cancelEdit();
                    }
                });
                
                // Mobile-specific: add tap outside to finish
                if (isMobile) {
                    const handleOutsideClick = (e) => {
                        if (!input.contains(e.target)) {
                            finishEdit();
                            document.removeEventListener('touchstart', handleOutsideClick);
                        }
                    };
                    setTimeout(() => {
                        document.addEventListener('touchstart', handleOutsideClick);
                    }, 200);
                }
            };
            
            if (isMobile) {
                // Mobile: Use tap and hold (long press)
                statElement.addEventListener('touchstart', (e) => {
                    isLongPress = false;
                    touchStartTime = Date.now();
                    
                    touchTimer = setTimeout(() => {
                        isLongPress = true;
                        // Add visual feedback for long press
                        statElement.style.transform = 'scale(0.95)';
                        statElement.style.opacity = '0.8';
                        
                        // Provide haptic feedback if available
                        if (navigator.vibrate) {
                            navigator.vibrate(50);
                        }
                        
                        startEdit(e);
                    }, 500); // 500ms for long press
                });
                
                statElement.addEventListener('touchend', (e) => {
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                        touchTimer = null;
                    }
                    
                    // Reset visual feedback
                    statElement.style.transform = '';
                    statElement.style.opacity = '';
                    
                    // If it wasn't a long press, show hint
                    if (!isLongPress && Date.now() - touchStartTime < 500) {
                        const hint = document.createElement('div');
                        hint.className = 'absolute bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-50';
                        hint.textContent = 'Hold to edit';
                        hint.style.top = '0';
                        hint.style.left = '50%';
                        hint.style.transform = 'translate(-50%, -100%)';
                        
                        statElement.style.position = 'relative';
                        statElement.appendChild(hint);
                        
                        setTimeout(() => {
                            if (hint.parentNode) {
                                hint.parentNode.removeChild(hint);
                            }
                        }, 1500);
                    }
                });
                
                statElement.addEventListener('touchcancel', () => {
                    if (touchTimer) {
                        clearTimeout(touchTimer);
                        touchTimer = null;
                    }
                    statElement.style.transform = '';
                    statElement.style.opacity = '';
                });
                
            } else {
                // Desktop: Use double-click
                statElement.addEventListener('dblclick', startEdit);
            }
        });
    }
    
    /**
     * Update only the support cards list without re-rendering the entire tab
     */
    function updateSupportCardsList() {
        const cardsContainer = document.querySelector('.max-h-96.overflow-y-auto .grid');
        const countContainer = document.querySelector('.text-sm.text-gray-600.mb-3');
        
        if (!cardsContainer || !countContainer) return;
        
        // Get current filters
        const filters = getAppState().plannerState.supportCardFilters;
        
        // Get all support cards using the same method as createSupportCardsTab
        const allCards = [];
        const seenIds = new Set();
        if (window.SupportCards) {
            ['Speed', 'Stamina', 'Power', 'Guts', 'Wit', 'Friend'].forEach(type => {
                const cards = window.SupportCards.getSupportCardsByType(type) || [];
                // Deduplicate cards by ID
                cards.forEach(card => {
                    if (!seenIds.has(card.id)) {
                        seenIds.add(card.id);
                        allCards.push(card);
                    }
                });
            });
        }
        
        // Filter cards based on current filters
        let filteredCards = allCards.filter(card => {
            const matchesSearch = !filters.search || 
                card.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                card.character.toLowerCase().includes(filters.search.toLowerCase());
            const matchesRarity = filters.rarity === 'all' || card.rarity === filters.rarity;
            const matchesType = filters.type === 'all' || card.type === filters.type;
            
            return matchesSearch && matchesRarity && matchesType;
        });
        
        // Update count
        countContainer.textContent = `Showing ${filteredCards.length} of ${allCards.length} cards`;
        
        // Update cards grid
        cardsContainer.innerHTML = filteredCards.map(card => `
            <div class="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors cursor-pointer available-card"
                 data-card-id="${card.id}">
                <div class="flex items-center justify-between mb-2">
                    <div class="font-medium text-gray-800">${card.name}</div>
                    <div class="flex gap-1">
                        <span class="text-xs px-2 py-1 rounded ${getRarityBadgeColor(card.rarity)}">${card.rarity}</span>
                    </div>
                </div>
                <div class="text-sm text-gray-600 mb-2">${card.character}</div>
                <div class="inline-block px-2 py-1 text-xs rounded-full ${getCardTypeColor(card.type)} mb-2">
                    ${card.type}
                </div>
                <div class="text-xs text-gray-500">
                    ${card.effect || 'Training bonus card'}
                </div>
            </div>
        `).join('');
    }
    
    /**
     * Set up event listeners specifically for the Support Cards tab
     */
    function setupSupportCardEventListeners() {
        // Search and filter handlers
        const cardSearch = document.getElementById('card-search');
        const rarityFilter = document.getElementById('rarity-filter');
        const typeFilter = document.getElementById('type-filter');
        
        if (cardSearch) {
            cardSearch.addEventListener('input', (e) => {
                // Update the search filter locally without triggering full re-render
                const searchValue = e.target.value;
                const currentState = getAppState();
                
                // Update the filter state
                currentState.plannerState.supportCardFilters.search = searchValue;
                
                // Re-render just the cards list instead of the whole tab
                updateSupportCardsList();
            });
        }
        
        if (rarityFilter) {
            rarityFilter.addEventListener('change', (e) => {
                // Update the rarity filter locally without triggering full re-render
                const currentState = getAppState();
                currentState.plannerState.supportCardFilters.rarity = e.target.value;
                updateSupportCardsList();
            });
        }
        
        if (typeFilter) {
            typeFilter.addEventListener('change', (e) => {
                // Update the type filter locally without triggering full re-render
                const currentState = getAppState();
                currentState.plannerState.supportCardFilters.type = e.target.value;
                updateSupportCardsList();
            });
        }

        // Deck management buttons
        const clearDeckBtn = document.getElementById('clear-deck-btn');
        const autoBuildBtn = document.getElementById('auto-build-btn');
        
        if (clearDeckBtn) {
            clearDeckBtn.addEventListener('click', () => {
                updatePlannerStateLocally({
                    plannerState: {
                        ...getAppState().plannerState,
                        selectedSupportCards: [null, null, null, null, null, null],
                        selectedSupportCardLevels: [1, 1, 1, 1, 1, 1],
                        selectedSupportCardAssignments: [null, null, null, null, null, null]
                    }
                });
                // Refresh the support cards tab to show updated deck
                const tabContent = document.getElementById('tab-content');
                if (tabContent && getAppState().plannerState.activeTab === 'support-cards') {
                    setTimeout(() => {
                        tabContent.innerHTML = createSupportCardsTab();
                        setupSupportCardEventListeners();
                    }, 10);
                }
            });
        }
        
        if (autoBuildBtn) {
            autoBuildBtn.addEventListener('click', () => {
                autoBuildOptimalDeck();
            });
        }

        // Unified card interaction handler (only add once)
        if (!window.supportCardListenersAdded) {
            window.supportCardListenersAdded = true;
            
            // Handle select dropdowns with change event
            document.addEventListener('change', (e) => {
                // Training assignment dropdowns
                if (e.target.classList.contains('training-assignment-select')) {
                    const slot = parseInt(e.target.dataset.slot);
                    const assignment = e.target.value || null;
                    updateCardAssignment(slot, assignment);
                    return;
                }
            });
            
            document.addEventListener('click', (e) => {
                // Card level selection
                if (e.target.classList.contains('level-select-btn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const slot = parseInt(e.target.dataset.slot);
                    const level = parseInt(e.target.dataset.level);
                    updateCardLevel(slot, level);
                    return false;
                }
                
                // Remove card from deck
                if (e.target.classList.contains('remove-card-btn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const slot = parseInt(e.target.dataset.slot);
                    removeCardFromDeck(slot);
                    return false;
                }
                
                // Rainbow training toggle
                if (e.target.classList.contains('rainbow-toggle-btn')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const slot = parseInt(e.target.dataset.slot);
                    updateCardRainbowStatus(slot);
                    return false;
                }
                
                // Available card selection
                if (e.target.closest('.available-card')) {
                    const cardElement = e.target.closest('.available-card');
                    const cardId = cardElement.dataset.cardId;
                    addCardToDeck(cardId);
                    return;
                }
                
                // Deck slot click (for future drag-and-drop or card replacement)
                if (e.target.closest('.deck-slot')) {
                    const slot = parseInt(e.target.closest('.deck-slot').dataset.slot);
                }
            });
        }
    }
    
    /**
     * Add a support card to the deck
     * @param {string} cardId - ID of the card to add
     */
    function addCardToDeck(cardId) {
        const currentCards = [...(getAppState().plannerState.selectedSupportCards || [null, null, null, null, null, null])];
        
        // Check if card is already in deck
        if (currentCards.includes(cardId)) {
            return; // Card already selected
        }
        
        // Find first empty slot
        const emptySlotIndex = currentCards.findIndex(card => card === null);
        if (emptySlotIndex !== -1) {
            currentCards[emptySlotIndex] = cardId;
            updatePlannerStateLocally({
                plannerState: {
                    ...getAppState().plannerState,
                    selectedSupportCards: currentCards
                }
            });
            // Refresh the support cards tab to show updated deck (preserve scroll positions)
            const tabContent = document.getElementById('tab-content');
            if (tabContent && getAppState().plannerState.activeTab === 'support-cards') {
                const tabScrollPosition = tabContent.scrollTop;
                const selectionContainer = document.querySelector('.max-h-96.overflow-y-auto');
                const selectionScrollPosition = selectionContainer ? selectionContainer.scrollTop : 0;
                setTimeout(() => {
                    tabContent.innerHTML = createSupportCardsTab();
                    setupSupportCardEventListeners();
                    tabContent.scrollTop = tabScrollPosition;
                    const newSelectionContainer = document.querySelector('.max-h-96.overflow-y-auto');
                    if (newSelectionContainer) {
                        newSelectionContainer.scrollTop = selectionScrollPosition;
                    }
                }, 10);
            }
            
            // Refresh training recommendations since deck changed
            refreshTrainingRecommendations();
        }
    }
    
    /**
     * Remove a support card from a specific deck slot
     * @param {number} slot - Slot index to clear
     */
    function removeCardFromDeck(slot) {
        const currentCards = [...(getAppState().plannerState.selectedSupportCards || [null, null, null, null, null, null])];
        const currentLevels = [...(getAppState().plannerState.selectedSupportCardLevels || [1, 1, 1, 1, 1, 1])];
        const currentAssignments = [...(getAppState().plannerState.selectedSupportCardAssignments || [null, null, null, null, null, null])];
        
        currentCards[slot] = null;
        currentLevels[slot] = 1; // Reset level when card is removed
        currentAssignments[slot] = null; // Reset assignment when card is removed
        
        updatePlannerStateLocally({
            plannerState: {
                ...getAppState().plannerState,
                selectedSupportCards: currentCards,
                selectedSupportCardLevels: currentLevels,
                selectedSupportCardAssignments: currentAssignments
            }
        });
        // Refresh the support cards tab to show updated deck (preserve scroll positions)
        const tabContent = document.getElementById('tab-content');
        if (tabContent && getAppState().plannerState.activeTab === 'support-cards') {
            const tabScrollPosition = tabContent.scrollTop;
            const selectionContainer = document.querySelector('.max-h-96.overflow-y-auto');
            const selectionScrollPosition = selectionContainer ? selectionContainer.scrollTop : 0;
            setTimeout(() => {
                tabContent.innerHTML = createSupportCardsTab();
                setupSupportCardEventListeners();
                tabContent.scrollTop = tabScrollPosition;
                const newSelectionContainer = document.querySelector('.max-h-96.overflow-y-auto');
                if (newSelectionContainer) {
                    newSelectionContainer.scrollTop = selectionScrollPosition;
                }
            }, 10);
        }
        
        // Refresh training recommendations since deck changed
        refreshTrainingRecommendations();
    }
    
    /**
     * Update the level of a support card in the deck
     * @param {number} slot - Deck slot index (0-5)
     * @param {number} level - New level for the card
     */
    function updateCardLevel(slot, level) {
        const currentLevels = [...(getAppState().plannerState.selectedSupportCardLevels || [1, 1, 1, 1, 1, 1])];
        currentLevels[slot] = level;
        
        updatePlannerStateLocally({
            plannerState: {
                ...getAppState().plannerState,
                selectedSupportCardLevels: currentLevels
            }
        });
        
        // Update deck display immediately to show new level effects
        const tabContent = document.getElementById('tab-content');
        if (tabContent && getAppState().plannerState.activeTab === 'support-cards') {
            setTimeout(() => {
                tabContent.innerHTML = createSupportCardsTab();
                setupSupportCardEventListeners();
            }, 10);
        }
        
        // Refresh training recommendations since card level changed
        refreshTrainingRecommendations();
    }
    
    /**
     * Update the training assignment of a support card in the deck
     * @param {number} slot - Deck slot index (0-5)
     * @param {string|null} assignment - Training assignment ('speed', 'stamina', 'power', 'guts', 'wit', or null)
     */
    function updateCardAssignment(slot, assignment) {
        const currentAssignments = [...(getAppState().plannerState.selectedSupportCardAssignments || [null, null, null, null, null, null])];
        currentAssignments[slot] = assignment;
        
        updatePlannerStateLocally({
            plannerState: {
                ...getAppState().plannerState,
                selectedSupportCardAssignments: currentAssignments
            }
        });
        
        // Refresh training recommendations since card assignment changed
        refreshTrainingRecommendations();
        
    }
    
    /**
     * Update the rainbow training status of a support card in the deck
     * @param {number} slot - Deck slot index (0-5)
     */
    function updateCardRainbowStatus(slot) {
        const currentRainbowStatus = [...(getAppState().plannerState.selectedSupportCardRainbowStatus || [false, false, false, false, false, false])];
        currentRainbowStatus[slot] = !currentRainbowStatus[slot]; // Toggle the status
        
        updatePlannerStateLocally({
            plannerState: {
                ...getAppState().plannerState,
                selectedSupportCardRainbowStatus: currentRainbowStatus
            }
        });
        
        // Refresh the support cards tab to show updated rainbow status
        const tabContent = document.getElementById('tab-content');
        if (tabContent && getAppState().plannerState.activeTab === 'support-cards') {
            setTimeout(() => {
                tabContent.innerHTML = createSupportCardsTab();
                setupSupportCardEventListeners();
            }, 10);
        }
        
        // Refresh training recommendations since rainbow status changed
        refreshTrainingRecommendations();
        
    }
    
    /**
     * Auto-build an optimal deck based on character needs
     */
    function autoBuildOptimalDeck() {
        if (!window.Uma?.SupportCards) return;
        
        // Get character and current stats to determine needs
        const character = getAppState().selectedCharacter;
        if (!character) return;
        
        // Get all available cards
        const allCards = [];
        const seenIds = new Set();
        ['Speed', 'Stamina', 'Power', 'Guts', 'Wit', 'Friend'].forEach(type => {
            const cards = window.SupportCards.getSupportCardsByType(type) || [];
            // Deduplicate cards by ID
            cards.forEach(card => {
                if (!seenIds.has(card.id)) {
                    seenIds.add(card.id);
                    allCards.push(card);
                }
            });
        });
        
        // Simple auto-build logic: prioritize SSR cards and diverse types
        const ssrCards = allCards.filter(card => card.rarity === 'SSR');
        const srCards = allCards.filter(card => card.rarity === 'SR');
        const rCards = allCards.filter(card => card.rarity === 'R');
        
        // Build deck with variety: try to get different types
        const selectedCards = [];
        const usedTypes = new Set();
        
        // First pass: Add SSR cards of different types
        for (const card of ssrCards) {
            if (selectedCards.length >= 6) break;
            if (!usedTypes.has(card.type)) {
                selectedCards.push(card.id);
                usedTypes.add(card.type);
            }
        }
        
        // Second pass: Fill remaining slots with highest rarity available
        const remainingCards = [...ssrCards, ...srCards, ...rCards]
            .filter(card => !selectedCards.includes(card.id));
        
        for (const card of remainingCards) {
            if (selectedCards.length >= 6) break;
            selectedCards.push(card.id);
        }
        
        // Pad with nulls if needed
        while (selectedCards.length < 6) {
            selectedCards.push(null);
        }
        
        updatePlannerStateLocally({
            plannerState: {
                ...getAppState().plannerState,
                selectedSupportCards: selectedCards
            }
        });
        // Refresh the support cards tab to show updated deck (preserve scroll positions)
        const tabContent = document.getElementById('tab-content');
        if (tabContent && getAppState().plannerState.activeTab === 'support-cards') {
            const tabScrollPosition = tabContent.scrollTop;
            const selectionContainer = document.querySelector('.max-h-96.overflow-y-auto');
            const selectionScrollPosition = selectionContainer ? selectionContainer.scrollTop : 0;
            setTimeout(() => {
                tabContent.innerHTML = createSupportCardsTab();
                setupSupportCardEventListeners();
                tabContent.scrollTop = tabScrollPosition;
                const newSelectionContainer = document.querySelector('.max-h-96.overflow-y-auto');
                if (newSelectionContainer) {
                    newSelectionContainer.scrollTop = selectionScrollPosition;
                }
            }, 10);
        }
    }
    
    // Register the redesigned character planner component module
    
    if (window.Uma) {
        window.Uma.Components = window.Uma.Components || {};
        window.Uma.Components.CharacterPlannerRedesigned = {
            createCharacterPlannerRedesigned,
            switchTab
        };
    } else {
        window.Uma = {
            Components: {
                CharacterPlannerRedesigned: {
                    createCharacterPlannerRedesigned,
                    switchTab
                }
            }
        };
    }
    
    
    // Also export to global scope for compatibility
    window.createCharacterPlannerRedesigned = createCharacterPlannerRedesigned;
    window.switchTab = switchTab;
    
    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('components/character-planner-redesigned');
    }

    
})();