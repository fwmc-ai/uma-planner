/**
 * SR Support Cards Module
 * Contains all SR rarity support card data with clean metadata
 * Compatible with browser and Node.js environments
 */

(function(global) {
    'use strict';
    console.log('SR Module: Starting to load...');

    const SR_SUPPORT_CARDS = [
        {
            "id": "aoi_kiryuin_sr",
            "name": "Aoi Kiryuin",
            "character": "Aoi Kiryuin",
            "rarity": "SR",
            "type": "Friend",
            "maxLevel": 45,
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
                    "name": "Subdued Front Runners",
                    "description": "Reduce other runners' will to run when fighting for position",
                    "category": "general"
                },
                {
                    "name": "Maverick ○",
                    "description": "Moderately increase performance when running alone in the lead",
                    "category": "general"
                },
                {
                    "name": "Hesitant End Closers",
                    "description": "Slightly decrease velocity of end closers late-race",
                    "category": "general"
                },
                {
                    "name": "Lay Low",
                    "description": "Slightly recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
                {
                    "name": "Shake It Out",
                    "description": "Slightly reduce likelihood of losing will to run when surrounded",
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
            "id": "ikuno_dictus_sr",
            "name": "Ikuno Dictus",
            "character": "Ikuno Dictus",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
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
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Studious",
                    "description": "Slightly increase wisdom training effectiveness",
                    "category": "wit"
                },
                {
                    "name": "Sharp Gaze",
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Frenzied Front Runners",
                    "description": "Increase time needed for front runners to calm down when they become rushed",
                    "category": "general"
                },
                {
                    "name": "Frenzied End Closers",
                    "description": "Increase time needed for end closers to calm down when they become rushed",
                    "category": "general"
                },
                {
                    "name": "Trick (Rear)",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
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
                    "skill-points"
                ]
            }
        },
        {
            "id": "daitaku_helios_sr",
            "name": "Daitaku Helios",
            "character": "Daitaku Helios",
            "rarity": "SR",
            "type": "Power",
            "maxLevel": 45,
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
                    "category": "general"
                },
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase acceleration when falling behind mid-race",
                    "category": "general"
                },
                {
                    "name": "Mile Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "mile"
                },
                {
                    "name": "Shifting Gears",
                    "description": "Slightly increase acceleration when passing other runners",
                    "category": "general"
                },
                {
                    "name": "Slipstream",
                    "description": "Slightly decrease wind resistance when following directly behind another runner",
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
                    "name": "Straight Descent",
                    "description": "Slightly improve running on a downhill",
                    "category": "general"
                },
                {
                    "name": "Watchful Eye",
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance over long distances",
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
                    "late-surger"
                ],
                "characterTypes": [
                    "power-focused",
                    "mile-distance"
                ]
            }
        },
        {
            "id": "sweep_tosho_sr",
            "name": "Sweep Tosho",
            "character": "Sweep Tosho",
            "rarity": "SR",
            "type": "Speed",
            "maxLevel": 45,
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
                    "description": "Slightly increase velocity late-race when positioned toward the front",
                    "category": "general"
                },
                {
                    "name": "Slipstream",
                    "description": "Slightly decrease wind resistance when following directly behind another runner",
                    "category": "general"
                },
                {
                    "name": "Prudent Positioning",
                    "description": "Slightly increase positioning ability when trying to move up",
                    "category": "general"
                },
                {
                    "name": "I Can See Right Through You",
                    "description": "Slightly increase ability to overtake when close to other runners",
                    "category": "general"
                },
                {
                    "name": "Trick (Front)",
                    "description": "Slightly increase positioning ability when positioned toward the front mid-race",
                    "category": "general"
                },
                {
                    "name": "Trick (Rear)",
                    "description": "Slightly increase positioning ability when positioned toward the rear mid-race",
                    "category": "general"
                },
                {
                    "name": "Murmur",
                    "description": "Slightly reduce other runners' will to run when close together mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Lucky Seven",
                    "description": "Moderately increase all stats when all stats are equal",
                    "category": "general"
                },
                {
                    "name": "Maverick ○",
                    "description": "Moderately increase performance when running alone in the lead",
                    "category": "general"
                },
                {
                    "name": "Levelheaded",
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
                },
                {
                    "name": "Lone Wolf",
                    "description": "Slightly increase velocity when running alone",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "sprint",
                    "mile",
                    "medium"
                ],
                "styles": [
                    "front-runner",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "speed-focused",
                    "versatile"
                ]
            }
        },
        {
            "id": "agnes_digital_sr",
            "name": "Agnes Digital",
            "character": "Agnes Digital",
            "rarity": "SR",
            "type": "Power",
            "maxLevel": 45,
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
                    "description": "Slightly recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
                {
                    "name": "Calm in a Crowd",
                    "description": "Slightly recover endurance when surrounded mid-race",
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
                    "description": "Slightly dull movement for runners ahead when positioned toward the back early-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Frenzied End Closers",
                    "description": "Increase time needed for end closers to calm down when they become rushed",
                    "category": "general"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Wet Conditions ○",
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "track-condition"
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
                    "power-focused",
                    "late-surger"
                ]
            }
        },
        {
            "id": "air_groove_sr",
            "name": "Air Groove",
            "character": "Air Groove",
            "rarity": "SR",
            "type": "Guts",
            "maxLevel": 45,
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
                    "description": "Slightly recover endurance when passed by another runner mid-race",
                    "category": "general"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase velocity when the race pace is fast",
                    "category": "general"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                },
                {
                    "name": "Groundwork",
                    "description": "Slightly increase acceleration after activating many skills early-race",
                    "category": "general"
                },
                {
                    "name": "Hesitant End Closers",
                    "description": "Slightly decrease velocity of end closers late-race",
                    "category": "general"
                },
                {
                    "name": "Flustered End Closers",
                    "description": "Slightly increase fatigue for end closers mid-race",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Straightaway Acceleration",
                    "description": "Slightly increase acceleration on a straight",
                    "category": "general"
                },
                {
                    "name": "Go with the Flow",
                    "description": "Slightly increase velocity when the race pace is slow",
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
                    "medium-distance"
                ]
            }
        },
        {
            "id": "hishi_amazon_sr",
            "name": "Hishi Amazon",
            "character": "Hishi Amazon",
            "rarity": "SR",
            "type": "Power",
            "maxLevel": 45,
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
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "pace-chaser"
                },
                {
                    "name": "End Closer Savvy ○",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "end-closer"
                },
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly decrease fatigue early-race",
                    "category": "general"
                },
                {
                    "name": "End Closer Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "end-closer"
                },
                {
                    "name": "Straightaway Spurt",
                    "description": "Slightly increase acceleration on a straight when falling behind",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Masterful Gambit",
                    "description": "Slightly increase ability to decelerate before a corner when positioning yourself",
                    "category": "general"
                },
                {
                    "name": "Hesitant End Closers",
                    "description": "Slightly decrease velocity of end closers late-race",
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
                    "end-closer"
                ],
                "characterTypes": [
                    "power-focused",
                    "pace-chaser"
                ]
            }
        },
        {
            "id": "daiwa_scarlet_sr_batch2",
            "name": "Daiwa Scarlet",
            "character": "Daiwa Scarlet",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Competitive Spirit ○",
                    "description": "Moderately increase performance when at least 5 other runners are using the same strategy",
                    "category": "general"
                },
                {
                    "name": "Preferred Position",
                    "description": "Slightly decrease fatigue mid-race",
                    "category": "general"
                },
                {
                    "name": "Rosy Outlook",
                    "description": "Slightly decrease fatigue when in the lead mid-race",
                    "category": "general"
                },
                {
                    "name": "Prepared to Pass",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "general"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase velocity when the race pace is fast",
                    "category": "general"
                },
                {
                    "name": "Shifting Gears",
                    "description": "Slightly increase acceleration when passing other runners",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Tactical Tweak",
                    "description": "Slightly increase acceleration when positioned toward the back mid-race",
                    "category": "general"
                },
                {
                    "name": "Stamina to Spare",
                    "description": "Slightly decrease fatigue early-race",
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
                    "front-runner"
                ],
                "characterTypes": [
                    "wit-focused",
                    "skill-points"
                ]
            }
        },
        {
            "id": "fuji_kiseki_sr",
            "name": "Fuji Kiseki",
            "character": "Fuji Kiseki",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
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
                    "name": "Flustered End Closers",
                    "description": "Slightly increase fatigue for end closers mid-race",
                    "category": "general"
                },
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
                    "skill-points"
                ]
            }
        },
        {
            "id": "biwa_hayahide_sr",
            "name": "Biwa Hayahide",
            "character": "Biwa Hayahide",
            "rarity": "SR",
            "type": "Power",
            "maxLevel": 45,
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
                    "name": "Hanshin Racecourse ○",
                    "description": "Moderately increase performance on Hanshin Racecourse",
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
                    "name": "Frenzied End Closers",
                    "description": "Increase time needed for end closers to calm down when they become rushed",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Pressure",
                    "description": "Slightly increase ability to break out of the pack when trying to move up",
                    "category": "general"
                },
                {
                    "name": "Inside Scoop",
                    "description": "Slightly increase acceleration when trying to move up from the inside",
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
                    "wet-conditions"
                ]
            }
        },
        {
            "id": "mayano_top_gun_sr",
            "name": "Mayano Top Gun",
            "character": "Mayano Top Gun",
            "rarity": "SR",
            "type": "Stamina",
            "maxLevel": 45,
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
                    "description": "Slightly increase velocity on a corner with skilled turning",
                    "category": "general"
                },
                {
                    "name": "Straightaway Adept",
                    "description": "Slightly increase velocity on a straight",
                    "category": "general"
                },
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase maneuverability when the way ahead is blocked in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Go with the Flow",
                    "description": "Slightly increase velocity when the race pace is slow",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
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
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "stamina-focused",
                    "non-standard-distance"
                ]
            }
        },
        {
            "id": "manhattan_cafe_sr",
            "name": "Manhattan Cafe",
            "character": "Manhattan Cafe",
            "rarity": "SR",
            "type": "Stamina",
            "maxLevel": 45,
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
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "track-condition"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Passing Pro",
                    "description": "Slightly increase acceleration when trying to move up",
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
                    "name": "Studious",
                    "description": "Slightly increase wisdom training effectiveness",
                    "category": "wit"
                },
                {
                    "name": "Non-Standard Distance ○",
                    "description": "Moderately increase performance over non-standard distances",
                    "category": "general"
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
            "id": "mihono_bourbon_sr",
            "name": "Mihono Bourbon",
            "character": "Mihono Bourbon",
            "rarity": "SR",
            "type": "Power",
            "maxLevel": 45,
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
                    "name": "Corner Recovery ○",
                    "description": "Slightly recover endurance on a corner",
                    "category": "general"
                },
                {
                    "name": "Front Runner Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "front-runner"
                },
                {
                    "name": "Focus",
                    "description": "Slightly decrease time lost to slow starts",
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
                    "front-runner"
                ]
            }
        },
        {
            "id": "mejiro_ryan_sr",
            "name": "Mejiro Ryan",
            "character": "Mejiro Ryan",
            "rarity": "SR",
            "type": "Power",
            "maxLevel": 45,
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
                    "description": "Moderately increase performance on good, soft, and heavy ground",
                    "category": "track-condition"
                },
                {
                    "name": "Rainy Days ○",
                    "description": "Moderately increase performance in rainy weather",
                    "category": "weather"
                },
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase velocity when the race pace is fast",
                    "category": "general"
                },
                {
                    "name": "Medium Straightaways ○",
                    "description": "Slightly increase velocity on a straight",
                    "category": "medium"
                }
            ],
            "eventSkills": [
                {
                    "name": "Nimble Navigator",
                    "description": "Slightly increase maneuverability when the way ahead is blocked in the last spurt",
                    "category": "general"
                },
                {
                    "name": "Pace Strategy",
                    "description": "Slightly recover endurance when passed by another runner mid-race",
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
                    "wet-conditions"
                ]
            }
        },
        {
            "id": "marvelous_sunday_sr",
            "name": "Marvelous Sunday",
            "character": "Marvelous Sunday",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
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
                    "skill-points"
                ]
            }
        },
        {
            "id": "narita_taishin_sr",
            "name": "Narita Taishin",
            "character": "Narita Taishin",
            "rarity": "SR",
            "type": "Speed",
            "maxLevel": 45,
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
                    "description": "Slightly increase velocity when running alone",
                    "category": "general"
                },
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
                    "name": "Standing By",
                    "description": "Slightly increase acceleration when the way ahead opens up",
                    "category": "general"
                },
                {
                    "name": "Masterful Gambit",
                    "description": "Slightly increase ability to decelerate before a corner when positioning yourself",
                    "category": "general"
                },
                {
                    "name": "End Closer Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "end-closer"
                },
                {
                    "name": "Intense Gaze",
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "I Can See Right Through You",
                    "description": "Slightly increase ability to overtake when close to other runners",
                    "category": "general"
                },
                {
                    "name": "Pressure",
                    "description": "Slightly increase ability to break out of the pack when trying to move up",
                    "category": "general"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "mile",
                    "medium"
                ],
                "styles": [
                    "end-closer",
                    "late-surger"
                ],
                "characterTypes": [
                    "speed-focused",
                    "end-closer"
                ]
            }
        },
        {
            "id": "eishin_flash_sr",
            "name": "Eishin Flash",
            "character": "Eishin Flash",
            "rarity": "SR",
            "type": "Speed",
            "maxLevel": 45,
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
                    "description": "Moderately increase performance over standard distances",
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
                    "description": "Slightly increase acceleration on a straight",
                    "category": "general"
                },
                {
                    "name": "Fighter",
                    "description": "Slightly increase will to run when losing position",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Homestretch Haste",
                    "description": "Slightly increase velocity during the homestretch",
                    "category": "general"
                },
                {
                    "name": "Target in Sight ○",
                    "description": "Slightly increase acceleration when close to the target time",
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
                    "late-surger"
                ]
            }
        },
        {
            "id": "agnes_tachyon_sr",
            "name": "Agnes Tachyon",
            "character": "Agnes Tachyon",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Up-Tempo",
                    "description": "Slightly increase velocity when the race pace is fast",
                    "category": "general"
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
                    "description": "Slightly increase positioning ability when trying to move up",
                    "category": "general"
                }
            ],
            "eventSkills": [
                {
                    "name": "Subdued Front Runners",
                    "description": "Reduce other runners' will to run when fighting for position",
                    "category": "general"
                },
                {
                    "name": "Late Surger Savvy ○",
                    "description": "Slightly increase acceleration when falling behind late-race",
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
                    "wit-focused",
                    "skill-points"
                ]
            }
        },
        {
            "id": "yukino_bijin_sr",
            "name": "Yukino Bijin",
            "character": "Yukino Bijin",
            "rarity": "SR",
            "type": "Guts",
            "maxLevel": 45,
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
                    "description": "Slightly reduce likelihood of losing will to run when losing position",
                    "category": "general"
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
                    "medium",
                    "long"
                ],
                "styles": [
                    "pace-chaser",
                    "late-surger"
                ],
                "characterTypes": [
                    "guts-focused",
                    "winter-conditions"
                ]
            }
        },
        {
            "id": "matikanefukukitaru_sr",
            "name": "Matikanefukukitaru",
            "character": "Matikanefukukitaru",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
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
            "eventSkills": [
                {
                    "name": "Right-Handed ○",
                    "description": "Moderately increase performance on right-handed courses",
                    "category": "course"
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
                    "skill-points"
                ]
            }
        },
        {
            "id": "meisho_doto_sr",
            "name": "Meisho Doto",
            "character": "Meisho Doto",
            "rarity": "SR",
            "type": "Guts",
            "maxLevel": 45,
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
                    "description": "Moderately increase performance on firm track conditions",
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
                    "name": "Prepared to Pass",
                    "description": "Slightly increase acceleration when falling behind late-race",
                    "category": "general"
                },
                {
                    "name": "Pace Chaser Corners ○",
                    "description": "Slightly increase velocity on a corner",
                    "category": "pace-chaser"
                }
            ],
            "recommendedFor": {
                "distances": [
                    "long",
                    "medium"
                ],
                "styles": [
                    "late-surger",
                    "pace-chaser"
                ],
                "characterTypes": [
                    "guts-focused",
                    "long-distance"
                ]
            }
        },
        {
            "id": "mejiro_dober_sr",
            "name": "Mejiro Dober",
            "character": "Mejiro Dober",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
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
                    "name": "Slick Surge",
                    "description": "Slightly increase acceleration when positioning changes rapidly",
                    "category": "general"
                },
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
                    "pace-chaser"
                ],
                "characterTypes": [
                    "wit-focused",
                    "skill-points"
                ]
            }
        },
        {
            "id": "nice_nature_sr",
            "name": "Nice Nature",
            "character": "Nice Nature",
            "rarity": "SR",
            "type": "Guts",
            "maxLevel": 45,
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
                    "description": "Slightly decrease velocity of late surgers late-race",
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
                    "name": "Extra Tank",
                    "description": "Slightly increase endurance recovery late-race",
                    "category": "general"
                },
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
                    "endurance-management"
                ]
            }
        },
        {
            "id": "king_halo_sr",
            "name": "King Halo",
            "character": "King Halo",
            "rarity": "SR",
            "type": "Speed",
            "maxLevel": 45,
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
                    "description": "Moderately increase performance on firm track conditions",
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
                    "description": "Slightly increase positioning ability when holding back early-race",
                    "category": "general"
                },
                {
                    "name": "Gap Closer",
                    "description": "Slightly increase acceleration when trying to close a gap",
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
                    "late-surger",
                    "end-closer"
                ],
                "characterTypes": [
                    "speed-focused",
                    "outer-post"
                ]
            }
        },
        {
            "id": "nice_nature_wit_sr",
            "name": "Nice Nature (Wit)",
            "character": "Nice Nature",
            "rarity": "SR",
            "type": "Wit",
            "maxLevel": 45,
            "statGain": {
                "speed": 0,
                "stamina": 0,
                "power": 0,
                "guts": 0,
                "wit": 6
            },
            "supportHints": [
                {
                    "name": "Kokura Racecourse ○",
                    "description": "Moderately increase performance at Kokura Racecourse",
                    "category": "track-specific"
                },
                {
                    "name": "Lay Low",
                    "description": "Slightly recover endurance when the way ahead is jammed early-race",
                    "category": "general"
                },
                {
                    "name": "A Small Breather",
                    "description": "Slightly recover endurance late-race (Late Surger)",
                    "category": "late-surger"
                },
                {
                    "name": "Corner Acceleration ○",
                    "description": "Slightly increase acceleration on a corner with masterful turning",
                    "category": "general"
                },
                {
                    "name": "Go with the Flow",
                    "description": "Moderately increase navigation late-race",
                    "category": "general"
                },
                {
                    "name": "Hesitant Late Surgers",
                    "description": "Slightly decrease velocity of late surgers late-race",
                    "category": "general"
                },
                {
                    "name": "Murmur",
                    "description": "Slightly disturb runners directly ahead mid-race (Medium)",
                    "category": "medium"
                },
                {
                    "name": "Sharp Gaze",
                    "description": "Slightly startle other runners late-race (Late Surger)",
                    "category": "late-surger"
                }
            ],
            "eventSkills": [
                {
                    "name": "Long Shot ○",
                    "description": "Moderately increase performance when 4th favorite or below",
                    "category": "general"
                },
                {
                    "name": "Ramp Up",
                    "description": "Slightly increase velocity when passing another runner mid-race",
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
                    "wit-focused",
                    "strategic"
                ]
            }
        }
    ];

    // Helper functions for card management
    const SupportCardHelpers = {
        /**
         * Get all SR support cards
         */
        getAll: function() {
            return SR_SUPPORT_CARDS;
        },

        /**
         * Get support card by ID
         * @param {string} id - Card ID
         * @returns {Object|null} Support card or null if not found
         */
        getById: function(id) {
            return SR_SUPPORT_CARDS.find(card => card.id === id) || null;
        },

        /**
         * Get support cards by type
         * @param {string} type - Card type (Speed, Stamina, Power, Guts, Wit, Friend)
         * @returns {Array} Array of matching support cards
         */
        getByType: function(type) {
            return SR_SUPPORT_CARDS.filter(card => card.type === type);
        },

        /**
         * Get support cards by character
         * @param {string} character - Character name
         * @returns {Array} Array of matching support cards
         */
        getByCharacter: function(character) {
            return SR_SUPPORT_CARDS.filter(card => card.character === character);
        },

        /**
         * Get support cards by max level
         * @param {number} maxLevel - Maximum level
         * @returns {Array} Array of matching support cards
         */
        getByMaxLevel: function(maxLevel) {
            return SR_SUPPORT_CARDS.filter(card => card.maxLevel === maxLevel);
        },

        /**
         * Get support cards recommended for specific distance
         * @param {string} distance - Distance type (sprint, mile, medium, long)
         * @returns {Array} Array of matching support cards
         */
        getByDistance: function(distance) {
            return SR_SUPPORT_CARDS.filter(card => 
                card.recommendedFor && card.recommendedFor.distances.includes(distance)
            );
        },

        /**
         * Get support cards recommended for specific style
         * @param {string} style - Running style (front-runner, pace-chaser, late-surger, end-closer)
         * @returns {Array} Array of matching support cards
         */
        getByStyle: function(style) {
            return SR_SUPPORT_CARDS.filter(card => 
                card.recommendedFor && card.recommendedFor.styles.includes(style)
            );
        },

        /**
         * Get unique characters list
         * @returns {Array} Array of unique character names
         */
        getUniqueCharacters: function() {
            return [...new Set(SR_SUPPORT_CARDS.map(card => card.character))].sort();
        },

        /**
         * Get unique types list
         * @returns {Array} Array of unique types
         */
        getUniqueTypes: function() {
            return [...new Set(SR_SUPPORT_CARDS.map(card => card.type))].sort();
        },

        /**
         * Check if SR support card exists by ID
         * @param {string} cardId - Card ID
         * @returns {boolean} True if card exists
         */
        hasSRSupportCard: function(cardId) {
            return SR_SUPPORT_CARDS.some(card => card.id === cardId);
        },

        /**
         * Get SR support card by ID
         * @param {string} cardId - Card ID
         * @returns {Object|null} Support card or null if not found
         */
        getSRSupportCard: function(cardId) {
            return SR_SUPPORT_CARDS.find(card => card.id === cardId) || null;
        },

        /**
         * Get all SR support cards
         * @returns {Array} Array of all SR support cards
         */
        getAllSRSupportCards: function() {
            return SR_SUPPORT_CARDS;
        },

        /**
         * Get all SR support card IDs
         * @returns {Array} Array of all SR support card IDs
         */
        getAllSRSupportCardIds: function() {
            return SR_SUPPORT_CARDS.map(card => card.id);
        },

        /**
         * Get SR support cards by type
         * @param {string} type - Card type
         * @returns {Array} Array of matching SR support cards
         */
        getSRSupportCardsByType: function(type) {
            return SR_SUPPORT_CARDS.filter(card => card.type === type);
        },

        /**
         * Get SR support cards by character
         * @param {string} character - Character name
         * @returns {Array} Array of matching SR support cards
         */
        getSRSupportCardsByCharacter: function(character) {
            return SR_SUPPORT_CARDS.filter(card => card.character === character);
        }
    };

    // Module exports for different environments
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        // Node.js environment
        module.exports = {
            SR_SUPPORT_CARDS: SR_SUPPORT_CARDS,
            SupportCardHelpers: SupportCardHelpers
        };
    } else {
        // Browser environment
        console.log('SR Module: Executing browser export logic');
        if (typeof window !== 'undefined') {
            console.log('SR Module: Attaching to window object');
            window.SR_SUPPORT_CARDS = SR_SUPPORT_CARDS;
            window.SRSupportCards = SupportCardHelpers;
            console.log('SR Module: Successfully attached SRSupportCards to window');
        } else if (typeof global !== 'undefined') {
            console.log('SR Module: Attaching to global object');
            global.SR_SUPPORT_CARDS = SR_SUPPORT_CARDS;
            global.SRSupportCards = SupportCardHelpers;
        }
    }

})(typeof window !== 'undefined' ? window : this);