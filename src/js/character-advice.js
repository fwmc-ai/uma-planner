/**
 * Uma Musume Career Planner - Character Advice Module
 * Contains character-specific training advice, growth pattern analysis, and recommendations
 */

// Define the character advice module
(function() {
    'use strict';
    
    /**
     * Generate character-specific training advice
     * @param {Object} character - Character object
     * @param {string} targetTrack - Target distance
     * @param {string} style - Running style
     * @returns {Object} Training advice with priority, secondary, avoid, and tips arrays
     */
    function getCharacterTrainingAdvice(character, targetTrack, style) {
        const advice = {
            priority: [],
            secondary: [],
            avoid: [],
            tips: []
        };

        // Speed-focused characters (20% speed growth)
        if (character.statGrowth.speed === 20) {
            advice.priority.push("Speed training (take advantage of +20% growth bonus)");
            advice.tips.push("Your speed growth bonus makes speed training extremely efficient");
            if (style === 'front') {
                advice.tips.push("Perfect match: Front-runners need high speed and you have speed growth");
            }
        }

        // Stamina-focused characters (20% stamina growth)
        if (character.statGrowth.stamina === 20) {
            advice.priority.push("Stamina training (take advantage of +20% growth bonus)");
            advice.tips.push("Your stamina growth bonus is ideal for medium/long distance races");
            if (targetTrack === 'long') {
                advice.tips.push("Excellent choice: Long distances need stamina and you excel at it");
            }
        }

        // Power-focused characters
        if (character.statGrowth.power === 20 || character.statGrowth.power === 15) {
            advice.priority.push("Power training (take advantage of your power growth bonus)");
            advice.tips.push("Power growth bonus helps with acceleration and overtaking");
        }

        // High guts growth
        if (character.statGrowth.guts === 20) {
            advice.secondary.push("Guts training (you have good guts growth)");
            advice.tips.push("Your guts bonus helps with final spurt endurance");
        }

        // High wit growth
        if (character.statGrowth.wit === 20 || character.statGrowth.wit === 15) {
            advice.secondary.push("Wit training (you have good wit growth)");
            advice.tips.push("Your wit bonus improves skill activation consistency");
        }

        // Aptitude-based recommendations
        const apt = character.aptitudes[targetTrack];
        if (apt === 'A') {
            advice.tips.push(`Perfect distance match: You have A aptitude for ${targetTrack} races`);
        } else if (apt === 'B') {
            advice.tips.push(`Good distance match: You have B aptitude for ${targetTrack} races`);
        } else if (apt === 'C' || apt === 'D') {
            advice.tips.push(`Challenging distance: Your ${apt} aptitude for ${targetTrack} means you'll need higher stats`);
        } else {
            advice.avoid.push(`Warning: ${targetTrack} races (${apt} aptitude)`);
            advice.tips.push(`Consider switching distance: Your ${apt} aptitude makes ${targetTrack} very difficult`);
        }

        // Style aptitude warnings
        const runApt = character.runningStyles[style];
        if (['C','D'].includes(runApt)) {
            advice.tips.push(`Style challenge: Your ${runApt} aptitude for ${style} style may require higher stats`);
        } else if (['E','F','G'].includes(runApt)) {
            advice.avoid.push(`Warning: ${style} running style (${runApt} aptitude)`);
            advice.tips.push(`Consider switching style: Your ${runApt} aptitude makes ${style} very challenging`);
        }

        // Specific character tips
        if (character.id === 'special_week') {
            advice.tips.push("Versatile in medium/long distances, focus on stamina and wit for consistency");
        } else if (character.id === 'silence_suzuka') {
            advice.tips.push("Front-runner specialist, prioritize speed and avoid long distances");
        } else if (character.id === 'rice_shower') {
            advice.tips.push("Guts specialist perfect for come-from-behind victories in long races");
        } else if (character.id === 'haru_urara') {
            advice.tips.push("Dirt specialist - focus on dirt races and end-style running");
        }

        return advice;
    }

    /**
     * Phase 4A Enhancement: Calculate skill activation rate using validated formula
     * @param {number} witStat - Character's Wit stat
     * @returns {number} Skill activation percentage (20-100%)
     */
    function calculateSkillActivationRate(witStat) {
        if (!window.Uma?.Constants?.SKILL_ACTIVATION) {
            return Math.max(100 - 9000 / witStat, 20); // Fallback to formula
        }
        return window.Uma.Constants.SKILL_ACTIVATION.calculateRate(witStat);
    }

    /**
     * Phase 4A Enhancement: Detect character archetype for training guidance
     * @param {Object} character - Character object
     * @returns {string} Archetype key (speed_specialist, stamina_tank, etc.)
     */
    function detectCharacterArchetype(character) {
        const { baseStats, aptitudes, runningStyles } = character;
        
        // Speed Specialist: High speed base stats + front/pace aptitudes
        if (baseStats.speed >= 85 && 
            (runningStyles.front === 'A' || runningStyles.pace === 'A') &&
            (aptitudes.sprint === 'A' || aptitudes.mile === 'A')) {
            return 'speed_specialist';
        }
        
        // Stamina Tank: High stamina base stats + long distance aptitudes
        if (baseStats.stamina >= 90 && 
            (aptitudes.medium === 'A' || aptitudes.long === 'A') &&
            (runningStyles.late === 'A' || runningStyles.end === 'A')) {
            return 'stamina_tank';
        }
        
        // Power Brawler: High power base stats + mid-distance focus
        if (baseStats.power >= 90 && aptitudes.mile === 'A') {
            return 'power_brawler';
        }
        
        // Default to balanced runner
        return 'balanced_runner';
    }

    /**
     * Phase 4A Enhancement: Get archetype-specific training guidance
     * @param {Object} character - Character object
     * @param {string} currentMood - Current mood (excellent, great, good, normal, bad, awful)
     * @returns {Object} Enhanced training advice with archetype guidance
     */
    function getArchetypeTrainingAdvice(character, currentMood = 'normal') {
        const archetype = detectCharacterArchetype(character);
        const archetypeData = window.Uma?.Constants?.CHARACTER_ARCHETYPES?.[archetype];
        const moodData = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[currentMood];
        
        if (!archetypeData) return { archetype: 'unknown', advice: [] };
        
        const advice = [];
        const moodMultiplier = moodData?.value || 1.0;
        
        // Archetype-specific recommendations
        advice.push(`🎯 Archetype: ${archetypeData.label}`);
        advice.push(`📋 ${archetypeData.description}`);
        
        // Mood-adjusted training efficiency
        if (moodMultiplier > 1.0) {
            advice.push(`✨ Current mood boosts training efficiency by ${Math.round((moodMultiplier - 1) * 100)}%`);
            advice.push("💡 Great time for intensive training sessions!");
        } else if (moodMultiplier < 1.0) {
            advice.push(`⚠️ Current mood reduces training efficiency by ${Math.round((1 - moodMultiplier) * 100)}%`);
            advice.push("💡 Consider rest or lighter training to improve mood");
        }
        
        // Stat priority recommendations
        advice.push(`🎯 Stat Priorities: ${archetypeData.statPriorities.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' → ')}`);
        
        // Distance/style recommendations  
        advice.push(`🏁 Preferred Distances: ${archetypeData.preferredDistances.join(', ')}`);
        advice.push(`🏃 Preferred Styles: ${archetypeData.preferredStyles.join(', ')}`);
        
        return {
            archetype,
            archetypeLabel: archetypeData.label,
            moodMultiplier,
            moodLabel: moodData?.label || 'Normal',
            advice
        };
    }

    /**
     * Phase 4A Enhancement: Enhanced training recommendations with mood and skill activation
     * @param {Object} character - Character object
     * @param {Object} currentStats - Current character stats
     * @param {string} targetTrack - Target distance
     * @param {string} style - Running style  
     * @param {string} currentMood - Current mood
     * @returns {Object} Comprehensive training recommendations
     */
    function getEnhancedTrainingRecommendations(character, currentStats, targetTrack, style, currentMood = 'normal') {
        const baseAdvice = getCharacterTrainingAdvice(character, targetTrack, style);
        const archetypeAdvice = getArchetypeTrainingAdvice(character, currentMood);
        const witActivationRate = calculateSkillActivationRate(currentStats.wit);
        
        const enhanced = {
            ...baseAdvice,
            archetype: archetypeAdvice,
            skillActivation: {
                rate: Math.round(witActivationRate * 10) / 10,
                feedback: getSkillActivationFeedback(witActivationRate, currentStats.wit)
            },
            moodAdjustedPriorities: getMoodAdjustedPriorities(baseAdvice.priority, currentMood)
        };
        
        return enhanced;
    }

    /**
     * Get skill activation feedback based on current rate
     */
    function getSkillActivationFeedback(rate, witStat) {
        if (rate >= 85) return `🎯 Excellent skill activation (${rate.toFixed(1)}%) - Skills fire consistently`;
        if (rate >= 75) return `✅ Good skill activation (${rate.toFixed(1)}%) - Most skills will activate`;
        if (rate >= 65) return `👍 Decent skill activation (${rate.toFixed(1)}%) - Skills activate regularly`;
        if (rate >= 50) return `⚠️ Poor skill activation (${rate.toFixed(1)}%) - Consider more Wit training`;
        return `🚨 Very poor skill activation (${rate.toFixed(1)}%) - Wit training critical`;
    }

    /**
     * Adjust training priorities based on current mood
     */
    function getMoodAdjustedPriorities(priorities, currentMood) {
        const moodData = window.Uma?.Constants?.MOOD_MULTIPLIERS?.[currentMood];
        if (!moodData) return priorities;
        
        const adjusted = [...priorities];
        
        if (moodData.value >= 1.15) {
            adjusted.unshift("🔥 High-intensity training (mood bonus active)");
        } else if (moodData.value <= 0.9) {
            adjusted.unshift("💤 Rest and recovery (improve mood first)");
        }
        
        return adjusted;
    }

    // Register the character advice module
    if (window.Uma) {
        window.Uma.CharacterAdvice = {
            getCharacterTrainingAdvice,
            calculateSkillActivationRate,
            detectCharacterArchetype,
            getArchetypeTrainingAdvice,
            getEnhancedTrainingRecommendations
        };
    } else {
        window.Uma = {
            CharacterAdvice: {
                getCharacterTrainingAdvice,
                calculateSkillActivationRate,
                detectCharacterArchetype,
                getArchetypeTrainingAdvice,
                getEnhancedTrainingRecommendations
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('character-advice');
    }

    console.log('Character advice module loaded successfully');
})();