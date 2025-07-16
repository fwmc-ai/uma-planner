/**
 * Uma Musume Career Planner - Character Planner Component
 * Contains the complete character planner UI with stat controls, training recommendations, and analysis
 */

// Define the character planner component module
(function() {
    'use strict';
    
    /**
     * Create the character planner component with full functionality
     * @returns {HTMLElement} Complete character planner container
     */
    function createCharacterPlanner() {
        const container = createElement('div', 'min-h-screen');
        
        const mainContainer = createElement('div', 'container mx-auto px-4 py-6');
        
        // Back button
        const backButton = createElement('div', 'flex items-center mb-6');
        const backBtn = createElement('button', 'flex items-center gap-2 px-5 py-3 bg-white bg-opacity-90 text-gray-800 hover:text-gray-900 hover:bg-opacity-100 transition-all text-base font-medium rounded-lg shadow-sm border border-gray-200');
        backBtn.innerHTML = `${Icons.ArrowLeft} Back`;
        backBtn.addEventListener('click', () => {
            updateAppState({ currentView: 'home', selectedCharacter: null });
            
            // Scroll to top when returning to home page
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        });
        backButton.appendChild(backBtn);
        
        const character = appState.selectedCharacter;
        const thresholds = STAT_THRESHOLDS[appState.targetTrack][appState.style];
        
        // Helper functions
        const getStatColor = (value, threshold, stat) => {
            // Check for diminishing returns first
            if ((stat === 'speed' && value > 1200) || 
                ((stat === 'guts' || stat === 'wit') && value > 400)) {
              return value >= threshold ? 'text-orange-500' : 'text-red-600';
            }
            
            if (value >= threshold) return 'text-green-600';
            if (value >= threshold * 0.8) return 'text-yellow-600';
            return 'text-red-600';
        };

        const getStatEfficiencyWarning = (stat, value, threshold, targetTrack) => {
            if (stat === 'speed' && value > 1200) {
              return STAT_EFFICIENCY.warnings.speedSoftCap;
            }
            if (stat === 'guts' && value > 400) {
              return STAT_EFFICIENCY.warnings.gutsOverInvest;
            }
            if (stat === 'wit' && value > 400) {
              return STAT_EFFICIENCY.warnings.witOverInvest;
            }
            if (stat === 'stamina') {
              const excessiveThresholds = {
                sprint: 400, mile: 500, medium: 550, long: 650
              };
              if (value > excessiveThresholds[targetTrack] + 200) {
                return STAT_EFFICIENCY.warnings.staminaOverflow;
              }
            }
            return null;
        };

        const getTrainingRecommendations = () => {
            // Real Uma Musume training advisor system
            const trainingOptions = [
                {
                    type: 'speed',
                    name: 'Speed Training',
                    primaryStat: 'speed',
                    primaryGain: 14, // Level 5 facility
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
                    energyCost: -5, // Restores energy
                    skillPoints: 4
                }
            ];

            const recommendations = trainingOptions.map(training => {
                const currentPrimary = appState.stats[training.primaryStat];
                const thresholdPrimary = thresholds[training.primaryStat];
                const primaryDeficit = Math.max(0, thresholdPrimary - currentPrimary);
                
                // Calculate total value of this training
                let totalValue = 0;
                let statGains = {};
                
                // Primary stat value
                if (primaryDeficit > 0) {
                    const primaryProgress = Math.min(training.primaryGain, primaryDeficit);
                    totalValue += primaryProgress * 2; // Primary stats weighted higher
                    statGains[training.primaryStat] = training.primaryGain;
                }
                
                // Secondary stat values
                Object.entries(training.secondaryStats).forEach(([stat, gain]) => {
                    const currentStat = appState.stats[stat];
                    const thresholdStat = thresholds[stat];
                    const deficit = Math.max(0, thresholdStat - currentStat);
                    
                    if (deficit > 0) {
                        const progress = Math.min(gain, deficit);
                        totalValue += progress * 1; // Secondary stats normal weight
                        statGains[stat] = gain;
                    }
                });
                
                // Energy efficiency factor
                const energyEfficiency = training.energyCost <= 0 ? 1.5 : 
                                       training.energyCost <= 25 ? 1.2 :
                                       training.energyCost <= 27 ? 1.0 : 0.8;
                
                totalValue *= energyEfficiency;
                
                // Special bonuses
                let specialNotes = [];
                
                // Wit training bonus (energy recovery + skill points)
                if (training.type === 'wit') {
                    specialNotes.push("Restores 5 energy");
                    specialNotes.push("Double skill points (+4 SP)");
                    totalValue += 10; // Bonus for utility
                }
                
                // Multi-stat training bonus
                if (Object.keys(training.secondaryStats).length > 1) {
                    specialNotes.push("Trains multiple stats");
                    totalValue += 5;
                }
                
                // Critical need bonus
                if (primaryDeficit > 200) {
                    specialNotes.push(`Critical ${training.primaryStat} need!`);
                    totalValue *= 1.5;
                }
                
                return {
                    ...training,
                    totalValue: Math.round(totalValue),
                    statGains,
                    deficit: primaryDeficit,
                    specialNotes,
                    recommendation: generateTrainingAdvice(training, primaryDeficit, statGains, specialNotes)
                };
            });

            return recommendations.sort((a, b) => b.totalValue - a.totalValue);
        };

        const generateTrainingAdvice = (training, deficit, statGains, specialNotes) => {
            const statGainText = Object.entries(statGains)
                .map(([stat, gain]) => `+${gain} ${stat.charAt(0).toUpperCase() + stat.slice(1)}`)
                .join(', ');
            
            let advice = `Gains: ${statGainText}`;
            
            if (deficit > 150) {
                advice += ` | High priority - large ${training.primaryStat} gap`;
            } else if (deficit > 50) {
                advice += ` | Good progress toward ${training.primaryStat} goal`;
            } else if (deficit > 0) {
                advice += ` | Finishing touches on ${training.primaryStat}`;
            }
            
            if (specialNotes.length > 0) {
                advice += ` | ${specialNotes.join(', ')}`;
            }
            
            return advice;
        };

        const getStatRecommendation = (stat, current, threshold, deficit) => {
            if (deficit <= 25) {
              return `Almost there! +${deficit} ${stat} to reach threshold`;
            } else if (deficit <= 100) {
              return `Focus on ${stat} training - need +${deficit} more`;
            } else {
              return `Priority: ${stat} training - significant gap of ${deficit}`;
            }
        };

        const getOverallStatus = () => {
            const trainingOptions = getTrainingRecommendations();
            
            // Check for efficiency warnings
            const efficiencyWarnings = Object.entries(appState.stats)
              .map(([stat, value]) => getStatEfficiencyWarning(stat, value, thresholds[stat], appState.targetTrack))
              .filter(warning => warning !== null);
            
            // Check if all stats meet thresholds
            const allStatsMet = Object.entries(thresholds).every(([stat, threshold]) => 
                appState.stats[stat] >= threshold
            );
            
            if (allStatsMet) {
              return { 
                status: 'success', 
                message: '✅ Perfect! All stats meet URA Finals requirements.' 
              };
            }
            
            const topTraining = trainingOptions[0];
            const secondTraining = trainingOptions[1];
            
            if (efficiencyWarnings.length > 0) {
              return { 
                status: 'warning', 
                message: `⚠️ Efficiency Warning: ${efficiencyWarnings[0]}` 
              };
            }
            
            // Generate intelligent training recommendations based on Uma Musume mechanics
            const hasLargeDeficits = trainingOptions.some(t => t.deficit > 200);
            const topValue = topTraining.totalValue;
            const secondValue = secondTraining.totalValue;
            
            // Critical training recommendation (large stat gaps)
            if (hasLargeDeficits && topTraining.deficit > 200) {
              return { 
                status: 'critical', 
                message: `🚨 Recommended Training: ${topTraining.name} | ${topTraining.recommendation}` 
              };
            }
            
            // High value training with close alternative
            if (Math.abs(topValue - secondValue) <= 5) {
              return { 
                status: 'info', 
                message: `📊 Training Options: ${topTraining.name} or ${secondTraining.name} | Both provide good value` 
              };
            }
            
            // Clear best training choice
            if (topValue > secondValue + 10) {
              return { 
                status: 'warning', 
                message: `⚠️ Recommended Training: ${topTraining.name} | ${topTraining.recommendation.split('|')[0].trim()}` 
              };
            }
            
            // General recommendation
            return { 
              status: 'info', 
              message: `📈 Next Training: ${topTraining.name} | ${topTraining.recommendation.split('|')[0].trim()}` 
            };
        };

        const overallStatus = getOverallStatus();
        const trainingRecommendations = getTrainingRecommendations();
        const characterAdvice = getCharacterTrainingAdvice(character, appState.targetTrack, appState.style);

        // Main header panel (without status badge)
        const mainPanel = createElement('div', 'bg-white rounded-xl shadow-lg p-6 mb-6');
        mainPanel.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="text-5xl">${character.image}</div>
                <div class="flex-1">
                    <h1 class="text-2xl font-bold text-gray-800">${character.name}</h1>
                    <div class="flex items-center gap-2 mt-1 mb-3">
                        <span class="text-yellow-500 font-bold">${getRarityStars(character.rarity)}</span>
                        <div class="flex flex-wrap gap-1">
                            ${character.styles ? character.styles.map(style => `
                                <span class="px-2 py-1 rounded-full text-xs font-medium bg-opacity-90 ${getStyleColor(style)}">
                                    ${getStyleDisplayName(style)}
                                </span>
                            `).join('') : `
                                <span class="px-2 py-1 rounded-full text-xs font-medium bg-opacity-90 ${getStyleColor(character.defaultStyle)}">
                                    ${getStyleDisplayName(character.defaultStyle)}
                                </span>
                            `}
                        </div>
                    </div>
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center gap-4">
                            <span class="text-gray-600 font-medium">Surface:</span>
                            <div class="flex gap-1">
                                <span>Turf: <span class="${getAptitudeColor(character.aptitudes.turf)}">${character.aptitudes.turf}</span></span>
                                <span class="text-gray-400">•</span>
                                <span>Dirt: <span class="${getAptitudeColor(character.aptitudes.dirt)}">${character.aptitudes.dirt}</span></span>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="text-gray-600 font-medium">Distance:</span>
                            <div class="flex flex-wrap gap-2">
                                <span>Sprint: <span class="${getAptitudeColor(character.aptitudes.sprint)}">${character.aptitudes.sprint}</span></span>
                                <span>Mile: <span class="${getAptitudeColor(character.aptitudes.mile)}">${character.aptitudes.mile}</span></span>
                                <span>Medium: <span class="${getAptitudeColor(character.aptitudes.medium)}">${character.aptitudes.medium}</span></span>
                                <span>Long: <span class="${getAptitudeColor(character.aptitudes.long)}">${character.aptitudes.long}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Performance Status Panel - Prominent display for critical feedback
        const statusPanel = createElement('div', 'mb-6');
        const statusClass = overallStatus.status === 'success' ? 'border-green-500 bg-green-50' : 
                           overallStatus.status === 'critical' ? 'border-red-500 bg-red-50' :
                           overallStatus.status === 'warning' ? 'border-yellow-500 bg-yellow-50' : 
                           'border-blue-500 bg-blue-50';
        
        const statusIcon = overallStatus.status === 'success' ? '✅' : 
                          overallStatus.status === 'critical' ? '🚨' :
                          overallStatus.status === 'warning' ? '⚠️' : 
                          '📊';

        statusPanel.innerHTML = `
            <div class="rounded-xl border-l-4 ${statusClass} ${statusClass.replace('border-', 'border-l-')} p-4 shadow-md">
                <div class="flex items-start gap-3">
                    <div class="text-2xl">${statusIcon}</div>
                    <div class="flex-1">
                        <h3 class="font-bold text-lg ${
                            overallStatus.status === 'success' ? 'text-green-800' : 
                            overallStatus.status === 'critical' ? 'text-red-800' :
                            overallStatus.status === 'warning' ? 'text-yellow-800' : 
                            'text-blue-800'
                        } mb-1">Performance Analysis</h3>
                        <p class="text-base ${
                            overallStatus.status === 'success' ? 'text-green-700' : 
                            overallStatus.status === 'critical' ? 'text-red-700' :
                            overallStatus.status === 'warning' ? 'text-yellow-700' : 
                            'text-blue-700'
                        }">${overallStatus.message}</p>
                        ${overallStatus.status === 'critical' ? `
                            <div class="mt-2 text-sm text-red-600 bg-red-100 rounded-md p-2">
                                <strong>💡 Quick Fix:</strong> Focus training on the highlighted stat deficit to meet URA Finals requirements for your selected distance and running style.
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        // Stats planning section with mobile-optimized layout
        const statsSection = createElement('div', 'space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8');
        
        // Left side - Target Selectors, Quick Import and Stat controls
        const leftPanel = createElement('div', 'space-y-6 order-1 lg:order-1');
        leftPanel.innerHTML = `
            <!-- Target Selectors Section (Universal) -->
            <div class="bg-white bg-opacity-90 rounded-lg p-4 shadow-sm border border-gray-200 space-y-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span>🎯</span>
                    Training Target
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-base font-semibold text-gray-800 mb-2">Target Style</label>
                        <select id="style-select" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                            ${STYLES.map(style => `
                                <option value="${style}" ${appState.style === style ? 'selected' : ''}>
                                    ${getStyleDisplayName(style)}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-base font-semibold text-gray-800 mb-2">Target Distance</label>
                        <select id="distance-select" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                            ${TRACK_TYPES.map(track => `
                                <option value="${track}" ${appState.targetTrack === track ? 'selected' : ''}>
                                    ${track.charAt(0).toUpperCase() + track.slice(1)}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                </div>
            </div>

            <!-- Quick Import Section -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                <h3 class="font-semibold text-blue-800 flex items-center gap-2">
                    <span>📋</span>
                    Quick Import Stats
                </h3>
                <div class="text-xs text-blue-700 mb-2">
                    Enter 5 numbers in order:<br>
                    Speed, Stamina, Power, Guts, Wit<br>
                    Any format works: "450 550 400 350 300" or "450, 550, 400, 350, 300"
                    <br><span class="font-medium">⌨️ Press Enter to import quickly!</span>
                </div>
                <textarea id="stats-import" placeholder="Enter 5 numbers separated by spaces/commas (Speed, Stamina, Power, Guts, Wit)" 
                          class="w-full px-3 py-2 text-sm border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                          rows="2"></textarea>
                <div class="flex gap-2">
                    <button id="import-stats-btn" class="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                        Import Stats
                    </button>
                    <button id="reset-stats-btn" class="px-4 py-2 bg-gray-500 text-white text-sm rounded-lg hover:bg-gray-600 transition-colors">
                        Reset to Base
                    </button>
                </div>
            </div>
        `;

        // Create Stat Planning container
        const statPlanningContainer = createElement('div', 'bg-white bg-opacity-90 rounded-lg p-4 shadow-sm border border-gray-200 space-y-4');
        const statPlanningHeader = createElement('h2', 'text-xl font-bold text-gray-800 flex items-center gap-2');
        statPlanningHeader.innerHTML = `<span>${Icons.Target}</span> Stat Planning`;
        statPlanningContainer.appendChild(statPlanningHeader);
        
        // Create enhanced stat controls with +/- buttons
        Object.entries(appState.stats).forEach(([stat, value]) => {
            const warning = getStatEfficiencyWarning(stat, value, thresholds[stat], appState.targetTrack);
            const progressPercent = Math.min((value / thresholds[stat]) * 100, 100);
            const isOptimal = value >= thresholds[stat];
            
            const statControl = createElement('div', 'space-y-3 p-4 bg-white rounded-lg border border-gray-200');
            statControl.innerHTML = `
                <div class="flex justify-between items-center mb-2">
                    <label class="text-sm font-semibold text-gray-800 capitalize">${stat}</label>
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-gray-500">Required:</span>
                        <span class="text-sm font-medium ${getStatColor(value, thresholds[stat], stat)}">
                            ${value} / ${thresholds[stat]}
                        </span>
                        ${isOptimal ? '<span class="text-xs text-green-600">✓</span>' : ''}
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div class="h-2 rounded-full transition-all duration-300 ${
                        isOptimal ? 'bg-green-500' : value >= thresholds[stat] * 0.8 ? 'bg-yellow-500' : 'bg-red-500'
                    }" style="width: ${progressPercent}%"></div>
                </div>
                
                <!-- Input Controls -->
                <div class="flex items-center gap-2">
                    <button class="stat-control-btn stat-btn-minus flex-shrink-0 w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-pink-400 hover:bg-pink-50 flex items-center justify-center font-bold text-gray-600 hover:text-pink-600 transition-colors" 
                            data-stat="${stat}" data-action="minus">
                        −
                    </button>
                    
                    <div class="flex-1 relative">
                        <input type="number" min="0" max="1200" value="${value}" 
                               class="stat-input w-full px-4 py-3 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                               data-stat="${stat}" placeholder="Enter value">
                    </div>
                    
                    <button class="stat-control-btn stat-btn-plus flex-shrink-0 w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-pink-400 hover:bg-pink-50 flex items-center justify-center font-bold text-gray-600 hover:text-pink-600 transition-colors" 
                            data-stat="${stat}" data-action="plus">
                        +
                    </button>
                </div>
                
                <!-- Quick increment buttons -->
                <div class="flex gap-2 justify-center">
                    <button class="quick-increment-btn quick-add-btn px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" 
                            data-stat="${stat}" data-amount="10">+10</button>
                    <button class="quick-increment-btn quick-add-btn px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" 
                            data-stat="${stat}" data-amount="25">+25</button>
                    <button class="quick-increment-btn quick-add-btn px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" 
                            data-stat="${stat}" data-amount="50">+50</button>
                    <button class="quick-increment-btn quick-add-btn px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors" 
                            data-stat="${stat}" data-amount="100">+100</button>
                </div>
                
                ${warning ? `<div class="text-xs text-orange-700 bg-orange-50 border border-orange-200 p-3 rounded-md">
                    <span class="font-semibold">⚡ Efficiency Notice:</span> ${warning}
                </div>` : ''}
            `;
            statPlanningContainer.appendChild(statControl);
        });
        
        // Add the stat planning container to the left panel
        leftPanel.appendChild(statPlanningContainer);


        // Mobile Training Recommendations (shown after Target Selectors on mobile)
        const mobileTrainingPanel = createElement('div', 'lg:hidden order-3');
        
        // Right side - Controls and recommendations (reordered on mobile)
        const rightPanel = createElement('div', 'space-y-4 order-4 lg:order-2');
        
        // Base stats reference
        const baseStatsPanel = createElement('div', 'bg-gray-50 rounded-lg p-4');
        baseStatsPanel.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>${Icons.Star}</span>
                Base Stats Reference
            </h3>
            <div class="grid grid-cols-2 gap-2 text-sm">
                ${Object.entries(character.baseStats).map(([stat, value]) => `
                    <div class="flex justify-between">
                        <span class="text-gray-600 capitalize">${stat}:</span>
                        <span class="font-medium text-gray-800">${value}</span>
                    </div>
                `).join('')}
            </div>
            <div class="mt-2 text-xs text-gray-500">
                Starting values for ${character.name} at initial ★${character.rarity}
            </div>
        `;
        

        // Training recommendations for both mobile and desktop
        if (trainingRecommendations.length > 0) {
            // Create training recommendations HTML
            const trainingHTML = `
                <h3 class="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span>${Icons.TrendingUp}</span>
                    Training Recommendations
                </h3>
                <div class="space-y-3">
                    ${trainingRecommendations.slice(0, 5).map((training, idx) => `
                        <div class="p-3 bg-white rounded-md border-l-4 ${
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
                                    <span class="font-medium text-sm sm:text-base">${training.name}</span>
                                </div>
                                <div class="text-right">
                                    <div class="text-xs sm:text-sm font-semibold text-gray-700">Value: ${training.totalValue}</div>
                                    <div class="text-xs text-gray-500">Energy: ${training.energyCost > 0 ? `-${training.energyCost}` : `+${Math.abs(training.energyCost)}`}</div>
                                </div>
                            </div>
                            <div class="text-xs text-gray-600">${training.recommendation}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-600">
                    💡 Recommendations based on actual Uma Musume training mechanics: stat gains, energy costs, and secondary benefits.
                </div>
            `;

            // Mobile training panel (shown right after Quick Import)
            mobileTrainingPanel.innerHTML = `
                <div class="bg-gray-50 rounded-lg p-4">
                    ${trainingHTML}
                </div>
            `;
            
            // Desktop training panel (hidden on mobile)
            const desktopTrainingPanel = createElement('div', 'hidden lg:block bg-gray-50 rounded-lg p-4');
            desktopTrainingPanel.innerHTML = trainingHTML;
            
            rightPanel.appendChild(desktopTrainingPanel);
        }

        // Character advice panel
        const advicePanel = createElement('div', 'bg-blue-50 rounded-lg p-4');
        advicePanel.innerHTML = `
            <h3 class="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <span>${Icons.Users}</span>
                Character Training Guide
            </h3>
            <div class="space-y-3">
                ${characterAdvice.priority.length > 0 ? `
                    <div>
                        <h4 class="font-semibold text-blue-700 mb-2">🎯 Priority Training</h4>
                        <div class="space-y-1">
                            ${characterAdvice.priority.map(advice => `
                                <div class="text-sm text-blue-800 bg-blue-100 p-2 rounded">${advice}</div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${characterAdvice.secondary.length > 0 ? `
                    <div>
                        <h4 class="font-semibold text-blue-700 mb-2">📈 Secondary Focus</h4>
                        <div class="space-y-1">
                            ${characterAdvice.secondary.map(advice => `
                                <div class="text-sm text-blue-800 bg-blue-100 p-2 rounded">${advice}</div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${characterAdvice.avoid.length > 0 ? `
                    <div>
                        <h4 class="font-semibold text-red-700 mb-2">⚠️ Avoid</h4>
                        <div class="space-y-1">
                            ${characterAdvice.avoid.map(advice => `
                                <div class="text-sm text-red-800 bg-red-100 p-2 rounded">${advice}</div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                ${characterAdvice.tips.length > 0 ? `
                    <div>
                        <h4 class="font-semibold text-green-700 mb-2">💡 Tips</h4>
                        <div class="space-y-1">
                            ${characterAdvice.tips.map(tip => `
                                <div class="text-sm text-green-800 bg-green-100 p-2 rounded">${tip}</div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        // Skill recommendations panel
        const skillRecommendations = getSkillRecommendations(character, appState.targetTrack, appState.style);
        const skillPanel = createElement('div', 'bg-purple-50 rounded-lg p-4');
        skillPanel.innerHTML = `
            <h3 class="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <span>${Icons.Sparkles}</span>
                Recommended Skills
            </h3>
            
            ${skillRecommendations.essential.length > 0 ? `
                <div class="mb-4">
                    <h4 class="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                        Essential Skills
                    </h4>
                    <div class="space-y-2">
                        ${skillRecommendations.essential.map(skill => `
                            <div class="bg-white p-3 rounded-md border-l-4 border-red-500">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="font-medium text-purple-900">${skill.name}</span>
                                    <span class="text-xs px-2 py-1 rounded-full ${
                                        skill.type === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                                        skill.type === 'Silver' ? 'bg-gray-100 text-gray-800' : 
                                        'bg-green-100 text-green-800'
                                    }">${skill.type}</span>
                                </div>
                                <p class="text-sm text-purple-700">${skill.reason}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${skillRecommendations.recommended.length > 0 ? `
                <div class="mb-4">
                    <h4 class="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Recommended Skills
                    </h4>
                    <div class="space-y-2">
                        ${skillRecommendations.recommended.map(skill => `
                            <div class="bg-white p-3 rounded-md border-l-4 border-blue-500">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="font-medium text-purple-900">${skill.name}</span>
                                    <span class="text-xs px-2 py-1 rounded-full ${
                                        skill.type === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                                        skill.type === 'Silver' ? 'bg-gray-100 text-gray-800' : 
                                        'bg-green-100 text-green-800'
                                    }">${skill.type}</span>
                                </div>
                                <p class="text-sm text-purple-700">${skill.reason}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${skillRecommendations.conditional.length > 0 ? `
                <div>
                    <h4 class="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                        Conditional Skills
                    </h4>
                    <div class="space-y-2">
                        ${skillRecommendations.conditional.map(skill => `
                            <div class="bg-white p-3 rounded-md border-l-4 border-green-500">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="font-medium text-purple-900">${skill.name}</span>
                                    <span class="text-xs px-2 py-1 rounded-full ${
                                        skill.type === 'Gold' ? 'bg-yellow-100 text-yellow-800' : 
                                        skill.type === 'Silver' ? 'bg-gray-100 text-gray-800' : 
                                        'bg-green-100 text-green-800'
                                    }">${skill.type}</span>
                                </div>
                                <p class="text-sm text-purple-700">${skill.reason}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="mt-4 p-3 bg-purple-100 rounded-md">
                <p class="text-xs text-purple-800">
                    <strong>💡 Career Planning Tip:</strong> Focus on Essential skills first, then add Recommended skills. 
                    Conditional skills provide consistent stat boosts when conditions match your target races.
                </p>
            </div>
        `;

        rightPanel.appendChild(advicePanel);
        rightPanel.appendChild(skillPanel);
        
        statsSection.appendChild(leftPanel);
        statsSection.appendChild(mobileTrainingPanel);
        statsSection.appendChild(rightPanel);

        // Event listeners for stat controls
        const handleStatChange = (stat, value) => {
            const numValue = parseInt(value) || 0;
            const clampedValue = Math.max(0, Math.min(1200, numValue));
            updateAppState({
                stats: {
                    ...appState.stats,
                    [stat]: clampedValue
                }
            });
        };

        // Event listeners are now handled globally via event delegation to prevent duplicates
        // No need to add them here as they are set up once in the initialization

        // Import stats functionality
        setTimeout(() => {
            const importBtn = document.getElementById('import-stats-btn');
            const importText = document.getElementById('stats-import');
            
            if (importBtn && importText) {
                // Shared import logic to avoid duplication
                const performImport = () => {
                    const text = importText.value.trim();
                    if (!text) return;
                    
                    let imported = 0;
                    const stats = ['speed', 'stamina', 'power', 'guts', 'wit'];
                    let newStats = { ...appState.stats };
                    
                    // Method 1: Try parsing as simple numbers in order (most common)
                    const numbers = text.match(/\d+/g);
                    if (numbers && numbers.length >= 5) {
                        stats.forEach((stat, index) => {
                            if (numbers[index]) {
                                const value = Math.max(0, Math.min(1200, parseInt(numbers[index])));
                                const input = document.querySelector(`.stat-input[data-stat="${stat}"]`);
                                if (input) {
                                    input.value = value;
                                    newStats[stat] = value;
                                    imported++;
                                }
                            }
                        });
                    } else {
                        // Method 2: Try parsing with labels (fallback)
                        const statPatterns = {
                            speed: /(?:speed|sp|スピード)[\s:]*(\d+)/i,
                            stamina: /(?:stamina|st|スタミナ)[\s:]*(\d+)/i,
                            power: /(?:power|pw|パワー)[\s:]*(\d+)/i,
                            guts: /(?:guts|gt|根性)[\s:]*(\d+)/i,
                            wit: /(?:wit|wi|wit|賢さ)[\s:]*(\d+)/i
                        };
                        
                        stats.forEach(stat => {
                            const match = text.match(statPatterns[stat]);
                            if (match) {
                                const value = Math.max(0, Math.min(1200, parseInt(match[1])));
                                const input = document.querySelector(`.stat-input[data-stat="${stat}"]`);
                                if (input) {
                                    input.value = value;
                                    newStats[stat] = value;
                                    imported++;
                                }
                            }
                        });
                    }
                    
                    // Update all stats at once to avoid multiple re-renders
                    if (imported > 0) {
                        appState.stats = newStats;
                        renderApp();
                        
                        importText.value = '';
                        importText.placeholder = `✅ Imported ${imported} stats!`;
                        setTimeout(() => {
                            importText.placeholder = 'Enter 5 numbers separated by spaces/commas (Speed, Stamina, Power, Guts, Wit)';
                        }, 2000);
                    } else {
                        importText.placeholder = '❌ Please enter 5 numbers (e.g., "450 550 400 350 300")';
                        setTimeout(() => {
                            importText.placeholder = 'Enter 5 numbers separated by spaces/commas (Speed, Stamina, Power, Guts, Wit)';
                        }, 3000);
                    }
                };

                // Click handler for button
                importBtn.addEventListener('click', performImport);
                
                // Enter key support for textarea
                importText.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault(); // Prevent newline in textarea
                        performImport();
                    }
                });
            }

            // Reset to Base functionality
            const resetBtn = document.getElementById('reset-stats-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    const character = appState.selectedCharacter;
                    if (!character) return;
                    
                    // Reset all stats to character's actual base stats
                    const stats = ['speed', 'stamina', 'power', 'guts', 'wit'];
                    let newStats = {};
                    stats.forEach(stat => {
                        const input = document.querySelector(`.stat-input[data-stat="${stat}"]`);
                        if (input && character.baseStats && character.baseStats[stat] !== undefined) {
                            const baseValue = character.baseStats[stat];
                            input.value = baseValue;
                            newStats[stat] = baseValue;
                        }
                    });
                    
                    // Update all stats at once to avoid multiple re-renders
                    appState.stats = newStats;
                    renderApp();
                });
            }
            // Style selector
            const styleSelect = document.getElementById('style-select');
            if (styleSelect) {
                styleSelect.addEventListener('change', (e) => {
                    updateAppState({ style: e.target.value });
                });
            }

            // Distance selector
            const distanceSelect = document.getElementById('distance-select');
            if (distanceSelect) {
                distanceSelect.addEventListener('change', (e) => {
                    updateAppState({ targetTrack: e.target.value });
                });
            }

        }, 0);

        mainContainer.appendChild(backButton);
        mainContainer.appendChild(mainPanel);
        mainContainer.appendChild(statusPanel);
        mainContainer.appendChild(statsSection);
        container.appendChild(mainContainer);
        
        return container;
    }

    // Register the character planner component module
    if (window.Uma) {
        window.Uma.Components = window.Uma.Components || {};
        window.Uma.Components.CharacterPlanner = {
            createCharacterPlanner
        };
    } else {
        window.Uma = {
            Components: {
                CharacterPlanner: {
                    createCharacterPlanner
                }
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('components/character-planner');
    }

    console.log('Character planner component module loaded successfully');
})();