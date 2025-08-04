/**
 * Debug utility for testing support card assignments
 * Run this in browser console to test support card functionality
 */

function testSupportCardAssignments() {
    console.log('=== SUPPORT CARD ASSIGNMENT TEST ===');
    
    // Get current state
    const appState = window.appState || window.Uma?.State?.appState;
    if (!appState) {
        console.error('App state not found!');
        return;
    }
    
    console.log('Current support cards:', appState.plannerState.selectedSupportCards);
    console.log('Current levels:', appState.plannerState.selectedSupportCardLevels);
    console.log('Current assignments:', appState.plannerState.selectedSupportCardAssignments);
    
    // Test if SupportCards API is available
    if (!window.SupportCards) {
        console.error('SupportCards API not loaded!');
        return;
    }
    
    // Create test deck configuration
    const deckConfiguration = (appState.plannerState.selectedSupportCards || []).map((cardId, index) => ({
        cardId,
        level: (appState.plannerState.selectedSupportCardLevels || [])[index] || 1,
        assignment: (appState.plannerState.selectedSupportCardAssignments || [])[index] || null
    })).filter(item => item.cardId);
    
    console.log('Deck configuration:', deckConfiguration);
    
    if (deckConfiguration.length === 0) {
        console.warn('No support cards in deck! Add some cards first.');
        return;
    }
    
    // Calculate effects
    const effects = window.SupportCards.calculateSupportCardEffects(deckConfiguration);
    console.log('Support card effects:', effects);
    
    // Show training multipliers
    console.log('Training multipliers:');
    Object.entries(effects.trainingMultipliers).forEach(([training, multiplier]) => {
        const percentage = ((multiplier - 1) * 100).toFixed(1);
        console.log(`  ${training}: ${multiplier.toFixed(3)} (${percentage}% bonus)`);
    });
    
    // Show assignments breakdown
    console.log('Training assignments:');
    Object.entries(effects.trainingAssignments).forEach(([training, cards]) => {
        if (cards.length > 0) {
            console.log(`  ${training}: ${cards.length} cards assigned`);
            cards.forEach(cardInfo => {
                console.log(`    - ${cardInfo.card.name} (${cardInfo.card.type}, Level ${cardInfo.level})`);
            });
        }
    });
    
    console.log('=== TEST COMPLETE ===');
}

function simulateAssignmentChange(slot, assignment) {
    console.log(`=== SIMULATING ASSIGNMENT CHANGE: slot ${slot} to ${assignment} ===`);
    
    // Get current character planner function
    const plannerModule = window.Uma?.Components?.CharacterPlannerRedesigned;
    if (!plannerModule || !plannerModule.updateCardAssignment) {
        console.error('Character planner module or updateCardAssignment function not found!');
        return;
    }
    
    // Call the assignment update function
    plannerModule.updateCardAssignment(slot, assignment);
    
    console.log('Assignment updated. Check training recommendations for changes.');
}

// Make functions globally available for console testing
window.testSupportCardAssignments = testSupportCardAssignments;
window.simulateAssignmentChange = simulateAssignmentChange;

console.log('Debug functions loaded! Use testSupportCardAssignments() and simulateAssignmentChange(slot, assignment) in console.');