/**
 * SR-Rarity Support Card Level Progression System
 * 
 * This module contains complete level-by-level progression data for SR-rarity support cards.
 * SR cards have 10 selectable levels: 1, 5, 10, 15, 20, 25, 30, 35, 40, 45
 * 
 * Effects change at EVERY level, requiring complete progression data for accurate
 * training calculations and user level selection.
 */

// SR-Rarity Support Card Level Progression Database
const SR_SUPPORT_CARD_LEVEL_PROGRESSION = {
    // SR support cards will be implemented here following this structure:
    // 
    // 'card_id_sr': {
    //     id: 'card_id_sr',
    //     name: 'Card Name (SR)',
    //     rarity: 'SR',
    //     type: 'Speed|Stamina|Power|Guts|Wit|Friend',
    //     maxLevel: 45,
    //     
    //     // Complete level-by-level progression data for all 10 selectable levels
    //     levelProgression: {
    //         1: { friendshipBonus: X, moodEffect: Y, ... },
    //         5: { friendshipBonus: X, moodEffect: Y, ... },
    //         10: { friendshipBonus: X, moodEffect: Y, ... },
    //         15: { friendshipBonus: X, moodEffect: Y, ... },
    //         20: { friendshipBonus: X, moodEffect: Y, ... },
    //         25: { friendshipBonus: X, moodEffect: Y, ... },
    //         30: { friendshipBonus: X, moodEffect: Y, ... },
    //         35: { friendshipBonus: X, moodEffect: Y, ... },
    //         40: { friendshipBonus: X, moodEffect: Y, ... },
    //         45: { friendshipBonus: X, moodEffect: Y, ... }
    //     }
    // }
    
    'aoi_kiryuin_sr': {
        id: 'aoi_kiryuin_sr',
        name: 'Aoi Kiryuin',
        rarity: 'SR',
        type: 'Friend', // Confirmed from folder name: "1. Aoi Kiryuin (Friend)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                initialFriendshipGauge: 10,
                eventRecovery: 10,
                eventEffectiveness: 10,
                failureProtection: 5,
                energyCostReduction: 1,
                initialWit: { locked: true, unlockLevel: 30 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                initialFriendshipGauge: 11,
                eventRecovery: 15,
                eventEffectiveness: 12,
                failureProtection: 7,
                energyCostReduction: 3,
                initialWit: { locked: true, unlockLevel: 30 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                initialFriendshipGauge: 13,
                eventRecovery: 21,
                eventEffectiveness: 15,
                failureProtection: 10,
                energyCostReduction: 6,
                initialWit: { locked: true, unlockLevel: 30 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                initialFriendshipGauge: 15,
                eventRecovery: 27,
                eventEffectiveness: 18,
                failureProtection: 13,
                energyCostReduction: 9,
                initialWit: { locked: true, unlockLevel: 30 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                initialFriendshipGauge: 17,
                eventRecovery: 33,
                eventEffectiveness: 21,
                failureProtection: 16,
                energyCostReduction: 12,
                initialWit: { locked: true, unlockLevel: 30 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                initialFriendshipGauge: 20,
                eventRecovery: 40,
                eventEffectiveness: 25,
                failureProtection: 20,
                energyCostReduction: 15,
                initialWit: { locked: true, unlockLevel: 30 },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            30: {
                initialFriendshipGauge: 21,
                eventRecovery: 42,
                eventEffectiveness: 26,
                failureProtection: 21,
                energyCostReduction: 16,
                initialWit: { value: 10, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            35: {
                initialFriendshipGauge: 22,
                eventRecovery: 45,
                eventEffectiveness: 27,
                failureProtection: 22,
                energyCostReduction: 17,
                initialWit: { value: 15, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            40: {
                initialFriendshipGauge: 23,
                eventRecovery: 47,
                eventEffectiveness: 28,
                failureProtection: 23,
                energyCostReduction: 18,
                initialWit: { value: 20, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            },
            45: {
                initialFriendshipGauge: 25,
                eventRecovery: 50,
                eventEffectiveness: 30,
                failureProtection: 25,
                energyCostReduction: 20,
                initialWit: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                uniqueEffect: {
                    description: 'Decreases the probability of failure when training together (10%), Decreases Energy consumed when training together (5%)',
                    locked: false
                }
            }
        }
    },

    'king_halo_sr': {
        id: 'king_halo_sr',
        name: 'King Halo',
        rarity: 'SR',
        type: 'Speed', // Confirmed from folder name: "2. King Halo (Speed)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 5,
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                moodEffect: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                hintLevels: 1,
                hintFrequency: 10,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                specialtyPriority: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                hintLevels: 1,
                hintFrequency: 18,
                initialFriendshipGauge: { value: 12, locked: false },
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                hintLevels: 1,
                hintFrequency: 25,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                hintLevels: 1,
                hintFrequency: 32,
                initialFriendshipGauge: { value: 17, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Speed gain when training together (1), Increases initial Speed when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                hintLevels: 2,
                hintFrequency: 42,
                initialFriendshipGauge: { value: 21, locked: false },
                moodEffect: { value: 23, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 30, locked: false },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Speed gain when training together (1), Increases initial Speed when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                hintLevels: 2,
                hintFrequency: 45,
                initialFriendshipGauge: { value: 22, locked: false },
                moodEffect: { value: 26, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 45, locked: false },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Speed gain when training together (1), Increases initial Speed when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                hintLevels: 2,
                hintFrequency: 47,
                initialFriendshipGauge: { value: 23, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 60, locked: false },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases Speed gain when training together (1), Increases initial Speed when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: 3,
                hintFrequency: 50,
                initialFriendshipGauge: { value: 25, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 60, locked: false },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases Speed gain when training together (1), Increases initial Speed when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'nice_nature_sr': {
        id: 'nice_nature_sr',
        name: 'Nice Nature',
        rarity: 'SR',
        type: 'Guts', // Confirmed from folder name: "3. Nice Nature (Guts)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 5,
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                moodEffect: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                hintLevels: 1,
                hintFrequency: 10,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                hintLevels: 1,
                hintFrequency: 18,
                initialFriendshipGauge: { value: 12, locked: false },
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                hintLevels: 2,
                hintFrequency: 25,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 2, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 32,
                initialFriendshipGauge: { value: 17, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                hintLevels: 2,
                hintFrequency: 42,
                initialFriendshipGauge: { value: 21, locked: false },
                moodEffect: { value: 23, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 3, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                hintLevels: 2,
                hintFrequency: 45,
                initialFriendshipGauge: { value: 22, locked: false },
                moodEffect: { value: 26, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 5, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                hintLevels: 3,
                hintFrequency: 47,
                initialFriendshipGauge: { value: 23, locked: false },
                moodEffect: { value: 28, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 7, locked: false },
                fanBonus: { value: 7, locked: false },
                skillPointBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: 3,
                hintFrequency: 50,
                initialFriendshipGauge: { value: 25, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 10, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'mejiro_dober_sr': {
        id: 'mejiro_dober_sr',
        name: 'Mejiro Dober',
        rarity: 'SR',
        type: 'Wit', // Confirmed from folder name: "4. Mejiro Dober (Wit)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                witFriendshipRecovery: 1,
                trainingEffectiveness: { locked: true, unlockLevel: 5 },
                raceBonus: { locked: true, unlockLevel: 5 },
                fanBonus: { locked: true, unlockLevel: 5 },
                moodEffect: { locked: true, unlockLevel: 10 },
                initialWit: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 9,
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                moodEffect: { locked: true, unlockLevel: 10 },
                initialWit: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 14,
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 2, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                moodEffect: { value: 10, locked: false },
                initialWit: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                initialFriendshipGauge: 18,
                hintLevels: 1,
                hintFrequency: 19,
                witFriendshipRecovery: 2,
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                moodEffect: { value: 15, locked: false },
                initialWit: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                initialFriendshipGauge: 21,
                hintLevels: 1,
                hintFrequency: 24,
                witFriendshipRecovery: 2,
                trainingEffectiveness: { value: 4, locked: false },
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                moodEffect: { value: 20, locked: false },
                initialWit: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 2,
                hintFrequency: 30,
                witFriendshipRecovery: 3,
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                initialWit: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                initialFriendshipGauge: 26,
                hintLevels: 2,
                hintFrequency: 32,
                witFriendshipRecovery: 3,
                trainingEffectiveness: { value: 6, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                moodEffect: { value: 23, locked: false },
                initialWit: { value: 10, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                initialFriendshipGauge: 27,
                hintLevels: 2,
                hintFrequency: 35,
                witFriendshipRecovery: 3,
                trainingEffectiveness: { value: 7, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                moodEffect: { value: 26, locked: false },
                initialWit: { value: 15, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                initialFriendshipGauge: 28,
                hintLevels: 2,
                hintFrequency: 37,
                witFriendshipRecovery: 3,
                trainingEffectiveness: { value: 8, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                moodEffect: { value: 30, locked: false },
                initialWit: { value: 20, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                initialFriendshipGauge: 30,
                hintLevels: 2,
                hintFrequency: 40,
                witFriendshipRecovery: 4,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                initialWit: { value: 20, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'meisho_doto_sr': {
        id: 'meisho_doto_sr',
        name: 'Meisho Doto',
        rarity: 'SR',
        type: 'Guts', // Confirmed from folder name: "5. Meisho Doto (Guts)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                trainingEffectiveness: 1,
                initialGuts: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 30 },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                trainingEffectiveness: 1,
                initialGuts: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: { locked: true, unlockLevel: 10 },
                initialFriendshipGauge: { locked: true, unlockLevel: 30 },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 13,
                trainingEffectiveness: 2,
                initialGuts: 15,
                raceBonus: 2,
                fanBonus: 4,
                specialtyPriority: { value: 5, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 30 },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 15,
                trainingEffectiveness: 3,
                initialGuts: 18,
                raceBonus: 3,
                fanBonus: 6,
                specialtyPriority: { value: 12, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 30 },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 17,
                trainingEffectiveness: 4,
                initialGuts: 21,
                raceBonus: 4,
                fanBonus: 8,
                specialtyPriority: { value: 20, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 30 },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 20,
                trainingEffectiveness: 5,
                initialGuts: 25,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: { value: 20, locked: false },
                initialFriendshipGauge: { locked: true, unlockLevel: 30 },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 21,
                trainingEffectiveness: 6,
                initialGuts: 26,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: { value: 25, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 22,
                trainingEffectiveness: 7,
                initialGuts: 27,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: { value: 30, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 23,
                trainingEffectiveness: 8,
                initialGuts: 28,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: { value: 35, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                gutsBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                trainingEffectiveness: 10,
                initialGuts: 30,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: { value: 35, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                gutsBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            }
        }
    },

    'matikanefukukitaru_sr': {
        id: 'matikanefukukitaru_sr',
        name: 'Matikanefukukitaru',
        rarity: 'SR',
        type: 'Wit', // Confirmed from folder name: "6. Matikanefukukitaru (Wit)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: 10,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                hintLevels: { locked: true, unlockLevel: 5 },
                hintFrequency: { locked: true, unlockLevel: 5 },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                moodEffect: 15,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                moodEffect: 21,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { value: 12, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 11, locked: false },
                specialtyPriority: { value: 5, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                moodEffect: 27,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 17, locked: false },
                specialtyPriority: { value: 12, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                moodEffect: 33,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: { value: 17, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 23, locked: false },
                specialtyPriority: { value: 20, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: 40,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                trainingEffectiveness: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                moodEffect: 42,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                specialtyPriority: { value: 25, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                moodEffect: 45,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: { value: 22, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                specialtyPriority: { value: 30, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                moodEffect: 47,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: { value: 23, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                specialtyPriority: { value: 35, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: 50,
                witFriendshipRecovery: 4,
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            }
        }
    },

    'marvelous_sunday_sr': {
        id: 'marvelous_sunday_sr',
        name: 'Marvelous Sunday',
        rarity: 'SR',
        type: 'Wit', // Confirmed from folder name: "7. Marvelous Sunday (Wit)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                moodEffect: { locked: true, unlockLevel: 5 },
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                specialtyPriority: { locked: true, unlockLevel: 5 },
                initialWit: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: 1,
                fanBonus: 3,
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialWit: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 6,
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialWit: { value: 10, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 9,
                witFriendshipRecovery: 2,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialWit: { value: 12, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 27, locked: false },
                initialWit: { value: 15, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialWit: { value: 15, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                witFriendshipRecovery: 3,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                initialWit: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: 7,
                fanBonus: 17,
                witFriendshipRecovery: 3,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                initialWit: { value: 18, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 25, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                witFriendshipRecovery: 3,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                initialWit: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                witBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 10,
                fanBonus: 20,
                witFriendshipRecovery: 4,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialWit: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'marvelous_sunday_sr': {
        id: 'marvelous_sunday_sr',
        name: 'Marvelous Sunday',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                initialWit: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: 1,
                fanBonus: 3,
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialWit: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 6,
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialWit: { value: 10, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 9,
                witFriendshipRecovery: 2,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialWit: { value: 12, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 27, locked: false },
                initialWit: { value: 15, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 27, locked: false },
                initialWit: { value: 15, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                witFriendshipRecovery: 3,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                initialWit: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: 6,
                fanBonus: 16,
                witFriendshipRecovery: 3,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 42, locked: false },
                initialWit: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 25, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                witFriendshipRecovery: 3,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                initialWit: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                witFriendshipRecovery: 3,
                moodEffect: { value: 42, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialWit: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'narita_taishin_sr': {
        id: 'narita_taishin_sr',
        name: 'Narita Taishin',
        rarity: 'SR',
        type: 'Speed',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                moodEffect: { value: null, locked: true },
                initialSpeed: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                initialFriendshipGauge: { value: 12, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 9, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                moodEffect: { value: null, locked: true },
                initialSpeed: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 14, locked: false },
                trainingEffectiveness: { value: 2, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                moodEffect: { value: 10, locked: false },
                initialSpeed: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                initialFriendshipGauge: { value: 18, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 19, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                moodEffect: { value: 15, locked: false },
                initialSpeed: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 24, locked: false },
                trainingEffectiveness: { value: 4, locked: false },
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                moodEffect: { value: 20, locked: false },
                initialSpeed: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                initialSpeed: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                initialFriendshipGauge: { value: 26, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                trainingEffectiveness: { value: 6, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                moodEffect: { value: 23, locked: false },
                initialSpeed: { value: 10, locked: false },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                initialFriendshipGauge: { value: 27, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                trainingEffectiveness: { value: 7, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                moodEffect: { value: 26, locked: false },
                initialSpeed: { value: 15, locked: false },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                initialFriendshipGauge: { value: 28, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                trainingEffectiveness: { value: 8, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                moodEffect: { value: 30, locked: false },
                initialSpeed: { value: 20, locked: false },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                initialFriendshipGauge: { value: 30, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                initialSpeed: { value: 20, locked: false },
                speedBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    },

    'eishin_flash_sr': {
        id: 'eishin_flash_sr',
        name: 'Eishin Flash',
        rarity: 'SR',
        type: 'Speed',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { value: 5, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                moodEffect: { value: 21, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 11, locked: false },
                specialtyPriority: { value: 5, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                moodEffect: { value: 27, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 17, locked: false },
                specialtyPriority: { value: 12, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 23, locked: false },
                specialtyPriority: { value: 20, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                moodEffect: { value: 42, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                specialtyPriority: { value: 25, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                moodEffect: { value: 45, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                specialtyPriority: { value: 30, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                moodEffect: { value: 47, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                specialtyPriority: { value: 35, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                speedBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                moodEffect: { value: 50, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                speedBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            }
        }
    },

    'agnes_tachyon_sr': {
        id: 'agnes_tachyon_sr',
        name: 'Agnes Tachyon',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                initialWit: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: 1,
                fanBonus: 3,
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialWit: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 6,
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialWit: { value: 10, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 9,
                witFriendshipRecovery: 2,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialWit: { value: 12, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 27, locked: false },
                initialWit: { value: 15, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialWit: { value: 15, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                witFriendshipRecovery: 3,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                initialWit: { value: 16, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: 7,
                fanBonus: 17,
                witFriendshipRecovery: 3,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                initialWit: { value: 18, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                witFriendshipRecovery: 3,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                initialWit: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 10,
                fanBonus: 20,
                witFriendshipRecovery: 4,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialWit: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            }
        }
    },

    'yukino_bijin_sr': {
        id: 'yukino_bijin_sr',
        name: 'Yukino Bijin',
        rarity: 'SR',
        type: 'Guts',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 18, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 25, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 32, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Guts gain when training together (1), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 42, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                moodEffect: { value: 23, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 30, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Guts gain when training together (1), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 45, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                moodEffect: { value: 26, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 45, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Guts gain when training together (1), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 47, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 60, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Guts gain when training together (1), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: { value: 3, locked: false },
                hintFrequency: { value: 50, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                specialtyPriority: { value: 60, locked: false },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases Guts gain when training together (1), Increases initial Guts when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'mejiro_ryan_sr': {
        id: 'mejiro_ryan_sr',
        name: 'Mejiro Ryan',
        rarity: 'SR',
        type: 'Power', // Confirmed from folder name: "12. Mejiro Ryan (Power)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 5,
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                moodEffect: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                hintLevels: 1,
                hintFrequency: 10,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { locked: true, unlockLevel: 10 },
                trainingEffectiveness: { locked: true, unlockLevel: 10 },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                hintLevels: 1,
                hintFrequency: 18,
                initialFriendshipGauge: { value: 12, locked: false },
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                hintLevels: 1,
                hintFrequency: 25,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                hintLevels: 1,
                hintFrequency: 32,
                initialFriendshipGauge: { value: 17, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 20, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { locked: true, unlockLevel: 30 },
                fanBonus: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                hintLevels: 2,
                hintFrequency: 42,
                initialFriendshipGauge: { value: 21, locked: false },
                moodEffect: { value: 23, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                hintLevels: 2,
                hintFrequency: 45,
                initialFriendshipGauge: { value: 22, locked: false },
                moodEffect: { value: 26, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                hintLevels: 2,
                hintFrequency: 47,
                initialFriendshipGauge: { value: 23, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                hintLevels: 3,
                hintFrequency: 50,
                initialFriendshipGauge: { value: 25, locked: false },
                moodEffect: { value: 30, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            }
        }
    },

    'mihono_bourbon_sr': {
        id: 'mihono_bourbon_sr',
        name: 'Mihono Bourbon',
        rarity: 'SR',
        type: 'Power', // Confirmed from folder name: "13. Mihono Bourbon (Power)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                moodEffect: { locked: true, unlockLevel: 5 },
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                raceBonus: { locked: true, unlockLevel: 5 },
                fanBonus: { locked: true, unlockLevel: 5 },
                initialPower: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 12,
                specialtyPriority: 10,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                initialPower: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 15,
                specialtyPriority: 16,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                initialPower: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 18,
                specialtyPriority: 22,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                initialPower: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 21,
                specialtyPriority: 28,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                initialPower: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 25,
                specialtyPriority: 35,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                initialPower: { locked: true, unlockLevel: 30 },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 26,
                specialtyPriority: 38,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                initialPower: { value: 10, locked: false },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 42,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                initialPower: { value: 15, locked: false },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 28,
                specialtyPriority: 46,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                initialPower: { value: 20, locked: false },
                powerBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 30,
                specialtyPriority: 50,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                initialPower: { value: 20, locked: false },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            }
        }
    },

    'manhattan_cafe_sr': {
        id: 'manhattan_cafe_sr',
        name: 'Manhattan Cafe',
        rarity: 'SR',
        type: 'Stamina', // Confirmed from folder name: "14. Manhattan Cafe (Stamina)"
        maxLevel: 45,
        
        // Complete level-by-level progression data for all 10 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { locked: true, unlockLevel: 5 },
                initialFriendshipGauge: { locked: true, unlockLevel: 5 },
                specialtyPriority: { locked: true, unlockLevel: 5 },
                initialStamina: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: 1,
                fanBonus: 3,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialStamina: { locked: true, unlockLevel: 10 },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: 2,
                fanBonus: 6,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialStamina: { value: 10, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: 3,
                fanBonus: 9,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialStamina: { value: 12, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: 4,
                fanBonus: 12,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 27, locked: false },
                initialStamina: { value: 15, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: { locked: true, unlockLevel: 25 }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialStamina: { value: 15, locked: false },
                hintLevels: { locked: true, unlockLevel: 30 },
                hintFrequency: { locked: true, unlockLevel: 30 },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: 6,
                fanBonus: 16,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                initialStamina: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: 7,
                fanBonus: 17,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                initialStamina: { value: 18, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 25, locked: false },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: 8,
                fanBonus: 18,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                initialStamina: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                staminaBonus: { locked: true, unlockLevel: 45 },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: 10,
                fanBonus: 20,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialStamina: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                staminaBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which the character participates in their preferred training type (20%)',
                    locked: false
                }
            }
        }
    },

    'mayano_top_gun_sr': {
        id: 'mayano_top_gun_sr',
        name: 'Mayano Top Gun',
        rarity: 'SR',
        type: 'Stamina',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: 1,
                fanBonus: 1,
                staminaFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialStamina: { value: 10, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: 1,
                fanBonus: 2,
                staminaFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialStamina: { value: 12, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 13,
                raceBonus: 2,
                fanBonus: 4,
                staminaFriendshipRecovery: 2,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialStamina: { value: 15, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 15,
                raceBonus: 3,
                fanBonus: 6,
                staminaFriendshipRecovery: 3,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialStamina: { value: 18, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 17,
                raceBonus: 4,
                fanBonus: 8,
                staminaFriendshipRecovery: 4,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialStamina: { value: 21, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 20,
                raceBonus: 5,
                fanBonus: 10,
                staminaFriendshipRecovery: 5,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialStamina: { value: 25, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 21,
                raceBonus: 5,
                fanBonus: 11,
                staminaFriendshipRecovery: 6,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 26, locked: false },
                specialtyPriority: { value: 25, locked: false },
                initialStamina: { value: 26, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 22,
                raceBonus: 5,
                fanBonus: 12,
                staminaFriendshipRecovery: 7,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 27, locked: false },
                specialtyPriority: { value: 30, locked: false },
                initialStamina: { value: 27, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 23,
                raceBonus: 5,
                fanBonus: 13,
                staminaFriendshipRecovery: 8,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 28, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialStamina: { value: 28, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                raceBonus: 5,
                fanBonus: 15,
                staminaFriendshipRecovery: 10,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 30, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialStamina: { value: 30, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                staminaBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    },

    'biwa_hayahide_sr': {
        id: 'biwa_hayahide_sr',
        name: 'Biwa Hayahide',
        rarity: 'SR',
        type: 'Power',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                powerFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 9, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                powerFriendshipRecovery: 2,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 14, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                powerFriendshipRecovery: 3,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 19, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                powerFriendshipRecovery: 4,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 24, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                powerFriendshipRecovery: 5,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                powerFriendshipRecovery: 6,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 26, locked: false },
                specialtyPriority: { value: 30, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                powerFriendshipRecovery: 7,
                moodEffect: { value: 26, locked: false },
                initialFriendshipGauge: { value: 27, locked: false },
                specialtyPriority: { value: 45, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                powerFriendshipRecovery: 8,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 28, locked: false },
                specialtyPriority: { value: 60, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                powerFriendshipRecovery: 10,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 30, locked: false },
                specialtyPriority: { value: 60, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            }
        }
    },

    'agnes_digital_sr': {
        id: 'agnes_digital_sr',
        name: 'Agnes Digital',
        rarity: 'SR',
        type: 'Power',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                powerFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 9, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                powerFriendshipRecovery: 2,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 14, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                powerFriendshipRecovery: 3,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 19, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                powerFriendshipRecovery: 4,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 24, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                powerFriendshipRecovery: 5,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                powerFriendshipRecovery: 6,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 26, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: 10, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                powerFriendshipRecovery: 7,
                moodEffect: { value: 26, locked: false },
                initialFriendshipGauge: { value: 27, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: 15, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                powerFriendshipRecovery: 8,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 28, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                powerFriendshipRecovery: 10,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 30, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases initial Power when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'air_groove_sr': {
        id: 'air_groove_sr',
        name: 'Air Groove',
        rarity: 'SR',
        type: 'Guts',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                gutsFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 9, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                gutsFriendshipRecovery: 2,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 14, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                gutsFriendshipRecovery: 3,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 19, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                gutsFriendshipRecovery: 4,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 24, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsFriendshipRecovery: 5,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                gutsFriendshipRecovery: 6,
                moodEffect: { value: 23, locked: false },
                initialFriendshipGauge: { value: 26, locked: false },
                specialtyPriority: { value: 30, locked: false },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                gutsFriendshipRecovery: 7,
                moodEffect: { value: 26, locked: false },
                initialFriendshipGauge: { value: 27, locked: false },
                specialtyPriority: { value: 45, locked: false },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                gutsFriendshipRecovery: 8,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 28, locked: false },
                specialtyPriority: { value: 60, locked: false },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                gutsBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                gutsFriendshipRecovery: 10,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 30, locked: false },
                specialtyPriority: { value: 60, locked: false },
                initialGuts: { value: null, locked: true },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                gutsBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases stat gain from races (5%)',
                    locked: false
                }
            }
        }
    },

    'hishi_amazon_sr': {
        id: 'hishi_amazon_sr',
        name: 'Hishi Amazon',
        rarity: 'SR',
        type: 'Power',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                powerFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: 5, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 12,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 10, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 15,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                powerFriendshipRecovery: 2,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 16, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 18,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                powerFriendshipRecovery: 3,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 22, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 21,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                powerFriendshipRecovery: 4,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 28, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 25,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                powerFriendshipRecovery: 5,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 26,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                powerFriendshipRecovery: 6,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                initialPower: { value: 10, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 27,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                powerFriendshipRecovery: 7,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                initialPower: { value: 15, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 28,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                powerFriendshipRecovery: 8,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                initialPower: { value: 20, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 30,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                powerFriendshipRecovery: 10,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialPower: { value: 20, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of Friendship Training (10%), Increases stat gain from races (5%)',
                    locked: false
                }
            }
        }
    },

    'daiwa_scarlet_sr': {
        id: 'daiwa_scarlet_sr',
        name: 'Daiwa Scarlet',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: 5, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 12,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 10, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 15,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 16, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 18,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                witFriendshipRecovery: 2,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 22, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 21,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 28, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 25,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 26,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 27,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 25, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 28,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 30,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                witFriendshipRecovery: 4,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases initial Friendship Gauge when beginning a Career playthrough (15)',
                    locked: false
                }
            }
        }
    },

    'fuji_kiseki_sr': {
        id: 'fuji_kiseki_sr',
        name: 'Fuji Kiseki',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 1,
                moodEffect: { value: 21, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 11, locked: false },
                specialtyPriority: { value: 5, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 2,
                moodEffect: { value: 27, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 17, locked: false },
                specialtyPriority: { value: 12, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 2,
                moodEffect: { value: 33, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 23, locked: false },
                specialtyPriority: { value: 20, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witFriendshipRecovery: 3,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 20, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 42, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 32, locked: false },
                specialtyPriority: { value: 25, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 7, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 45, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 35, locked: false },
                specialtyPriority: { value: 30, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                witFriendshipRecovery: 3,
                moodEffect: { value: 47, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 37, locked: false },
                specialtyPriority: { value: 35, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                witFriendshipRecovery: 4,
                moodEffect: { value: 50, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 40, locked: false },
                specialtyPriority: { value: 35, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases skill point gain when training together (1), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    'sweep_tosho_sr': {
        id: 'sweep_tosho_sr',
        name: 'Sweep Tosho',
        rarity: 'SR',
        type: 'Speed',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                speedFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: 5, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 12,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 10, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 15,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 16, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 18,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 22, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 21,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 28, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 25,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                trainingEffectiveness: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 26,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 27,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 28,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 30,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                speedFriendshipRecovery: 1,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                skillPointBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases the frequency at which hint events occur (20%)',
                    locked: false
                }
            }
        }
    },

    'daitaku_helios_sr': {
        id: 'daitaku_helios_sr',
        name: 'Daitaku Helios',
        rarity: 'SR',
        type: 'Power',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialPower: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialPower: { value: 10, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 9, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 20, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialPower: { value: 12, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 12, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 25, locked: false },
                initialFriendshipGauge: { value: 17, locked: false },
                specialtyPriority: { value: 27, locked: false },
                initialPower: { value: 15, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 30, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialPower: { value: 15, locked: false },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 16,
                raceBonus: { value: 6, locked: false },
                fanBonus: { value: 16, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 32, locked: false },
                initialFriendshipGauge: { value: 21, locked: false },
                specialtyPriority: { value: 38, locked: false },
                initialPower: { value: 16, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 20, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 18,
                raceBonus: { value: 7, locked: false },
                fanBonus: { value: 17, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 35, locked: false },
                initialFriendshipGauge: { value: 22, locked: false },
                specialtyPriority: { value: 42, locked: false },
                initialPower: { value: 18, locked: false },
                hintLevels: { value: 1, locked: false },
                hintFrequency: { value: 25, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                raceBonus: { value: 8, locked: false },
                fanBonus: { value: 18, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 37, locked: false },
                initialFriendshipGauge: { value: 23, locked: false },
                specialtyPriority: { value: 46, locked: false },
                initialPower: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                powerBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                raceBonus: { value: 10, locked: false },
                fanBonus: { value: 20, locked: false },
                powerFriendshipRecovery: 1,
                moodEffect: { value: 40, locked: false },
                initialFriendshipGauge: { value: 25, locked: false },
                specialtyPriority: { value: 50, locked: false },
                initialPower: { value: 20, locked: false },
                hintLevels: { value: 2, locked: false },
                hintFrequency: { value: 30, locked: false },
                powerBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Amplifies the effect of mood when training together (15%), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    },

    'ikuno_dictus_sr': {
        id: 'ikuno_dictus_sr',
        name: 'Ikuno Dictus',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        levelProgression: {
            1: {
                friendshipBonus: 10,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 1, locked: false },
                initialWit: { value: 10, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 2, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 1, locked: false },
                initialWit: { value: 12, locked: false },
                specialtyPriority: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 13,
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 4, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 2, locked: false },
                initialWit: { value: 15, locked: false },
                specialtyPriority: { value: 5, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 15,
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 6, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 3, locked: false },
                initialWit: { value: 18, locked: false },
                specialtyPriority: { value: 12, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 17,
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 8, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 4, locked: false },
                initialWit: { value: 21, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 20,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 5, locked: false },
                initialWit: { value: 25, locked: false },
                specialtyPriority: { value: 20, locked: false },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Wit gain when training together (1), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            30: {
                friendshipBonus: 21,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 6, locked: false },
                initialWit: { value: 26, locked: false },
                specialtyPriority: { value: 25, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Wit gain when training together (1), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            35: {
                friendshipBonus: 22,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 7, locked: false },
                initialWit: { value: 27, locked: false },
                specialtyPriority: { value: 30, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Wit gain when training together (1), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 23,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 8, locked: false },
                initialWit: { value: 28, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                skillPointBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases Wit gain when training together (1), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 25,
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                witFriendshipRecovery: 1,
                trainingEffectiveness: { value: 10, locked: false },
                initialWit: { value: 30, locked: false },
                specialtyPriority: { value: 35, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                skillPointBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases Wit gain when training together (1), Increases the frequency at which the character participates in their preferred training type (20)',
                    locked: false
                }
            }
        }
    },

    'nice_nature_wit_sr': {
        id: 'nice_nature_wit_sr',
        name: 'Nice Nature (Wit)',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                initialFriendshipGauge: 10,
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                moodEffect: { value: null, locked: true },
                witFriendshipRecovery: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            5: {
                friendshipBonus: 11,
                initialFriendshipGauge: 12,
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                moodEffect: { value: null, locked: true },
                witFriendshipRecovery: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            10: {
                friendshipBonus: 12,
                initialFriendshipGauge: 15,
                trainingEffectiveness: { value: 2, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 3, locked: false },
                moodEffect: { value: 10, locked: false },
                witFriendshipRecovery: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            15: {
                friendshipBonus: 13,
                initialFriendshipGauge: 18,
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 5, locked: false },
                moodEffect: { value: 15, locked: false },
                witFriendshipRecovery: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            20: {
                friendshipBonus: 15,
                initialFriendshipGauge: 21,
                trainingEffectiveness: { value: 4, locked: false },
                raceBonus: { value: 4, locked: false },
                fanBonus: { value: 7, locked: false },
                moodEffect: { value: 20, locked: false },
                witFriendshipRecovery: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            25: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                moodEffect: { value: 20, locked: false },
                witFriendshipRecovery: { value: null, locked: true },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            30: {
                friendshipBonus: 16,
                initialFriendshipGauge: 26,
                trainingEffectiveness: { value: 6, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 11, locked: false },
                moodEffect: { value: 23, locked: false },
                witFriendshipRecovery: { value: 1, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: null,
                    locked: true
                }
            },
            35: {
                friendshipBonus: 18,
                initialFriendshipGauge: 27,
                trainingEffectiveness: { value: 7, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 12, locked: false },
                moodEffect: { value: 26, locked: false },
                witFriendshipRecovery: { value: 3, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            40: {
                friendshipBonus: 20,
                initialFriendshipGauge: 28,
                trainingEffectiveness: { value: 8, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 13, locked: false },
                moodEffect: { value: 30, locked: false },
                witFriendshipRecovery: { value: 3, locked: false },
                witBonus: { value: null, locked: true },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            },
            45: {
                friendshipBonus: 20,
                initialFriendshipGauge: 30,
                trainingEffectiveness: { value: 10, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 15, locked: false },
                moodEffect: { value: 30, locked: false },
                witFriendshipRecovery: { value: 3, locked: false },
                witBonus: { value: 1, locked: false },
                uniqueEffect: {
                    description: 'Increases the effectiveness of training performed together (5%), Increases initial Wit when beginning a Career playthrough (20)',
                    locked: false
                }
            }
        }
    },

    // Daiwa Scarlet (SR) - Wit Type  
    'daiwa_scarlet_sr_batch2': {
        id: 'daiwa_scarlet_sr_batch2',
        name: 'Daiwa Scarlet',
        rarity: 'SR',
        type: 'Wit',
        maxLevel: 45,
        
        levelProgression: {
            1: {
                friendshipBonus: 10,
                specialtyPriority: 5,
                witFriendshipRecovery: 1,
                uniqueEffect: null, // Unlocked at level 25
                moodEffect: null, // Unlocked at level 5
                initialFriendshipGauge: null, // Unlocked at level 5
                raceBonus: null, // Unlocked at level 5
                fanBonus: null, // Unlocked at level 5
                hintLevels: null, // Unlocked at level 30
                hintFrequency: null, // Unlocked at level 30
                witBonus: null // Unlocked at level 45
            },
            5: {
                friendshipBonus: 13,
                specialtyPriority: 10,
                witFriendshipRecovery: 1,
                uniqueEffect: null,
                moodEffect: 10,
                initialFriendshipGauge: 5,
                raceBonus: 1,
                fanBonus: 3,
                hintLevels: null,
                hintFrequency: null,
                witBonus: null
            },
            10: {
                friendshipBonus: 16,
                specialtyPriority: 15,
                witFriendshipRecovery: 2,
                uniqueEffect: null,
                moodEffect: 15,
                initialFriendshipGauge: 8,
                raceBonus: 2,
                fanBonus: 5,
                hintLevels: null,
                hintFrequency: null,
                witBonus: null
            },
            15: {
                friendshipBonus: 18,
                specialtyPriority: 20,
                witFriendshipRecovery: 2,
                uniqueEffect: null,
                moodEffect: 20,
                initialFriendshipGauge: 12,
                raceBonus: 2,
                fanBonus: 7,
                hintLevels: null,
                hintFrequency: null,
                witBonus: null
            },
            20: {
                friendshipBonus: 20,
                specialtyPriority: 25,
                witFriendshipRecovery: 2,
                uniqueEffect: null,
                moodEffect: 25,
                initialFriendshipGauge: 15,
                raceBonus: 3,
                fanBonus: 9,
                hintLevels: null,
                hintFrequency: null,
                witBonus: null
            },
            25: {
                friendshipBonus: 22,
                specialtyPriority: 30,
                witFriendshipRecovery: 3,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: "Mood Training +15%, Initial Friendship +15",
                    locked: false
                },
                moodEffect: 30,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 11,
                hintLevels: null,
                hintFrequency: null,
                witBonus: null
            },
            30: {
                friendshipBonus: 25,
                specialtyPriority: 35,
                witFriendshipRecovery: 3,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: "Mood Training +15%, Initial Friendship +15",
                    locked: false
                },
                moodEffect: 33,
                initialFriendshipGauge: 20,
                raceBonus: 4,
                fanBonus: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 15,
                witBonus: null
            },
            35: {
                friendshipBonus: 27,
                specialtyPriority: 40,
                witFriendshipRecovery: 3,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: "Mood Training +15%, Initial Friendship +15",
                    locked: false
                },
                moodEffect: 36,
                initialFriendshipGauge: 22,
                raceBonus: 4,
                fanBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 22,
                witBonus: null
            },
            40: {
                friendshipBonus: 28,
                specialtyPriority: 45,
                witFriendshipRecovery: 4,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: "Mood Training +15%, Initial Friendship +15",
                    locked: false
                },
                moodEffect: 38,
                initialFriendshipGauge: 23,
                raceBonus: 5,
                fanBonus: 14,
                hintLevels: 'Lv 2',
                hintFrequency: 27,
                witBonus: null
            },
            45: {
                friendshipBonus: 30,
                specialtyPriority: 50,
                witFriendshipRecovery: 4,
                uniqueEffect: {
                    description: "Amplifies the effect of mood when training together (15%), increases initial Friendship Gauge when beginning a Career playthrough (15)",
                    value: "Mood Training +15%, Initial Friendship +15",
                    locked: false
                },
                moodEffect: 40,
                initialFriendshipGauge: 25,
                raceBonus: 5,
                fanBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                witBonus: 1 // UNLOCKED at level 45
            }
        }
    }
};

/**
 * Get level progression data for a specific SR-rarity support card
 * @param {string} cardId - The card identifier
 * @param {number} level - The card level (must be a selectable level: 1, 5, 10, 15, 20, 25, 30, 35, 40, 45)
 * @returns {Object|null} Level progression data or null if not found
 */
function getSRSupportCardLevelData(cardId, level) {
    const card = SR_SUPPORT_CARD_LEVEL_PROGRESSION[cardId];
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
 * Get all available levels for an SR-rarity support card
 * @param {string} cardId - The card identifier
 * @returns {number[]} Array of available levels (1, 5, 10, 15, 20, 25, 30, 35, 40, 45)
 */
function getSRSupportCardAvailableLevels(cardId) {
    const card = SR_SUPPORT_CARD_LEVEL_PROGRESSION[cardId];
    if (!card) {
        return [];
    }
    
    return Object.keys(card.levelProgression).map(level => parseInt(level)).sort((a, b) => a - b);
}

/**
 * Get complete SR card information including all level progression data
 * @param {string} cardId - The card identifier
 * @returns {Object|null} Complete card data or null if not found
 */
function getSRSupportCardComplete(cardId) {
    return SR_SUPPORT_CARD_LEVEL_PROGRESSION[cardId] || null;
}

/**
 * Check if an SR-rarity support card has level progression data implemented
 * @param {string} cardId - The card identifier
 * @returns {boolean} True if card has level progression data
 */
function hasSRSupportCardLevelProgression(cardId) {
    return cardId in SR_SUPPORT_CARD_LEVEL_PROGRESSION;
}

/**
 * Get all implemented SR-rarity support card IDs
 * @returns {string[]} Array of implemented SR card IDs
 */
function getAllSRSupportCardIds() {
    return Object.keys(SR_SUPPORT_CARD_LEVEL_PROGRESSION);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        SR_SUPPORT_CARD_LEVEL_PROGRESSION,
        getSRSupportCardLevelData,
        getSRSupportCardAvailableLevels,
        getSRSupportCardComplete,
        hasSRSupportCardLevelProgression,
        getAllSRSupportCardIds
    };
} else {
    // Browser environment - attach to window
    window.SRSupportCardLevelProgression = {
        SR_SUPPORT_CARD_LEVEL_PROGRESSION,
        getSRSupportCardLevelData,
        getSRSupportCardAvailableLevels,
        getSRSupportCardComplete,
        hasSRSupportCardLevelProgression,
        getAllSRSupportCardIds
    };
}