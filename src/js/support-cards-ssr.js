/**
 * SSR Support Cards Module
 * Contains all SSR rarity support card data with clean metadata
 * Compatible with browser and Node.js environments
 */

(function(global) {
    'use strict';
    console.log('SSR Module: Starting to load...');

    const SSR_SUPPORT_CARDS = [
        {
            "id": "mejiro_palmer_ssr",
            "name": "Mejiro Palmer",
            "character": "Mejiro Palmer",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
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
                    "name": "Front Runner Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "front-runner"
                },
                {
                    "name": "Pace Strategy",
                    "description": "Slightly recover endurance when passed by another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Front Runner Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "front-runner"
                },
                {
                    "name": "Keeping the Lead",
                    "description": "Slightly increase ability to maintain the lead when leading by a large margin mid-race",
                    "category": "long"
                },
                {
                    "name": "Vanguard Spirit",
                    "description": "Increase ability to maintain the lead when leading by a large margin mid-race",
                    "category": "long"
                },
                {
                    "name": "Lone Wolf",
                    "description": "Moderately increase performance when no other runners have the heart of a lone wolf",
                    "category": "general"
                },
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
            "id": "twin_turbo_ssr",
            "name": "Twin Turbo",
            "character": "Twin Turbo",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "name": "Taking the Lead",
                    "description": "Increase ability to go to the front early-race",
                    "category": "front-runner"
                },
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
            "id": "oguri_cap_ssr",
            "name": "Oguri Cap",
            "character": "Oguri Cap",
            "rarity": "SSR",
            "type": "Power",
            "maxLevel": 50,
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
                    "name": "Stamina to Spare",
                    "description": "Slightly decrease fatigue early-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Outer Swell",
                    "description": "Slightly increase velocity when passing another runner on the outside on the final corner",
                    "category": "late-surger"
                },
                {
                    "name": "Furious Feat",
                    "description": "Increase passing ability when positioned toward the back late-race",
                    "category": "mile"
                },
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
            "id": "special_week_ssr",
            "name": "Special Week",
            "character": "Special Week",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "name": "Shake It Out",
                    "description": "Slightly recover endurance after activating many skills late-race",
                    "category": "general"
                },
                {
                    "name": "Hydrate",
                    "description": "Slightly recover endurance mid-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "Gourmand",
                    "description": "Recover endurance mid-race",
                    "category": "pace-chaser"
                },
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
            "id": "special_week_guts_ssr",
            "name": "Special Week (Guts)",
            "character": "Special Week",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
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
                    "name": "Soft Step",
                    "description": "Slightly decrease fatigue when moving sideways",
                    "category": "medium"
                },
                {
                    "name": "Straight Descent",
                    "description": "Slightly improve running on a downhill",
                    "category": "pace-chaser"
                },
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity in the last spurt",
                    "category": "general"
                },
                {
                    "name": "In Body and Mind",
                    "description": "Increase velocity in the last spurt",
                    "category": "general"
                },
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
                    "guts-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "silence_suzuka_ssr",
            "name": "Silence Suzuka",
            "character": "Silence Suzuka",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "name": "Restart",
                    "description": "Slightly startle runners ahead when failing to get a lead early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                },
                {
                    "name": "Unrestrained",
                    "description": "Increase ability to keep the lead on the final corner",
                    "category": "front-runner"
                },
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
            "id": "tokai_teio_ssr",
            "name": "Tokai Teio",
            "character": "Tokai Teio",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "name": "Rushing Gale!",
                    "description": "Increase acceleration on a straight",
                    "category": "general"
                },
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
            "id": "gold_ship_ssr",
            "name": "Gold Ship",
            "character": "Gold Ship",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
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
                },
                {
                    "name": "Inside Scoop",
                    "description": "Slightly increase velocity when near the inner rail on the final corner",
                    "category": "long"
                },
                {
                    "name": "Pressure",
                    "description": "Slightly increase velocity when passing another runner late-race",
                    "category": "long"
                },
                {
                    "name": "Uma Stan",
                    "description": "Slightly increase velocity when close to many runners",
                    "category": "general"
                },
                {
                    "name": "Straightaway Spurt",
                    "description": "Slightly increase acceleration on a straight in the last spurt",
                    "category": "end-closer"
                },
                {
                    "name": "Highlander",
                    "description": "Slightly improve running on an uphill",
                    "category": "general"
                },
                {
                    "name": "Groundwork",
                    "description": "Slightly increase acceleration after activating many skills early-race",
                    "category": "general"
                },
                {
                    "name": "I Can See Right Through You",
                    "description": "Slightly widen field of view with situational awareness when moving sideways",
                    "category": "end-closer"
                },
                {
                    "name": "Strategist",
                    "description": "Slightly widen field of view when positioned toward the back late-race",
                    "category": "end-closer"
                },
                {
                    "name": "Intense Gaze",
                    "description": "Slightly unnerve runners in focus late-race",
                    "category": "end-closer"
                },
                {
                    "name": "Smoke Screen",
                    "description": "Moderately narrow the field of view for runners ahead late-race",
                    "category": "long"
                }
            ],
            "eventSkills": [
                {
                    "name": "Early Gambit",
                    "description": "Chaser・If you're in the second half of the pack at a random point during the Middle Leg, your speed will slightly increase",
                    "category": "general"
                },
                {
                    "name": "End Closer Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "end-closer"
                },
                {
                    "name": "Corner Connoisseur",
                    "description": "Increase acceleration on a corner with masterful turning",
                    "category": "general"
                },
                {
                    "name": "Questionable Strategy",
                    "description": "Your speed will increase in the second half of the race, but sometimes you will also become very tired",
                    "category": "general"
                },
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
            "id": "vodka_ssr",
            "name": "Vodka",
            "character": "Vodka",
            "rarity": "SSR",
            "type": "Power",
            "maxLevel": 50,
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
                    "name": "Updrafters",
                    "description": "Slightly increase passing ability when positioned toward the back late-race",
                    "category": "mile"
                },
                {
                    "name": "Breath of Fresh Air",
                    "description": "Recover endurance on a straight",
                    "category": "general"
                },
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
            "id": "grass_wonder_ssr",
            "name": "Grass Wonder",
            "character": "Grass Wonder",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
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
                    "name": "Tether",
                    "description": "Slightly decrease velocity of runners ahead when positioned toward the back late-race",
                    "category": "medium"
                },
                {
                    "name": "Late Surger Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "late-surger"
                },
                {
                    "name": "Furious Feat",
                    "description": "Increase passing ability when positioned toward the back late-race",
                    "category": "mile"
                },
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
            "id": "fine_motion_ssr",
            "name": "Fine Motion",
            "character": "Fine Motion",
            "rarity": "SSR",
            "type": "Wit",
            "maxLevel": 50,
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
                    "name": "Right-Handed ○",
                    "description": "Moderately increase performance on right-handed tracks",
                    "category": "track"
                },
                {
                    "name": "Fall Runner ○",
                    "description": "Moderately increase performance in fall",
                    "category": "season"
                },
                {
                    "name": "Outer Post Proficiency ○",
                    "description": "Moderately increase performance in brackets 6–8",
                    "category": "general"
                },
                {
                    "name": "Straightaway Acceleration",
                    "description": "Slightly increase acceleration on a straight",
                    "category": "general"
                },
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase maneuverability when the way ahead is blocked in the last spurt",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Speed Star",
                    "description": "Increase ability to break out of the pack on the final corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase ability to break out of the pack on the final corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Corner Adept ○",
                    "description": "Slightly increase velocity on a corner with skilled turning",
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
                    "wit-focused",
                    "balanced"
                ]
            }
        },
        {
            "id": "seiun_sky_ssr",
            "name": "Seiun Sky",
            "character": "Seiun Sky",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
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
                    "description": "Moderately increase performance when 4th favorite or below",
                    "category": "general"
                },
                {
                    "name": "Inner Post Proficiency ○",
                    "description": "Moderately increase performance in brackets 1–3",
                    "category": "general"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase velocity after activating many skills mid-race",
                    "category": "general"
                },
                {
                    "name": "Hesitant Pace Chasers",
                    "description": "Slightly decrease velocity of pace chasers late-race",
                    "category": "general"
                },
                {
                    "name": "Frenzied Late Surgers",
                    "description": "Increase time needed for late surgers to calm down when they become rushed",
                    "category": "general"
                },
                {
                    "name": "Trick (Front)",
                    "description": "Slightly increase fatigue for rushed runners behind when positioned toward the front mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Dodging Danger",
                    "description": "Moderately avoid becoming surrounded early-race",
                    "category": "front-runner"
                },
                {
                    "name": "Second Wind",
                    "description": "Slightly increase acceleration when positioned toward the back mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Fast-Paced",
                    "description": "Slightly increase ability to go to the front mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Escape Artist",
                    "description": "Increase ability to go to the front mid-race",
                    "category": "front-runner"
                },
                {
                    "name": "Keeping the Lead",
                    "description": "Slightly increase ability to maintain the lead when leading by a large margin mid-race",
                    "category": "long"
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
            "id": "mejiro_mcqueen_ssr",
            "name": "Mejiro McQueen",
            "character": "Mejiro McQueen",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Kyoto Racecourse ○",
                    "description": "Moderately increase performance at Kyoto Racecourse",
                    "category": "track"
                },
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
                    "name": "Extra Tank",
                    "description": "Slightly regain the energy to run after exhausting strength",
                    "category": "long"
                }
            ],
            "eventSkills": [
                {
                    "name": "Cooldown",
                    "description": "Decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
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
            "id": "tazuna_hayakawa_ssr",
            "name": "Tazuna Hayakawa",
            "character": "Tazuna Hayakawa",
            "rarity": "SSR",
            "type": "Friend",
            "maxLevel": 50,
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
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                },
                {
                    "name": "Concentration",
                    "description": "Decrease time lost to slow starts",
                    "category": "general"
                },
                {
                    "name": "Watchful Eye",
                    "description": "Slightly decrease fatigue when positioned toward the back early-race",
                    "category": "mile"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase velocity after activating many skills mid-race",
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
                    "front-runner",
                    "pace-chaser",
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "balanced",
                    "energy-efficient"
                ]
            }
        },
        {
            "id": "ines_fujin_ssr",
            "name": "Ines Fujin",
            "character": "Ines Fujin",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
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
                    "description": "Slightly reduce fatigue on an uphill",
                    "category": "front-runner"
                },
                {
                    "name": "Steadfast",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Slipstream",
                    "description": "Slightly decrease wind resistance when following directly behind another runner",
                    "category": "general"
                },
                {
                    "name": "Playtime's Over!",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "general"
                },
                {
                    "name": "Speed Eater",
                    "description": "Slightly reduce other runners' endurance when close together mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Restless",
                    "description": "Reduce fatigue on an uphill",
                    "category": "front-runner"
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
                    "guts-focused",
                    "front-runner"
                ]
            }
        },
        {
            "id": "winning_ticket_ssr",
            "name": "Winning Ticket",
            "character": "Winning Ticket",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
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
                    "description": "Moderately increase performance on firm track conditions",
                    "category": "track-condition"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Position Pilfer",
                    "description": "Slightly increase positioning ability when trying to move up",
                    "category": "general"
                },
                {
                    "name": "Outer Swell",
                    "description": "Slightly increase ability when starting from an outer gate",
                    "category": "general"
                },
                {
                    "name": "Slick Surge",
                    "description": "Slightly increase acceleration when positioning changes rapidly",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Fighter",
                    "description": "Slightly increase passing ability",
                    "category": "late-surger"
                },
                {
                    "name": "On Your Left!",
                    "description": "Increase acceleration late-race",
                    "category": "late-surger"
                },
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
                    "late-surger"
                ]
            }
        },
        {
            "id": "air_shakur_ssr",
            "name": "Air Shakur",
            "character": "Air Shakur",
            "rarity": "SSR",
            "type": "Wit",
            "maxLevel": 50,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Levelheaded",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Pressure",
                    "description": "Slightly increase ability to break out of the pack when trying to move up",
                    "category": "general"
                },
                {
                    "name": "Strategist",
                    "description": "Slightly increase positioning ability when positioned toward the back mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Intense Gaze",
                    "description": "Slightly unnerve runners in focus late-race",
                    "category": "end-closer"
                },
                {
                    "name": "Straightaway Spurt",
                    "description": "Slightly increase acceleration on a straight in the last spurt",
                    "category": "end-closer"
                },
                {
                    "name": "Unyielding",
                    "description": "Increase ability to fight back when passed by another runner on the final corner",
                    "category": "medium"
                },
                {
                    "name": "Pace Strategy",
                    "description": "Slightly recover endurance when passed by another runner mid-race",
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
                    "wit-focused",
                    "skill-points"
                ]
            }
        },
        {
            "id": "gold_city_ssr",
            "name": "Gold City",
            "character": "Gold City",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Acceleration",
                    "description": "Slightly increase acceleration when falling behind",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Go with the Flow",
                    "description": "Moderately increase navigation late-race",
                    "category": "general"
                },
                {
                    "name": "Keen Eye",
                    "description": "Decrease fatigue when positioned toward the back early-race",
                    "category": "mile"
                },
                {
                    "name": "A Small Breather",
                    "description": "Slightly recover endurance late-race",
                    "category": "late-surger"
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
                    "speed-focused",
                    "navigation"
                ]
            }
        },
        {
            "id": "sakura_bakushin_o_ssr",
            "name": "Sakura Bakushin O",
            "character": "Sakura Bakushin O",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "description": "Slightly increase ability to maintain the lead when leading by a large margin late-race",
                    "category": "front-runner"
                },
                {
                    "name": "Sprinting Gear",
                    "description": "Slightly increase velocity when the race pace is fast",
                    "category": "sprint"
                },
                {
                    "name": "Countermeasure",
                    "description": "Slightly increase passing ability when positioned toward the front mid-race",
                    "category": "sprint"
                },
                {
                    "name": "Intimidate",
                    "description": "Slightly reduce other runners' will to run when close together late-race",
                    "category": "general"
                },
                {
                    "name": "Frenzied Front Runners",
                    "description": "Increase time needed for front runners to calm down when they become rushed",
                    "category": "general"
                },
                {
                    "name": "Flustered Front Runners",
                    "description": "Slightly increase fatigue for front runners mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Turbo Sprint",
                    "description": "Increase acceleration on a straight",
                    "category": "sprint"
                },
                {
                    "name": "Gap Closer",
                    "description": "Slightly increase spurting ability when positioned toward the back late-race",
                    "category": "sprint"
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
                    "sprint-specialist"
                ]
            }
        },
        {
            "id": "super_creek_ssr",
            "name": "Super Creek",
            "character": "Super Creek",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
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
                    "description": "Moderately increase performance on firm track conditions",
                    "category": "track-condition"
                },
                {
                    "name": "Corner Recovery ○",
                    "description": "Slightly recover endurance on a corner",
                    "category": "general"
                },
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase acceleration when falling behind mid-race",
                    "category": "general"
                },
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity during the homestretch",
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
                    "name": "Swinging Maestro",
                    "description": "Recover endurance on a corner with efficient turning",
                    "category": "general"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "long",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "endurance-management"
                ]
            }
        },
        {
            "id": "smart_falcon_ssr",
            "name": "Smart Falcon",
            "character": "Smart Falcon",
            "rarity": "SSR",
            "type": "Power",
            "maxLevel": 50,
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
                    "description": "Moderately increase ability when starting from an outer gate",
                    "category": "general"
                },
                {
                    "name": "Oi Racecourse ○",
                    "description": "Moderately increase performance on Oi Racecourse",
                    "category": "course"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "track-condition"
                },
                {
                    "name": "Cloudy Days ○",
                    "description": "Moderately increase performance in cloudy weather",
                    "category": "weather"
                },
                {
                    "name": "Front Runner Savvy ○",
                    "description": "Moderately increase ability to get into a good position",
                    "category": "front-runner"
                },
                {
                    "name": "Corner Recovery ○",
                    "description": "Slightly recover endurance on a corner",
                    "category": "general"
                },
                {
                    "name": "Second Wind",
                    "description": "Slightly recover endurance when falling behind late-race",
                    "category": "general"
                },
                {
                    "name": "Restart",
                    "description": "Slightly increase acceleration when falling behind",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Groundwork",
                    "description": "Slightly increase acceleration after activating many skills early-race",
                    "category": "general"
                },
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                },
                {
                    "name": "Top Pick",
                    "description": "Slightly increase velocity when engaged in a challenge mid-race",
                    "category": "dirt"
                },
                {
                    "name": "Prudent Positioning",
                    "description": "Moderately increase navigation early-race",
                    "category": "general"
                },
                {
                    "name": "Center Stage",
                    "description": "Increase navigation early-race",
                    "category": "general"
                },
                {
                    "name": "Final Push",
                    "description": "Slightly increase ability to keep the lead on the final corner",
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
                    "power-focused",
                    "front-runner"
                ]
            }
        },
        {
            "id": "nishino_flower_ssr",
            "name": "Nishino Flower",
            "character": "Nishino Flower",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "description": "Moderately increase performance over standard distances",
                    "category": "general"
                },
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm track conditions",
                    "category": "track-condition"
                },
                {
                    "name": "Pace Chaser Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "pace-chaser"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase passing ability when positioned toward the back late-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Countermeasure",
                    "description": "Slightly increase passing ability when positioned toward the front mid-race",
                    "category": "sprint"
                },
                {
                    "name": "Beeline Burst",
                    "description": "Increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
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
                    "pace-chaser"
                ]
            }
        },
        {
            "id": "haru_urara_ssr",
            "name": "Haru Urara",
            "character": "Haru Urara",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
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
                    "description": "Moderately increase performance when 4th favorite or below",
                    "category": "general"
                },
                {
                    "name": "Underdog Spirit",
                    "description": "Slightly increase will to run when positioned toward the back",
                    "category": "general"
                },
                {
                    "name": "Persistence",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Unruffled",
                    "description": "Recover endurance when surrounded mid-race",
                    "category": "general"
                },
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance when 4th favorite or below",
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
                    "guts-focused",
                    "underdog"
                ]
            }
        },
        {
            "id": "biiko_pegasus_ssr",
            "name": "Biko Pegasus",
            "character": "Biko Pegasus",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
                    "name": "Wait-and-See",
                    "description": "Slightly increase positioning ability when holding back early-race",
                    "category": "general"
                },
                {
                    "name": "Gap Closer",
                    "description": "Slightly increase acceleration when trying to close a gap",
                    "category": "general"
                },
                {
                    "name": "Productive Plan",
                    "description": "Slightly increase ability to execute tactical plans",
                    "category": "general"
                },
                {
                    "name": "Updrafters",
                    "description": "Slightly increase passing ability when positioned toward the back late-race",
                    "category": "general"
                },
                {
                    "name": "Meticulous Measures",
                    "description": "Slightly increase positioning ability when calculating optimal timing",
                    "category": "general"
                },
                {
                    "name": "Stop Right There!",
                    "description": "Slightly reduce other runners' acceleration when close together late-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Plan X",
                    "description": "Increase passing ability when positioned toward the front mid-race",
                    "category": "sprint"
                },
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
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "tactical"
                ]
            }
        },
        {
            "id": "tazuna_hayakawa_ssr",
            "name": "Tazuna Hayakawa",
            "character": "Tazuna Hayakawa",
            "rarity": "SSR",
            "type": "Friend",
            "maxLevel": 50,
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
                    "description": "Slightly decrease time lost to slow starts",
                    "category": "general"
                },
                {
                    "name": "Concentration",
                    "description": "Decrease time lost to slow starts",
                    "category": "general"
                },
                {
                    "name": "Watchful Eye",
                    "description": "Slightly decrease fatigue when positioned toward the back early-race",
                    "category": "mile"
                },
                {
                    "name": "Tail Held High",
                    "description": "Slightly increase velocity after activating many skills mid-race",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "all"
                ],
                "styles": [
                    "all"
                ],
                "characterTypes": [
                    "friend-support",
                    "energy-management"
                ]
            }
        },
        {
            "id": "mejiro_mcqueen_ssr",
            "name": "Mejiro McQueen",
            "character": "Mejiro McQueen",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
            "statGain": {
                "speed": 0,
                "stamina": 6,
                "power": 0,
                "guts": 2,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Kyoto Racecourse ○",
                    "description": "Moderately increase performance on Kyoto Racecourse",
                    "category": "course"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "track-condition"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly decrease fatigue early-race",
                    "category": "general"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
                {
                    "name": "Extra Tank",
                    "description": "Slightly increase endurance recovery late-race",
                    "category": "general"
                },
                {
                    "name": "Corner Adept ○",
                    "description": "Slightly increase velocity on a corner with skilled turning",
                    "category": "general"
                },
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "general"
                },
                {
                    "name": "Inside Scoop",
                    "description": "Slightly increase acceleration when trying to move up from the inside",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Cooldown",
                    "description": "Decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
                {
                    "name": "Early Lead",
                    "description": "Slightly increase ability to go to the front early-race",
                    "category": "front-runner"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "long",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "wet-conditions"
                ]
            }
        },
        {
            "id": "rice_shower_ssr",
            "name": "Rice Shower",
            "character": "Rice Shower",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
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
                    "description": "Moderately increase performance when running alone in the lead",
                    "category": "general"
                },
                {
                    "name": "Kyoto Racecourse ○",
                    "description": "Moderately increase performance on Kyoto Racecourse",
                    "category": "course"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight",
                    "category": "long"
                },
                {
                    "name": "Straight Descent",
                    "description": "Slightly improve running on a downhill",
                    "category": "general"
                },
                {
                    "name": "Highlander",
                    "description": "Significantly increase acceleration right after the start if the runner starts in an outer gate",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Extra Tank",
                    "description": "Slightly regain the energy to run after exhausting strength",
                    "category": "long"
                },
                {
                    "name": "Adrenaline Rush",
                    "description": "Regain the energy to run after exhausting strength",
                    "category": "long"
                },
                {
                    "name": "Firm Conditions ○",
                    "description": "Moderately increase performance on firm ground",
                    "category": "track-condition"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "long",
                    "medium"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "endurance-management"
                ]
            }
        },
        {
            "id": "matikanetannhauser_ssr",
            "name": "Matikanetannhauser",
            "character": "Matikanetannhauser",
            "rarity": "SSR",
            "type": "Guts",
            "maxLevel": 50,
            "statGain": {
                "speed": 1,
                "stamina": 0,
                "power": 1,
                "guts": 6,
                "wit": 0
            },
            "supportHints": [
                {
                    "name": "Lay Low",
                    "description": "Slightly recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
                {
                    "name": "Pace Strategy",
                    "description": "Slightly recover endurance when passed by another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Deep Breaths",
                    "description": "Slightly decrease fatigue by taking a breather upon entering a straight (Long)",
                    "category": "long"
                },
                {
                    "name": "Steadfast",
                    "description": "Slightly increase ability to fight back when passed by another runner on the final corner (Medium)",
                    "category": "medium"
                },
                {
                    "name": "Fighter",
                    "description": "Slightly increase passing ability (Late Surger)",
                    "category": "late-surger"
                }
            ],
            "eventSkills": [
                {
                    "name": "Unruffled",
                    "description": "Recover endurance when surrounded mid-race",
                    "category": "general"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly recover endurance when surrounded mid-race",
                    "category": "general"
                },
                {
                    "name": "Subdued Front Runners",
                    "description": "Slightly increase fatigue for front runners early-race",
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
                    "guts-focused",
                    "stamina-management"
                ]
            }
        },
        {
            "id": "satono_diamond_ssr",
            "name": "Satono Diamond",
            "character": "Satono Diamond",
            "rarity": "SSR",
            "type": "Stamina",
            "maxLevel": 50,
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
                    "name": "Iron Will",
                    "description": "Recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
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
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "endurance"
                ]
            }
        },
        {
            "id": "kitasan_black_ssr",
            "name": "Kitasan Black",
            "character": "Kitasan Black",
            "rarity": "SSR",
            "type": "Speed",
            "maxLevel": 50,
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
            "eventSkills": [
                {
                    "name": "Straightaway Adept ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Professor of Curvature",
                    "description": "Increase velocity on a corner with skilled turning",
                    "category": "general"
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
         * Get all SSR support cards
         */
        getAll: function() {
            return SSR_SUPPORT_CARDS;
        },

        /**
         * Get support card by ID
         * @param {string} id - Card ID
         * @returns {Object|null} Support card or null if not found
         */
        getById: function(id) {
            return SSR_SUPPORT_CARDS.find(card => card.id === id) || null;
        },

        /**
         * Get support cards by type
         * @param {string} type - Card type (Speed, Stamina, Power, Guts, Wit, Friend)
         * @returns {Array} Array of matching support cards
         */
        getByType: function(type) {
            return SSR_SUPPORT_CARDS.filter(card => card.type === type);
        },

        /**
         * Get support cards by character
         * @param {string} character - Character name
         * @returns {Array} Array of matching support cards
         */
        getByCharacter: function(character) {
            return SSR_SUPPORT_CARDS.filter(card => card.character === character);
        },

        /**
         * Get support cards by max level
         * @param {number} maxLevel - Maximum level
         * @returns {Array} Array of matching support cards
         */
        getByMaxLevel: function(maxLevel) {
            return SSR_SUPPORT_CARDS.filter(card => card.maxLevel === maxLevel);
        },

        /**
         * Get support cards recommended for specific distance
         * @param {string} distance - Distance type (sprint, mile, medium, long)
         * @returns {Array} Array of matching support cards
         */
        getByDistance: function(distance) {
            return SSR_SUPPORT_CARDS.filter(card => 
                card.recommendedFor && card.recommendedFor.distances.includes(distance)
            );
        },

        /**
         * Get support cards recommended for specific running style
         * @param {string} style - Running style (front-runner, pace-chaser, late-surger, end-closer)
         * @returns {Array} Array of matching support cards
         */
        getByRunningStyle: function(style) {
            return SSR_SUPPORT_CARDS.filter(card => 
                card.recommendedFor && card.recommendedFor.styles.includes(style)
            );
        },

        /**
         * Get support cards with skill points bonus
         * @returns {Array} Array of support cards with skill points
         */
        getWithSkillPoints: function() {
            return SSR_SUPPORT_CARDS.filter(card => 
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
            return SSR_SUPPORT_CARDS.filter(card => 
                card.name.toLowerCase().includes(lowercaseQuery) ||
                card.character.toLowerCase().includes(lowercaseQuery)
            );
        },

        /**
         * Get total count of SSR support cards
         * @returns {number} Total number of cards
         */
        getCount: function() {
            return SSR_SUPPORT_CARDS.length;
        },

        /**
         * Get unique character list
         * @returns {Array} Array of unique character names
         */
        getUniqueCharacters: function() {
            return [...new Set(SSR_SUPPORT_CARDS.map(card => card.character))].sort();
        },

        /**
         * Get unique types list
         * @returns {Array} Array of unique types
         */
        getUniqueTypes: function() {
            return [...new Set(SSR_SUPPORT_CARDS.map(card => card.type))].sort();
        },

        /**
         * Check if SSR support card exists
         * @param {string} cardId - Card ID
         * @returns {boolean} True if card exists
         */
        hasSSRSupportCard: function(cardId) {
            return SSR_SUPPORT_CARDS.some(card => card.id === cardId);
        },

        /**
         * Get SSR support card by ID
         * @param {string} cardId - Card ID
         * @returns {Object|null} Support card or null if not found
         */
        getSSRSupportCard: function(cardId) {
            return SSR_SUPPORT_CARDS.find(card => card.id === cardId) || null;
        },

        /**
         * Get all SSR support cards
         * @returns {Array} Array of all SSR support cards
         */
        getAllSSRSupportCards: function() {
            return SSR_SUPPORT_CARDS;
        },

        /**
         * Get all SSR support card IDs
         * @returns {Array} Array of all SSR support card IDs
         */
        getAllSSRSupportCardIds: function() {
            return SSR_SUPPORT_CARDS.map(card => card.id);
        },

        /**
         * Get SSR support cards by type
         * @param {string} type - Card type (Speed, Stamina, Power, Guts, Wit, Friend)
         * @returns {Array} Array of matching SSR support cards
         */
        getSSRSupportCardsByType: function(type) {
            return SSR_SUPPORT_CARDS.filter(card => card.type === type);
        },

        /**
         * Get SSR support cards by character
         * @param {string} character - Character name
         * @returns {Array} Array of matching SSR support cards
         */
        getSSRSupportCardsByCharacter: function(character) {
            return SSR_SUPPORT_CARDS.filter(card => card.character === character);
        }
    };

    // Module exports for different environments
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        // Node.js environment
        module.exports = {
            SSR_SUPPORT_CARDS: SSR_SUPPORT_CARDS,
            SupportCardHelpers: SupportCardHelpers
        };
    } else {
        // Browser environment
        console.log('SSR Module: Executing browser export logic');
        if (typeof window !== 'undefined') {
            console.log('SSR Module: Attaching to window object');
            window.SSR_SUPPORT_CARDS = SSR_SUPPORT_CARDS;
            window.SSRSupportCards = SupportCardHelpers;
            console.log('SSR Module: Successfully attached SSRSupportCards to window');
        } else if (typeof global !== 'undefined') {
            console.log('SSR Module: Attaching to global object');
            global.SSR_SUPPORT_CARDS = SSR_SUPPORT_CARDS;
            global.SSRSupportCards = SupportCardHelpers;
        }
    }

})(typeof window !== 'undefined' ? window : this);