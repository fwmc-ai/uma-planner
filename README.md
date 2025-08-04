# Uma Musume Pretty Derby Web App

A comprehensive Progressive Web Application for Uma Musume Pretty Derby character planning and training optimization.

## 🚀 v1.8.2 - Comprehensive Skills System & Enhanced Recommendations!

**MAJOR UPDATE: Revolutionary Skills Database & Strategy-Specific Recommendations:**
- 🎯 **Comprehensive Skills Database** - 50+ documented skills with detailed effects, activation conditions, and competitive tier rankings (S/A/B/C)
- ⚡ **Strategy-Specific Recommendations** - Dynamic skill recommendations that change based on running style (Front Runner, Pace Chaser, Late Surger, End Closer)
- 📊 **Distance-Based Priorities** - Smart skill suggestions that adapt to target distance (Sprint/Mile/Medium/Long) with strategic analysis
- 🔧 **Real-Time Updates** - Skills recommendations update instantly when changing Training Settings (distance/style selectors)
- 📚 **Research-Based Data** - Built from comprehensive analysis of Global Reference Documents with quantified skill effects
- 🎲 **29 Character Unique Skills** - Complete database of character-specific ultimate skills with strategic assessments
- 🧠 **Intelligent Categorization** - Essential/Recommended/Conditional skill organization with detailed reasoning and effect descriptions
- 🔄 **Enhanced Integration** - Seamless connection between Training Settings and Skills tab for cohesive character planning

## 🚀 v1.8.1 - Cross-Tab Functionality & Training Algorithm Overhaul!

**MAJOR UPDATE: Universal Stat Management & Accurate Training Recommendations:**
- 🔧 **CRITICAL FIX: Universal Stat Updates** - Quick Import and double-click editing now work instantly across all tabs
- 🔧 **CRITICAL FIX: Training Recommendations** - Fixed major algorithm bug where training showed 0 value when stats were above threshold
- ⚡ **Cross-Tab Compatibility** - Performance Status boxes and stat editing work seamlessly on Character Info, Support Cards, Skills, and Guide tabs
- 🧠 **Smart Algorithm** - Training recommendations now properly value stat gains even when above target (Speed training with SSR Speed deck shows correct high value)
- 🎯 **Enhanced Value System** - New priority weighting: deficit filling (2.0x) > surplus gains (0.8x) > secondary stats
- 🔄 **Intelligent Updates** - Smart state management with automatic fallback to manual refresh when needed

## 🎉 v1.8.0 - Support Card Level Selection System Complete!

**MILESTONE: 100% Complete Support Card Database with Full Level Selection:**
- 🎯 **100% Implementation Complete** - 117/117 support cards with complete level progression data
- ✅ **All SSR Cards Complete** - 30/30 SSR cards with 11-level progression (100% complete)
- ✅ **All SR Cards Complete** - 26/26 SR cards with 10-level progression (100% complete)  
- ✅ **All R Cards Complete** - 61/61 R cards with 9-level progression (100% complete)
- 🔧 **Fixed Level Selection** - All cards now show complete clickable level grids
- 📊 **Revolutionary Tier Systems** - Complete 6-tier SSR and 5-tier SR classification systems
- 🗂️ **Modular Database** - level-progression-r.js, level-progression-sr.js, level-progression-ssr.js modules
- 🎛️ **Enhanced UX** - Fixed scroll position preservation in support card selection

## 🏗️ Project Structure

This project follows an organized modular structure for easy maintenance and development:

### 📁 Directory Organization

```
uma-musume-planner/
├── 📱 src/                          # Core Application
│   ├── index.html                   # Main application file
│   ├── manifest.json                # PWA manifest
│   ├── sw.js                        # Service worker
│   ├── package.json                 # Package configuration
│   ├── version.json                 # Version metadata
│   ├── js/                          # JavaScript modules
│   │   ├── app.js                   # Main application controller
│   │   ├── constants.js             # Character database & constants
│   │   ├── support-cards.js         # Support card database
│   │   ├── skills.js                # Comprehensive skills database & recommendations
│   │   ├── components/              # UI components
│   │   │   ├── home-page.js         # Home page component
│   │   │   ├── character-planner.js # Original character planner
│   │   │   └── character-planner-redesigned.js # Redesigned tabbed interface
│   │   └── [other modules]          # Additional modular architecture
│   └── css/                         # Stylesheets
│       └── styles.css               # Custom CSS styles
│
├── 🎨 assets/                       # Static Assets
│   ├── images/                      # App assets
│   │   ├── icons/                   # App icons (192px, 512px)
│   │   ├── backgrounds/             # Background images
│   │   └── logo.png                 # App logo
│   └── umaicons/                    # Character portraits
│       ├── school/                  # School uniform portraits
│       └── secondary/               # Secondary portraits
│
├── 📚 docs/                         # Documentation
│   ├── project/                     # Main project docs
│   │   ├── README.md                # Project overview (you are here)
│   │   ├── CHANGELOG.md             # Version history
│   │   ├── PROJECT_STATUS.md        # Current development status
│   │   └── LICENSE                  # License information
│   ├── development/                 # Development documentation
│   │   ├── CLAUDE.md                # AI development guidance
│   │   ├── PHASE_4A_DATA_VALIDATION_REQUIREMENTS.md
│   │   └── testing-notes.txt        # Development notes
│   └── data-reference/              # Data reference docs
│       ├── UMA_MUSUME_DATA_REFERENCE.md
│       └── SUPPORT_CARD_IMPLEMENTATION_TRACKER.md
│
├── 🔬 research/                     # Research & Meta Analysis
│   ├── support-cards/               # Support card documentation
│   │   ├── support-cards-r.md       # R rarity cards
│   │   ├── support-cards-sr.md      # SR rarity cards
│   │   └── support-cards-ssr.md     # SSR rarity cards
│   ├── skills-research-notes.md     # Comprehensive skills research & extraction notes
│   └── extracted/                   # Research documents
│       ├── Uma Musume Skill System (Global Version) Overview.md
│       ├── Unique Skills of Global Uma Musume Characters.md
│       └── [various research files] # Game mechanics & strategy docs
│
├── 🛠️ tools/                        # Development Tools
│   └── templates/                   # Update templates
│       ├── NEW_CHARACTER_TEMPLATE.md     # Character addition template
│       ├── NEW_SUPPORT_CARD_TEMPLATE.md  # Support card template
│       ├── META_RESEARCH_TEMPLATE.md     # Meta analysis template
│       └── UPDATE_WORKFLOW.md            # Complete update guide
│
└── 💾 backups/                      # Version Backups
    ├── v1.1.0-stable-baseline/     # Original baseline
    ├── v1.2.4-pre-global-cleanup/  # Pre-cleanup state
    └── v1.2.4-stable-baseline/     # Current stable baseline
```

## 🚀 Quick Start

### Running the Application

1. **Navigate to the src directory:**
   ```bash
   cd src/
   ```

2. **Start a local server:**
   ```bash
   npm start
   # or
   python -m http.server 3000
   # or
   npx http-server . -p 3000
   ```

3. **Open in browser:**
   - Visit `http://localhost:3000`
   - For PWA testing, ensure you're using HTTP server (not file://)

### Development Workflow

1. **Making Changes:**
   - Application code: Edit files in `src/`
   - Documentation: Update files in `docs/`
   - Assets: Add/modify files in `assets/`

2. **Adding New Content:**
   - Use templates in `tools/templates/`
   - Follow `tools/templates/UPDATE_WORKFLOW.md`

3. **Testing:**
   - Test locally with HTTP server
   - Verify PWA functionality
   - Check responsive design on mobile

## 📱 Application Features

### Current Features (v1.6.0)
- **30 Characters** - Complete character database including anime collaboration variants
- **Revolutionary 6-Tier Support Card System** - Complete SSR/SR/R card classification with level progression
- **Complete SSR Database** - All 29 SSR cards with Legendary tier discovery (35% friendship bonus)
- **Advanced Level Progression Analysis** - Complete level 1-50 progression data for all rarity tiers
- **105+ Support Cards** - Comprehensive support card database with revolutionary tier classifications
- **6-Slot Deck Builder** - Advanced support card selection with search, filtering, and recommendations
- **Intelligent Training System** - Enhanced stat planning with mood integration and card synergies
- **Revolutionary Skills System** - 50+ skills database with strategy-specific recommendations and real-time distance/style integration
- **Comprehensive Skills Database** - S/A/B/C tier rankings, quantified effects, and 29 character unique skills
- **Character-Specific Guides** - Detailed training strategies with support card recommendations
- **Mobile-First Design** - Optimized for mobile devices with enhanced touch interactions
- **PWA Support** - Offline functionality and app installation
- **Performance-Optimized Architecture** - Clean, maintainable modular code with advanced state management

### Character Database
- Complete Global release character data
- Accurate aptitudes, stats, and growth bonuses
- Training recommendations by character type
- Distance and running style optimization

### Character Planner Interface (v1.4.0 Redesign)
The character planner has been completely redesigned with a modern tabbed interface:

#### **Tabbed Organization**
- **Character Info Tab**: Character portrait, stats, aptitudes, and basic information
- **Support Cards Tab**: Complete 6-slot deck builder with search and filtering
- **Skills Tab**: Revolutionary skills system with strategy-specific recommendations that adapt to running style and distance
- **Guide Tab**: Character-specific training strategies and tips

#### **Enhanced User Experience**
- **Smooth Transitions**: Animated tab switching with preserved state
- **Focus Preservation**: Search inputs maintain focus while typing
- **Performance Optimized**: Local state management prevents unwanted re-renders
- **Mobile Responsive**: Touch-optimized interface with proper scaling

#### **Training Tools Section**
Below the tabs, organized into clean columns:
- **Left Column**: Quick Import tools and Stat Planning with enhanced controls
- **Right Column**: Character Mood selector and Training Recommendations

### Support Card System - Revolutionary 6-Tier Classification
- **Complete Database**: 105+ support cards across all rarities with level progression data
- **6-Tier SSR System**: Legendary (35%) > Ultra (30%) > Premium (25%) > Elite > Support > Standard (20%)
- **Revolutionary Discovery**: Legendary SSR tier with 35% friendship bonus (20.7% of SSR cards)
- **Complete Level Progression**: All SSR cards (29/29) with levels 1-50 progression data
- **Interactive Deck Builder**: 6-slot card selection interface matching game layout
- **Advanced Search & Filtering**: Real-time filtering by name, character, rarity, type, and tier
- **Visual Card Display**: Color-coded cards with tier classifications and rarity badges
- **Intelligent Recommendations**: Character-specific card suggestions based on tier analysis
- **Comprehensive Effects**: Complete support effects, stat gains, and friendship scaling documentation

## 🔧 Technical Details

### Technology Stack
- **Frontend:** Vanilla JavaScript (ES6+) with modular architecture
- **UI Framework:** Custom tabbed interface with smooth animations
- **Styling:** Tailwind CSS + Custom CSS
- **Architecture:** 12-module component-based structure with advanced state management
- **PWA:** Service Worker + Web App Manifest
- **Build:** No build process - deployable as static files

### Browser Support
- Modern browsers with ES6+ support
- Progressive Web App compatible browsers
- Mobile browsers (iOS Safari, Chrome Mobile)
- Offline functionality via Service Worker

### Performance
- **Module Loading**: 12 optimized JavaScript modules with Promise-based dependency management
- **State Management**: Dual-layer state system (global vs local) for optimal performance
- **Rendering**: Local state updates prevent unwanted re-renders and DOM duplication
- **Search Optimization**: Real-time filtering with preserved user focus and interactions
- **Memory Efficiency**: Smart event delegation and targeted content updates
- **Optimized Assets**: WebP images for character portraits
- **Efficient Caching**: Service worker strategy for offline functionality
- **Mobile-first Design**: Touch-optimized responsive interface

## 📖 Documentation

### For Users
- **Getting Started:** See this README
- **Features:** Check `docs/project/PROJECT_STATUS.md`
- **Updates:** See `docs/project/CHANGELOG.md`

### For Developers
- **Development Guide:** `docs/development/CLAUDE.md`
- **Update Process:** `tools/templates/UPDATE_WORKFLOW.md`
- **Templates:** All files in `tools/templates/`

### For Contributors
- **Data Reference:** Files in `docs/data-reference/`
- **Research:** Files in `research/`
- **Meta Analysis:** `tools/templates/META_RESEARCH_TEMPLATE.md`

## 🆕 Adding New Content

When new characters or support cards are released:

1. **Use the templates** in `tools/templates/`
2. **Follow the workflow** in `UPDATE_WORKFLOW.md`
3. **Test thoroughly** before committing changes
4. **Update documentation** as specified in templates

## 🏆 Project Status

- **Current Version:** 1.8.2
- **Development Phase:** Comprehensive Skills System Complete
- **Last Updated:** 2025-07-31
- **Status:** Production Ready with Revolutionary Skills Database

**Major Achievement**: Complete skills system overhaul with 50+ documented skills, strategy-specific recommendations, and real-time Training Settings integration.

For detailed project status and revolutionary discoveries, see `docs/project/PROJECT_STATUS.md`.

## 📄 License

This project is licensed under the terms specified in `docs/project/LICENSE`.

---

**Built with ❤️ for the Uma Musume community**