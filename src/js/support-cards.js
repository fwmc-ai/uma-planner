/**
 * Unified Support Cards API
 * 
 * This module provides a unified interface to access support card metadata
 * across all rarities. It coordinates between the separate rarity-specific 
 * modules for optimal performance and organization.
 * 
 * Dependencies:
 * - support-cards-r.js (R cards metadata)
 * - support-cards-sr.js (SR cards metadata)  
 * - support-cards-ssr.js (SSR cards metadata)
 * 
 * Note: Level-dependent data has been moved to level-progression modules
 */

// Dependencies will be loaded by module loader
console.log('Support Cards: Unified module starting to load...');

/**
 * Unified API for getting support card metadata
 * @param {string} cardId - The card identifier
 * @returns {Object|null} Card metadata or null if not found
 */
function getSupportCard(cardId) {
    // Try R cards first (most common)
    if (window.RSupportCards && window.RSupportCards.hasRSupportCard(cardId)) {
        return window.RSupportCards.getRSupportCard(cardId);
    }
    
    // Try SR cards
    if (window.SRSupportCards && window.SRSupportCards.hasSRSupportCard(cardId)) {
        return window.SRSupportCards.getSRSupportCard(cardId);
    }
    
    // Try SSR cards
    if (window.SSRSupportCards && window.SSRSupportCards.hasSSRSupportCard(cardId)) {
        return window.SSRSupportCards.getSSRSupportCard(cardId);
    }
    
    return null;
}

/**
 * Get all support cards across all rarities
 * @returns {Array} Array of all support card metadata
 */
function getAllSupportCards() {
    const allCards = [];
    
    if (window.RSupportCards) {
        allCards.push(...window.RSupportCards.getAllRSupportCards());
    }
    
    if (window.SRSupportCards) {
        allCards.push(...window.SRSupportCards.getAllSRSupportCards());
    }
    
    if (window.SSRSupportCards) {
        allCards.push(...window.SSRSupportCards.getAllSSRSupportCards());
    }
    
    return allCards;
}

/**
 * Get support cards by rarity
 * @param {string} rarity - The rarity ('R', 'SR', 'SSR')
 * @returns {Array} Array of cards for specified rarity
 */
function getSupportCardsByRarity(rarity) {
    switch (rarity.toUpperCase()) {
        case 'R':
            return window.RSupportCards ? window.RSupportCards.getAllRSupportCards() : [];
        case 'SR':
            return window.SRSupportCards ? window.SRSupportCards.getAllSRSupportCards() : [];
        case 'SSR':
            return window.SSRSupportCards ? window.SSRSupportCards.getAllSSRSupportCards() : [];
        default:
            return [];
    }
}

/**
 * Get support cards by type across all rarities
 * @param {string} type - The card type (Speed, Stamina, Power, Guts, Wit, Friend)
 * @returns {Array} Array of cards of specified type
 */
function getSupportCardsByType(type) {
    const cards = [];
    
    if (window.RSupportCards) {
        cards.push(...window.RSupportCards.getRSupportCardsByType(type));
    }
    
    if (window.SRSupportCards) {
        cards.push(...window.SRSupportCards.getSRSupportCardsByType(type));
    }
    
    if (window.SSRSupportCards) {
        cards.push(...window.SSRSupportCards.getSSRSupportCardsByType(type));
    }
    
    return cards;
}

/**
 * Get support cards by character across all rarities
 * @param {string} character - The character name
 * @returns {Array} Array of cards for specified character
 */
function getSupportCardsByCharacter(character) {
    const cards = [];
    
    if (window.RSupportCards) {
        cards.push(...window.RSupportCards.getRSupportCardsByCharacter(character));
    }
    
    if (window.SRSupportCards) {
        cards.push(...window.SRSupportCards.getSRSupportCardsByCharacter(character));
    }
    
    if (window.SSRSupportCards) {
        cards.push(...window.SSRSupportCards.getSSRSupportCardsByCharacter(character));
    }
    
    return cards;
}

/**
 * Check if a support card exists
 * @param {string} cardId - The card identifier
 * @returns {boolean} True if card exists
 */
function hasSupportCard(cardId) {
    return (window.RSupportCards && window.RSupportCards.hasRSupportCard(cardId)) ||
           (window.SRSupportCards && window.SRSupportCards.hasSRSupportCard(cardId)) ||
           (window.SSRSupportCards && window.SSRSupportCards.hasSSRSupportCard(cardId));
}

/**
 * Get statistics about support card database
 * @returns {Object} Database statistics
 */
function getSupportCardStats() {
    const rCards = window.RSupportCards ? window.RSupportCards.getAllRSupportCardIds().length : 0;
    const srCards = window.SRSupportCards ? window.SRSupportCards.getAllSRSupportCardIds().length : 0;
    const ssrCards = window.SSRSupportCards ? window.SSRSupportCards.getAllSSRSupportCardIds().length : 0;
    
    return {
        total: rCards + srCards + ssrCards,
        rCount: rCards,
        srCount: srCards,
        ssrCount: ssrCards,
        byRarity: {
            R: rCards,
            SR: srCards,
            SSR: ssrCards
        }
    };
}

/**
 * Get all support card IDs across all rarities
 * @returns {Object} Object with arrays of card IDs by rarity
 */
function getAllSupportCardIds() {
    return {
        r: window.RSupportCards ? window.RSupportCards.getAllRSupportCardIds() : [],
        sr: window.SRSupportCards ? window.SRSupportCards.getAllSRSupportCardIds() : [],
        ssr: window.SSRSupportCards ? window.SSRSupportCards.getAllSSRSupportCardIds() : []
    };
}

/**
 * Search support cards by name or character
 * @param {string} query - The search query
 * @returns {Array} Array of matching cards
 */
function searchSupportCards(query) {
    const results = [];
    const searchTerm = query.toLowerCase();
    
    const allCards = getAllSupportCards();
    return allCards.filter(card => 
        card.name.toLowerCase().includes(searchTerm) ||
        card.character.toLowerCase().includes(searchTerm)
    );
}

/**
 * Get support cards recommended for specific distance
 * @param {string} distance - The distance (sprint, mile, medium, long)
 * @returns {Array} Array of cards recommended for distance
 */
function getSupportCardsByDistance(distance) {
    const allCards = getAllSupportCards();
    return allCards.filter(card => 
        card.recommendedFor && 
        card.recommendedFor.distances && 
        card.recommendedFor.distances.includes(distance)
    );
}

/**
 * Get support cards recommended for specific running style
 * @param {string} style - The running style (front-runner, pace-chaser, late-surger, end-closer)
 * @returns {Array} Array of cards recommended for style
 */
function getSupportCardsByRunningStyle(style) {
    const allCards = getAllSupportCards();
    return allCards.filter(card => 
        card.recommendedFor && 
        card.recommendedFor.styles && 
        card.recommendedFor.styles.includes(style)
    );
}

/**
 * Get support cards that provide skill points
 * @returns {Array} Array of cards that provide skill points
 */
function getSupportCardsWithSkillPoints() {
    const allCards = getAllSupportCards();
    return allCards.filter(card => 
        card.statGain && 
        card.statGain.skillPoints && 
        card.statGain.skillPoints > 0
    );
}

/**
 * Calculate stat bonuses from a deck of support cards
 * @param {Array} deckCards - Array of card objects with card and level properties
 * @returns {Object} Combined stat bonuses from all cards
 */
function calculateSupportCardStatBonuses(deckCards) {
    const bonuses = { speed: 0, stamina: 0, power: 0, guts: 0, wit: 0 };
    
    if (!deckCards || !Array.isArray(deckCards)) {
        return bonuses;
    }
    
    deckCards.forEach(cardData => {
        if (cardData && cardData.card && cardData.card.statGain && cardData.level) {
            const maxStatGain = cardData.card.statGain;
            const level = cardData.level;
            const maxLevel = cardData.card.maxLevel || 50;
            
            // Calculate level-based stat gain scaling
            // Use a smooth curve: starts at ~15% at level 1, reaches 100% at max level
            const levelRatio = Math.max(0, (level - 1) / (maxLevel - 1));
            const scalingFactor = 0.15 + (0.85 * levelRatio); // 15% to 100%
            
            bonuses.speed += Math.round((maxStatGain.speed || 0) * scalingFactor);
            bonuses.stamina += Math.round((maxStatGain.stamina || 0) * scalingFactor);
            bonuses.power += Math.round((maxStatGain.power || 0) * scalingFactor);
            bonuses.guts += Math.round((maxStatGain.guts || 0) * scalingFactor);
            bonuses.wit += Math.round((maxStatGain.wit || 0) * scalingFactor);
        }
    });
    
    return bonuses;
}

/**
 * Calculate comprehensive support card effects for training
 * @param {Array} deckConfiguration - Array of objects with {cardId, level, assignment, rainbowStatus}
 * @returns {Object} Complete effect analysis for training calculations
 */
function calculateSupportCardEffects(deckConfiguration) {
    if (!deckConfiguration || !Array.isArray(deckConfiguration)) {
        return getEmptyEffects();
    }
    
    const effects = {
        permanentEffects: {
            friendshipBonus: 0,        // Always active - affects training gains
            moodEffect: 0,            // Always active - affects mood management
            witFriendshipRecovery: 0, // Always active - energy recovery per turn
            initialFriendshipGauge: 0, // Starting friendship levels
            witBonus: 0               // Direct wit stat bonus (level 40 unlock)
        },
        conditionalEffects: {
            hintLevels: {},           // Skill hint levels by card type
            hintFrequency: {},        // Hint appearance probability by card type
            specialtyPriority: {},    // Training type bonuses by card type
            cardTypePresence: {}      // Which card types are in deck
        },
        trainingMultipliers: {
            speed: 1.0,
            stamina: 1.0,
            power: 1.0,
            guts: 1.0,
            wit: 1.0
        },
        trainingAssignments: {       // NEW: Track which cards are assigned to which training
            speed: [],
            stamina: [],
            power: [],
            guts: [],
            wit: []
        },
        deckStats: {
            totalCards: 0,
            cardsByType: {},
            assignedCards: 0,        // NEW: Count of assigned cards
            unassignedCards: 0       // NEW: Count of unassigned cards
        }
    };
    
    // Process each card in the deck
    deckConfiguration.forEach(({cardId, level, assignment, rainbowStatus}) => {
        if (!cardId || !level) return;
        
        // Get card basic info
        const card = getSupportCard(cardId);
        if (!card) {
            return;
        }
        
        // Get level-specific progression data
        const levelData = window.LevelProgression?.getSupportCardLevelData(cardId, level);
        if (!levelData) {
            return;
        }
        
        // Update deck stats
        effects.deckStats.totalCards++;
        effects.deckStats.cardsByType[card.type] = (effects.deckStats.cardsByType[card.type] || 0) + 1;
        
        // Track training assignments
        if (assignment && effects.trainingAssignments[assignment]) {
            effects.trainingAssignments[assignment].push({
                cardId,
                card,
                level,
                levelData,
                rainbowStatus
            });
            effects.deckStats.assignedCards++;
        } else {
            effects.deckStats.unassignedCards++;
        }
        
        // Calculate permanent effects (always active)
        effects.permanentEffects.friendshipBonus += levelData.friendshipBonus || 0;
        effects.permanentEffects.moodEffect += levelData.moodEffect || 0;
        effects.permanentEffects.witFriendshipRecovery += levelData.witFriendshipRecovery || 0;
        effects.permanentEffects.initialFriendshipGauge += levelData.initialFriendshipGauge || 0;
        effects.permanentEffects.witBonus += levelData.witBonus || 0;
        
        // Calculate conditional effects (training-dependent)
        if (levelData.hintLevels) {
            effects.conditionalEffects.hintLevels[card.type] = levelData.hintLevels;
        }
        if (levelData.hintFrequency) {
            // Handle both object format {value: X, locked: Y} and direct number format
            const hintValue = (typeof levelData.hintFrequency === 'object' && levelData.hintFrequency.value !== undefined) 
                ? levelData.hintFrequency.value 
                : levelData.hintFrequency;
            if (hintValue && !isNaN(hintValue)) {
                effects.conditionalEffects.hintFrequency[card.type] = 
                    (effects.conditionalEffects.hintFrequency[card.type] || 0) + Number(hintValue);
            }
        }
        if (levelData.specialtyPriority) {
            // Handle both object format {value: X, locked: Y} and direct number format
            const priorityValue = (typeof levelData.specialtyPriority === 'object' && levelData.specialtyPriority.value !== undefined) 
                ? levelData.specialtyPriority.value 
                : levelData.specialtyPriority;
            if (priorityValue && !isNaN(priorityValue)) {
                effects.conditionalEffects.specialtyPriority[card.type] = 
                    (effects.conditionalEffects.specialtyPriority[card.type] || 0) + Number(priorityValue);
            }
        }
        
        // Mark card type presence for conditional calculations
        effects.conditionalEffects.cardTypePresence[card.type] = true;
    });
    
    // Calculate training multipliers based on effects
    effects.trainingMultipliers = calculateTrainingMultipliers(effects);
    
    return effects;
}

/**
 * Calculate training type multipliers based on support card effects
 * @param {Object} effects - Calculated support card effects
 * @returns {Object} Training multipliers by stat type
 */
function calculateTrainingMultipliers(effects) {
    const multipliers = {
        speed: 1.0,
        stamina: 1.0, 
        power: 1.0,
        guts: 1.0,
        wit: 1.0
    };
    
    
    // Calculate multipliers based on assigned cards for each training type
    Object.keys(multipliers).forEach(trainingType => {
        const assignedCards = effects.trainingAssignments[trainingType] || [];
        
        let trainingMultiplier = 1.0;
        let totalSpecialtyBonus = 0;
        let totalFriendshipBonus = 0;
        
        // If no cards assigned to this training, apply fallback logic
        if (assignedCards.length === 0) {
            // Count unassigned cards to provide minimal general benefit
            const totalCardsInDeck = effects.deckStats.totalCards;
            const allAssignedCards = [...(effects.trainingAssignments.speed || []), 
                                     ...(effects.trainingAssignments.stamina || []), 
                                     ...(effects.trainingAssignments.power || []), 
                                     ...(effects.trainingAssignments.guts || []), 
                                     ...(effects.trainingAssignments.wit || [])];
            const unassignedCardsCount = totalCardsInDeck - allAssignedCards.length;
            
            if (unassignedCardsCount > 0) {
                // Unassigned cards provide small general bonus (2% per card)
                trainingMultiplier += unassignedCardsCount * 0.02;
            }
            
            multipliers[trainingType] = trainingMultiplier;
            return;
        }
        
        assignedCards.forEach(({card, levelData, level, rainbowStatus}) => {
            // Each assigned card contributes based on its level-specific data
            totalFriendshipBonus += levelData.friendshipBonus || 0;
            
            // Cards get bonus effectiveness when assigned to matching training type
            const cardTypeMatch = card.type.toLowerCase() === trainingType.toLowerCase();
            
            // Calculate base card contribution based on level
            const levelContribution = Math.min(level / 50, 1.0); // Scale 0-1 based on level vs max (50)
            
            // Rainbow Training Multiplier (1.4x to 1.9x based on research)
            const rainbowMultiplier = rainbowStatus ? 1.6 : 1.0; // 60% bonus for rainbow training
            
            if (cardTypeMatch) {
                // Extract specialty priority if available, otherwise use level-based fallback
                const specialtyValue = (levelData.specialtyPriority && !levelData.specialtyPriority.locked) 
                    ? levelData.specialtyPriority.value || levelData.specialtyPriority
                    : Math.floor(levelContribution * 10); // Fallback: 0-10 based on level
                    
                totalSpecialtyBonus += specialtyValue * rainbowMultiplier;
                trainingMultiplier += (0.05 + (levelContribution * 0.1)) * rainbowMultiplier; // 5-15% bonus for type match, enhanced by rainbow
            } else {
                trainingMultiplier += (0.02 + (levelContribution * 0.03)) * rainbowMultiplier; // 2-5% bonus for non-matching cards, enhanced by rainbow
            }
        });
        
        // Apply friendship bonus (1% per point)
        trainingMultiplier += totalFriendshipBonus * 0.01;
        
        // Apply specialty priority bonus (2% per point)
        trainingMultiplier += totalSpecialtyBonus * 0.02;
        
        multipliers[trainingType] = trainingMultiplier;
    });
    
    return multipliers;
}

/**
 * Get empty effects structure for fallback
 * @returns {Object} Empty effects object
 */
function getEmptyEffects() {
    return {
        permanentEffects: {
            friendshipBonus: 0,
            moodEffect: 0,
            witFriendshipRecovery: 0,
            initialFriendshipGauge: 0,
            witBonus: 0
        },
        conditionalEffects: {
            hintLevels: {},
            hintFrequency: {},
            specialtyPriority: {},
            cardTypePresence: {}
        },
        trainingMultipliers: {
            speed: 1.0,
            stamina: 1.0,
            power: 1.0,
            guts: 1.0,
            wit: 1.0
        },
        deckStats: {
            totalCards: 0,
            cardsByType: {}
        }
    };
}

// Export unified API for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        getSupportCard,
        getAllSupportCards,
        getSupportCardsByRarity,
        getSupportCardsByType,
        getSupportCardsByCharacter,
        hasSupportCard,
        getSupportCardStats,
        getAllSupportCardIds,
        searchSupportCards,
        getSupportCardsByDistance,
        getSupportCardsByRunningStyle,
        getSupportCardsWithSkillPoints,
        calculateSupportCardStatBonuses,
        calculateSupportCardEffects,
        calculateTrainingMultipliers,
        getEmptyEffects
    };
} else {
    // Browser environment - attach to window
    window.SupportCards = {
        getSupportCard,
        getAllSupportCards,
        getSupportCardsByRarity,
        getSupportCardsByType,
        getSupportCardsByCharacter,
        hasSupportCard,
        getSupportCardStats,
        getAllSupportCardIds,
        searchSupportCards,
        getSupportCardsByDistance,
        getSupportCardsByRunningStyle,
        getSupportCardsWithSkillPoints,
        calculateSupportCardStatBonuses,
        calculateSupportCardEffects,
        calculateTrainingMultipliers,
        getEmptyEffects
    };
}