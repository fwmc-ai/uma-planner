# Changelog

All notable changes to the Uma Musume Pretty Derby Web App will be documented in this file.

## [1.8.1] - 2025-07-28

### 🚀 MAJOR UPDATE: Cross-Tab Stat Management & Training Algorithm Fixes

### Added
- **Universal Quick Import**: Quick Import functionality now works consistently across all tabs (Character Info, Support Cards, Skills, Guide)
- **Cross-Tab Stat Editing**: Double-click stat editing now works on all tabs with immediate updates
- **Enhanced Debug Output**: Comprehensive debugging for training recommendations algorithm
- **Smart State Management**: Automatic detection of global vs local state update mechanisms

### Fixed
- **🔧 CRITICAL: Immediate Stat Updates** - Stats now update instantly when changed via Quick Import or double-click editing on any tab
- **🔧 CRITICAL: Training Recommendations Algorithm** - Fixed major bug where training showed 0 value when stats were above threshold
  - Speed training with SSR speed deck now properly shows high value instead of 0
  - Algorithm now values stat gains even when above target thresholds
  - Proper priority weighting: deficit filling (2.0x) > surplus gains (0.8x) > secondary stats
- **Cross-Tab Event Listeners** - Event listeners now persist correctly when switching between tabs
- **Performance Status Updates** - Performance Status boxes now update immediately across all tabs
- **Support Card Effects Integration** - Training recommendations now properly account for support card multipliers and rainbow training bonuses

### Enhanced
- **Training Value Calculation**: Completely redesigned algorithm with proper value weighting
  - Above-threshold gains: 0.8x multiplier (was 0x - this was the bug!)
  - Deficit filling: 2.0x multiplier for critical stats
  - Secondary stats: Proportional weighting based on need
  - Support card bonuses: Properly integrated into calculations
- **State Update Logic**: Uses global `updateAppState()` when available, falls back to local updates
- **Tab Content Refresh**: Intelligent tab re-rendering only when automatic updates fail

### Technical Improvements
- **Unique ID System**: Each Performance Status instance now has unique identifiers to prevent conflicts
- **Container Detection**: Improved DOM element detection with fallback mechanisms
- **Event Listener Cleanup**: Proper cleanup and re-attachment of event listeners during updates
- **Debug Instrumentation**: Comprehensive logging for troubleshooting training calculations

## [1.8.0] - 2025-07-27

### 🎉 MAJOR MILESTONE: Complete Support Card Level Selection System

### Added
- **Complete Level Progression Data** - All 117 support cards now have complete level progression data
- **13 Missing Cards Added** - Added level progression for all previously problematic cards:
  - Biko Pegasus (R) - 9 levels complete
  - Special Week (Speed) (SSR) - 11 levels complete
  - Oguri Cap (SSR) - 11 levels complete
  - Nice Nature (Guts) (R) - 9 levels complete
  - Meisho Doto (R) - 9 levels complete
  - Matikanefukukitaru (R) - 9 levels complete
  - Marvelous Sunday (R) - 9 levels complete
  - Mejiro Dober (R) - 9 levels complete
  - Daiwa Scarlet (SR) - 10 levels complete

### Fixed
- **Level Selection Issue** - All cards now show complete clickable level grids instead of only level 1
- **ID Mismatches** - Fixed critical ID mismatches between support-cards and level-progression modules:
  - Twin Turbo (SSR): `twin_turbo_speed_ssr` → `twin_turbo_ssr`
  - Biko Pegasus (SSR): `biko_pegasus_ssr` → `biiko_pegasus_ssr`
  - Mejiro Palmer (SSR): `mejiro_palmer_guts_ssr` → `mejiro_palmer_ssr`
  - Matikanetannhauser (SSR): `matikanetannhauser_guts_ssr` → `matikanetannhauser_ssr`
- **Scroll Position Jumping** - Support card selection container now preserves scroll position when selecting cards
- **Spelling Consistency** - Corrected "Biiko Pegasus" to "Biko Pegasus" in display names

### Changed
- **Database Completion** - Achieved 100% support card implementation:
  - R cards: 61/61 complete (9 levels each: 1, 5, 10, 15, 20, 25, 30, 35, 40)
  - SR cards: 26/26 complete (10 levels each: 1, 5, 10, 15, 20, 25, 30, 35, 40, 45)
  - SSR cards: 30/30 complete (11 levels each: 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50)
- **Version Bump** - Updated to v1.8.0 with cache clear requirement
- **Asset Count** - Updated screenshot count to 1,170 total processed images

### Technical Details
- **Data Extraction** - Systematic analysis of level 1 and max level screenshots for accurate progression values
- **Modular Architecture** - Maintained consistent data structure across R/SR/SSR level progression modules
- **Effect Implementation** - Complete support effects including friendship bonuses, specialty priority, unique effects
- **Unlock Logic** - Proper "Unlocked at level X" restrictions for each effect type
- **Cross-Module Integration** - Ensured compatibility between support-cards and level-progression modules

---

## [1.7.0] - 2025-07-27

### Added
- Support Card Level Progression Implementation (93.7% complete)
- Revolutionary tier classification systems
- Modular database architecture

### Previous versions
- See git history for detailed version information prior to changelog implementation