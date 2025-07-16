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

    // Register the character advice module
    if (window.Uma) {
        window.Uma.CharacterAdvice = {
            getCharacterTrainingAdvice
        };
    } else {
        window.Uma = {
            CharacterAdvice: {
                getCharacterTrainingAdvice
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('character-advice');
    }

    console.log('Character advice module loaded successfully');
})();