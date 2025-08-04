/**
 * R Support Cards Module
 * Contains all R rarity support card data with clean metadata
 * Compatible with browser and Node.js environments
 */

(function(global) {
    'use strict';
    console.log('R Module: Starting to load...');

    const R_SUPPORT_CARDS = [
        {
            "id": "daitaku_helios_r",
            "name": "Daitaku Helios",
            "character": "Daitaku Helios",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Sympathy",
                    "description": "Moderately increase performance when many runners share a sympathetic heart",
                    "category": "general"
                },
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly decrease fatigue early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase velocity when passing another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Mile Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "mile"
                },
                {
                    "name": "Shifting Gears",
                    "description": "Slightly increase passing ability when positioned toward the front mid-race",
                    "category": "mile"
                },
                {
                    "name": "Slipstream",
                    "description": "Slightly decrease wind resistance when following directly behind another runner",
                    "category": "general"
                },
                {
                    "name": "Speed Eater",
                    "description": "Slightly steal velocity from runners behind when in the lead mid-race",
                    "category": "mile"
                }
            ],
            "eventSkills": [
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance when 4th favorite or below",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "twin_turbo_r",
            "name": "Twin Turbo",
            "character": "Twin Turbo",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Competitive Spirit ○",
                    "description": "Moderately increase performance when at least 5 other runners are using the same strategy",
                    "category": "general"
                },
                {
                    "name": "Target in Sight ○",
                    "description": "Moderately increase performance when the favorite is using the same strategy",
                    "category": "general"
                },
                {
                    "name": "Moxie",
                    "description": "Slightly reduce fatigue on an uphill",
                    "category": "front-runner"
                },
                {
                    "name": "Fast-Paced",
                    "description": "Slightly increase ability to go to the front mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Leader's Pride",
                    "description": "Slightly avoid being passed early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                }
            ],
            "eventSkills": [
                {
                    "name": "Watchful Eye",
                    "description": "Slightly decrease fatigue when positioned toward the back early-race",
                    "category": "mile"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "front-runner"
                ]
            }
        },
        {
            "id": "special_week_r",
            "name": "Special Week",
            "character": "Special Week",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "weather"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Late Surger Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "late-surger"
                },
                {
                    "name": "Hydrate",
                    "description": "Slightly recover endurance mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Outer Swell",
                    "description": "Slightly increase velocity when passing another runner on the outside on the final corner",
                    "category": "late-surger"
                },
                {
                    "name": "Steadfast",
                    "description": "Slightly increase ability to fight back when passed by another runner on the final corner",
                    "category": "medium"
                }
            ],
            "eventSkills": [
                {
                    "name": "Extra Tank",
                    "description": "Slightly regain the energy to run after exhausting strength",
                    "category": "long"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "silence_suzuka_r",
            "name": "Silence Suzuka",
            "character": "Silence Suzuka",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Front Runner Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "front-runner"
                },
                {
                    "name": "Rosy Outlook",
                    "description": "Slightly decrease fatigue when in the lead mid-race",
                    "category": "medium"
                },
                {
                    "name": "Fast-Paced",
                    "description": "Slightly increase ability to go to the front mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Front Runner Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "front-runner"
                },
                {
                    "name": "Front Runner Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "front-runner"
                },
                {
                    "name": "Leader's Pride",
                    "description": "Slightly avoid being passed early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Final Push",
                    "description": "Slightly increase ability to keep the lead on the final corner",
                    "category": "front-runner"
                },
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Left-Handed ○",
                    "description": "Moderately increase performance on left-handed tracks",
                    "category": "track"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner"
                ],
                "characterTypes": [
                    "speed-focused",
                    "front-runner"
                ]
            }
        },
        {
            "id": "tokai_teio_r",
            "name": "Tokai Teio",
            "character": "Tokai Teio",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Soft Step",
                    "description": "Slightly decrease fatigue when moving sideways",
                    "category": "medium"
                },
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase maneuverability when the way ahead is blocked in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Shrewd Step",
                    "description": "Slightly increase ability to navigate smoothly",
                    "category": "pace-chaser"
                },
                {
                    "name": "Prudent Positioning",
                    "description": "Moderately increase navigation early-race",
                    "category": "general"
                },
                {
                    "name": "Go with the Flow",
                    "description": "Moderately increase navigation late-race",
                    "category": "general"
                },
                {
                    "name": "Thunderbolt Step",
                    "description": "Moderately avoid becoming surrounded when positioned toward the back mid-race",
                    "category": "medium"
                }
            ],
            "eventSkills": [
                {
                    "name": "Pace Chaser Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "pace-chaser"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "gold_ship_r",
            "name": "Gold Ship",
            "character": "Gold Ship",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Sympathy",
                    "description": "Moderately increase performance when many runners share a sympathetic heart",
                    "category": "general"
                },
                {
                    "name": "End Closer Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "end-closer"
                },
                {
                    "name": "Standing By",
                    "description": "Slightly decrease fatigue mid-race",
                    "category": "end-closer"
                },
                {
                    "name": "After-School Stroll",
                    "description": "Slightly reduce fatigue on a downhill",
                    "category": "end-closer"
                }
            ],
            "eventSkills": [
                {
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance at Hanshin Racecourse",
                    "category": "track"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "mejiro_palmer_r",
            "name": "Mejiro Palmer",
            "character": "Mejiro Palmer", 
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Sympathy",
                    "description": "Moderately increase performance when many runners share a sympathetic heart",
                    "category": "general"
                },
                {
                    "name": "Nakayama Racecourse ○",
                    "description": "Moderately increase performance at Nakayama Racecourse",
                    "category": "track"
                },
                {
                    "name": "Hanshin Racecourse ○", 
                    "description": "Moderately increase performance at Hanshin Racecourse",
                    "category": "track"
                },
                {
                    "name": "Moxie",
                    "description": "Slightly reduce fatigue on an uphill",
                    "category": "front-runner"
                },
                {
                    "name": "Fast-Paced",
                    "description": "Slightly increase ability to go to the front mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Flustered Pace Chasers",
                    "description": "Slightly increase fatigue for pace chasers mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "weather"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser" 
                ],
                "characterTypes": [
                    "guts-focused",
                    "front-runner"
                ]
            }
        },
        {
            "id": "ikuno_dictus_r",
            "name": "Ikuno Dictus",
            "character": "Ikuno Dictus",
            "rarity": "R", 
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6,
                "skillPoints": 5
            },
            "supportHints": [
                {
                    "name": "Lay Low",
                    "description": "Slightly recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly recover endurance when surrounded mid-race", 
                    "category": "general"
                },
                {
                    "name": "Hawkeye",
                    "description": "Moderately widen field of view with heightened observation early-race",
                    "category": "medium"
                },
                {
                    "name": "Studious",
                    "description": "Slightly widen field of view with heightened observation mid-race",
                    "category": "late-surger"
                },
                {
                    "name": "Sharp Gaze",
                    "description": "Slightly startle other runners late-race",
                    "category": "late-surger"
                }
            ],
            "eventSkills": [
                {
                    "name": "Trick (Rear)",
                    "description": "Slightly increase fatigue for rushed runners ahead when positioned toward the back mid-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium",
                    "long"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "sweep_tosho_r",
            "name": "Sweep Tosho",
            "character": "Sweep Tosho",
            "rarity": "R",
            "type": "Speed", 
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "After-School Stroll",
                    "description": "Slightly reduce fatigue on a downhill",
                    "category": "end-closer"
                },
                {
                    "name": "Slipstream",
                    "description": "Slightly decrease wind resistance when following directly behind another runner",
                    "category": "general"
                },
                {
                    "name": "Prudent Positioning",
                    "description": "Moderately increase navigation early-race",
                    "category": "general"
                },
                {
                    "name": "I Can See Right Through You",
                    "description": "Slightly widen field of view with situational awareness when moving sideways",
                    "category": "end-closer"
                },
                {
                    "name": "Trick (Front)",
                    "description": "Slightly increase fatigue for rushed runners behind when positioned toward the front mid-race",
                    "category": "general"
                },
                {
                    "name": "Trick (Rear)",
                    "description": "Slightly increase fatigue for rushed runners ahead when positioned toward the back mid-race",
                    "category": "general"
                },
                {
                    "name": "Murmur",
                    "description": "Slightly startle other runners when close together",
                    "category": "general"
                }
            ],
            "eventSkills": [],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "strategic"
                ]
            }
        },
        {
            "id": "maruzensky_r", 
            "name": "Maruzensky",
            "character": "Maruzensky",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Productive Plan",
                    "description": "Slightly increase ability to build pace early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Mile Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "mile"
                },
                {
                    "name": "Shifting Gears",
                    "description": "Slightly increase passing ability when positioned toward the front mid-race",
                    "category": "mile"
                },
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Acceleration",
                    "description": "Slightly increase acceleration when passing another runner mid-race",
                    "category": "mile"
                }
            ],
            "eventSkills": [
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "grass_wonder_r",
            "name": "Grass Wonder", 
            "character": "Grass Wonder",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Nakayama Racecourse ○",
                    "description": "Moderately increase performance at Nakayama Racecourse",
                    "category": "track"
                },
                {
                    "name": "Competitive Spirit ○",
                    "description": "Moderately increase performance when at least 5 other runners are using the same strategy",
                    "category": "general"
                },
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Position Pilfer",
                    "description": "Slightly increase velocity mid-race",
                    "category": "late-surger"
                },
                {
                    "name": "Slick Surge",
                    "description": "Slightly increase acceleration late-race",
                    "category": "late-surger"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase passing ability when positioned toward the back late-race",
                    "category": "mile"
                },
                {
                    "name": "Tether",
                    "description": "Slightly decrease velocity of runners ahead when positioned toward the back late-race",
                    "category": "medium"
                },
                {
                    "name": "Flustered Pace Chasers",
                    "description": "Slightly increase fatigue for pace chasers mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Frenzied Pace Chasers",
                    "description": "Increase time needed for pace chasers to calm down when they become rushed",
                    "category": "general"
                },
                {
                    "name": "Target in Sight ○",
                    "description": "Moderately increase performance when the favorite is using the same strategy",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "guts-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "taiki_shuttle_r",
            "name": "Taiki Shuttle",
            "character": "Taiki Shuttle",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Preferred Position",
                    "description": "Slightly decrease fatigue mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase ability to break out of the pack on the final corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Productive Plan",
                    "description": "Slightly increase ability to build pace early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Mile Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "mile"
                },
                {
                    "name": "Shifting Gears",
                    "description": "Slightly increase passing ability when positioned toward the front mid-race",
                    "category": "mile"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase passing ability when positioned toward the back late-race",
                    "category": "mile"
                }
            ],
            "eventSkills": [
                {
                    "name": "Straight Course ○",
                    "description": "Moderately increase performance on straight courses",
                    "category": "track"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase ability to break out of the pack on the final corner",
                    "category": "pace-chaser"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "strategic"
                ]
            }
        },
        {
            "id": "vodka_r",
            "name": "Vodka",
            "character": "Vodka",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Tokyo Racecourse ○",
                    "description": "Moderately increase performance at Tokyo Racecourse",
                    "category": "track"
                },
                {
                    "name": "Straightaway Recovery",
                    "description": "Slightly recover endurance on a straight",
                    "category": "general"
                },
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Mile Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "mile"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Straightaway Acceleration",
                    "description": "Slightly increase acceleration on a straight",
                    "category": "general"
                },
                {
                    "name": "Slick Surge",
                    "description": "Slightly increase acceleration late-race",
                    "category": "late-surger"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase passing ability when positioned toward the back late-race",
                    "category": "mile"
                }
            ],
            "eventSkills": [
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase maneuverability when the way ahead is blocked in the last spurt",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "oguri_cap_r",
            "name": "Oguri Cap",
            "character": "Oguri Cap",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Hydrate",
                    "description": "Slightly recover endurance mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Corner Adept ○",
                    "description": "Slightly increase velocity on a corner with skilled turning",
                    "category": "general"
                },
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Corner Acceleration ○",
                    "description": "Slightly increase acceleration on a corner with masterful turning",
                    "category": "general"
                },
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase maneuverability when the way ahead is blocked in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Acceleration",
                    "description": "Slightly increase acceleration when passing another runner mid-race",
                    "category": "mile"
                },
                {
                    "name": "Groundwork",
                    "description": "Slightly increase acceleration after activating many skills early-race",
                    "category": "general"
                },
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Nakayama Racecourse ○",
                    "description": "Moderately increase performance at Nakayama Racecourse",
                    "category": "track"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "mejiro_mcqueen_r",
            "name": "Mejiro McQueen",
            "character": "Mejiro McQueen",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Spring Runner ○",
                    "description": "Moderately increase performance in spring",
                    "category": "season"
                },
                {
                    "name": "Kyoto Racecourse ○",
                    "description": "Moderately increase performance at Kyoto Racecourse",
                    "category": "track"
                },
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly decrease fatigue early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
                {
                    "name": "Hydrate",
                    "description": "Slightly recover endurance mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Long Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "long"
                },
                {
                    "name": "Keeping the Lead",
                    "description": "Slightly increase ability to maintain the lead when leading by a large margin mid-race",
                    "category": "long"
                },
                {
                    "name": "Disorient",
                    "description": "Slightly narrow the field of view for other runners when close together",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "front-runner"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "el_condor_pasa_r",
            "name": "El Condor Pasa",
            "character": "El Condor Pasa",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Standard Distance ○",
                    "description": "Moderately increase performance over standard distances (multiples of 400m)",
                    "category": "general"
                },
                {
                    "name": "Sunny Days ○",
                    "description": "Moderately increase performance in sunny weather",
                    "category": "weather"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase ability to break out of the pack on the final corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Pace Chaser Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "pace-chaser"
                },
                {
                    "name": "Hawkeye",
                    "description": "Moderately widen field of view with heightened observation early-race",
                    "category": "medium"
                }
            ],
            "eventSkills": [
                {
                    "name": "Sunny Days ○",
                    "description": "Moderately increase performance in sunny weather",
                    "category": "weather"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "front-runner"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "gold_ship_r",
            "name": "Gold Ship",
            "character": "Gold Ship",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Sympathy",
                    "description": "Slightly increase ability to break from the pack when in second or third at the mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "End Closer Savvy ○",
                    "description": "Slightly increase acceleration early-race",
                    "category": "end-closer"
                },
                {
                    "name": "Standing By",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
                    "category": "end-closer"
                },
                {
                    "name": "After-School Stroll",
                    "description": "Slightly increase velocity when not blocked mid-race",
                    "category": "general"
                },
                {
                    "name": "Inside Scoop",
                    "description": "Slightly increase acceleration on the final corner when positioned toward the inside",
                    "category": "general"
                },
                {
                    "name": "Pressure",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner mid-race",
                    "category": "medium"
                },
                {
                    "name": "Uma Stan",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner early-race",
                    "category": "general"
                },
                {
                    "name": "Straightaway Spurt",
                    "description": "Slightly increase velocity on a straight when chasing the runner ahead",
                    "category": "general"
                },
                {
                    "name": "Highlander",
                    "description": "Significantly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                },
                {
                    "name": "Groundwork",
                    "description": "Moderately increase acceleration early-race",
                    "category": "general"
                },
                {
                    "name": "I Can See Right Through You",
                    "description": "Slightly increase ability to avoid interference mid-race",
                    "category": "general"
                },
                {
                    "name": "Strategist",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Intense Gaze",
                    "description": "Slightly increase ability to maintain the lead when in the lead early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Smoke Screen",
                    "description": "Slightly narrow the field of view for other runners when close together",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance on Hanshin Racecourse",
                    "category": "course"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "tm_opera_o_r",
            "name": "TM Opera O",
            "character": "TM Opera O",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly regain the will to accelerate after exhausting strength mid-race",
                    "category": "long"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Long Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "long"
                },
                {
                    "name": "Pace Chaser Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "pace-chaser"
                },
                {
                    "name": "Late Surger Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "late-surger"
                },
                {
                    "name": "Tactical Tweak",
                    "description": "Slightly increase ability to avoid interference mid-race",
                    "category": "general"
                },
                {
                    "name": "Studious",
                    "description": "Slightly increase positioning ability when positioned toward the rear early-race",
                    "category": "end-closer"
                }
            ],
            "eventSkills": [
                {
                    "name": "Non-Standard Distance ○",
                    "description": "Moderately increase performance over non-standard distances",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "symboli_rudolf_r",
            "name": "Symboli Rudolf",
            "character": "Symboli Rudolf",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6,
                "skillPoints": 5
            },
            "supportHints": [
                {
                    "name": "Pace Chaser Savvy ○",
                    "description": "Slightly increase acceleration early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Preferred Position",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "general"
                },
                {
                    "name": "Groundwork",
                    "description": "Moderately increase acceleration early-race",
                    "category": "general"
                },
                {
                    "name": "Tether",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner early-race",
                    "category": "general"
                },
                {
                    "name": "Subdued Front Runners",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Subdued Pace Chasers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Subdued Late Surgers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Subdued End Closers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "front-runner"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "seiun_sky_r",
            "name": "Seiun Sky",
            "character": "Seiun Sky",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance over long distances",
                    "category": "long"
                },
                {
                    "name": "Inner Post Proficiency ○",
                    "description": "Slightly increase acceleration right after the start if the runner starts in an inner gate",
                    "category": "general"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase ability to maintain the lead when in the lead mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Hesitant Pace Chasers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Frenzied Late Surgers",
                    "description": "Moderately increase other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Trick (Front)",
                    "description": "Slightly increase ability to break away when in the lead on the final corner",
                    "category": "front-runner"
                }
            ],
            "eventSkills": [
                {
                    "name": "Keeping the Lead",
                    "description": "Slightly increase ability to maintain the lead when leading by a large margin mid-race",
                    "category": "long"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "long"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "sakura_bakushin_o_r",
            "name": "Sakura Bakushin O",
            "character": "Sakura Bakushin O",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Sprint Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "sprint"
                },
                {
                    "name": "Sprint Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "sprint"
                },
                {
                    "name": "Huge Lead",
                    "description": "Slightly increase ability to maintain the lead when leading by a large margin early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Sprinting Gear",
                    "description": "Slightly increase acceleration in the final spurt when in a good position",
                    "category": "sprint"
                },
                {
                    "name": "Countermeasure",
                    "description": "Slightly increase ability to fight back when passed by another runner on the final corner",
                    "category": "general"
                },
                {
                    "name": "Intimidate",
                    "description": "Slightly reduce other runners' will to run when fighting for position mid-race",
                    "category": "general"
                },
                {
                    "name": "Frenzied Front Runners",
                    "description": "Moderately increase other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Flustered Front Runners",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Gap Closer",
                    "description": "Slightly increase acceleration when right behind the runner ahead mid-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "gold_city_r",
            "name": "Gold City",
            "character": "Gold City",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Sapporo Racecourse ○",
                    "description": "Moderately increase performance on Sapporo Racecourse",
                    "category": "course"
                },
                {
                    "name": "Watchful Eye",
                    "description": "Moderately widen field of view with heightened observation early-race",
                    "category": "general"
                },
                {
                    "name": "Acceleration",
                    "description": "Slightly increase acceleration when right behind the runner ahead mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "A Small Breather",
                    "description": "Slightly recover endurance mid-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "winning_ticket_r",
            "name": "Winning Ticket",
            "character": "Winning Ticket",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground",
                    "category": "surface"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Position Pilfer",
                    "description": "Slightly increase ability to break from the pack when in second or third at the mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Outer Swell",
                    "description": "Slightly increase velocity when passing another runner on the outside on the final corner",
                    "category": "late-surger"
                },
                {
                    "name": "Slick Surge",
                    "description": "Slightly increase velocity when passing on the inside on the final corner",
                    "category": "late-surger"
                }
            ],
            "eventSkills": [
                {
                    "name": "Late Surger Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "late-surger"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "guts-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "rice_shower_r",
            "name": "Rice Shower",
            "character": "Rice Shower",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Maverick ○",
                    "description": "Moderately increase performance when running alone",
                    "category": "general"
                },
                {
                    "name": "Kyoto Racecourse ○",
                    "description": "Moderately increase performance on Kyoto Racecourse",
                    "category": "course"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly recover endurance mid-race",
                    "category": "long"
                },
                {
                    "name": "Straight Descent",
                    "description": "Slightly increase velocity when going downhill",
                    "category": "general"
                },
                {
                    "name": "Highlander",
                    "description": "Significantly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                },
                {
                    "name": "Frenzied Pace Chasers",
                    "description": "Moderately increase other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Subdued Pace Chasers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Flustered Pace Chasers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Disorient",
                    "description": "Slightly narrow the field of view for other runners when close together",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground",
                    "category": "surface"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "haru_urara_r",
            "name": "Haru Urara",
            "character": "Haru Urara",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [],
            "eventSkills": [
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance over long distances",
                    "category": "long"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "guts-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "tazuna_hayakawa_r",
            "name": "Tazuna Hayakawa",
            "character": "Tazuna Hayakawa",
            "rarity": "R",
            "type": "Friend",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [],
            "eventSkills": [
                {
                    "name": "Focus",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "general"
                },
                {
                    "name": "Watchful Eye",
                    "description": "Moderately widen field of view with heightened observation early-race",
                    "category": "general"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase ability to maintain the lead when in the lead mid-race",
                    "category": "front-runner"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile",
                    "medium",
                    "long"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser",
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "balanced",
                    "support-focused"
                ]
            }
        },
        {
            "id": "daiwa_scarlet_r",
            "name": "Daiwa Scarlet",
            "character": "Daiwa Scarlet",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6,
                "skillPoints": 5
            },
            "supportHints": [
                {
                    "name": "Competitive Spirit ○",
                    "description": "Moderately increase ability to compete for position when fighting for position mid-race",
                    "category": "general"
                },
                {
                    "name": "Preferred Position",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "general"
                },
                {
                    "name": "Rosy Outlook",
                    "description": "Slightly increase ability to fight back when passed by another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase ability to break out of the pack on the final corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Shifting Gears",
                    "description": "Slightly increase acceleration when right behind the runner ahead on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly regain the will to accelerate after exhausting strength mid-race",
                    "category": "long"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "front-runner"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "hishi_amazon_r",
            "name": "Hishi Amazon",
            "character": "Hishi Amazon",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Pace Chaser Savvy ○",
                    "description": "Slightly increase acceleration early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "End Closer Savvy ○",
                    "description": "Slightly increase acceleration early-race",
                    "category": "end-closer"
                },
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly regain the will to accelerate after exhausting strength mid-race",
                    "category": "long"
                },
                {
                    "name": "End Closer Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "end-closer"
                },
                {
                    "name": "Straightaway Spurt",
                    "description": "Slightly increase velocity on a straight when chasing the runner ahead",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Hesitant End Closers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "biwa_hayahide_r",
            "name": "Biwa Hayahide",
            "character": "Biwa Hayahide",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Outer Post Proficiency ○",
                    "description": "Slightly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                },
                {
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance on Hanshin Racecourse",
                    "category": "course"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on wet ground",
                    "category": "surface"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Frenzied End Closers",
                    "description": "Moderately increase other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Inside Scoop",
                    "description": "Slightly increase acceleration on the final corner when positioned toward the inside",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "fine_motion_r",
            "name": "Fine Motion",
            "character": "Fine Motion",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Rosy Outlook",
                    "description": "Slightly increase ability to fight back when passed by another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Soft Step",
                    "description": "Slightly increase ability to avoid interference early-race",
                    "category": "general"
                },
                {
                    "name": "Medium Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "medium"
                },
                {
                    "name": "1,500,000 CC",
                    "description": "Slightly increase acceleration in the final spurt when in a bad position",
                    "category": "general"
                },
                {
                    "name": "Thunderbolt Step",
                    "description": "Slightly increase acceleration when right behind the runner ahead on the final corner",
                    "category": "general"
                },
                {
                    "name": "Frenzied Late Surgers",
                    "description": "Moderately increase other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Flustered Late Surgers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly increase ability to avoid interference when in a crowd mid-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "tamamo_cross_r",
            "name": "Tamamo Cross",
            "character": "Tamamo Cross",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Lay Low",
                    "description": "Slightly increase ability to avoid interference when positioned toward the rear early-race",
                    "category": "end-closer"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly increase ability to avoid interference when in a crowd mid-race",
                    "category": "general"
                },
                {
                    "name": "Mile Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "mile"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Late Surger Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "late-surger"
                },
                {
                    "name": "Opening Gambit",
                    "description": "Slightly increase acceleration right after the start",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on wet ground",
                    "category": "surface"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "agnes_digital_r",
            "name": "Agnes Digital",
            "character": "Agnes Digital",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Lay Low",
                    "description": "Slightly increase ability to avoid interference when positioned toward the rear early-race",
                    "category": "end-closer"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly increase ability to avoid interference when in a crowd mid-race",
                    "category": "general"
                },
                {
                    "name": "Mile Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "mile"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Late Surger Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "late-surger"
                },
                {
                    "name": "Opening Gambit",
                    "description": "Slightly increase acceleration right after the start",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on wet ground",
                    "category": "surface"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "air_groove_r",
            "name": "Air Groove",
            "character": "Air Groove",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Pace Strategy",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Groundwork",
                    "description": "Moderately increase acceleration early-race",
                    "category": "general"
                },
                {
                    "name": "Hesitant End Closers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Flustered End Closers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Go with the Flow",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
                    "category": "end-closer"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "guts-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "mayano_top_gun_r",
            "name": "Mayano Top Gun",
            "character": "Mayano Top Gun",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Non-Standard Distance ○",
                    "description": "Moderately increase performance over non-standard distances",
                    "category": "general"
                },
                {
                    "name": "Straightaway Recovery",
                    "description": "Slightly recover endurance on a straight",
                    "category": "general"
                },
                {
                    "name": "Corner Adept ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "general"
                },
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase ability to avoid interference when in a crowd mid-race",
                    "category": "general"
                },
                {
                    "name": "Go with the Flow",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
                    "category": "end-closer"
                }
            ],
            "eventSkills": [
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "manhattan_cafe_r",
            "name": "Manhattan Cafe",
            "character": "Manhattan Cafe",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on wet ground",
                    "category": "surface"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Passing Pro",
                    "description": "Slightly increase acceleration when passing another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Long Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "long"
                },
                {
                    "name": "Highlander",
                    "description": "Significantly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                },
                {
                    "name": "Stamina Eater",
                    "description": "Slightly reduce other runners' endurance when close together mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Non-Standard Distance ○",
                    "description": "Moderately increase performance over non-standard distances",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "mihono_bourbon_r",
            "name": "Mihono Bourbon",
            "character": "Mihono Bourbon",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Snowy Days ○",
                    "description": "Moderately increase performance in snowy weather",
                    "category": "weather"
                },
                {
                    "name": "Front Runner Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "front-runner"
                },
                {
                    "name": "Front Runner Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "front-runner"
                },
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                }
            ],
            "eventSkills": [
                {
                    "name": "Focus",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "power-focused",
                    "speed-focused"
                ]
            }
        },
        {
            "id": "mejiro_ryan_r",
            "name": "Mejiro Ryan",
            "character": "Mejiro Ryan",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on wet ground",
                    "category": "surface"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                }
            ],
            "eventSkills": [
                {
                    "name": "Pace Strategy",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "front-runner"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "yukino_bijin_r",
            "name": "Yukino Bijin",
            "character": "Yukino Bijin",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Winter Runner ○",
                    "description": "Moderately increase performance in winter weather",
                    "category": "weather"
                },
                {
                    "name": "Nakayama Racecourse ○",
                    "description": "Moderately increase performance on Nakayama Racecourse",
                    "category": "course"
                },
                {
                    "name": "Steadfast",
                    "description": "Slightly increase ability to fight back when passed by another runner on the final corner",
                    "category": "medium"
                },
                {
                    "name": "Medium Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "medium"
                }
            ],
            "eventSkills": [
                {
                    "name": "Corner Acceleration ○",
                    "description": "Slightly increase acceleration on a corner",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "guts-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "smart_falcon_r",
            "name": "Smart Falcon",
            "character": "Smart Falcon",
            "rarity": "R",
            "type": "Power",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 2,
                "power": 6,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Outer Post Proficiency ○",
                    "description": "Slightly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                },
                {
                    "name": "Oi Racecourse ○",
                    "description": "Moderately increase performance on Oi Racecourse",
                    "category": "course"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on wet ground",
                    "category": "surface"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Front Runner Savvy ○",
                    "description": "Slightly increase acceleration early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Corner Recovery ○",
                    "description": "Slightly recover endurance on a corner",
                    "category": "general"
                },
                {
                    "name": "Second Wind",
                    "description": "Slightly regain the will to accelerate after exhausting strength early-race",
                    "category": "general"
                },
                {
                    "name": "Restart",
                    "description": "Slightly increase acceleration when falling behind early-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Final Push",
                    "description": "Slightly increase acceleration in the final spurt when in a good position",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "power-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "eishin_flash_r",
            "name": "Eishin Flash",
            "character": "Eishin Flash",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Standard Distance ○",
                    "description": "Moderately increase performance over standard distances (multiples of 400m)",
                    "category": "general"
                },
                {
                    "name": "Late Surger Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "late-surger"
                },
                {
                    "name": "Late Surger Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "late-surger"
                },
                {
                    "name": "Straightaway Acceleration",
                    "description": "Slightly increase acceleration on a straight when chasing the runner ahead",
                    "category": "general"
                },
                {
                    "name": "Fighter",
                    "description": "Slightly increase ability to fight back when passed by another runner mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Target in Sight ○",
                    "description": "Slightly increase acceleration when right behind the runner ahead on the final corner",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "air_shakur_r",
            "name": "Air Shakur",
            "character": "Air Shakur",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6,
                "skillPoints": 5
            },
            "supportHints": [
                {
                    "name": "Levelheaded",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Pressure",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner mid-race",
                    "category": "medium"
                },
                {
                    "name": "Strategist",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "front-runner"
                }
            ],
            "eventSkills": [
                {
                    "name": "Pace Strategy",
                    "description": "Slightly increase positioning ability when positioned toward the front early-race",
                    "category": "front-runner"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "agnes_tachyon_r",
            "name": "Agnes Tachyon",
            "character": "Agnes Tachyon",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6,
                "skillPoints": 5
            },
            "supportHints": [
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "medium"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Medium Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "medium"
                },
                {
                    "name": "Tether",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner early-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Late Surger Savvy ○",
                    "description": "Slightly increase acceleration early-race",
                    "category": "late-surger"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "ines_fujin_r",
            "name": "Ines Fujin",
            "character": "Ines Fujin",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Moxie",
                    "description": "Slightly increase ability to maintain the lead when in the lead mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Steadfast",
                    "description": "Slightly increase ability to fight back when passed by another runner on the final corner",
                    "category": "medium"
                },
                {
                    "name": "Slipstream",
                    "description": "Slightly increase velocity when right behind the runner ahead early-race",
                    "category": "general"
                },
                {
                    "name": "Playtime's Over!",
                    "description": "Slightly increase acceleration when falling behind on the final corner",
                    "category": "general"
                },
                {
                    "name": "Speed Eater",
                    "description": "Slightly reduce other runners' speed when close together mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Fast-Paced",
                    "description": "Slightly increase velocity when not blocked early-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "guts-focused",
                    "speed-focused"
                ]
            }
        },
        {
            "id": "narita_taishin_r",
            "name": "Narita Taishin",
            "character": "Narita Taishin",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Lone Wolf",
                    "description": "Slightly increase velocity when running alone mid-race",
                    "category": "general"
                },
                {
                    "name": "Lay Low",
                    "description": "Slightly increase ability to avoid interference when positioned toward the rear early-race",
                    "category": "end-closer"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly increase ability to avoid interference when in a crowd mid-race",
                    "category": "general"
                },
                {
                    "name": "Standing By",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
                    "category": "end-closer"
                },
                {
                    "name": "Masterful Gambit",
                    "description": "Slightly increase acceleration when right behind the runner ahead on the final corner",
                    "category": "general"
                },
                {
                    "name": "End Closer Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "end-closer"
                },
                {
                    "name": "Intense Gaze",
                    "description": "Slightly increase ability to maintain the lead when in the lead early-race",
                    "category": "front-runner"
                }
            ],
            "eventSkills": [
                {
                    "name": "Pressure",
                    "description": "Slightly increase ability to maintain positioning when running side by side with another runner mid-race",
                    "category": "medium"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "nishino_flower_r",
            "name": "Nishino Flower",
            "character": "Nishino Flower",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance on Hanshin Racecourse",
                    "category": "course"
                },
                {
                    "name": "Standard Distance ○",
                    "description": "Moderately increase performance over standard distances (multiples of 400m)",
                    "category": "general"
                },
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground",
                    "category": "surface"
                },
                {
                    "name": "Pace Chaser Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase velocity when passing another runner on the outside mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "front-runner"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "biiko_pegasus_r",
            "name": "Biko Pegasus",
            "character": "Biko Pegasus",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Outer Post Proficiency ○",
                    "description": "Slightly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                },
                {
                    "name": "Wait-and-See",
                    "description": "Slightly increase positioning ability when positioned toward the rear early-race",
                    "category": "end-closer"
                },
                {
                    "name": "Gap Closer",
                    "description": "Slightly increase acceleration when right behind the runner ahead mid-race",
                    "category": "general"
                },
                {
                    "name": "Productive Plan",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase velocity when passing another runner on the outside mid-race",
                    "category": "general"
                },
                {
                    "name": "Meticulous Measures",
                    "description": "Slightly increase ability to avoid interference when positioned toward the front early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Stop Right There!",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Sprint Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "sprint"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "marvelous_sunday_r",
            "name": "Marvelous Sunday",
            "character": "Marvelous Sunday",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6,
                "skillPoints": 5
            },
            "supportHints": [
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase acceleration when falling behind mid-race",
                    "category": "general"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase ability to maintain the lead when in the lead mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Hesitant Front Runners",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Hesitant Pace Chasers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance on Hanshin Racecourse",
                    "category": "course"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "marvelous_sunday_r",
            "name": "Marvelous Sunday",
            "character": "Marvelous Sunday",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase ability to maintain velocity on a straight when close to other runners",
                    "category": "general"
                },
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase acceleration when falling behind mid-race",
                    "category": "general"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase ability to maintain the lead when in the lead mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Hesitant Front Runners",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                },
                {
                    "name": "Hesitant Pace Chasers",
                    "description": "Slightly reduce other runners' will to run when fighting for position on the final corner",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance on Hanshin Racecourse",
                    "category": "course"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "matikanefukukitaru_r",
            "name": "Matikanefukukitaru",
            "character": "Matikanefukukitaru",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Hakodate Racecourse ○",
                    "description": "Moderately increase performance on Hakodate Racecourse",
                    "category": "course"
                },
                {
                    "name": "Lucky Seven",
                    "description": "Moderately increase all stats when all stats are equal",
                    "category": "general"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly recover endurance when surrounded mid-race",
                    "category": "general"
                },
                {
                    "name": "A Small Breather",
                    "description": "Slightly decrease energy consumption mid-race",
                    "category": "general"
                },
                {
                    "name": "Triple 7s",
                    "description": "Moderately increase all stats when all stats are equal",
                    "category": "general"
                },
                {
                    "name": "Late Surger Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "late-surger"
                },
                {
                    "name": "Trick (Rear)",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "fuji_kiseki_r",
            "name": "Fuji Kiseki",
            "character": "Fuji Kiseki",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Summer Runner ○",
                    "description": "Moderately increase performance in summer weather",
                    "category": "weather"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Mile Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "mile"
                },
                {
                    "name": "Unyielding Spirit",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Trick (Front)",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "king_halo_r",
            "name": "King Halo",
            "character": "King Halo",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Outer Post Proficiency ○",
                    "description": "Moderately increase ability when starting from an outer gate",
                    "category": "general"
                },
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground conditions",
                    "category": "track-condition"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Corner Recovery ○",
                    "description": "Slightly recover endurance on a corner",
                    "category": "general"
                },
                {
                    "name": "Wait-and-See",
                    "description": "Slightly increase ability to decelerate before a corner when positioning yourself",
                    "category": "general"
                },
                {
                    "name": "Gap Closer",
                    "description": "Slightly increase positioning ability when trying to move up",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity during the homestretch",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "nice_nature_r",
            "name": "Nice Nature",
            "character": "Nice Nature",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Kokura Racecourse ○",
                    "description": "Moderately increase performance on Kokura Racecourse",
                    "category": "course"
                },
                {
                    "name": "Lay Low",
                    "description": "Slightly recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
                {
                    "name": "A Small Breather",
                    "description": "Slightly decrease energy consumption mid-race",
                    "category": "general"
                },
                {
                    "name": "Corner Acceleration ○",
                    "description": "Slightly increase acceleration on a corner",
                    "category": "general"
                },
                {
                    "name": "Go with the Flow",
                    "description": "Slightly increase velocity when the race pace is slow",
                    "category": "general"
                },
                {
                    "name": "Hesitant Late Surgers",
                    "description": "Slightly reduce other runners' will to run when fighting for position late-race",
                    "category": "general"
                },
                {
                    "name": "Murmur",
                    "description": "Slightly reduce other runners' will to run when close together mid-race",
                    "category": "general"
                },
                {
                    "name": "Sharp Gaze",
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase acceleration when falling behind mid-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "guts-focused",
                    "endurance"
                ]
            }
        },
        {
            "id": "mejiro_dober_r",
            "name": "Mejiro Dober",
            "character": "Mejiro Dober",
            "rarity": "R",
            "type": "Wit",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Kyoto Racecourse ○",
                    "description": "Moderately increase performance on Kyoto Racecourse",
                    "category": "course"
                },
                {
                    "name": "Sunny Days ○",
                    "description": "Moderately increase performance in sunny weather",
                    "category": "weather"
                },
                {
                    "name": "Late Surger Savvy ○",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "late-surger"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase velocity when the race pace is fast",
                    "category": "general"
                },
                {
                    "name": "Steadfast",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Unyielding Spirit",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "meisho_doto_r",
            "name": "Meisho Doto",
            "character": "Meisho Doto",
            "rarity": "R",
            "type": "Guts",
            "maxLevel": 40,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance over long distances",
                    "category": "long"
                },
                {
                    "name": "Non-Standard Distance ○",
                    "description": "Moderately increase performance over non-standard distances",
                    "category": "general"
                },
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground conditions",
                    "category": "track-condition"
                },
                {
                    "name": "Inner Post Proficiency ○",
                    "description": "Moderately increase ability when starting from an inner gate",
                    "category": "general"
                },
                {
                    "name": "Shake It Out",
                    "description": "Slightly reduce likelihood of losing will to run when surrounded",
                    "category": "general"
                },
                {
                    "name": "Late Surger Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "late-surger"
                },
                {
                    "name": "Hawkeye",
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Pace Chaser Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "pace-chaser"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "guts-focused",
                    "endurance"
                ]
            }
        },
        {
            "id": "satono_diamond_r",
            "name": "Satono Diamond",
            "character": "Satono Diamond",
            "rarity": "R",
            "type": "Stamina",
            "maxLevel": 40,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground",
                    "category": "track-condition"
                },
                {
                    "name": "Sunny Days ○",
                    "description": "Moderately increase performance in sunny weather",
                    "category": "track-condition"
                },
                {
                    "name": "A Small Breather",
                    "description": "Slightly recover endurance late-race (Late Surger)",
                    "category": "late-surger"
                },
                {
                    "name": "Medium Corners ○",
                    "description": "Slightly increase velocity on a corner (Medium)",
                    "category": "medium"
                },
                {
                    "name": "Studious",
                    "description": "Slightly widen field of view with heightened observation mid-race (Late Surger)",
                    "category": "late-surger"
                },
                {
                    "name": "Tether",
                    "description": "Slightly decrease velocity of runners ahead when positioned toward the back late-race (Medium)",
                    "category": "medium"
                },
                {
                    "name": "Flustered Front Runners",
                    "description": "Slightly increase fatigue for front runners mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Hesitant Front Runners",
                    "description": "Slightly decrease velocity of front runners late-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "medium",
                    "long"
                ],
                "styles": [
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "endurance"
                ]
            }
        },
        {
            "id": "kitasan_black_r",
            "name": "Kitasan Black",
            "character": "Kitasan Black",
            "rarity": "R",
            "type": "Speed",
            "maxLevel": 40,
            "statGain": {
                "speed": 6,
                "stamina": 0,
                "power": 2,
                "guts": 0,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Corner Recovery ○",
                    "description": "Slightly recover endurance on a corner with efficient turning",
                    "category": "general"
                },
                {
                    "name": "Straightaway Recovery ○",
                    "description": "Slightly recover endurance on a straight",
                    "category": "general"
                },
                {
                    "name": "Extra Tank",
                    "description": "Slightly regain the energy to run after exhausting strength (Long)",
                    "category": "long"
                },
                {
                    "name": "Corner Adept ○",
                    "description": "Slightly increase velocity on a corner with skilled turning",
                    "category": "general"
                },
                {
                    "name": "Long Corners ○",
                    "description": "Slightly increase velocity on a corner (Long)",
                    "category": "long"
                },
                {
                    "name": "Front Runner Straightaways ○",
                    "description": "Slightly increase velocity on a straight (Front Runner)",
                    "category": "front-runner"
                },
                {
                    "name": "Dodging Danger",
                    "description": "Moderately avoid becoming surrounded early-race (Front Runner)",
                    "category": "front-runner"
                },
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                }
            ],
            "eventSkills": [],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile",
                    "medium",
                    "long"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "balanced"
                ]
            }
        }
    ];

    // Helper functions for card management
    const SupportCardHelpers = {
        /**
         * Get all R support cards
         */
        getAll: function() {
            return R_SUPPORT_CARDS;
        },

        /**
         * Get support card by ID
         * @param {string} id - Card ID
         * @returns {Object|null} Support card or null if not found
         */
        getById: function(id) {
            return R_SUPPORT_CARDS.find(card => card.id === id) || null;
        },

        /**
         * Get support cards by type
         * @param {string} type - Card type (Speed, Stamina, Power, Guts, Wit, Friend)
         * @returns {Array} Array of matching support cards
         */
        getByType: function(type) {
            return R_SUPPORT_CARDS.filter(card => card.type === type);
        },

        /**
         * Get support cards by character
         * @param {string} character - Character name
         * @returns {Array} Array of matching support cards
         */
        getByCharacter: function(character) {
            return R_SUPPORT_CARDS.filter(card => card.character === character);
        },

        /**
         * Get support cards by max level
         * @param {number} maxLevel - Maximum level
         * @returns {Array} Array of matching support cards
         */
        getByMaxLevel: function(maxLevel) {
            return R_SUPPORT_CARDS.filter(card => card.maxLevel === maxLevel);
        },

        /**
         * Get support cards recommended for specific distance
         * @param {string} distance - Distance type (sprint, mile, medium, long)
         * @returns {Array} Array of matching support cards
         */
        getByDistance: function(distance) {
            return R_SUPPORT_CARDS.filter(card => 
                card.recommendedFor && card.recommendedFor.distances.includes(distance)
            );
        },

        /**
         * Get support cards recommended for specific running style
         * @param {string} style - Running style (front-runner, pace-chaser, late-surger, end-closer)
         * @returns {Array} Array of matching support cards
         */
        getByRunningStyle: function(style) {
            return R_SUPPORT_CARDS.filter(card => 
                card.recommendedFor && card.recommendedFor.styles.includes(style)
            );
        },

        /**
         * Get support cards with skill points bonus
         * @returns {Array} Array of support cards with skill points
         */
        getWithSkillPoints: function() {
            return R_SUPPORT_CARDS.filter(card => 
                card.statGain && card.statGain.skillPoints && card.statGain.skillPoints > 0
            );
        },

        /**
         * Search support cards by name
         * @param {string} query - Search query
         * @returns {Array} Array of matching support cards
         */
        searchByName: function(query) {
            const lowercaseQuery = query.toLowerCase();
            return R_SUPPORT_CARDS.filter(card => 
                card.name.toLowerCase().includes(lowercaseQuery) ||
                card.character.toLowerCase().includes(lowercaseQuery)
            );
        },

        /**
         * Get total count of R support cards
         * @returns {number} Total number of cards
         */
        getCount: function() {
            return R_SUPPORT_CARDS.length;
        },

        /**
         * Get unique character list
         * @returns {Array} Array of unique character names
         */
        getUniqueCharacters: function() {
            return [...new Set(R_SUPPORT_CARDS.map(card => card.character))].sort();
        },

        /**
         * Get unique types list
         * @returns {Array} Array of unique types
         */
        getUniqueTypes: function() {
            return [...new Set(R_SUPPORT_CARDS.map(card => card.type))].sort();
        },

        /**
         * Check if R support card exists by ID
         * @param {string} cardId - Card ID
         * @returns {boolean} True if card exists
         */
        hasRSupportCard: function(cardId) {
            return R_SUPPORT_CARDS.some(card => card.id === cardId);
        },

        /**
         * Get R support card by ID
         * @param {string} cardId - Card ID
         * @returns {Object|null} Support card or null if not found
         */
        getRSupportCard: function(cardId) {
            return R_SUPPORT_CARDS.find(card => card.id === cardId) || null;
        },

        /**
         * Get all R support cards
         * @returns {Array} Array of all R support cards
         */
        getAllRSupportCards: function() {
            return R_SUPPORT_CARDS;
        },

        /**
         * Get all R support card IDs
         * @returns {Array} Array of all R support card IDs
         */
        getAllRSupportCardIds: function() {
            return R_SUPPORT_CARDS.map(card => card.id);
        },

        /**
         * Get R support cards by type
         * @param {string} type - Card type
         * @returns {Array} Array of matching R support cards
         */
        getRSupportCardsByType: function(type) {
            return R_SUPPORT_CARDS.filter(card => card.type === type);
        },

        /**
         * Get R support cards by character
         * @param {string} character - Character name
         * @returns {Array} Array of matching R support cards
         */
        getRSupportCardsByCharacter: function(character) {
            return R_SUPPORT_CARDS.filter(card => card.character === character);
        }
    };

    // Module exports for different environments
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        // Node.js environment
        module.exports = {
            R_SUPPORT_CARDS: R_SUPPORT_CARDS,
            SupportCardHelpers: SupportCardHelpers
        };
    } else {
        // Browser environment
        console.log('R Module: Executing browser export logic');
        if (typeof window !== 'undefined') {
            console.log('R Module: Attaching to window object');
            window.R_SUPPORT_CARDS = R_SUPPORT_CARDS;
            window.RSupportCards = SupportCardHelpers;
            console.log('R Module: Successfully attached RSupportCards to window');
        } else if (typeof global !== 'undefined') {
            console.log('R Module: Attaching to global object');
            global.R_SUPPORT_CARDS = R_SUPPORT_CARDS;
            global.RSupportCards = SupportCardHelpers;
        }
    }

})(typeof window !== 'undefined' ? window : this);