/**
 * Uma Musume Career Planner - Skills Module
 * Contains skill recommendation logic, categorization, and conditional skill analysis
 */

// Define the skills module
(function() {
    'use strict';
    
    /**
     * Generate skill recommendations based on character, distance, and style
     * @param {Object} character - Character object
     * @param {string} targetTrack - Target distance (sprint, mile, medium, long)
     * @param {string} style - Running style
     * @returns {Object} Skill recommendations with essential, recommended, and conditional arrays
     */
    function getSkillRecommendations(character, targetTrack, style) {
        const recommendations = {
            essential: [],
            recommended: [],
            conditional: []
        };

        // Essential skills based on running style
        switch (style) {
            case 'front-runner':
                recommendations.essential = [
                    { name: "Concentration", type: "Gold", reason: "Critical for sharp starts and maintaining lead" },
                    { name: "Corner Adept", type: "Silver", reason: "Reliable speed boost on every corner" }
                ];
                recommendations.recommended = [
                    { name: "Moxie (Restless)", type: "Gold", reason: "Mid-race stamina recovery for front runners" },
                    { name: "Taking the Lead", type: "Silver", reason: "Early race acceleration advantage" }
                ];
                break;
            case 'pace-chaser':
                recommendations.essential = [
                    { name: "Professor of Curvature", type: "Gold", reason: "Superior corner speed for pace control" },
                    { name: "Speed Star (Prepare to Pass)", type: "Gold", reason: "Final corner acceleration for pace chasers" }
                ];
                recommendations.recommended = [
                    { name: "Hydrate (Gourmand)", type: "Gold", reason: "Mid-race stamina recovery for pace chasers" },
                    { name: "Corner Recovery", type: "Silver", reason: "Consistent stamina management" }
                ];
                break;
            case 'late-surger':
                recommendations.essential = [
                    { name: "Fast & Furious", type: "Gold", reason: "Mid-race speed boost for late surgers" },
                    { name: "Lane Legerdemain", type: "Gold", reason: "Navigation for late-race positioning" }
                ];
                recommendations.recommended = [
                    { name: "Rising Dragon (Outer Swell)", type: "Gold", reason: "Outside passing on final corner" },
                    { name: "Soft Step (Miraculous Step)", type: "Gold", reason: "Corner stamina recovery" }
                ];
                break;
            case 'end-closer':
                recommendations.essential = [
                    { name: "Encroaching Shadow", type: "Gold", reason: "Top-tier acceleration for final sprint" },
                    { name: "On Your Left! (Slick Surge)", type: "Gold", reason: "Late-race overtaking acceleration" }
                ];
                recommendations.recommended = [
                    { name: "Passing Prophecy (VIP Pass)", type: "Gold", reason: "Long race stamina recovery" },
                    { name: "Straightaway Spurt", type: "Silver", reason: "Final straight acceleration" }
                ];
                break;
        }

        // Distance-specific additions
        if (targetTrack === 'long') {
            recommendations.essential.push({
                name: "Swinging Maestro",
                type: "Gold",
                reason: "Essential stamina recovery for 2400m+ races"
            });
        }

        // Character aptitude-based conditionals
        const characterAptitudes = character.aptitudes || {};
        
        // Right-handed track skills (most tracks are right-handed)
        recommendations.conditional.push({
            name: "Right-Handed ◎",
            type: "Passive",
            reason: "Most races are right-handed - consistent stat boost",
            priority: "High"
        });

        // Distance aptitude skills
        if (characterAptitudes[targetTrack] === 'A') {
            recommendations.conditional.push({
                name: `${targetTrack.charAt(0).toUpperCase() + targetTrack.slice(1)} Distance ◎`,
                type: "Passive",
                reason: `Perfect aptitude match - maximizes ${targetTrack} performance`,
                priority: "High"
            });
        }

        // Turf vs Dirt
        if (characterAptitudes.turf === 'A') {
            recommendations.conditional.push({
                name: "Turf Specialist ◎",
                type: "Passive", 
                reason: "A-rank turf aptitude - essential for turf racing",
                priority: "High"
            });
        }

        return recommendations;
    }

    // Register the skills module
    if (window.Uma) {
        window.Uma.Skills = {
            getSkillRecommendations
        };
    } else {
        window.Uma = {
            Skills: {
                getSkillRecommendations
            }
        };
    }

    // Mark this module as loaded
    if (window.UmaModuleLoader) {
        window.UmaModuleLoader.loadedModules.add('skills');
    }

    console.log('Skills module loaded successfully');
})();