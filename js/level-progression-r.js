/**
 * R-Rarity Support Card Level Progression System
 * 
 * This module contains complete level-by-level progression data for R-rarity support cards.
 * R cards have 9 selectable levels: 1, 5, 10, 15, 20, 25, 30, 35, 40
 * 
 * Effects change at EVERY level, requiring complete progression data for accurate
 * training calculations and user level selection.
 */

// R-Rarity Support Card Level Progression Database
const R_SUPPORT_CARD_LEVEL_PROGRESSION = {
    // Fuji Kiseki (R) - Wit Type
    'fuji_kiseki_r': {
        id: 'fuji_kiseki_r',
        name: 'Fuji Kiseki (R)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        // Complete level-by-level progression data for all 9 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: null, // Unlocked at level 5
                hintLevels: null, // Unlocked at level 5
                hintFrequency: null, // Unlocked at level 5
                specialtyPriority: null, // Unlocked at level 5
                witBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 13,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                specialtyPriority: 5,
                witBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 12,
                specialtyPriority: 12,
                witBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 21,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: 15,
                hintLevels: 'Lv 1',
                hintFrequency: 20,
                specialtyPriority: 20,
                witBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 25,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 15,
                hintLevels: 'Lv 1',
                hintFrequency: 20,
                specialtyPriority: 20,
                witBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 27,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 16,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                specialtyPriority: 25,
                witBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 18,
                hintLevels: 'Lv 1',
                hintFrequency: 26,
                specialtyPriority: 30,
                witBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 32,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                specialtyPriority: 35,
                witBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                specialtyPriority: 35,
                witBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // King Halo (R) - Speed Type
    'king_halo_r': {
        id: 'king_halo_r',
        name: 'King Halo (R)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        
        // Complete level-by-level progression data for all 9 selectable levels
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: null, // Unlocked at level 5
                trainingEffectiveness: null, // Unlocked at level 5
                initialFriendshipGauge: null, // Unlocked at level 5
                powerBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: 10,
                trainingEffectiveness: 1,
                initialFriendshipGauge: 10,
                powerBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: 12,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 12,
                powerBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                powerBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                powerBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 33,
                moodEffect: 18,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 16,
                powerBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 36,
                moodEffect: 20,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 18,
                powerBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 38,
                moodEffect: 23,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                powerBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                powerBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    'narita_taishin_r': {
        id: 'narita_taishin_r',
        name: 'Narita Taishin (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedBonus: { value: 1, locked: false }
            }
        }
    },

    'smart_falcon_r': {
        id: 'smart_falcon_r',
        name: 'Smart Falcon (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },  
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 13,
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                initialFriendshipGauge: { value: 12, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 21,
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 20, locked: false },
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 25,
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 20, locked: false },
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 27,
                initialFriendshipGauge: { value: 16, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 23, locked: false },
                specialtyPriority: { value: 25, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                initialFriendshipGauge: { value: 18, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 26, locked: false },
                specialtyPriority: { value: 30, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 32,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 'Lv 2', locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 'Lv 2', locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: 1, locked: false }
            }
        }
    },

    'eishin_flash_r': {
        id: 'eishin_flash_r',
        name: 'Eishin Flash (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 13,
                initialFriendshipGauge: { value: 10, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 5, locked: false },
                specialtyPriority: { value: 5, locked: false },
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                initialFriendshipGauge: { value: 12, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 21,
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 20, locked: false },
                specialtyPriority: { value: 20, locked: false },
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 25,
                initialFriendshipGauge: { value: 15, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 20, locked: false },
                specialtyPriority: { value: 20, locked: false },
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 27,
                initialFriendshipGauge: { value: 16, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 23, locked: false },
                specialtyPriority: { value: 25, locked: false },
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                initialFriendshipGauge: { value: 18, locked: false },
                hintLevels: { value: 'Lv 1', locked: false },
                hintFrequency: { value: 26, locked: false },
                specialtyPriority: { value: 30, locked: false },
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 32,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 'Lv 2', locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 35, locked: false },
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                initialFriendshipGauge: { value: 20, locked: false },
                hintLevels: { value: 'Lv 2', locked: false },
                hintFrequency: { value: 30, locked: false },
                specialtyPriority: { value: 35, locked: false },
                speedBonus: { value: 1, locked: false }
            }
        }
    },

    'air_shakur_r': {
        id: 'air_shakur_r',
        name: 'Air Shakur (Wit)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                witFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                witFriendshipRecovery: 1,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                witFriendshipRecovery: 2,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                witFriendshipRecovery: 2,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                witFriendshipRecovery: 2,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                witFriendshipRecovery: 3,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                skillPointBonus: { value: 1, locked: false }
            }
        }
    },

    'agnes_tachyon_r': {
        id: 'agnes_tachyon_r',
        name: 'Agnes Tachyon (Wit)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialWit: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                witBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                witFriendshipRecovery: 1,
                moodEffect: { value: 10, locked: false },
                initialWit: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                witBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                witFriendshipRecovery: 1,
                moodEffect: { value: 12, locked: false },
                initialWit: { value: 12, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                witBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                witFriendshipRecovery: 1,
                moodEffect: { value: 15, locked: false },
                initialWit: { value: 15, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                witBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                witFriendshipRecovery: 2,
                moodEffect: { value: 15, locked: false },
                initialWit: { value: 15, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                witBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                witFriendshipRecovery: 2,
                moodEffect: { value: 18, locked: false },
                initialWit: { value: 16, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                specialtyPriority: { value: 25, locked: false },
                witBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                moodEffect: { value: 21, locked: false },
                initialWit: { value: 18, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: 30, locked: false },
                witBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                witFriendshipRecovery: 2,
                moodEffect: { value: 25, locked: false },
                initialWit: { value: 20, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                witBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                moodEffect: { value: 25, locked: false },
                initialWit: { value: 20, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                witBonus: { value: 1, locked: false }
            }
        }
    },

    'ines_fujin_r': {
        id: 'ines_fujin_r',
        name: 'Ines Fujin (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                speedBonus: { value: 1, locked: false }
            }
        }
    },

    'yukino_bijin_r': {
        id: 'yukino_bijin_r',
        name: 'Yukino Bijin (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                powerBonus: { value: 1, locked: false }
            }
        }
    },

    'mejiro_ryan_r': {
        id: 'mejiro_ryan_r',
        name: 'Mejiro Ryan (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                staminaBonus: { value: 1, locked: false }
            }
        }
    },

    'mihono_bourbon_r': {
        id: 'mihono_bourbon_r',
        name: 'Mihono Bourbon (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                specialtyPriority: { value: 25, locked: false },
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: 30, locked: false },
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                powerBonus: { value: 1, locked: false }
            }
        }
    },

    'manhattan_cafe_r': {
        id: 'manhattan_cafe_r',
        name: 'Manhattan Cafe (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { value: null, locked: true },
                initialStamina: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: { value: 10, locked: false },
                initialStamina: { value: 10, locked: false },
                initialFriendshipGauge: { value: 10, locked: false },
                specialtyPriority: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: { value: 12, locked: false },
                initialStamina: { value: 12, locked: false },
                initialFriendshipGauge: { value: 12, locked: false },
                specialtyPriority: { value: 12, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: { value: 15, locked: false },
                initialStamina: { value: 15, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: { value: 15, locked: false },
                initialStamina: { value: 15, locked: false },
                initialFriendshipGauge: { value: 15, locked: false },
                specialtyPriority: { value: 20, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: { value: 18, locked: false },
                initialStamina: { value: 16, locked: false },
                initialFriendshipGauge: { value: 16, locked: false },
                specialtyPriority: { value: 25, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                moodEffect: { value: 21, locked: false },
                initialStamina: { value: 18, locked: false },
                initialFriendshipGauge: { value: 18, locked: false },
                specialtyPriority: { value: 30, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: { value: 25, locked: false },
                initialStamina: { value: 20, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: { value: 25, locked: false },
                initialStamina: { value: 20, locked: false },
                initialFriendshipGauge: { value: 20, locked: false },
                specialtyPriority: { value: 35, locked: false },
                staminaBonus: { value: 1, locked: false }
            }
        }
    },

    'mayano_top_gun_r': {
        id: 'mayano_top_gun_r',
        name: 'Mayano Top Gun (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialStamina: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialStamina: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: { value: 5, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialStamina: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: { value: 12, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialStamina: 17,
                raceBonus: 3,
                fanBonus: 7,
                specialtyPriority: { value: 20, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialStamina: 20,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: { value: 20, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialStamina: 21,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: { value: 25, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialStamina: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: { value: 30, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialStamina: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: { value: 35, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialStamina: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: { value: 35, locked: false },
                skillPointBonus: { value: 1, locked: false }
            }
        }
    },

    'biwa_hayahide_r': {
        id: 'biwa_hayahide_r',
        name: 'Biwa Hayahide (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: 1, locked: false }
            }
        }
    },

    'fine_motion_r': {
        id: 'fine_motion_r',
        name: 'Fine Motion (Wit)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialWit: 10,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                specialtyPriority: { value: null, locked: true },
                witBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialWit: 12,
                raceBonus: 1,
                fanBonus: 2,
                witFriendshipRecovery: 1,
                specialtyPriority: { value: 5, locked: false },
                witBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialWit: 14,
                raceBonus: 2,
                fanBonus: 5,
                witFriendshipRecovery: 1,
                specialtyPriority: { value: 12, locked: false },
                witBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialWit: 17,
                raceBonus: 3,
                fanBonus: 7,
                witFriendshipRecovery: 1,
                specialtyPriority: { value: 20, locked: false },
                witBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialWit: 20,
                raceBonus: 5,
                fanBonus: 10,
                witFriendshipRecovery: 2,
                specialtyPriority: { value: 20, locked: false },
                witBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialWit: 21,
                raceBonus: 5,
                fanBonus: 11,
                witFriendshipRecovery: 2,
                specialtyPriority: { value: 25, locked: false },
                witBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialWit: 22,
                raceBonus: 5,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                specialtyPriority: { value: 30, locked: false },
                witBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialWit: 23,
                raceBonus: 5,
                fanBonus: 13,
                witFriendshipRecovery: 2,
                specialtyPriority: { value: 35, locked: false },
                witBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialWit: 25,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                specialtyPriority: { value: 35, locked: false },
                witBonus: { value: 1, locked: false }
            }
        }
    },

    'tamamo_cross_r': {
        id: 'tamamo_cross_r',
        name: 'Tamamo Cross (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: 1, locked: false }
            }
        }
    },

    'agnes_digital_r': {
        id: 'agnes_digital_r',
        name: 'Agnes Digital (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                skillPointBonus: { value: 1, locked: false }
            }
        }
    },

    'air_groove_r': {
        id: 'air_groove_r',
        name: 'Air Groove (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: { value: 10, locked: false },
                trainingEffectiveness: { value: 1, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: { value: 12, locked: false },
                trainingEffectiveness: { value: 3, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: { value: 15, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: { value: 18, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: { value: 21, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: { value: 25, locked: false },
                trainingEffectiveness: { value: 5, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                gutsBonus: { value: 1, locked: false }
            }
        }
    },

    'hishi_amazon_r': {
        id: 'hishi_amazon_r',
        name: 'Hishi Amazon (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                initialFriendshipGauge: { value: null, locked: true },
                moodEffect: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                initialFriendshipGauge: { value: 12, locked: false },
                moodEffect: { value: 12, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                initialFriendshipGauge: { value: 16, locked: false },
                moodEffect: { value: 18, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                initialFriendshipGauge: { value: 18, locked: false },
                moodEffect: { value: 21, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                staminaBonus: { value: 1, locked: false }
            }
        }
    },

    'daiwa_scarlet_r': {
        id: 'daiwa_scarlet_r',
        name: 'Daiwa Scarlet (Wit)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { value: null, locked: true },
                moodEffect: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                witBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { value: 10, locked: false },
                moodEffect: { value: 10, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 1, locked: false },
                witBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { value: 12, locked: false },
                moodEffect: { value: 12, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 3, locked: false },
                witBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                witBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: { value: 15, locked: false },
                moodEffect: { value: 15, locked: false },
                raceBonus: { value: 1, locked: false },
                fanBonus: { value: 5, locked: false },
                witBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: { value: 16, locked: false },
                moodEffect: { value: 18, locked: false },
                raceBonus: { value: 2, locked: false },
                fanBonus: { value: 6, locked: false },
                witBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: { value: 18, locked: false },
                moodEffect: { value: 21, locked: false },
                raceBonus: { value: 3, locked: false },
                fanBonus: { value: 8, locked: false },
                witBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                witBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: { value: 20, locked: false },
                moodEffect: { value: 25, locked: false },
                raceBonus: { value: 5, locked: false },
                fanBonus: { value: 10, locked: false },
                witBonus: { value: 1, locked: false }
            }
        }
    },

    'aoi_kiryuin_r': {
        id: 'aoi_kiryuin_r',
        name: 'Aoi Kiryuin (Friend)',
        rarity: 'R',
        type: 'Friend',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 3,
                initialFriendshipGauge: 10,
                eventRecovery: 10,
                eventEffectiveness: 10,
                failureProtection: 5,
                energyCostReduction: 1,
                trainingEffectiveness: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 5,
                initialFriendshipGauge: 12,
                eventRecovery: 14,
                eventEffectiveness: 12,
                failureProtection: 7,
                energyCostReduction: 2,
                trainingEffectiveness: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 7,
                initialFriendshipGauge: 14,
                eventRecovery: 19,
                eventEffectiveness: 14,
                failureProtection: 9,
                energyCostReduction: 5,
                trainingEffectiveness: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 9,
                initialFriendshipGauge: 17,
                eventRecovery: 24,
                eventEffectiveness: 17,
                failureProtection: 12,
                energyCostReduction: 7,
                trainingEffectiveness: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 11,
                initialFriendshipGauge: 20,
                eventRecovery: 30,
                eventEffectiveness: 20,
                failureProtection: 15,
                energyCostReduction: 10,
                trainingEffectiveness: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 13,
                initialFriendshipGauge: 21,
                eventRecovery: 32,
                eventEffectiveness: 21,
                failureProtection: 16,
                energyCostReduction: 11,
                trainingEffectiveness: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 15,
                initialFriendshipGauge: 22,
                eventRecovery: 35,
                eventEffectiveness: 22,
                failureProtection: 17,
                energyCostReduction: 12,
                trainingEffectiveness: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 17,
                initialFriendshipGauge: 23,
                eventRecovery: 37,
                eventEffectiveness: 23,
                failureProtection: 18,
                energyCostReduction: 13,
                trainingEffectiveness: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 19,
                initialFriendshipGauge: 25,
                eventRecovery: 40,
                eventEffectiveness: 25,
                failureProtection: 20,
                energyCostReduction: 15,
                trainingEffectiveness: { value: 5, locked: false }
            }
        }
    },

    'tazuna_hayakawa_r': {
        id: 'tazuna_hayakawa_r',
        name: 'Tazuna Hayakawa (Friend)',
        rarity: 'R',
        type: 'Friend',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 3,
                initialFriendshipGauge: 10,
                eventRecovery: 10,
                eventEffectiveness: 10,
                failureProtection: 5,
                energyCostReduction: 1,
                trainingEffectiveness: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 5,
                initialFriendshipGauge: 12,
                eventRecovery: 14,
                eventEffectiveness: 12,
                failureProtection: 7,
                energyCostReduction: 2,
                trainingEffectiveness: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 7,
                initialFriendshipGauge: 14,
                eventRecovery: 19,
                eventEffectiveness: 14,
                failureProtection: 9,
                energyCostReduction: 5,
                trainingEffectiveness: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 9,
                initialFriendshipGauge: 17,
                eventRecovery: 24,
                eventEffectiveness: 17,
                failureProtection: 12,
                energyCostReduction: 7,
                trainingEffectiveness: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 11,
                initialFriendshipGauge: 20,
                eventRecovery: 30,
                eventEffectiveness: 20,
                failureProtection: 15,
                energyCostReduction: 10,
                trainingEffectiveness: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 13,
                initialFriendshipGauge: 21,
                eventRecovery: 32,
                eventEffectiveness: 21,
                failureProtection: 16,
                energyCostReduction: 11,
                trainingEffectiveness: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 15,
                initialFriendshipGauge: 22,
                eventRecovery: 35,
                eventEffectiveness: 22,
                failureProtection: 17,
                energyCostReduction: 12,
                trainingEffectiveness: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 17,
                initialFriendshipGauge: 23,
                eventRecovery: 37,
                eventEffectiveness: 23,
                failureProtection: 18,
                energyCostReduction: 13,
                trainingEffectiveness: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 19,
                initialFriendshipGauge: 25,
                eventRecovery: 40,
                eventEffectiveness: 25,
                failureProtection: 20,
                energyCostReduction: 15,
                trainingEffectiveness: { value: 5, locked: false }
            }
        }
    },

    'haru_urara_r': {
        id: 'haru_urara_r',
        name: 'Haru Urara (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialGuts: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialGuts: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialGuts: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: 12,
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialGuts: 17,
                raceBonus: 3,
                fanBonus: 7,
                specialtyPriority: 20,
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialGuts: 20,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: 20,
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialGuts: 21,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: 25,
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialGuts: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: 30,
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialGuts: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: 35,
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialGuts: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                skillPointBonus: 1
            }
        }
    },

    'super_creek_r': {
        id: 'super_creek_r',
        name: 'Super Creek (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialStamina: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialStamina: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialStamina: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: 12,
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialStamina: 17,
                raceBonus: 3,
                fanBonus: 7,
                specialtyPriority: 20,
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialStamina: 20,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: 20,
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialStamina: 21,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: 25,
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialStamina: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: 30,
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialStamina: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: 35,
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialStamina: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                staminaBonus: 1
            }
        }
    },

    'sakura_bakushin_o_r': {
        id: 'sakura_bakushin_o_r',
        name: 'Sakura Bakushin O (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { value: null, locked: true },
                initialSpeed: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: 10,
                initialSpeed: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 12,
                initialSpeed: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 12,
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: 15,
                initialSpeed: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 15,
                initialSpeed: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: 18,
                initialSpeed: 16,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                moodEffect: 21,
                initialSpeed: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: 25,
                initialSpeed: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 25,
                initialSpeed: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                speedBonus: 1
            }
        }
    },

    'gold_city_r': {
        id: 'gold_city_r',
        name: 'Gold City (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 1,
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 1,
                hintFrequency: 10,
                moodEffect: 10,
                trainingEffectiveness: 1,
                initialFriendshipGauge: 10,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 1,
                hintFrequency: 16,
                moodEffect: 12,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 12,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 23,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 2,
                hintFrequency: 30,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 2,
                hintFrequency: 32,
                moodEffect: 18,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 16,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 2,
                hintFrequency: 35,
                moodEffect: 21,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 18,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 37,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                powerBonus: 1
            }
        }
    },

    'winning_ticket_r': {
        id: 'winning_ticket_r',
        name: 'Winning Ticket (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialGuts: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                moodEffect: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialGuts: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                moodEffect: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialGuts: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: 12,
                moodEffect: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialGuts: 17,
                raceBonus: 3,
                fanBonus: 7,
                specialtyPriority: 20,
                moodEffect: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialGuts: 20,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: 20,
                moodEffect: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialGuts: 21,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: 25,
                moodEffect: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialGuts: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: 30,
                moodEffect: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialGuts: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: 35,
                moodEffect: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialGuts: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                moodEffect: 20
            }
        }
    },

    'rice_shower_r': {
        id: 'rice_shower_r',
        name: 'Rice Shower (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: 1
            }
        }
    },

    'seiun_sky_r': {
        id: 'seiun_sky_r',
        name: 'Seiun Sky (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                raceBonus: 1,
                fanBonus: 1,
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                moodEffect: 12,
                initialFriendshipGauge: 12,
                raceBonus: 1,
                fanBonus: 3,
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                moodEffect: 18,
                initialFriendshipGauge: 16,
                raceBonus: 2,
                fanBonus: 6,
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                moodEffect: 21,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 8,
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                staminaBonus: 1
            }
        }
    },

    'symboli_rudolf_r': {
        id: 'symboli_rudolf_r',
        name: 'Symboli Rudolf (Wit)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                moodEffect: { value: null, locked: true },
                initialWit: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                witFriendshipRecovery: 1,
                moodEffect: 10,
                initialWit: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                witFriendshipRecovery: 1,
                moodEffect: 12,
                initialWit: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 12,
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                witFriendshipRecovery: 1,
                moodEffect: 15,
                initialWit: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                witFriendshipRecovery: 2,
                moodEffect: 15,
                initialWit: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                witFriendshipRecovery: 2,
                moodEffect: 18,
                initialWit: 16,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                witFriendshipRecovery: 2,
                moodEffect: 21,
                initialWit: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                witFriendshipRecovery: 2,
                moodEffect: 25,
                initialWit: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                moodEffect: 25,
                initialWit: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                speedBonus: 1
            }
        }
    },

    'tm_opera_o_r': {
        id: 'tm_opera_o_r',
        name: 'TM Opera O (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 'Lv 1',
                hintFrequency: 10,
                moodEffect: 10,
                trainingEffectiveness: 1,
                initialFriendshipGauge: 10,
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 16,
                moodEffect: 12,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 12,
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 23,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: 18,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 16,
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 35,
                moodEffect: 21,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 18,
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                staminaBonus: 1
            }
        }
    },

    'el_condor_pasa_r': {
        id: 'el_condor_pasa_r',
        name: 'El Condor Pasa (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: 10,
                initialPower: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 12,
                initialPower: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 12,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: 15,
                initialPower: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 15,
                initialPower: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: 18,
                initialPower: 16,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                moodEffect: 21,
                initialPower: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: 25,
                initialPower: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 25,
                initialPower: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                powerBonus: 1
            }
        }
    },

    'mejiro_mcqueen_r': {
        id: 'mejiro_mcqueen_r',
        name: 'Mejiro McQueen (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: 16,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: 18,
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 18,
                initialFriendshipGauge: 16,
                raceBonus: 2,
                fanBonus: 6,
                gutsBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 20,
                specialtyPriority: 42,
                moodEffect: 21,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 8,
                gutsBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 24,
                initialFriendshipGauge: 20,
                raceBonus: 4,
                fanBonus: 9,
                gutsBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                gutsBonus: 1
            }
        }
    },

    'grass_wonder_r': {
        id: 'grass_wonder_r',
        name: 'Grass Wonder (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                raceBonus: 1,
                fanBonus: 1,
                gutsBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                moodEffect: 12,
                initialFriendshipGauge: 12,
                raceBonus: 1,
                fanBonus: 3,
                gutsBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                gutsBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                gutsBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                moodEffect: 18,
                initialFriendshipGauge: 16,
                raceBonus: 2,
                fanBonus: 6,
                gutsBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                moodEffect: 21,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 8,
                gutsBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                gutsBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                gutsBonus: 1
            }
        }
    },

    'taiki_shuttle_r': {
        id: 'taiki_shuttle_r',
        name: 'Taiki Shuttle (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 1,
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 1,
                hintFrequency: 10,
                moodEffect: 10,
                trainingEffectiveness: 1,
                initialFriendshipGauge: 10,
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 1,
                hintFrequency: 16,
                moodEffect: 12,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 12,
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 23,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 2,
                hintFrequency: 30,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 2,
                hintFrequency: 32,
                moodEffect: 18,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 16,
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 2,
                hintFrequency: 35,
                moodEffect: 21,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 18,
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 37,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                speedBonus: 1
            }
        }
    },

    'vodka_r': {
        id: 'vodka_r',
        name: 'Vodka (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                raceBonus: 1,
                fanBonus: 1,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                moodEffect: 12,
                initialFriendshipGauge: 12,
                raceBonus: 1,
                fanBonus: 3,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                moodEffect: 18,
                initialFriendshipGauge: 16,
                raceBonus: 2,
                fanBonus: 6,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                moodEffect: 21,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 8,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                powerBonus: 1
            }
        }
    },

    'gold_ship_r': {
        id: 'gold_ship_r',
        name: 'Gold Ship (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 1,
                hintFrequency: 5,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                staminaBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                hintLevels: 1,
                hintFrequency: 10,
                moodEffect: 10,
                trainingEffectiveness: 1,
                initialFriendshipGauge: 10,
                staminaBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 1,
                hintFrequency: 16,
                moodEffect: 12,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 12,
                staminaBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 1,
                hintFrequency: 23,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                staminaBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                hintLevels: 2,
                hintFrequency: 30,
                moodEffect: 15,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 15,
                staminaBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                hintLevels: 2,
                hintFrequency: 32,
                moodEffect: 18,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 16,
                staminaBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 2,
                hintFrequency: 35,
                moodEffect: 21,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 18,
                staminaBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 37,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                staminaBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 2,
                hintFrequency: 40,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                staminaBonus: 1
            }
        }
    },

    'oguri_cap_r': {
        id: 'oguri_cap_r',
        name: 'Oguri Cap (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 13,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                specialtyPriority: 5,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: 12,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 21,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 20,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 25,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 20,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 27,
                initialFriendshipGauge: 16,
                hintLevels: 1,
                hintFrequency: 23,
                specialtyPriority: 25,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                initialFriendshipGauge: 18,
                hintLevels: 1,
                hintFrequency: 26,
                specialtyPriority: 30,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 32,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 35,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 35,
                powerBonus: 1
            }
        }
    },

    'maruzensky_r': {
        id: 'maruzensky_r',
        name: 'Maruzensky (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialSpeed: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialSpeed: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialSpeed: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: 12,
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialSpeed: 17,
                raceBonus: 3,
                fanBonus: 7,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialSpeed: 20,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialSpeed: 21,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: 25,
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialSpeed: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: 30,
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialSpeed: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: 35,
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialSpeed: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                speedBonus: 1
            }
        }
    },

    'tokai_teio_r': {
        id: 'tokai_teio_r',
        name: 'Tokai Teio (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 5,
                initialFriendshipGauge: 14,
                hintLevel: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 8,
                moodEffect: 8,
                initialFriendshipGauge: 14,
                hintLevel: 1,
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                moodEffect: 12,
                initialFriendshipGauge: 15,
                hintLevel: 1,
                hintFrequency: 21,
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 16,
                initialFriendshipGauge: 15,
                hintLevel: 1,
                hintFrequency: 22,
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 11,
                moodEffect: 20,
                initialFriendshipGauge: 16,
                hintLevel: 1,
                hintFrequency: 23,
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 23,
                initialFriendshipGauge: 16,
                hintLevel: 1,
                hintFrequency: 23,
                specialtyPriority: 1,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                initialFriendshipGauge: 18,
                hintLevel: 1,
                hintFrequency: 23,
                specialtyPriority: 1,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 14,
                moodEffect: 33,
                initialFriendshipGauge: 19,
                hintLevel: 1,
                hintFrequency: 23,
                specialtyPriority: 1,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                initialFriendshipGauge: 20,
                hintLevel: 1,
                hintFrequency: 23,
                specialtyPriority: 1,
                powerBonus: 1
            }
        }
    },

    'silence_suzuka_r': {
        id: 'silence_suzuka_r',
        name: 'Silence Suzuka (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                raceBonus: 1,
                fanBonus: 1,
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                moodEffect: 12,
                initialFriendshipGauge: 12,
                raceBonus: 1,
                fanBonus: 3,
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                moodEffect: 18,
                initialFriendshipGauge: 16,
                raceBonus: 2,
                fanBonus: 6,
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                moodEffect: 21,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 8,
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                skillPointBonus: 1
            }
        }
    },

    'special_week_r': {
        id: 'special_week_r',
        name: 'Special Week (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 13,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                specialtyPriority: 5,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: 12,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 21,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 20,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 25,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 20,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 27,
                initialFriendshipGauge: 16,
                hintLevels: 1,
                hintFrequency: 23,
                specialtyPriority: 25,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                initialFriendshipGauge: 18,
                hintLevels: 1,
                hintFrequency: 26,
                specialtyPriority: 30,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 32,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 35,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 35,
                powerBonus: 1
            }
        }
    },

    'sweep_tosho_r': {
        id: 'sweep_tosho_r',
        name: 'Sweep Tosho (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { value: null, locked: true },
                initialWit: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: 10,
                initialWit: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 12,
                initialWit: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 12,
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: 15,
                initialWit: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 15,
                initialWit: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: 18,
                initialWit: 16,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                moodEffect: 21,
                initialWit: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: 25,
                initialWit: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 25,
                initialWit: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                skillPointBonus: 1
            }
        }
    },

    'daitaku_helios_r': {
        id: 'daitaku_helios_r',
        name: 'Daitaku Helios (Power)',
        rarity: 'R',
        type: 'Power',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { value: null, locked: true },
                initialPower: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: 10,
                initialPower: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 12,
                initialPower: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 12,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: 15,
                initialPower: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 15,
                initialPower: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: 18,
                initialPower: 16,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                moodEffect: 21,
                initialPower: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: 25,
                initialPower: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 25,
                initialPower: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                powerBonus: 1
            }
        }
    },

    'twin_turbo_r': {
        id: 'twin_turbo_r',
        name: 'Twin Turbo (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                initialFriendshipGauge: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                speedBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 13,
                initialFriendshipGauge: 10,
                hintLevels: 1,
                hintFrequency: 5,
                specialtyPriority: 5,
                speedBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 17,
                initialFriendshipGauge: 12,
                hintLevels: 1,
                hintFrequency: 12,
                specialtyPriority: 12,
                speedBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 21,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 20,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                moodEffect: 25,
                initialFriendshipGauge: 15,
                hintLevels: 1,
                hintFrequency: 20,
                specialtyPriority: 20,
                speedBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                moodEffect: 27,
                initialFriendshipGauge: 16,
                hintLevels: 1,
                hintFrequency: 23,
                specialtyPriority: 25,
                speedBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 30,
                initialFriendshipGauge: 18,
                hintLevels: 1,
                hintFrequency: 26,
                specialtyPriority: 30,
                speedBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                moodEffect: 32,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 35,
                speedBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                initialFriendshipGauge: 20,
                hintLevels: 2,
                hintFrequency: 30,
                specialtyPriority: 35,
                speedBonus: 1
            }
        }
    },

    'mejiro_palmer_r': {
        id: 'mejiro_palmer_r',
        name: 'Mejiro Palmer (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                specialtyPriority: 5,
                moodEffect: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 7,
                specialtyPriority: 11,
                moodEffect: 10,
                initialFriendshipGauge: 10,
                raceBonus: 1,
                fanBonus: 1,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 9,
                specialtyPriority: 19,
                moodEffect: 12,
                initialFriendshipGauge: 12,
                raceBonus: 1,
                fanBonus: 3,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 12,
                specialtyPriority: 27,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 15,
                specialtyPriority: 35,
                moodEffect: 15,
                initialFriendshipGauge: 15,
                raceBonus: 1,
                fanBonus: 5,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 16,
                specialtyPriority: 38,
                moodEffect: 18,
                initialFriendshipGauge: 16,
                raceBonus: 2,
                fanBonus: 6,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 17,
                specialtyPriority: 42,
                moodEffect: 21,
                initialFriendshipGauge: 18,
                raceBonus: 3,
                fanBonus: 8,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 18,
                specialtyPriority: 46,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 20,
                specialtyPriority: 50,
                moodEffect: 25,
                initialFriendshipGauge: 20,
                raceBonus: 5,
                fanBonus: 10,
                powerBonus: 1
            }
        }
    },

    'ikuno_dictus_r': {
        id: 'ikuno_dictus_r',
        name: 'Ikuno Dictus (Wit)',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialWit: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialWit: 11,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 5,
                trainingEffectiveness: 2,
                initialWit: 12,
                raceBonus: 1,
                fanBonus: 3,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 5,
                trainingEffectiveness: 3,
                initialWit: 14,
                raceBonus: 3,
                fanBonus: 5,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 5,
                trainingEffectiveness: 4,
                initialWit: 17,
                raceBonus: 5,
                fanBonus: 8,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 5,
                trainingEffectiveness: 6,
                initialWit: 21,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: { value: null, locked: true },
                skillPointBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 5,
                trainingEffectiveness: 7,
                initialWit: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: 30,
                skillPointBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 5,
                trainingEffectiveness: 8,
                initialWit: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: 35,
                skillPointBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 5,
                trainingEffectiveness: 10,
                initialWit: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                skillPointBonus: 1
            }
        }
    },

    'matikanetannhauser_r': {
        id: 'matikanetannhauser_r',
        name: 'Matikanetannhauser (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialGuts: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                trainingEffectiveness: 1,
                initialGuts: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                gutsBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                trainingEffectiveness: 2,
                initialGuts: 14,
                raceBonus: 2,
                fanBonus: 5,
                specialtyPriority: 12,
                gutsBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 3,
                initialGuts: 17,
                raceBonus: 3,
                fanBonus: 7,
                specialtyPriority: 20,
                gutsBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                trainingEffectiveness: 5,
                initialGuts: 20,
                raceBonus: 5,
                fanBonus: 10,
                specialtyPriority: 20,
                gutsBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                trainingEffectiveness: 6,
                initialGuts: 21,
                raceBonus: 5,
                fanBonus: 11,
                specialtyPriority: 25,
                gutsBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialGuts: 22,
                raceBonus: 5,
                fanBonus: 12,
                specialtyPriority: 30,
                gutsBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                trainingEffectiveness: 8,
                initialGuts: 23,
                raceBonus: 5,
                fanBonus: 13,
                specialtyPriority: 35,
                gutsBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialGuts: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                gutsBonus: 1
            }
        }
    },

    'satono_diamond_r': {
        id: 'satono_diamond_r',
        name: 'Satono Diamond (Stamina)',
        rarity: 'R',
        type: 'Stamina',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                moodEffect: { value: null, locked: true },
                initialStamina: { value: null, locked: true },
                initialFriendshipGauge: { value: null, locked: true },
                specialtyPriority: { value: null, locked: true },
                gutsBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                raceBonus: 1,
                fanBonus: 2,
                moodEffect: 10,
                initialStamina: 10,
                initialFriendshipGauge: 10,
                specialtyPriority: 5,
                gutsBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                raceBonus: 2,
                fanBonus: 5,
                moodEffect: 12,
                initialStamina: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 12,
                gutsBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 7,
                moodEffect: 15,
                initialStamina: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                gutsBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                raceBonus: 5,
                fanBonus: 10,
                moodEffect: 15,
                initialStamina: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                gutsBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                raceBonus: 5,
                fanBonus: 11,
                moodEffect: 18,
                initialStamina: 16,
                initialFriendshipGauge: 16,
                specialtyPriority: 25,
                gutsBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 5,
                fanBonus: 12,
                moodEffect: 21,
                initialStamina: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                gutsBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 13,
                moodEffect: 25,
                initialStamina: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                gutsBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                moodEffect: 25,
                initialStamina: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                gutsBonus: 1
            }
        }
    },

    'kitasan_black_r': {
        id: 'kitasan_black_r',
        name: 'Kitasan Black (Speed)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                moodEffect: { value: null, locked: true },
                trainingEffectiveness: { value: null, locked: true },
                raceBonus: { value: null, locked: true },
                fanBonus: { value: null, locked: true },
                hintLevels: { value: null, locked: true },
                hintFrequency: { value: null, locked: true },
                powerBonus: { value: null, locked: true }
            },
            5: {
                friendshipBonus: 6,
                initialFriendshipGauge: 12,
                moodEffect: 10,
                trainingEffectiveness: 1,
                raceBonus: 1,
                fanBonus: 1,
                hintLevels: 1,
                hintFrequency: 5,
                powerBonus: { value: null, locked: true }
            },
            10: {
                friendshipBonus: 8,
                initialFriendshipGauge: 14,
                moodEffect: 12,
                trainingEffectiveness: 3,
                raceBonus: 1,
                fanBonus: 3,
                hintLevels: 1,
                hintFrequency: 12,
                powerBonus: { value: null, locked: true }
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                moodEffect: 15,
                trainingEffectiveness: 5,
                raceBonus: 1,
                fanBonus: 5,
                hintLevels: 1,
                hintFrequency: 20,
                powerBonus: { value: null, locked: true }
            },
            20: {
                friendshipBonus: 10,
                initialFriendshipGauge: 20,
                moodEffect: 15,
                trainingEffectiveness: 5,
                raceBonus: 1,
                fanBonus: 5,
                hintLevels: 1,
                hintFrequency: 20,
                powerBonus: { value: null, locked: true }
            },
            25: {
                friendshipBonus: 11,
                initialFriendshipGauge: 21,
                moodEffect: 18,
                trainingEffectiveness: 5,
                raceBonus: 2,
                fanBonus: 6,
                hintLevels: 1,
                hintFrequency: 23,
                powerBonus: { value: null, locked: true }
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 22,
                moodEffect: 21,
                trainingEffectiveness: 5,
                raceBonus: 3,
                fanBonus: 8,
                hintLevels: 1,
                hintFrequency: 26,
                powerBonus: { value: null, locked: true }
            },
            35: {
                friendshipBonus: 15,
                initialFriendshipGauge: 23,
                moodEffect: 25,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                hintLevels: 2,
                hintFrequency: 30,
                powerBonus: { value: null, locked: true }
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                moodEffect: 25,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                hintLevels: 2,
                hintFrequency: 30,
                powerBonus: 1
            }
        }
    },

    // Nishino Flower (R) - Speed Type  
    'nishino_flower_r': {
        id: 'nishino_flower_r',
        name: 'Nishino Flower (R)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: null, // Unlocked at level 5
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                trainingEffectiveness: null, // Unlocked at level 5
                raceBonus: null, // Unlocked at level 5
                fanBonus: null, // Unlocked at level 5
                speedBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 6,
                moodEffect: 10,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 8,
                trainingEffectiveness: 2,
                raceBonus: 2,
                fanBonus: 5,
                speedBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 8,
                moodEffect: 13,
                initialFriendshipGauge: 15,
                hintLevels: 'Lv 1',
                hintFrequency: 12,
                trainingEffectiveness: 3,
                raceBonus: 3,
                fanBonus: 6,
                speedBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 17,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 17,
                trainingEffectiveness: 3,
                raceBonus: 3,
                fanBonus: 7,
                speedBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                moodEffect: 20,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 1',
                hintFrequency: 22,
                trainingEffectiveness: 4,
                raceBonus: 4,
                fanBonus: 8,
                speedBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                moodEffect: 22,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 27,
                trainingEffectiveness: 4,
                raceBonus: 4,
                fanBonus: 9,
                speedBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 23,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                trainingEffectiveness: 4,
                raceBonus: 4,
                fanBonus: 9,
                speedBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                moodEffect: 24,
                initialFriendshipGauge: 24,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                speedBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 25,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                speedBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // Biko Pegasus (R) - Speed Type  
    'biiko_pegasus_r': {
        id: 'biiko_pegasus_r',
        name: 'Biko Pegasus (R)',
        rarity: 'R',
        type: 'Speed',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialSpeed: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: null, // Unlocked at level 5
                speedBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 7,
                trainingEffectiveness: 2,
                initialSpeed: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                speedBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 9,
                trainingEffectiveness: 3,
                initialSpeed: 15,
                raceBonus: 2,
                fanBonus: 4,
                specialtyPriority: 10,
                speedBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 4,
                initialSpeed: 17,
                raceBonus: 2,
                fanBonus: 6,
                specialtyPriority: 15,
                speedBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                trainingEffectiveness: 5,
                initialSpeed: 19,
                raceBonus: 3,
                fanBonus: 8,
                specialtyPriority: 20,
                speedBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                trainingEffectiveness: 6,
                initialSpeed: 21,
                raceBonus: 3,
                fanBonus: 10,
                specialtyPriority: 25,
                speedBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialSpeed: 22,
                raceBonus: 4,
                fanBonus: 12,
                specialtyPriority: 28,
                speedBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                trainingEffectiveness: 8,
                initialSpeed: 23,
                raceBonus: 4,
                fanBonus: 13,
                specialtyPriority: 32,
                speedBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialSpeed: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                speedBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // Nice Nature (R) - Guts Type  
    'nice_nature_r': {
        id: 'nice_nature_r',
        name: 'Nice Nature (Guts)',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                moodEffect: null, // Unlocked at level 5
                trainingEffectiveness: null, // Unlocked at level 5
                initialFriendshipGauge: null, // Unlocked at level 5
                skillPointBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 7,
                hintLevels: 'Lv 1',
                hintFrequency: 8,
                moodEffect: 5,
                trainingEffectiveness: 1,
                initialFriendshipGauge: 5,
                skillPointBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 8,
                hintLevels: 'Lv 1',
                hintFrequency: 12,
                moodEffect: 8,
                trainingEffectiveness: 2,
                initialFriendshipGauge: 8,
                skillPointBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 17,
                moodEffect: 12,
                trainingEffectiveness: 2,
                initialFriendshipGauge: 12,
                skillPointBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                hintLevels: 'Lv 2',
                hintFrequency: 22,
                moodEffect: 15,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 15,
                skillPointBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                hintLevels: 'Lv 2',
                hintFrequency: 27,
                moodEffect: 18,
                trainingEffectiveness: 3,
                initialFriendshipGauge: 17,
                skillPointBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                moodEffect: 20,
                trainingEffectiveness: 4,
                initialFriendshipGauge: 18,
                skillPointBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                moodEffect: 22,
                trainingEffectiveness: 4,
                initialFriendshipGauge: 19,
                skillPointBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                moodEffect: 25,
                trainingEffectiveness: 5,
                initialFriendshipGauge: 20,
                skillPointBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // Meisho Doto (R) - Guts Type  
    'meisho_doto_r': {
        id: 'meisho_doto_r',
        name: 'Meisho Doto',
        rarity: 'R',
        type: 'Guts',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                trainingEffectiveness: 1,
                initialGuts: 10,
                raceBonus: 1,
                fanBonus: 1,
                specialtyPriority: null, // Unlocked at level 5
                gutsBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 7,
                trainingEffectiveness: 2,
                initialGuts: 12,
                raceBonus: 1,
                fanBonus: 2,
                specialtyPriority: 5,
                gutsBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 9,
                trainingEffectiveness: 3,
                initialGuts: 15,
                raceBonus: 2,
                fanBonus: 4,
                specialtyPriority: 10,
                gutsBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                trainingEffectiveness: 4,
                initialGuts: 17,
                raceBonus: 2,
                fanBonus: 6,
                specialtyPriority: 15,
                gutsBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                trainingEffectiveness: 5,
                initialGuts: 19,
                raceBonus: 3,
                fanBonus: 8,
                specialtyPriority: 20,
                gutsBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                trainingEffectiveness: 6,
                initialGuts: 21,
                raceBonus: 3,
                fanBonus: 10,
                specialtyPriority: 25,
                gutsBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                trainingEffectiveness: 7,
                initialGuts: 22,
                raceBonus: 4,
                fanBonus: 12,
                specialtyPriority: 28,
                gutsBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                trainingEffectiveness: 8,
                initialGuts: 23,
                raceBonus: 4,
                fanBonus: 13,
                specialtyPriority: 32,
                gutsBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                trainingEffectiveness: 10,
                initialGuts: 25,
                raceBonus: 5,
                fanBonus: 15,
                specialtyPriority: 35,
                gutsBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // Matikanefukukitaru (R) - Wit Type  
    'matikanefukukitaru_r': {
        id: 'matikanefukukitaru_r',
        name: 'Matikanefukukitaru',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                moodEffect: 10,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: null, // Unlocked at level 5
                hintLevels: null, // Unlocked at level 5
                hintFrequency: null, // Unlocked at level 5
                specialtyPriority: null, // Unlocked at level 5
                witBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 7,
                moodEffect: 15,
                witFriendshipRecovery: 1,
                initialFriendshipGauge: 5,
                hintLevels: 'Lv 1',
                hintFrequency: 8,
                specialtyPriority: 5,
                witBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 9,
                moodEffect: 20,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 12,
                specialtyPriority: 10,
                witBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                moodEffect: 23,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 17,
                specialtyPriority: 15,
                witBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                moodEffect: 26,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 15,
                hintLevels: 'Lv 2',
                hintFrequency: 20,
                specialtyPriority: 20,
                witBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                moodEffect: 29,
                witFriendshipRecovery: 2,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 2',
                hintFrequency: 23,
                specialtyPriority: 25,
                witBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                moodEffect: 32,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: 18,
                hintLevels: 'Lv 2',
                hintFrequency: 26,
                specialtyPriority: 30,
                witBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                moodEffect: 34,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: 19,
                hintLevels: 'Lv 2',
                hintFrequency: 28,
                specialtyPriority: 33,
                witBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                moodEffect: 35,
                witFriendshipRecovery: 3,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 30,
                specialtyPriority: 35,
                witBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // Marvelous Sunday (R) - Wit Type  
    'marvelous_sunday_r': {
        id: 'marvelous_sunday_r',
        name: 'Marvelous Sunday',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                raceBonus: 1,
                fanBonus: 1,
                witFriendshipRecovery: 1,
                moodEffect: null, // Unlocked at level 5
                initialWit: null, // Unlocked at level 5
                initialFriendshipGauge: null, // Unlocked at level 5
                specialtyPriority: null, // Unlocked at level 5
                witBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 7,
                raceBonus: 1,
                fanBonus: 3,
                witFriendshipRecovery: 1,
                moodEffect: 5,
                initialWit: 5,
                initialFriendshipGauge: 5,
                specialtyPriority: 5,
                witBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 9,
                raceBonus: 2,
                fanBonus: 6,
                witFriendshipRecovery: 2,
                moodEffect: 10,
                initialWit: 8,
                initialFriendshipGauge: 8,
                specialtyPriority: 10,
                witBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                raceBonus: 3,
                fanBonus: 8,
                witFriendshipRecovery: 2,
                moodEffect: 15,
                initialWit: 12,
                initialFriendshipGauge: 12,
                specialtyPriority: 15,
                witBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                raceBonus: 3,
                fanBonus: 10,
                witFriendshipRecovery: 2,
                moodEffect: 18,
                initialWit: 15,
                initialFriendshipGauge: 15,
                specialtyPriority: 20,
                witBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                raceBonus: 4,
                fanBonus: 12,
                witFriendshipRecovery: 3,
                moodEffect: 20,
                initialWit: 17,
                initialFriendshipGauge: 17,
                specialtyPriority: 25,
                witBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                raceBonus: 4,
                fanBonus: 13,
                witFriendshipRecovery: 3,
                moodEffect: 22,
                initialWit: 18,
                initialFriendshipGauge: 18,
                specialtyPriority: 30,
                witBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                raceBonus: 5,
                fanBonus: 14,
                witFriendshipRecovery: 3,
                moodEffect: 23,
                initialWit: 19,
                initialFriendshipGauge: 19,
                specialtyPriority: 33,
                witBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                raceBonus: 5,
                fanBonus: 15,
                witFriendshipRecovery: 3,
                moodEffect: 25,
                initialWit: 20,
                initialFriendshipGauge: 20,
                specialtyPriority: 35,
                witBonus: 1 // UNLOCKED at level 40
            }
        }
    },

    // Mejiro Dober (R) - Wit Type  
    'mejiro_dober_r': {
        id: 'mejiro_dober_r',
        name: 'Mejiro Dober',
        rarity: 'R',
        type: 'Wit',
        maxLevel: 40,
        
        levelProgression: {
            1: {
                friendshipBonus: 5,
                initialFriendshipGauge: 10,
                hintLevels: 'Lv 1',
                hintFrequency: 5,
                witFriendshipRecovery: 1,
                moodEffect: null, // Unlocked at level 5
                trainingEffectiveness: null, // Unlocked at level 5
                raceBonus: null, // Unlocked at level 5
                fanBonus: null, // Unlocked at level 5
                witBonus: null // Unlocked at level 40
            },
            5: {
                friendshipBonus: 7,
                initialFriendshipGauge: 12,
                hintLevels: 'Lv 1',
                hintFrequency: 8,
                witFriendshipRecovery: 1,
                moodEffect: 5,
                trainingEffectiveness: 1,
                raceBonus: 1,
                fanBonus: 2,
                witBonus: null // Unlocked at level 40
            },
            10: {
                friendshipBonus: 9,
                initialFriendshipGauge: 15,
                hintLevels: 'Lv 1',
                hintFrequency: 12,
                witFriendshipRecovery: 2,
                moodEffect: 10,
                trainingEffectiveness: 2,
                raceBonus: 2,
                fanBonus: 4,
                witBonus: null // Unlocked at level 40
            },
            15: {
                friendshipBonus: 10,
                initialFriendshipGauge: 17,
                hintLevels: 'Lv 1',
                hintFrequency: 17,
                witFriendshipRecovery: 2,
                moodEffect: 15,
                trainingEffectiveness: 2,
                raceBonus: 3,
                fanBonus: 6,
                witBonus: null // Unlocked at level 40
            },
            20: {
                friendshipBonus: 11,
                initialFriendshipGauge: 20,
                hintLevels: 'Lv 2',
                hintFrequency: 22,
                witFriendshipRecovery: 2,
                moodEffect: 18,
                trainingEffectiveness: 3,
                raceBonus: 3,
                fanBonus: 7,
                witBonus: null // Unlocked at level 40
            },
            25: {
                friendshipBonus: 12,
                initialFriendshipGauge: 22,
                hintLevels: 'Lv 2',
                hintFrequency: 27,
                witFriendshipRecovery: 3,
                moodEffect: 20,
                trainingEffectiveness: 3,
                raceBonus: 4,
                fanBonus: 8,
                witBonus: null // Unlocked at level 40
            },
            30: {
                friendshipBonus: 13,
                initialFriendshipGauge: 23,
                hintLevels: 'Lv 2',
                hintFrequency: 32,
                witFriendshipRecovery: 3,
                moodEffect: 22,
                trainingEffectiveness: 4,
                raceBonus: 4,
                fanBonus: 9,
                witBonus: null // Unlocked at level 40
            },
            35: {
                friendshipBonus: 14,
                initialFriendshipGauge: 24,
                hintLevels: 'Lv 2',
                hintFrequency: 37,
                witFriendshipRecovery: 3,
                moodEffect: 23,
                trainingEffectiveness: 4,
                raceBonus: 5,
                fanBonus: 9,
                witBonus: null // Unlocked at level 40
            },
            40: {
                friendshipBonus: 15,
                initialFriendshipGauge: 25,
                hintLevels: 'Lv 2',
                hintFrequency: 40,
                witFriendshipRecovery: 3,
                moodEffect: 25,
                trainingEffectiveness: 5,
                raceBonus: 5,
                fanBonus: 10,
                witBonus: 1 // UNLOCKED at level 40
            }
        }
    }
};

/**
 * Get level progression data for a specific R-rarity support card
 * @param {string} cardId - The card identifier
 * @param {number} level - The card level (must be a selectable level: 1, 5, 10, 15, 20, 25, 30, 35, 40)
 * @returns {Object|null} Level progression data or null if not found
 */
function getRSupportCardLevelData(cardId, level) {
    const card = R_SUPPORT_CARD_LEVEL_PROGRESSION[cardId];
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
 * Get all available levels for an R-rarity support card
 * @param {string} cardId - The card identifier
 * @returns {number[]} Array of available levels (1, 5, 10, 15, 20, 25, 30, 35, 40)
 */
function getRSupportCardAvailableLevels(cardId) {
    const card = R_SUPPORT_CARD_LEVEL_PROGRESSION[cardId];
    if (!card) {
        return [];
    }
    
    return Object.keys(card.levelProgression).map(level => parseInt(level)).sort((a, b) => a - b);
}

/**
 * Get complete R card information including all level progression data
 * @param {string} cardId - The card identifier
 * @returns {Object|null} Complete card data or null if not found
 */
function getRSupportCardComplete(cardId) {
    return R_SUPPORT_CARD_LEVEL_PROGRESSION[cardId] || null;
}

/**
 * Check if an R-rarity support card has level progression data implemented
 * @param {string} cardId - The card identifier
 * @returns {boolean} True if card has level progression data
 */
function hasRSupportCardLevelProgression(cardId) {
    return cardId in R_SUPPORT_CARD_LEVEL_PROGRESSION;
}

/**
 * Get all implemented R-rarity support card IDs
 * @returns {string[]} Array of implemented R card IDs
 */
function getAllRSupportCardIds() {
    return Object.keys(R_SUPPORT_CARD_LEVEL_PROGRESSION);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        R_SUPPORT_CARD_LEVEL_PROGRESSION,
        getRSupportCardLevelData,
        getRSupportCardAvailableLevels,
        getRSupportCardComplete,
        hasRSupportCardLevelProgression,
        getAllRSupportCardIds
    };
} else {
    // Browser environment - attach to window
    window.RSupportCardLevelProgression = {
        R_SUPPORT_CARD_LEVEL_PROGRESSION,
        getRSupportCardLevelData,
        getRSupportCardAvailableLevels,
        getRSupportCardComplete,
        hasRSupportCardLevelProgression,
        getAllRSupportCardIds
    };
}