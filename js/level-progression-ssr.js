/**
 * SSR-Rarity Support Card Level Progression System
 * 
 * This module contains complete level-by-level progression data for SSR-rarity support cards.
 * SSR cards have 11 selectable levels: 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
 * 
 * Effects change at EVERY level, requiring complete progression data for accurate
 * training calculations and user level selection.
 */

// SSR-Rarity Support Card Level Progression Database
const SSR_SUPPORT_CARD_LEVEL_PROGRESSION = {
    'rice_shower_ssr': {
        id: 'rice_shower_ssr',
        name: 'Rice Shower',
        rarity: 'SSR',
        type: 'Stamina',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                // Level 1 data not available in screenshots - would need to be captured
                friendshipBonus: null, // Data missing
                moodEffect: null, // Data missing
                initialFriendshipGauge: null, // Data missing
                statGain: { speed: 0, stamina: 1, power: 0, guts: 0, wit: 0 }, // ~17% of max (6*0.17=1, 2*0.17=0)
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            5: {
                friendshipBonus: 10,
                moodEffect: 14,
                initialFriendshipGauge: 5,
                statGain: { speed: 0, stamina: 2, power: 0, guts: 0, wit: 0 }, // ~33% of max
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            10: {
                friendshipBonus: 11,
                moodEffect: 19,
                initialFriendshipGauge: 6,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            15: {
                friendshipBonus: 12,
                moodEffect: 24,
                initialFriendshipGauge: 8,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 13, locked: false },
                specialtyPriority: { value: 5, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            20: {
                friendshipBonus: 13,
                moodEffect: 29,
                initialFriendshipGauge: 10,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 21, locked: false },
                specialtyPriority: { value: 12, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: 34,
                initialFriendshipGauge: 11,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            30: {
                friendshipBonus: 15,
                moodEffect: 40,
                initialFriendshipGauge: 12,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            35: {
                friendshipBonus: 16,
                moodEffect: 42,
                initialFriendshipGauge: 13,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 33, locked: false },
                specialtyPriority: { value: 25, locked: false },
                gutsBonus: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            40: {
                friendshipBonus: 18,
                moodEffect: 45,
                initialFriendshipGauge: 15,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 36, locked: false },
                specialtyPriority: { value: 30, locked: false },
                gutsBonus: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { 
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: 47,
                initialFriendshipGauge: 15,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                gutsBonus: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 10, locked: false },
                uniqueEffect: { 
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: 50,
                initialFriendshipGauge: 15,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                gutsBonus: { value: 1, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                uniqueEffect: { 
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            }
        }
    },

    'mejiro_mcqueen_ssr': {
        id: 'mejiro_mcqueen_ssr',
        name: 'Mejiro McQueen',
        rarity: 'SSR',
        type: 'Stamina', // Confirmed from folder name: "2. Mejiro McQueen (Stamina)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: { locked: true, unlockLevel: 15 },
                initialFriendshipGauge: { locked: true, unlockLevel: 15 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            5: {
                friendshipBonus: 12,
                moodEffect: { locked: true, unlockLevel: 15 },
                initialFriendshipGauge: { locked: true, unlockLevel: 15 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            10: {
                friendshipBonus: 14,
                moodEffect: { locked: true, unlockLevel: 15 },
                initialFriendshipGauge: { locked: true, unlockLevel: 15 },
                specialtyPriority: { value: 5, locked: false },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            15: {
                friendshipBonus: 17,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            20: {
                friendshipBonus: 19,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 25, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            25: {
                friendshipBonus: 22,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 35, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            30: {
                friendshipBonus: 25,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 35, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            35: {
                friendshipBonus: 26,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                specialtyPriority: { value: 40, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                gutsBonus: { value: 1, locked: false },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            40: {
                friendshipBonus: 27,
                moodEffect: { value: 26, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: 45, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                gutsBonus: { value: 1, locked: false },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { 
                    description: 'Increases Stamina gain when training together (1), Increases initial Stamina when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 28,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 50, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsBonus: { value: 1, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                uniqueEffect: { 
                    description: 'Increases Stamina gain when training together (1), Increases initial Stamina when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 30,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 50, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsBonus: { value: 1, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 10, locked: false },
                uniqueEffect: { 
                    description: 'Increases Stamina gain when training together (1), Increases initial Stamina when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'tazuna_hayakawa_ssr': {
        id: 'tazuna_hayakawa_ssr',
        name: 'Tazuna Hayakawa',
        rarity: 'SSR',
        type: 'Friend', // Confirmed from folder name: "3. Tazuna Hayakawa (Friend)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                initialFriendshipGauge: 10,
                eventRecovery: 10,
                eventEffectiveness: 10,
                failureProtection: 5,
                energyCostReduction: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                initialFriendshipGauge: 12,
                eventRecovery: 14,
                eventEffectiveness: 12,
                failureProtection: 7,
                energyCostReduction: 2,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                initialFriendshipGauge: 14,
                eventRecovery: 19,
                eventEffectiveness: 14,
                failureProtection: 9,
                energyCostReduction: 5,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                initialFriendshipGauge: 17,
                eventRecovery: 24,
                eventEffectiveness: 17,
                failureProtection: 12,
                energyCostReduction: 7,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                initialFriendshipGauge: 19,
                eventRecovery: 29,
                eventEffectiveness: 19,
                failureProtection: 14,
                energyCostReduction: 10,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                initialFriendshipGauge: 22,
                eventRecovery: 34,
                eventEffectiveness: 22,
                failureProtection: 17,
                energyCostReduction: 12,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                initialFriendshipGauge: 25,
                eventRecovery: 40,
                eventEffectiveness: 25,
                failureProtection: 20,
                energyCostReduction: 15,
                trainingEffectiveness: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { 
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            35: {
                initialFriendshipGauge: 26,
                eventRecovery: 45,
                eventEffectiveness: 27,
                failureProtection: 22,
                energyCostReduction: 17,
                trainingEffectiveness: { value: 5, locked: false },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { 
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            40: {
                initialFriendshipGauge: 27,
                eventRecovery: 50,
                eventEffectiveness: 30,
                failureProtection: 25,
                energyCostReduction: 20,
                trainingEffectiveness: { value: 10, locked: false },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { 
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            45: {
                initialFriendshipGauge: 28,
                eventRecovery: 55,
                eventEffectiveness: 32,
                failureProtection: 27,
                energyCostReduction: 22,
                trainingEffectiveness: { value: 10, locked: false },
                initialSpeed: { value: 15, locked: false },
                uniqueEffect: { 
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            50: {
                initialFriendshipGauge: 30,
                eventRecovery: 60,
                eventEffectiveness: 35,
                failureProtection: 30,
                energyCostReduction: 25,
                trainingEffectiveness: { value: 10, locked: false },
                initialSpeed: { value: 30, locked: false },
                uniqueEffect: { 
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            }
        }
    },

    'biiko_pegasus_ssr': {
        id: 'biiko_pegasus_ssr',
        name: 'Biko Pegasus',
        rarity: 'SSR',
        type: 'Speed', // Confirmed from folder name: "4. Biko Pegasus (Speed)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 20,
                trainingEffectiveness: 10,
                initialSpeed: 20,
                raceBonus: 1,
                fanBonus: 10,
                specialtyPriority: 5,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 22,
                trainingEffectiveness: 11,
                initialSpeed: 22,
                raceBonus: 2,
                fanBonus: 11,
                specialtyPriority: 10,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 23,
                trainingEffectiveness: 12,
                initialSpeed: 25,
                raceBonus: 3,
                fanBonus: 12,
                specialtyPriority: 15,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 24,
                trainingEffectiveness: 13,
                initialSpeed: 27,
                raceBonus: 5,
                fanBonus: 14,
                specialtyPriority: 20,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 24,
                trainingEffectiveness: 14,
                initialSpeed: 30,
                raceBonus: 6,
                fanBonus: 16,
                specialtyPriority: 25,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 25,
                trainingEffectiveness: 14,
                initialSpeed: 32,
                raceBonus: 7,
                fanBonus: 17,
                specialtyPriority: 30,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 20,
                trainingEffectiveness: 15,
                initialSpeed: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 20,
                speedBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 23,
                trainingEffectiveness: 12,
                initialSpeed: 30,
                raceBonus: 7,
                fanBonus: 17,
                specialtyPriority: 30,
                speedBonus: { value: 1, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 23,
                trainingEffectiveness: 12,
                initialSpeed: 30,
                raceBonus: 7,
                fanBonus: 17,
                specialtyPriority: 30,
                speedBonus: { value: 1, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                trainingEffectiveness: 15,
                initialSpeed: 32,
                raceBonus: 8,
                fanBonus: 18,
                specialtyPriority: 35,
                speedBonus: { value: 1, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 25,
                trainingEffectiveness: 15,
                initialSpeed: 35,
                raceBonus: 10,
                fanBonus: 20,
                specialtyPriority: 35,
                speedBonus: { value: 1, locked: false },
                initialFriendshipGauge: { value: 30, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    },

    'haru_urara_ssr': {
        id: 'haru_urara_ssr',
        name: 'Haru Urara',
        rarity: 'SSR',
        type: 'Guts', // Confirmed from folder name: "5. Haru Urara (Guts)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                trainingEffectiveness: 1,
                initialGuts: 10,
                specialtyPriority: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            5: {
                friendshipBonus: 10,
                trainingEffectiveness: 2,
                initialGuts: 12,
                specialtyPriority: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            10: {
                friendshipBonus: 11,
                trainingEffectiveness: 3,
                initialGuts: 14,
                specialtyPriority: { value: 5, locked: false },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            15: {
                friendshipBonus: 12,
                trainingEffectiveness: 5,
                initialGuts: 17,
                specialtyPriority: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            20: {
                friendshipBonus: 13,
                trainingEffectiveness: 6,
                initialGuts: 19,
                specialtyPriority: { value: 25, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            25: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialGuts: 22,
                specialtyPriority: { value: 35, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            30: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialGuts: 25,
                specialtyPriority: { value: 35, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            35: {
                friendshipBonus: 16,
                trainingEffectiveness: 11,
                initialGuts: 27,
                specialtyPriority: { value: 40, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                skillPointBonus: { value: 1, locked: false },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            40: {
                friendshipBonus: 18,
                trainingEffectiveness: 12,
                initialGuts: 30,
                specialtyPriority: { value: 45, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                skillPointBonus: { value: 1, locked: false },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                trainingEffectiveness: 13,
                initialGuts: 32,
                specialtyPriority: { value: 50, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { value: 1, locked: false },
                moodEffect: { value: 15, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                trainingEffectiveness: 15,
                initialGuts: 35,
                specialtyPriority: { value: 50, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { value: 1, locked: false },
                moodEffect: { value: 30, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            }
        }
    },

    'nishino_flower_ssr': {
        id: 'nishino_flower_ssr',
        name: 'Nishino Flower',
        rarity: 'SSR',
        type: 'Speed', // Confirmed from folder name: "6. Nishino Flower (Speed)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: 10,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                initialFriendshipGauge: 12,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 9, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                initialFriendshipGauge: 14,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 15, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                moodEffect: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                initialFriendshipGauge: 17,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 21, locked: false },
                trainingEffectiveness: { value: 2, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                moodEffect: { value: 10, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                initialFriendshipGauge: 19,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 27, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                moodEffect: { value: 15, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                initialFriendshipGauge: 22,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 33, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 16,
                initialFriendshipGauge: 27,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 42, locked: false },
                trainingEffectiveness: { value: 6, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                moodEffect: { value: 23, locked: false },
                speedBonus: { value: 1, locked: false },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 18,
                initialFriendshipGauge: 30,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 45, locked: false },
                trainingEffectiveness: { value: 8, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                moodEffect: { value: 26, locked: false },
                speedBonus: { value: 1, locked: false },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                initialFriendshipGauge: 32,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 47, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                speedBonus: { value: 1, locked: false },
                initialSpeed: { value: 15, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                initialFriendshipGauge: 35,
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 50, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                speedBonus: { value: 1, locked: false },
                initialSpeed: { value: 30, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            }
        }
    },

    'smart_falcon_ssr': {
        id: 'smart_falcon_ssr',
        name: 'Smart Falcon',
        rarity: 'SSR',
        type: 'Power', // Confirmed from folder name: "7. Smart Falcon (Power)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: 10,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                moodEffect: 14,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                moodEffect: 19,
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                moodEffect: 24,
                initialFriendshipGauge: { value: 13, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 13, locked: false },
                specialtyPriority: { value: 5, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                moodEffect: 29,
                initialFriendshipGauge: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 21, locked: false },
                specialtyPriority: { value: 12, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: 34,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                moodEffect: 40,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Power gain when training together (1), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 16,
                moodEffect: 45,
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 33, locked: false },
                specialtyPriority: { value: 25, locked: false },
                staminaBonus: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Power gain when training together (1), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 18,
                moodEffect: 50,
                initialFriendshipGauge: { value: 23, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 36, locked: false },
                specialtyPriority: { value: 30, locked: false },
                staminaBonus: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Power gain when training together (1), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: 55,
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: 1, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                uniqueEffect: {
                    description: 'Increases Power gain when training together (1), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: 60,
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: 1, locked: false },
                raceBonus: { value: 10, locked: false },
                fanBonus: { value: 15, locked: false },
                uniqueEffect: {
                    description: 'Increases Power gain when training together (1), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'super_creek_ssr': {
        id: 'super_creek_ssr',
        name: 'Super Creek',
        rarity: 'SSR',
        type: 'Stamina', // Confirmed from folder name: "8. Super Creek (Stamina)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                trainingEffectiveness: 1,
                initialStamina: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 11,
                trainingEffectiveness: 2,
                initialStamina: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 13,
                trainingEffectiveness: 3,
                initialStamina: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 15,
                trainingEffectiveness: 5,
                initialStamina: 17,
                raceBonus: 2,
                fanBonus: 7,
                specialtyPriority: { value: 5, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 17,
                trainingEffectiveness: 6,
                initialStamina: 19,
                raceBonus: 3,
                fanBonus: 10,
                specialtyPriority: { value: 12, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 20,
                trainingEffectiveness: 8,
                initialStamina: 22,
                raceBonus: 4,
                fanBonus: 12,
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 20,
                trainingEffectiveness: 10,
                initialStamina: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 21,
                trainingEffectiveness: 11,
                initialStamina: 27,
                raceBonus: 6,
                fanBonus: 16,
                specialtyPriority: { value: 25, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 23,
                trainingEffectiveness: 12,
                initialStamina: 30,
                raceBonus: 7,
                fanBonus: 17,
                specialtyPriority: { value: 30, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                trainingEffectiveness: 13,
                initialStamina: 32,
                raceBonus: 8,
                fanBonus: 18,
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 25,
                trainingEffectiveness: 15,
                initialStamina: 35,
                raceBonus: 10,
                fanBonus: 20,
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialFriendshipGauge: { value: 30, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    },

    'sakura_bakushin_o_ssr': {
        id: 'sakura_bakushin_o_ssr',
        name: 'Sakura Bakushin O',
        rarity: 'SSR',
        type: 'Speed', // Confirmed from folder name: "9. Sakura Bakushin O (Speed)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialSpeed: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialSpeed: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                initialSpeed: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 7,
                moodEffect: 16,
                initialFriendshipGauge: 13,
                specialtyPriority: 15,
                initialSpeed: 10,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 10,
                moodEffect: 23,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                initialSpeed: 12,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                moodEffect: 30,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                initialSpeed: 15,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 30,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                initialSpeed: 15,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            35: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                moodEffect: 33,
                initialFriendshipGauge: 21,
                specialtyPriority: 40,
                initialSpeed: 16,
                speedBonus: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            40: {
                friendshipBonus: 18,
                raceBonus: 7,
                fanBonus: 17,
                moodEffect: 36,
                initialFriendshipGauge: 23,
                specialtyPriority: 45,
                initialSpeed: 18,
                speedBonus: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                moodEffect: 40,
                initialFriendshipGauge: 25,
                specialtyPriority: 50,
                initialSpeed: 20,
                speedBonus: 1,
                trainingEffectiveness: 5,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            50: {
                friendshipBonus: 20,
                raceBonus: 10,
                fanBonus: 20,
                moodEffect: 40,
                initialFriendshipGauge: 25,
                specialtyPriority: 50,
                initialSpeed: 20,
                speedBonus: 1,
                trainingEffectiveness: 10,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            }
        }
    },

    'gold_city_ssr': {
        id: 'gold_city_ssr',
        name: 'Gold City',
        rarity: 'SSR',
        type: 'Speed', // Confirmed from folder name: "10. Gold City (Speed)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 5,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 9,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                hintLevels: 1,
                hintFrequency: 15,
                initialFriendshipGauge: 10,
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                hintLevels: 1,
                hintFrequency: 21,
                initialFriendshipGauge: 13,
                moodEffect: 10,
                trainingEffectiveness: 1,
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                hintLevels: 1,
                hintFrequency: 27,
                initialFriendshipGauge: 16,
                moodEffect: 15,
                trainingEffectiveness: 3,
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: 1,
                hintFrequency: 33,
                initialFriendshipGauge: 20,
                moodEffect: 20,
                trainingEffectiveness: 5,
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                initialFriendshipGauge: 20,
                moodEffect: 20,
                trainingEffectiveness: 5,
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases Speed gain when training together (1)",
                    secondaryEffect: "Increases initial Speed when beginning a Career playthrough (20)",
                    value: 1
                }
            },
            35: {
                friendshipBonus: 16,
                hintLevels: 2,
                hintFrequency: 45,
                initialFriendshipGauge: 21,
                moodEffect: 23,
                trainingEffectiveness: 5,
                powerBonus: 1,
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases Speed gain when training together (1)",
                    secondaryEffect: "Increases initial Speed when beginning a Career playthrough (20)",
                    value: 1
                }
            },
            40: {
                friendshipBonus: 18,
                hintLevels: 3,
                hintFrequency: 50,
                initialFriendshipGauge: 23,
                moodEffect: 26,
                trainingEffectiveness: 5,
                powerBonus: 1,
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases Speed gain when training together (1)",
                    secondaryEffect: "Increases initial Speed when beginning a Career playthrough (20)",
                    value: 1
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: 3,
                hintFrequency: 55,
                initialFriendshipGauge: 25,
                moodEffect: 30,
                trainingEffectiveness: 5,
                powerBonus: 1,
                raceBonus: 5,
                fanBonus: 10,
                uniqueEffect: {
                    description: "Increases Speed gain when training together (1)",
                    secondaryEffect: "Increases initial Speed when beginning a Career playthrough (20)",
                    value: 1
                }
            },
            50: {
                friendshipBonus: 20,
                hintLevels: 4,
                hintFrequency: 60,
                initialFriendshipGauge: 25,
                moodEffect: 30,
                trainingEffectiveness: 5,
                powerBonus: 1,
                raceBonus: 10,
                fanBonus: 15,
                uniqueEffect: {
                    description: "Increases Speed gain when training together (1)",
                    secondaryEffect: "Increases initial Speed when beginning a Career playthrough (20)",
                    value: 1
                }
            }
        }
    },

    'air_shakur_ssr': {
        id: 'air_shakur_ssr',
        name: 'Air Shakur',
        rarity: 'SSR',
        type: 'Wit', // Confirmed from folder name: "11. Air Shakur (Wit)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 5,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 9,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                hintLevels: 1,
                hintFrequency: 15,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: 10,
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                hintLevels: 1,
                hintFrequency: 21,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: 13,
                moodEffect: 10,
                trainingEffectiveness: 1,
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                hintLevels: 1,
                hintFrequency: 27,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 16,
                moodEffect: 15,
                trainingEffectiveness: 3,
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: 1,
                hintFrequency: 33,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 20,
                moodEffect: 20,
                trainingEffectiveness: 5,
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: 20,
                moodEffect: 20,
                trainingEffectiveness: 5,
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 15
                }
            },
            35: {
                friendshipBonus: 16,
                hintLevels: 2,
                hintFrequency: 45,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: 21,
                moodEffect: 23,
                trainingEffectiveness: 5,
                skillPointBonus: 1,
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 15
                }
            },
            40: {
                friendshipBonus: 18,
                hintLevels: 3,
                hintFrequency: 50,
                witFriendshipRecovery: 4,
                initialFriendshipGauge: 23,
                moodEffect: 26,
                trainingEffectiveness: 5,
                skillPointBonus: 1,
                initialWit: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 15
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: 3,
                hintFrequency: 55,
                witFriendshipRecovery: 4,
                initialFriendshipGauge: 25,
                moodEffect: 30,
                trainingEffectiveness: 5,
                skillPointBonus: 1,
                initialWit: 15,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 15
                }
            },
            50: {
                friendshipBonus: 20,
                hintLevels: 4,
                hintFrequency: 60,
                witFriendshipRecovery: 5,
                initialFriendshipGauge: 25,
                moodEffect: 30,
                trainingEffectiveness: 5,
                skillPointBonus: 1,
                initialWit: 30,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 15
                }
            }
        }
    },

    'winning_ticket_ssr': {
        id: 'winning_ticket_ssr',
        name: 'Winning Ticket',
        rarity: 'SSR',
        type: 'Guts', // Confirmed from folder name: "12. Winning Ticket (Guts)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialGuts: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialGuts: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                initialGuts: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 7,
                moodEffect: 16,
                initialFriendshipGauge: 13,
                specialtyPriority: 15,
                initialGuts: 10,
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 10,
                moodEffect: 23,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                initialGuts: 12,
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                moodEffect: 30,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                initialGuts: 15,
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases the frequency at which hint events occur (20%)",
                    value: 10
                }
            },
            30: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 30,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                initialGuts: 15,
                gutsBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases the frequency at which hint events occur (20%)",
                    value: 10
                }
            },
            35: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                moodEffect: 33,
                initialFriendshipGauge: 21,
                specialtyPriority: 40,
                initialGuts: 16,
                gutsBonus: 1,
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases the frequency at which hint events occur (20%)",
                    value: 10
                }
            },
            40: {
                friendshipBonus: 18,
                raceBonus: 7,
                fanBonus: 17,
                moodEffect: 36,
                initialFriendshipGauge: 23,
                specialtyPriority: 45,
                initialGuts: 18,
                gutsBonus: 1,
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases the frequency at which hint events occur (20%)",
                    value: 10
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                moodEffect: 40,
                initialFriendshipGauge: 25,
                specialtyPriority: 50,
                initialGuts: 20,
                gutsBonus: 1,
                hintLevels: 2,
                hintFrequency: 30,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases the frequency at which hint events occur (20%)",
                    value: 10
                }
            },
            50: {
                friendshipBonus: 20,
                raceBonus: 10,
                fanBonus: 20,
                moodEffect: 40,
                initialFriendshipGauge: 25,
                specialtyPriority: 50,
                initialGuts: 20,
                gutsBonus: 1,
                hintLevels: 3,
                hintFrequency: 40,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases the frequency at which hint events occur (20%)",
                    value: 10
                }
            }
        }
    },

    'ines_fujin_ssr': {
        id: 'ines_fujin_ssr',
        name: 'Ines Fujin',
        rarity: 'SSR',
        type: 'Guts', // Confirmed from folder name: "13. Ines Fujin (Guts)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 9,
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                initialFriendshipGauge: 14,
                hintLevels: 1,
                hintFrequency: 15,
                trainingEffectiveness: 1,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                initialFriendshipGauge: 17,
                hintLevels: 1,
                hintFrequency: 21,
                trainingEffectiveness: 2,
                raceBonus: 2,
                fanBonus: 4,
                moodEffect: 10,
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                initialFriendshipGauge: 19,
                hintLevels: 1,
                hintFrequency: 27,
                trainingEffectiveness: 3,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: 15,
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                initialFriendshipGauge: 22,
                hintLevels: 1,
                hintFrequency: 33,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 20,
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 2,
                hintFrequency: 40,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 20,
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%)",
                    secondaryEffect: "Increases initial Guts when beginning a Career playthrough (20)",
                    value: 5
                }
            },
            35: {
                friendshipBonus: 16,
                initialFriendshipGauge: 27,
                hintLevels: 2,
                hintFrequency: 42,
                trainingEffectiveness: 6,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: 23,
                speedBonus: 1,
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%)",
                    secondaryEffect: "Increases initial Guts when beginning a Career playthrough (20)",
                    value: 5
                }
            },
            40: {
                friendshipBonus: 18,
                initialFriendshipGauge: 30,
                hintLevels: 2,
                hintFrequency: 45,
                trainingEffectiveness: 8,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: 26,
                speedBonus: 1,
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%)",
                    secondaryEffect: "Increases initial Guts when beginning a Career playthrough (20)",
                    value: 5
                }
            },
            45: {
                friendshipBonus: 20,
                initialFriendshipGauge: 32,
                hintLevels: 2,
                hintFrequency: 47,
                trainingEffectiveness: 10,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 30,
                speedBonus: 1,
                specialtyPriority: 40,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%)",
                    secondaryEffect: "Increases initial Guts when beginning a Career playthrough (20)",
                    value: 5
                }
            },
            50: {
                friendshipBonus: 20,
                initialFriendshipGauge: 35,
                hintLevels: 3,
                hintFrequency: 50,
                trainingEffectiveness: 10,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 30,
                speedBonus: 1,
                specialtyPriority: 80,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%)",
                    secondaryEffect: "Increases initial Guts when beginning a Career playthrough (20)",
                    value: 5
                }
            }
        }
    },

    'fine_motion_ssr': {
        id: 'fine_motion_ssr',
        name: 'Fine Motion',
        rarity: 'SSR',
        type: 'Wit', // Confirmed from folder name: "14. Fine Motion (Wit)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                trainingEffectiveness: 1,
                initialWit: 10,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 11,
                trainingEffectiveness: 2,
                initialWit: 12,
                raceBonus: 1,
                fanBonus: 2,
                witFriendshipRecovery: 1,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 13,
                trainingEffectiveness: 3,
                initialWit: 14,
                raceBonus: 2,
                fanBonus: 5,
                witFriendshipRecovery: 1,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 15,
                trainingEffectiveness: 5,
                initialWit: 17,
                raceBonus: 2,
                fanBonus: 7,
                witFriendshipRecovery: 1,
                specialtyPriority: 5,
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 17,
                trainingEffectiveness: 6,
                initialWit: 19,
                raceBonus: 3,
                fanBonus: 10,
                witFriendshipRecovery: 2,
                specialtyPriority: 12,
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 20,
                trainingEffectiveness: 8,
                initialWit: 22,
                raceBonus: 4,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                specialtyPriority: 20,
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 20,
                trainingEffectiveness: 10,
                initialWit: 25,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                specialtyPriority: 20,
                witBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            35: {
                friendshipBonus: 21,
                trainingEffectiveness: 11,
                initialWit: 27,
                raceBonus: 6,
                fanBonus: 16,
                witFriendshipRecovery: 3,
                specialtyPriority: 25,
                witBonus: 1,
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            40: {
                friendshipBonus: 23,
                trainingEffectiveness: 12,
                initialWit: 30,
                raceBonus: 7,
                fanBonus: 17,
                witFriendshipRecovery: 4,
                specialtyPriority: 30,
                witBonus: 1,
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            45: {
                friendshipBonus: 25,
                trainingEffectiveness: 13,
                initialWit: 32,
                raceBonus: 8,
                fanBonus: 18,
                witFriendshipRecovery: 4,
                specialtyPriority: 35,
                witBonus: 1,
                moodEffect: 15,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            },
            50: {
                friendshipBonus: 25,
                trainingEffectiveness: 15,
                initialWit: 35,
                raceBonus: 10,
                fanBonus: 20,
                witFriendshipRecovery: 5,
                specialtyPriority: 35,
                witBonus: 1,
                moodEffect: 30,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%)",
                    secondaryEffect: "Increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: 10
                }
            }
        }
    },

    'tamamo_cross_ssr': {
        id: 'tamamo_cross_ssr',
        name: 'Tamamo Cross',
        rarity: 'SSR',
        type: 'Stamina', // Confirmed from folder name: "15. Tamamo Cross (Stamina)"
        maxLevel: 50,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: 10,
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            5: {
                friendshipBonus: 11,
                initialFriendshipGauge: 13,
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            10: {
                friendshipBonus: 12,
                initialFriendshipGauge: 16,
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            15: {
                friendshipBonus: 13,
                initialFriendshipGauge: 19,
                trainingEffectiveness: { value: 6, locked: false },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            20: {
                friendshipBonus: 14,
                initialFriendshipGauge: 22,
                trainingEffectiveness: { value: 7, locked: false },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            25: {
                friendshipBonus: 16,
                initialFriendshipGauge: 25,
                trainingEffectiveness: { value: 8, locked: false },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            30: {
                friendshipBonus: 17,
                initialFriendshipGauge: 28,
                trainingEffectiveness: { value: 9, locked: false },
                raceBonus: { locked: true, unlockLevel: 35 },
                fanBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training +5%, Initial Stamina +20",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            35: {
                friendshipBonus: 18,
                initialFriendshipGauge: 31,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                hintLevels: { locked: true, unlockLevel: 40 },
                hintFrequency: { locked: true, unlockLevel: 40 },
                staminaBonus: { value: 1, locked: false },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training +5%, Initial Stamina +20",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            40: {
                friendshipBonus: 19,
                initialFriendshipGauge: 34,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 50, locked: false },
                staminaBonus: { value: 2, locked: false },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training +5%, Initial Stamina +20",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            45: {
                friendshipBonus: 20,
                initialFriendshipGauge: 32,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 47, locked: false },
                staminaBonus: { value: 3, locked: false },
                initialStamina: { value: 15, locked: false },
                uniqueEffect: {
                    value: "Training +5%, Initial Stamina +20",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            },
            50: {
                friendshipBonus: 20,
                initialFriendshipGauge: 35,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 50, locked: false },
                staminaBonus: { value: 4, locked: false },
                initialStamina: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Training +5%, Initial Stamina +20",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Stamina when beginning a Career playthrough (20)"
                }
            }
        }
    },

    'seiun_sky_ssr': {
        id: 'seiun_sky_ssr',
        name: 'Seiun Sky',
        rarity: 'SSR',
        type: 'Stamina', // Confirmed from folder name: "16. Seiun Sky (Stamina)"
        maxLevel: 50,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            5: {
                friendshipBonus: 12,
                specialtyPriority: 11,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            10: {
                friendshipBonus: 14,
                specialtyPriority: 18,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            15: {
                friendshipBonus: 17,
                specialtyPriority: 26,
                moodEffect: { value: 16, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            20: {
                friendshipBonus: 19,
                specialtyPriority: 34,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            25: {
                friendshipBonus: 22,
                specialtyPriority: 42,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            30: {
                friendshipBonus: 25,
                specialtyPriority: 50,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Training Frequency +20",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 53,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                staminaBonus: { value: 1, locked: false },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Training Frequency +20",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            40: {
                friendshipBonus: 30,
                specialtyPriority: 57,
                moodEffect: { value: 36, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                staminaBonus: { value: 1, locked: false },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Training Frequency +20",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            45: {
                friendshipBonus: 32,
                specialtyPriority: 61,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                staminaBonus: { value: 1, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Mood +15%, Training Frequency +20",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            50: {
                friendshipBonus: 35,
                specialtyPriority: 65,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                staminaBonus: { value: 1, locked: false },
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 40, locked: false },
                uniqueEffect: {
                    value: "Mood +15%, Training Frequency +20",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            }
        }
    },

    'el_condor_pasa_ssr': {
        id: 'el_condor_pasa_ssr',
        name: 'El Condor Pasa',
        rarity: 'SSR',
        type: 'Power',
        maxLevel: 50,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialPower: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            5: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialPower: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            10: {
                friendshipBonus: 11,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialPower: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            15: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 7,
                moodEffect: { value: 16, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                specialtyPriority: { value: 15, locked: false },
                initialPower: { value: 10, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            20: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 10,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                specialtyPriority: { value: 25, locked: false },
                initialPower: { value: 12, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialPower: { value: 15, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            30: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialPower: { value: 15, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Training Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            35: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 40, locked: false },
                initialPower: { value: 16, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Training Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            40: {
                friendshipBonus: 18,
                raceBonus: 7,
                fanBonus: 17,
                moodEffect: { value: 36, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 45, locked: false },
                initialPower: { value: 18, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Training Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialPower: { value: 20, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                uniqueEffect: {
                    value: "Friendship Training +10%, Training Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            50: {
                friendshipBonus: 20,
                raceBonus: 10,
                fanBonus: 20,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialPower: { value: 20, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                uniqueEffect: {
                    value: "Friendship Training +10%, Training Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            }
        }
    },

    'grass_wonder_ssr': {
        id: 'grass_wonder_ssr',
        name: 'Grass Wonder',
        rarity: 'SSR',
        type: 'Guts',
        maxLevel: 50,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            5: {
                friendshipBonus: 12,
                specialtyPriority: 11,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            10: {
                friendshipBonus: 14,
                specialtyPriority: 18,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            15: {
                friendshipBonus: 17,
                specialtyPriority: 26,
                moodEffect: { value: 16, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            20: {
                friendshipBonus: 19,
                specialtyPriority: 34,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            25: {
                friendshipBonus: 22,
                specialtyPriority: 42,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    locked: true,
                    unlockLevel: 30,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            30: {
                friendshipBonus: 25,
                specialtyPriority: 50,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 53,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                gutsBonus: { value: 1, locked: false },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            40: {
                friendshipBonus: 30,
                specialtyPriority: 57,
                moodEffect: { value: 36, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                gutsBonus: { value: 1, locked: false },
                initialGuts: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            45: {
                friendshipBonus: 32,
                specialtyPriority: 61,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                gutsBonus: { value: 1, locked: false },
                initialGuts: { value: 15, locked: false },
                uniqueEffect: {
                    value: "Mood +15%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            50: {
                friendshipBonus: 35,
                specialtyPriority: 65,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                gutsBonus: { value: 1, locked: false },
                initialGuts: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Mood +15%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            }
        }
    },

    'vodka_ssr': {
        id: 'vodka_ssr',
        name: 'Vodka',
        rarity: 'SSR',
        type: 'Power',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 12,
                specialtyPriority: 11,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 14,
                specialtyPriority: 18,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 17,
                specialtyPriority: 26,
                moodEffect: { value: 16, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 19,
                specialtyPriority: 34,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 22,
                specialtyPriority: 42,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 25,
                specialtyPriority: 50,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 53,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                powerBonus: { value: 1, locked: false },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            40: {
                friendshipBonus: 30,
                specialtyPriority: 57,
                moodEffect: { value: 36, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                powerBonus: { value: 1, locked: false },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            45: {
                friendshipBonus: 32,
                specialtyPriority: 61,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                powerBonus: { value: 1, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Friendship Training +10%, Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            },
            50: {
                friendshipBonus: 35,
                specialtyPriority: 65,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                powerBonus: { value: 1, locked: false },
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 40, locked: false },
                uniqueEffect: {
                    value: "Friendship Training +10%, Frequency +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases the frequency at which the character participates in their preferred training type (20)"
                }
            }
        }
    },

    'gold_ship_ssr': {
        id: 'gold_ship_ssr',
        name: 'Gold Ship',
        rarity: 'SSR',
        type: 'Stamina',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 9, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 15, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { locked: true, unlockLevel: 15 },
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 21, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 27, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 33, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                staminaBonus: { locked: true, unlockLevel: 35 },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            35: {
                friendshipBonus: 16,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 45, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                moodEffect: { value: 23, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            40: {
                friendshipBonus: 18,
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 50, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                moodEffect: { value: 26, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialStamina: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 55, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialStamina: { value: 15, locked: false },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            },
            50: {
                friendshipBonus: 20,
                hintLevels: { value: 4, locked: false },
                hintFrequency: { value: 60, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                staminaBonus: { value: 1, locked: false },
                initialStamina: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Initial Friendship Gauge +15",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases initial Friendship Gauge when beginning a Career playthrough (15)"
                }
            }
        }
    },

    'tokai_teio_ssr': {
        id: 'tokai_teio_ssr',
        name: 'Tokai Teio',
        rarity: 'SSR',
        type: 'Speed',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                moodEffect: { value: 14, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                moodEffect: { value: 19, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                moodEffect: { value: 24, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 13, locked: false },
                specialtyPriority: { value: 5, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                moodEffect: { value: 29, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 21, locked: false },
                specialtyPriority: { value: 12, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: { value: 34, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Initial Speed +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Speed when beginning a Career playthrough (20)"
                }
            },
            35: {
                friendshipBonus: 16,
                moodEffect: { value: 45, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 33, locked: false },
                specialtyPriority: { value: 25, locked: false },
                powerBonus: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Initial Speed +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Speed when beginning a Career playthrough (20)"
                }
            },
            40: {
                friendshipBonus: 18,
                moodEffect: { value: 50, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 36, locked: false },
                specialtyPriority: { value: 30, locked: false },
                powerBonus: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 45 },
                fanBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Friendship Training +10%, Initial Speed +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Speed when beginning a Career playthrough (20)"
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: { value: 55, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                powerBonus: { value: 1, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                uniqueEffect: {
                    value: "Friendship Training +10%, Initial Speed +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Speed when beginning a Career playthrough (20)"
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: { value: 60, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                powerBonus: { value: 1, locked: false },
                raceBonus: { value: 10, locked: false },
                fanBonus: { value: 15, locked: false },
                uniqueEffect: {
                    value: "Friendship Training +10%, Initial Speed +20",
                    locked: false,
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Speed when beginning a Career playthrough (20)"
                }
            }
        }
    },

    'silence_suzuka_ssr': {
        id: 'silence_suzuka_ssr',
        name: 'Silence Suzuka',
        rarity: 'SSR',
        type: 'Speed',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 12,
                specialtyPriority: 11,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 14,
                specialtyPriority: 18,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 17,
                specialtyPriority: 26,
                moodEffect: { value: 16, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 19,
                specialtyPriority: 34,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 22,
                specialtyPriority: 42,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 25,
                specialtyPriority: 50,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 35 },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Hint Frequency +20%",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which hint events occur (20%)"
                }
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 53,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                skillPointBonus: { value: 1, locked: false },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Hint Frequency +20%",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which hint events occur (20%)"
                }
            },
            40: {
                friendshipBonus: 30,
                specialtyPriority: 57,
                moodEffect: { value: 36, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                skillPointBonus: { value: 1, locked: false },
                initialSpeed: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Mood +15%, Hint Frequency +20%",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which hint events occur (20%)"
                }
            },
            45: {
                friendshipBonus: 32,
                specialtyPriority: 61,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                skillPointBonus: { value: 1, locked: false },
                initialSpeed: { value: 15, locked: false },
                uniqueEffect: {
                    value: "Mood +15%, Hint Frequency +20%",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which hint events occur (20%)"
                }
            },
            50: {
                friendshipBonus: 35,
                specialtyPriority: 65,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                skillPointBonus: { value: 1, locked: false },
                initialSpeed: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Mood +15%, Hint Frequency +20%",
                    locked: false,
                    description: "Amplifies the effect of mood when training together (15%), increases the frequency at which hint events occur (20%)"
                }
            }
        }
    },

    'special_week_guts_ssr': {
        id: 'special_week_guts_ssr',
        name: 'Special Week (Guts)',
        rarity: 'SSR',
        type: 'Guts',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                moodEffect: { value: 14, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                moodEffect: { value: 19, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                moodEffect: { value: 24, locked: false },
                initialFriendshipGauge: { value: 13, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 13, locked: false },
                specialtyPriority: { value: 5, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                moodEffect: { value: 29, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 21, locked: false },
                specialtyPriority: { value: 12, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: { value: 34, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Guts Training +1, Initial Guts +20",
                    locked: false,
                    description: "Increases Guts gain when training together (1), increases initial Guts when beginning a Career playthrough (20)"
                }
            },
            35: {
                friendshipBonus: 16,
                moodEffect: { value: 45, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 33, locked: false },
                specialtyPriority: { value: 25, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Guts Training +1, Initial Guts +20",
                    locked: false,
                    description: "Increases Guts gain when training together (1), increases initial Guts when beginning a Career playthrough (20)"
                }
            },
            40: {
                friendshipBonus: 18,
                moodEffect: { value: 50, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 36, locked: false },
                specialtyPriority: { value: 30, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Guts Training +1, Initial Guts +20",
                    locked: false,
                    description: "Increases Guts gain when training together (1), increases initial Guts when beginning a Career playthrough (20)"
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: { value: 55, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                uniqueEffect: {
                    value: "Guts Training +1, Initial Guts +20",
                    locked: false,
                    description: "Increases Guts gain when training together (1), increases initial Guts when beginning a Career playthrough (20)"
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: { value: 60, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                powerBonus: { value: 1, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                uniqueEffect: {
                    value: "Guts Training +1, Initial Guts +20",
                    locked: false,
                    description: "Increases Guts gain when training together (1), increases initial Guts when beginning a Career playthrough (20)"
                }
            }
        }
    },

    'special_week_speed_ssr': {
        id: 'special_week_speed_ssr',
        name: 'Special Week (Speed)',
        rarity: 'SSR',
        type: 'Speed',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            5: {
                friendshipBonus: 12,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            10: {
                friendshipBonus: 14,
                initialFriendshipGauge: { value: 1, locked: false },
                moodEffect: { locked: true, unlockLevel: 15 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            15: {
                friendshipBonus: 17,
                initialFriendshipGauge: { value: 2, locked: false },
                moodEffect: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            20: {
                friendshipBonus: 19,
                initialFriendshipGauge: { value: 3, locked: false },
                moodEffect: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            25: {
                friendshipBonus: 22,
                initialFriendshipGauge: { value: 5, locked: false },
                moodEffect: { value: 20, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            30: {
                friendshipBonus: 25,
                initialFriendshipGauge: { value: 5, locked: false },
                moodEffect: { value: 20, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                speedBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            35: {
                friendshipBonus: 27,
                initialFriendshipGauge: { value: 6, locked: false },
                moodEffect: { value: 23, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                speedBonus: { value: 1, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            40: {
                friendshipBonus: 30,
                initialFriendshipGauge: { value: 8, locked: false },
                moodEffect: { value: 26, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                speedBonus: { value: 1, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Race Bonus +5%",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases stat gain from races (5%)"
                }
            },
            45: {
                friendshipBonus: 32,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { value: 30, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedBonus: { value: 1, locked: false },
                specialtyPriority: { value: 15, locked: false },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Race Bonus +5%",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases stat gain from races (5%)"
                }
            },
            50: {
                friendshipBonus: 35,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { value: 30, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedBonus: { value: 1, locked: false },
                specialtyPriority: { value: 30, locked: false },
                uniqueEffect: {
                    value: "Training Effectiveness +5%, Race Bonus +5%",
                    locked: false,
                    description: "Increases the effectiveness of training performed together (5%), increases stat gain from races (5%)"
                }
            }
        }
    },

    'oguri_cap_power_ssr': {
        id: 'oguri_cap_power_ssr',
        name: 'Oguri Cap',
        rarity: 'SSR',
        type: 'Power',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: 10,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                moodEffect: 10,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                moodEffect: 24,
                initialFriendshipGauge: 13,
                hintLevels: 1,
                hintFrequency: 13,
                specialtyPriority: 5,
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                moodEffect: 29,
                initialFriendshipGauge: 16,
                hintLevels: 1,
                hintFrequency: 21,
                specialtyPriority: 12,
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: 34,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 20,
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                moodEffect: 40,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 20,
                powerBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            35: {
                friendshipBonus: 16,
                moodEffect: 45,
                initialFriendshipGauge: 21,
                hintLevels: 2,
                hintFrequency: 33,
                specialtyPriority: 25,
                powerBonus: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            40: {
                friendshipBonus: 18,
                moodEffect: 50,
                initialFriendshipGauge: 23,
                hintLevels: 2,
                hintFrequency: 36,
                specialtyPriority: 30,
                powerBonus: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: 55,
                initialFriendshipGauge: 25,
                hintLevels: 2,
                hintFrequency: 40,
                specialtyPriority: 35,
                powerBonus: 1,
                trainingEffectiveness: 5,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: 60,
                initialFriendshipGauge: 25,
                hintLevels: 2,
                hintFrequency: 40,
                specialtyPriority: 35,
                powerBonus: 1,
                trainingEffectiveness: 10,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            }
        }
    },

    'twin_turbo_ssr': {
        id: 'twin_turbo_ssr',
        name: 'Twin Turbo',
        rarity: 'SSR',
        type: 'Speed',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: 10,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 10,
                moodEffect: 14,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 10 },
                hintFrequency: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 11,
                moodEffect: 19,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                specialtyPriority: { locked: true, unlockLevel: 15 },
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 12,
                moodEffect: 24,
                initialFriendshipGauge: 13,
                hintLevels: 1,
                hintFrequency: 13,
                specialtyPriority: 5,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 13,
                moodEffect: 29,
                initialFriendshipGauge: 16,
                hintLevels: 1,
                hintFrequency: 21,
                specialtyPriority: 12,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: 34,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 20,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 15,
                moodEffect: 40,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 20,
                speedBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases stat gain from races (5%)",
                    value: "Mood Training +15%, Race Bonus +5%",
                    locked: false
                }
            },
            35: {
                friendshipBonus: 16,
                moodEffect: 45,
                initialFriendshipGauge: 21,
                hintLevels: 2,
                hintFrequency: 33,
                specialtyPriority: 25,
                speedBonus: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases stat gain from races (5%)",
                    value: "Mood Training +15%, Race Bonus +5%",
                    locked: false
                }
            },
            40: {
                friendshipBonus: 18,
                moodEffect: 50,
                initialFriendshipGauge: 23,
                hintLevels: 2,
                hintFrequency: 36,
                specialtyPriority: 30,
                speedBonus: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases stat gain from races (5%)",
                    value: "Mood Training +15%, Race Bonus +5%",
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: 55,
                initialFriendshipGauge: 25,
                hintLevels: 2,
                hintFrequency: 40,
                specialtyPriority: 35,
                speedBonus: 1,
                trainingEffectiveness: 5,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases stat gain from races (5%)",
                    value: "Mood Training +15%, Race Bonus +5%",
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: 60,
                initialFriendshipGauge: 25,
                hintLevels: 2,
                hintFrequency: 40,
                specialtyPriority: 35,
                speedBonus: 1,
                trainingEffectiveness: 10,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases stat gain from races (5%)",
                    value: "Mood Training +15%, Race Bonus +5%",
                    locked: false
                }
            }
        }
    },

    'special_week_ssr': {
        id: 'special_week_ssr',
        name: 'Special Week (Speed)',
        rarity: 'SSR',
        type: 'Speed',
        maxLevel: 50,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: null, // Unlocked at level 10
                moodEffect: null, // Unlocked at level 15
                raceBonus: null, // Unlocked at level 15
                fanBonus: null, // Unlocked at level 15
                speedBonus: null, // Unlocked at level 35
                specialtyPriority: null, // Unlocked at level 45
                uniqueEffect: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 12,
                initialFriendshipGauge: null,
                moodEffect: null,
                raceBonus: null,
                fanBonus: null,
                speedBonus: null,
                specialtyPriority: null,
                uniqueEffect: null
            },
            10: {
                friendshipBonus: 15,
                initialFriendshipGauge: 5,
                moodEffect: null,
                raceBonus: null,
                fanBonus: null,
                speedBonus: null,
                specialtyPriority: null,
                uniqueEffect: null
            },
            15: {
                friendshipBonus: 18,
                initialFriendshipGauge: 6,
                moodEffect: 10,
                raceBonus: 2,
                fanBonus: 3,
                speedBonus: null,
                specialtyPriority: null,
                uniqueEffect: null
            },
            20: {
                friendshipBonus: 20,
                initialFriendshipGauge: 7,
                moodEffect: 15,
                raceBonus: 3,
                fanBonus: 5,
                speedBonus: null,
                specialtyPriority: null,
                uniqueEffect: null
            },
            25: {
                friendshipBonus: 22,
                initialFriendshipGauge: 7,
                moodEffect: 18,
                raceBonus: 3,
                fanBonus: 6,
                speedBonus: null,
                specialtyPriority: null,
                uniqueEffect: null
            },
            30: {
                friendshipBonus: 25,
                initialFriendshipGauge: 8,
                moodEffect: 22,
                raceBonus: 4,
                fanBonus: 7,
                speedBonus: null,
                specialtyPriority: null,
                uniqueEffect: null
            },
            35: {
                friendshipBonus: 28,
                initialFriendshipGauge: 9,
                moodEffect: 25,
                raceBonus: 4,
                fanBonus: 8,
                speedBonus: 1,
                specialtyPriority: null,
                uniqueEffect: null
            },
            40: {
                friendshipBonus: 30,
                initialFriendshipGauge: 9,
                moodEffect: 27,
                raceBonus: 5,
                fanBonus: 9,
                speedBonus: 1,
                specialtyPriority: null,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases stat gain from races (5%)",
                    value: "Training +5%, Race Bonus +5%",
                    locked: false
                }
            },
            45: {
                friendshipBonus: 32,
                initialFriendshipGauge: 10,
                moodEffect: 28,
                raceBonus: 5,
                fanBonus: 9,
                speedBonus: 1,
                specialtyPriority: 20,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases stat gain from races (5%)",
                    value: "Training +5%, Race Bonus +5%",
                    locked: false
                }
            },
            50: {
                friendshipBonus: 35,
                initialFriendshipGauge: 10,
                moodEffect: 30,
                raceBonus: 5,
                fanBonus: 10,
                speedBonus: 1,
                specialtyPriority: 30,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases stat gain from races (5%)",
                    value: "Training +5%, Race Bonus +5%",
                    locked: false
                }
            }
        }
    },

    'mejiro_palmer_ssr': {
        id: 'mejiro_palmer_ssr',
        name: 'Mejiro Palmer',
        rarity: 'SSR',
        type: 'Guts',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        // LEGENDARY SSR TIER: 35% friendship bonus (highest tier discovered)
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 12,
                specialtyPriority: 11,
                moodEffect: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 14,
                specialtyPriority: 18,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                raceBonus: 1,
                fanBonus: 1,
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 17,
                specialtyPriority: 26,
                moodEffect: 16,
                initialFriendshipGauge: 13,
                raceBonus: 2,
                fanBonus: 4,
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 19,
                specialtyPriority: 34,
                moodEffect: 23,
                initialFriendshipGauge: 16,
                raceBonus: 3,
                fanBonus: 7,
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 22,
                specialtyPriority: 42,
                moodEffect: 30,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 25,
                specialtyPriority: 50,
                moodEffect: 30,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                powerBonus: { locked: true, unlockLevel: 35 },
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Training Effectiveness +5%, Initial Guts +20",
                    locked: false
                }
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 53,
                moodEffect: 33,
                initialFriendshipGauge: 21,
                raceBonus: 5,
                fanBonus: 11,
                powerBonus: 1,
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Training Effectiveness +5%, Initial Guts +20",
                    locked: false
                }
            },
            40: {
                friendshipBonus: 30,
                specialtyPriority: 57,
                moodEffect: 36,
                initialFriendshipGauge: 23,
                raceBonus: 5,
                fanBonus: 13,
                powerBonus: 1,
                hintLevels: { locked: true, unlockLevel: 45 },
                hintFrequency: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Training Effectiveness +5%, Initial Guts +20",
                    locked: false
                }
            },
            45: {
                friendshipBonus: 32,
                specialtyPriority: 61,
                moodEffect: 40,
                initialFriendshipGauge: 25,
                raceBonus: 5,
                fanBonus: 15,
                powerBonus: 1,
                hintLevels: 2,
                hintFrequency: 30,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Training Effectiveness +5%, Initial Guts +20",
                    locked: false
                }
            },
            50: {
                friendshipBonus: 35,
                specialtyPriority: 65,
                moodEffect: 40,
                initialFriendshipGauge: 25,
                raceBonus: 5,
                fanBonus: 15,
                powerBonus: 1,
                hintLevels: 3,
                hintFrequency: 40,
                uniqueEffect: {
                    description: "Increases the effectiveness of training performed together (5%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Training Effectiveness +5%, Initial Guts +20",
                    locked: false
                }
            }
        }
    },

    'matikanetannhauser_ssr': {
        id: 'matikanetannhauser_ssr',
        name: 'Matikanetannhauser',
        rarity: 'SSR',
        type: 'Guts',
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        // PREMIUM SSR TIER: 25% friendship bonus
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialGuts: 10,
                specialtyPriority: 5,
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            5: {
                friendshipBonus: 11,
                initialGuts: 12,
                specialtyPriority: 11,
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            10: {
                friendshipBonus: 13,
                initialGuts: 14,
                specialtyPriority: 18,
                trainingEffectiveness: { locked: true, unlockLevel: 15 },
                raceBonus: { locked: true, unlockLevel: 15 },
                fanBonus: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            15: {
                friendshipBonus: 15,
                initialGuts: 17,
                specialtyPriority: 26,
                trainingEffectiveness: 1,
                raceBonus: 1,
                fanBonus: 1,
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            20: {
                friendshipBonus: 17,
                initialGuts: 19,
                specialtyPriority: 34,
                trainingEffectiveness: 3,
                raceBonus: 1,
                fanBonus: 3,
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            25: {
                friendshipBonus: 20,
                initialGuts: 22,
                specialtyPriority: 42,
                trainingEffectiveness: 5,
                raceBonus: 1,
                fanBonus: 5,
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            30: {
                friendshipBonus: 20,
                initialGuts: 25,
                specialtyPriority: 50,
                trainingEffectiveness: 5,
                raceBonus: 1,
                fanBonus: 5,
                gutsBonus: { locked: true, unlockLevel: 35 },
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            35: {
                friendshipBonus: 21,
                initialGuts: 27,
                specialtyPriority: 53,
                trainingEffectiveness: 5,
                raceBonus: 2,
                fanBonus: 6,
                gutsBonus: 1,
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 40 }
            },
            40: {
                friendshipBonus: 23,
                initialGuts: 30,
                specialtyPriority: 57,
                trainingEffectiveness: 5,
                raceBonus: 3,
                fanBonus: 8,
                gutsBonus: 1,
                moodEffect: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Friendship Training +10%, Initial Guts +20",
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                initialGuts: 32,
                specialtyPriority: 61,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                gutsBonus: 1,
                moodEffect: 15,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Friendship Training +10%, Initial Guts +20",
                    locked: false
                }
            },
            50: {
                friendshipBonus: 25,
                initialGuts: 35,
                specialtyPriority: 65,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                gutsBonus: 1,
                moodEffect: 30,
                uniqueEffect: {
                    description: "Increases the effectiveness of Friendship Training (10%), increases initial Guts when beginning a Career playthrough (20)",
                    value: "Friendship Training +10%, Initial Guts +20",
                    locked: false
                }
            }
        }
    },

    'oguri_cap_ssr': {
        id: 'oguri_cap_ssr',
        name: 'Oguri Cap',
        rarity: 'SSR',
        type: 'Power',
        maxLevel: 50,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: 10,
                initialFriendshipGauge: null, // Unlocked at level 10
                hintLevels: null, // Unlocked at level 10
                hintFrequency: null, // Unlocked at level 10
                specialtyPriority: null, // Unlocked at level 15
                powerBonus: null, // Unlocked at level 35
                trainingEffectiveness: null, // Unlocked at level 45
                uniqueEffect: null // Unlocked at level 30
            },
            5: {
                friendshipBonus: 12,
                moodEffect: 15,
                initialFriendshipGauge: null,
                hintLevels: null,
                hintFrequency: null,
                specialtyPriority: null,
                powerBonus: null,
                trainingEffectiveness: null,
                uniqueEffect: null
            },
            10: {
                friendshipBonus: 15,
                moodEffect: 25,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 15,
                specialtyPriority: null,
                powerBonus: null,
                trainingEffectiveness: null,
                uniqueEffect: null
            },
            15: {
                friendshipBonus: 17,
                moodEffect: 35,
                initialFriendshipGauge: 15,
                hintLevels: 'Lv 1',
                hintFrequency: 20,
                specialtyPriority: 10,
                powerBonus: null,
                trainingEffectiveness: null,
                uniqueEffect: null
            },
            20: {
                friendshipBonus: 18,
                moodEffect: 40,
                initialFriendshipGauge: 18,
                hintLevels: 'Lv 1',
                hintFrequency: 25,
                specialtyPriority: 15,
                powerBonus: null,
                trainingEffectiveness: null,
                uniqueEffect: null
            },
            25: {
                friendshipBonus: 19,
                moodEffect: 45,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 28,
                specialtyPriority: 20,
                powerBonus: null,
                trainingEffectiveness: null,
                uniqueEffect: null
            },
            30: {
                friendshipBonus: 20,
                moodEffect: 50,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                specialtyPriority: 25,
                powerBonus: null,
                trainingEffectiveness: null,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            35: {
                friendshipBonus: 20,
                moodEffect: 55,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                specialtyPriority: 30,
                powerBonus: 1,
                trainingEffectiveness: null,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                moodEffect: 57,
                initialFriendshipGauge: 24,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                specialtyPriority: 33,
                powerBonus: 1,
                trainingEffectiveness: null,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: 58,
                initialFriendshipGauge: 24,
                hintLevels: 'Lv 2',
                hintFrequency: 39,
                specialtyPriority: 34,
                powerBonus: 1,
                trainingEffectiveness: 5,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: 60,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                specialtyPriority: 35,
                powerBonus: 1,
                trainingEffectiveness: 10,
                uniqueEffect: {
                    description: "Increases Power gain when training together (1), increases initial Power when beginning a Career playthrough (20)",
                    value: "Power Training +1, Initial Power +20",
                    locked: false
                }
            }
        }
    },

    'satono_diamond_ssr': {
        id: 'satono_diamond_ssr',
        name: 'Satono Diamond',
        rarity: 'SSR',
        type: 'Stamina', // Confirmed from folder name: "29. Satono Diamond (Stamina)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: 10,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialStamina: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 12,
                moodEffect: 14,
                initialFriendshipGauge: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialStamina: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 13,
                moodEffect: 18,
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 25, locked: false },
                initialStamina: { locked: true, unlockLevel: 15 },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 14,
                moodEffect: 22,
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 30, locked: false },
                initialStamina: { value: 15, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 15,
                moodEffect: 26,
                initialFriendshipGauge: { value: 19, locked: false },
                specialtyPriority: { value: 32, locked: false },
                initialStamina: { value: 17, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 16,
                moodEffect: 28,
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 34, locked: false },
                initialStamina: { value: 18, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 17,
                moodEffect: 30,
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialStamina: { value: 15, locked: false },
                gutsBonus: { locked: true, unlockLevel: 35 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                moodEffect: 34,
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 40, locked: false },
                initialStamina: { value: 16, locked: false },
                gutsBonus: { value: 1, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { value: 6, locked: false },
                fanBonus: { value: 15, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 19,
                moodEffect: 36,
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 45, locked: false },
                initialStamina: { value: 18, locked: false },
                gutsBonus: { value: 1, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                raceBonus: { value: 7, locked: false },
                fanBonus: { value: 17, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 19,
                moodEffect: 38,
                initialFriendshipGauge: { value: 24, locked: false },
                specialtyPriority: { value: 48, locked: false },
                initialStamina: { value: 19, locked: false },
                gutsBonus: { value: 1, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 8, locked: false },
                fanBonus: { value: 18, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 20,
                moodEffect: 40,
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialStamina: { value: 20, locked: false },
                gutsBonus: { value: 1, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 10, locked: false },
                fanBonus: { value: 20, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            }
        }
    },

    'kitasan_black_ssr': {
        id: 'kitasan_black_ssr',
        name: 'Kitasan Black',
        rarity: 'SSR',
        type: 'Speed', // Confirmed from folder name: "30. Kitasan Black (Speed)"
        maxLevel: 50,
        
        // Complete level-by-level progression data for all 11 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: 10,
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                hintLevels: { locked: true, unlockLevel: 15 },
                hintFrequency: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            5: {
                friendshipBonus: 11,
                initialFriendshipGauge: 12,
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 10 },
                fanBonus: { locked: true, unlockLevel: 10 },
                moodEffect: { locked: true, unlockLevel: 15 },
                hintLevels: { locked: true, unlockLevel: 15 },
                hintFrequency: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            10: {
                friendshipBonus: 13,
                initialFriendshipGauge: 14,
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                moodEffect: { locked: true, unlockLevel: 15 },
                hintLevels: { locked: true, unlockLevel: 15 },
                hintFrequency: { locked: true, unlockLevel: 15 },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            15: {
                friendshipBonus: 15,
                initialFriendshipGauge: 17,
                trainingEffectiveness: { value: 2, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                moodEffect: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            20: {
                friendshipBonus: 17,
                initialFriendshipGauge: 19,
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                moodEffect: { value: 15, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 12, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            25: {
                friendshipBonus: 20,
                initialFriendshipGauge: 22,
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 30 }
            },
            30: {
                friendshipBonus: 20,
                initialFriendshipGauge: 25,
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 35 },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 21,
                initialFriendshipGauge: 27,
                trainingEffectiveness: { value: 6, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                moodEffect: { value: 23, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 23, locked: false },
                powerBonus: { value: 1, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 23,
                initialFriendshipGauge: 30,
                trainingEffectiveness: { value: 8, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                moodEffect: { value: 26, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 26, locked: false },
                powerBonus: { value: 1, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                initialFriendshipGauge: 32,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                powerBonus: { value: 1, locked: false },
                specialtyPriority: { value: 40, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            50: {
                friendshipBonus: 25,
                initialFriendshipGauge: 35,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                powerBonus: { value: 1, locked: false },
                specialtyPriority: { value: 80, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    }
};

/**
 * Get level progression data for a specific SSR-rarity support card
 * @param {string} cardId - The card identifier
 * @param {number} level - The card level (must be a selectable level: 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50)
 * @returns {Object|null} Level progression data or null if not found
 */
function getSSRSupportCardLevelData(cardId, level) {
    const card = SSR_SUPPORT_CARD_LEVEL_PROGRESSION[cardId];
    if (!card || !card.levelProgression[level]) {
        return null;
    }
    
    return {
        ...card.levelProgression[level],
        cardInfo: {
            id: card.id,
            name: card.name,
            rarity: card.rarity,
            type: card.type,
            maxLevel: card.maxLevel
        }
    };
}

/**
 * Get all available levels for an SSR-rarity support card
 * @param {string} cardId - The card identifier
 * @returns {number[]} Array of available levels (1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50)
 */
function getSSRSupportCardAvailableLevels(cardId) {
    const card = SSR_SUPPORT_CARD_LEVEL_PROGRESSION[cardId];
    if (!card) {
        return [];
    }
    
    return Object.keys(card.levelProgression).map(level => parseInt(level)).sort((a, b) => a - b);
}

/**
 * Get complete SSR card information including all level progression data
 * @param {string} cardId - The card identifier
 * @returns {Object|null} Complete card data or null if not found
 */
function getSSRSupportCardComplete(cardId) {
    return SSR_SUPPORT_CARD_LEVEL_PROGRESSION[cardId] || null;
}

/**
 * Check if an SSR-rarity support card has level progression data implemented
 * @param {string} cardId - The card identifier
 * @returns {boolean} True if card has level progression data
 */
function hasSSRSupportCardLevelProgression(cardId) {
    return cardId in SSR_SUPPORT_CARD_LEVEL_PROGRESSION;
}

/**
 * Get all implemented SSR-rarity support card IDs
 * @returns {string[]} Array of implemented SSR card IDs
 */
function getAllSSRSupportCardIds() {
    return Object.keys(SSR_SUPPORT_CARD_LEVEL_PROGRESSION);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        SSR_SUPPORT_CARD_LEVEL_PROGRESSION,
        getSSRSupportCardLevelData,
        getSSRSupportCardAvailableLevels,
        getSSRSupportCardComplete,
        hasSSRSupportCardLevelProgression,
        getAllSSRSupportCardIds
    };
} else {
    // Browser environment - attach to window
    window.SSRSupportCardLevelProgression = {
        SSR_SUPPORT_CARD_LEVEL_PROGRESSION,
        getSSRSupportCardLevelData,
        getSSRSupportCardAvailableLevels,
        getSSRSupportCardComplete,
        hasSSRSupportCardLevelProgression,
        getAllSSRSupportCardIds
    };
}