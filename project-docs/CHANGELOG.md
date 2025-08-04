# Changelog

All notable changes to the Uma Musume Pretty Derby Web App will be documented in this file.

## [1.9.0] - 2025-01-08

### 🚀 MAJOR UPDATE: Research-Based Training Algorithm & Enhanced UX

### Added
- **Research-Based Training Recommendations** - Complete algorithm overhaul based on Franco Lopez and Global Reference research
  - Multi-context awareness: Detects survival/building/optimization training phases
  - Dynamic stat priorities with distance-specific guts thresholds (Sprint: 210, Mile: 260, Medium: 320, Long: 380)
  - Rainbow training frequency calculations (1 card = 8%, up to 50% with 6 cards)
  - Energy efficiency analysis compared to G1/G2/G3 race benchmarks
  - Educational explanations with detailed reasoning for each recommendation
- **Sticky Training Settings Header** - Training controls always visible above tabs
  - Distance, Running Style, and Character Mood selectors in header
  - Bidirectional synchronization with main Training Settings module
  - Quick Recommendations display with "Train [Stat]" format
- **Diminishing Returns System** - Training values decrease appropriately as stats increase
  - Progressive penalties: 100+ (80%), 150+ (70%), 200+ (60%), 250+ (50%), 300+ (40%), 350+ (30%), 400+ (20%)
  - Applied to both primary and secondary stat gains
  - Ensures balanced training recommendations that reflect real gameplay strategy
- **Debug Logging System** - Professional debugging tools for development
  - Console capture script that saves output to downloadable files
  - Strategic debug points with `window.DEBUG_TRAINING` flag
  - Formatted JSON output with timestamps for easy analysis

### Fixed
- **Training Value Calculation** - Resolved critical issues where 4th/5th recommendations showed 0 value
  - Implemented minimum value floors (5+ points) for all training options
  - Fixed property access issues in calculation layers
  - Removed excessive risk penalties that were destroying training values
- **Decimal Display** - Removed unnecessary `.0` from training values (e.g., "125.0" → "125")
- **Stat Reactivity** - Training recommendations now properly update when individual stats change
  - Fixed issue where changing Wit from 98→180→250 didn't affect training values
  - Algorithm now correctly prioritizes critical deficits over high stats

### Enhanced
- **Training Algorithm Architecture** - Six-session implementation with modular design
  - Session 1: Multi-Context Awareness (training phases, character analysis, deck context)
  - Session 2: Dynamic Threshold System (research-based stat priorities)
  - Session 3: Efficiency Engine (rainbow bonuses, energy efficiency, skill points)
  - Removed Sessions 4-6: Risk assessment, explanations, and fallbacks (simplified for better performance)
- **User Experience** - Streamlined interface for frequent training adjustments
  - Eliminated need to scroll to bottom for Training Settings during gameplay
  - Character mood integrated into sticky header for complete training context
  - Clean integer display without decimal places

### Technical Improvements
- **Error Handling** - Robust fallback systems prevent training calculations from failing
- **Performance** - Removed unnecessary risk assessment layer (no UI controls for energy/mood)
- **Code Quality** - Cleaned up debug statements while maintaining strategic debug points
- **Documentation** - Complete DEBUG-GUIDE.md with usage instructions

## [1.8.1] - 2025-07-28

### 🚀 MAJOR UPDATE: Cross-Tab Stat Management & Training Algorithm Fixes

### Added
- **Universal Quick Import** - Quick Import functionality works consistently across all tabs
- **Cross-Tab Stat Editing** - Double-click stat editing works on all tabs with immediate updates
- **Smart State Management** - Automatic detection of global vs local state update mechanisms

### Fixed
- **Training Recommendations Algorithm** - Fixed major bug where training showed 0 value when stats were above threshold
  - Algorithm now values stat gains even when above target thresholds
  - Proper priority weighting: deficit filling (2.0x) > surplus gains (0.8x) > secondary stats
- **Cross-Tab Event Listeners** - Event listeners now persist correctly when switching between tabs
- **Support Card Effects Integration** - Training recommendations properly account for support card bonuses

### Enhanced
- **State Update Logic** - Uses global `updateAppState()` when available, falls back to local updates
- **Performance Status Updates** - Performance Status boxes update immediately across all tabs

## [1.8.0] - 2025-07-27

### 🎉 MAJOR MILESTONE: Complete Support Card Level Selection System

### Added
- **Complete Level Progression Data** - All 117 support cards now have complete level progression data
- **13 Missing Cards Added** - Added level progression for all previously problematic cards

### Fixed
- **Level Selection Issue** - All cards now show complete clickable level grids instead of only level 1
- **ID Mismatches** - Fixed critical ID mismatches between support-cards and level-progression modules
- **Scroll Position Jumping** - Support card selection container preserves scroll position

### Changed
- **Database Completion** - Achieved 100% support card implementation:
  - R cards: 61/61 complete (9 levels each)
  - SR cards: 26/26 complete (10 levels each)
  - SSR cards: 30/30 complete (11 levels each)

## [1.7.0] - 2025-07-27

### Added
- Support Card Level Progression Implementation (93.7% complete)
- Revolutionary tier classification systems
- Modular database architecture

### Previous versions
- See git history for detailed version information prior to changelog implementation