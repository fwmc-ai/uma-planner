# Phase 4A Data Validation Requirements

**Purpose**: Document exact data validation needs for Phase 4A implementation  
**Target**: Uma Musume Pretty Derby Global Release accuracy  
**Date**: 2025-07-16  

---

## 🎯 **Critical Data Points Requiring Validation**

### **1. Aptitude Grade Multipliers**

#### **Current Proposal Claims**:
From enhancement documents:
- S rank = 1.2x multiplier (20% boost)
- A rank = 1.1x multiplier (10% boost)  
- B rank = 1.05x multiplier (5% boost)
- C rank = 1.0x multiplier (baseline)
- D rank = 0.95x multiplier (5% penalty)
- E rank = 0.9x multiplier (10% penalty)
- G rank = 0.8x multiplier (20% penalty)

#### **Validation Required**:
1. **Source Verification**: Are these multipliers accurate for Global release?
2. **Measurement Method**: How are these applied? (stat effectiveness vs threshold reduction)
3. **Context Specificity**: Do multipliers vary by:
   - Distance aptitude vs Surface aptitude vs Style aptitude?
   - Different stat types (Speed vs Stamina vs Power vs Guts vs Wit)?
   - Race conditions or training scenarios?

#### **Research Questions**:
- What is the exact mathematical relationship between aptitude grades and performance?
- Do aptitude effects stack multiplicatively or additively when multiple aptitudes apply?
- Are there documented differences between Global and JP versions?

---

### **2. Skill Activation Formula**

#### **Current Proposal Claims**:
- Formula: `Math.max(100 - 9000 / wit, 20)%`
- 300 Wit = ~70% activation rate
- 400 Wit = ~77.5% activation rate  
- Minimum 20% activation regardless of Wit level

#### **Validation Required**:
1. **Formula Accuracy**: Is this exact formula confirmed for Global?
2. **Baseline Constants**: Are 9000 and 20 the correct constants?
3. **Skill Variations**: Do different skills use different formulas?
4. **Aptitude Interactions**: How do aptitudes modify this base formula?

#### **Research Questions**:
- Is there documented testing showing this formula matches actual in-game behavior?
- Do conditional skills (corner skills, etc.) use the same formula?
- How do support cards affect skill activation rates?

---

### **3. Character Archetype Classifications**

#### **Current Proposal Claims**:
- Speed Specialist (e.g., Silence Suzuka)
- Stamina Tank (e.g., Gold Ship)  
- Balanced Runner (e.g., Special Week)
- Power Brawler (medium race specialists)

#### **Validation Required**:
1. **Classification Criteria**: What specific stat/aptitude thresholds define each archetype?
2. **Training Differences**: Do archetypes have different optimal training approaches?
3. **Performance Verification**: Are these archetypes meaningful for actual race performance?

---

### **4. Enhanced Stat Thresholds**

#### **Current System**:
Static thresholds per distance/style combination (e.g., Sprint Front-Runner needs 750 Speed)

#### **Proposed Enhancement**:
Dynamic thresholds adjusted by aptitude multipliers:
`adjustedThreshold = baseThreshold / aptitudeMultiplier`

#### **Validation Required**:
1. **Threshold Accuracy**: Are our current base thresholds correct for Global?
2. **Adjustment Method**: Is division the correct mathematical operation?
3. **Multiple Aptitudes**: How should distance + surface aptitudes combine?

---

## 🔍 **Specific Research Tasks**

### **Task 1: Aptitude Multiplier Verification**
**Goal**: Confirm exact aptitude effects in Global release  
**Method**: 
- Test identical characters with different aptitude grades
- Measure actual performance differences in races/training
- Compare with JP version documentation if available

**Sources to Check**:
- GameTora mechanics guides
- Official Global release documentation  
- Community testing data (Reddit, Discord)
- Datamining results specific to Global

### **Task 2: Skill Activation Testing**  
**Goal**: Validate skill activation formula for Global
**Method**:
- Test characters with different Wit levels
- Count actual skill activations over multiple races
- Verify formula matches observed rates

**Sources to Check**:
- Frame-by-frame race analysis
- Community skill activation data
- Official game guides or tooltips

### **Task 3: Training Efficiency Verification**
**Goal**: Confirm training gains are static vs dynamic
**Method**:
- Test training at different stat levels
- Verify if diminishing returns exist
- Check for character-specific differences

### **Task 4: Cross-Reference with JP Version**
**Goal**: Identify any Global-specific differences
**Method**:
- Compare formulas with established JP mechanics
- Flag any Global-specific changes or adaptations

---

## 📊 **Evidence Standards**

### **Tier 1 Evidence (Required for Implementation)**:
- Official documentation from Cygames
- Datamining results from Global game files
- Reproducible community testing with statistical significance
- Frame-perfect video analysis

### **Tier 2 Evidence (Supporting)**:
- Experienced player consensus from multiple sources
- Consistent patterns across community guides
- JP version mechanics (if confirmed unchanged)

### **Tier 3 Evidence (Insufficient)**:
- Single-source claims
- Theoretical calculations without testing
- JP-only data without Global confirmation

---

## 🚫 **Implementation Gate**

**No Phase 4A implementation will proceed without**:
1. **Tier 1 evidence** for aptitude multipliers
2. **Tier 1 evidence** for skill activation formula  
3. **Clear documentation** of sources and confidence levels
4. **Fallback plan** if enhanced data proves inaccurate

---

## 📋 **Data Collection Plan**

### **Priority 1: Aptitude Multipliers**
- Research GameTora Global mechanics section
- Check Reddit /r/UmaMusume for Global-specific testing
- Look for official Cygames Global documentation
- Verify against known JP mechanics

### **Priority 2: Skill Activation Rates**
- Find Global-specific skill testing data
- Cross-reference multiple sources for formula validation
- Test statistical significance of claimed formula

### **Priority 3: Training Mechanics**
- Verify current static thresholds are accurate
- Check for any Global-specific training changes
- Validate efficiency curves and diminishing returns

---

**Status**: Awaiting user research validation before proceeding with any Phase 4A implementation.