# Uma Musume Pretty Derby Web App

A comprehensive Progressive Web Application for Uma Musume Pretty Derby character planning and training optimization.

## 🚀 v1.9.0 - Research-Based Training Algorithm & Enhanced UX!

**MAJOR UPDATE: Professional Training Recommendations with Sticky Header Design:**
- 🧠 **Research-Based Algorithm** - Complete training system overhaul based on Franco Lopez and Global Reference research
- 📌 **Sticky Training Header** - Training Settings always visible above tabs with Distance, Running Style, and Character Mood selectors
- 🔄 **Bidirectional Sync** - Header controls sync with main Training Settings module automatically
- ⚖️ **Diminishing Returns** - Training values properly decrease as stats increase (100+ gets 80%, 250+ gets 50%, etc.)
- 🎯 **Smart Prioritization** - Dynamic stat priorities with distance-specific guts thresholds and multi-context awareness
- 🌈 **Rainbow Training** - Frequency calculations based on support deck composition (1-6 cards = 8%-50% chance)
- 🔧 **Enhanced Reliability** - Fixed 0-value recommendations, improved stat reactivity, clean integer display
- 🛠️ **Debug System** - Professional debugging tools with file export for development

## 🎉 Previous Major Updates

### v1.8.2 - Comprehensive Skills System
- **50+ Skills Database** with detailed effects, activation conditions, and competitive tier rankings (S/A/B/C)
- **Strategy-Specific Recommendations** that adapt to running style and distance
- **29 Character Unique Skills** with strategic assessments

### v1.8.1 - Cross-Tab Functionality  
- **Universal Stat Management** - Quick Import and editing work across all tabs
- **Training Algorithm Fixes** - Resolved critical bugs in recommendation calculations

### v1.8.0 - Complete Support Card System
- **100% Implementation Complete** - 117/117 support cards with full level progression
- **Revolutionary Tier Classification** - 6-tier SSR and 5-tier SR systems

## 🏗️ Project Structure

This project follows an organized modular structure for easy maintenance and development:

### 📁 Directory Organization

```
uma-musume-planner/
├── 📱 src/                          # Core Application
│   ├── index.html                   # Main application file
│   ├── manifest.json                # PWA manifest
│   ├── sw.js                        # Service worker
│   ├── js/                          # JavaScript modules
│   │   ├── app.js                   # Main application controller
│   │   ├── constants.js             # Character database & constants
│   │   ├── support-cards.js         # Support card database
│   │   ├── skills.js                # Skills database & recommendations
│   │   ├── debug-logger.js          # Debug logging system
│   │   └── components/              # UI components
│   │       ├── home-page.js         # Home page component
│   │       ├── character-planner.js # Original character planner
│   │       └── character-planner-redesigned.js # Modern tabbed interface
│   └── css/                         # Stylesheets
│       └── styles.css               # Custom CSS styles
│
├── 🎨 assets/                       # Static Assets
│   ├── images/                      # App assets (icons, backgrounds, logo)
│   └── umaicons/                    # Character portraits (school, secondary)
│
├── 📚 project-docs/                 # Documentation
│   ├── README.md                    # Project overview (you are here)
│   ├── CHANGELOG.md                 # Version history
│   └── LICENSE                      # License information
│
├── 🛠️ Development Tools
│   ├── debug-console-capture.js     # Console output capture script
│   └── DEBUG-GUIDE.md              # Debug system usage guide
│
└── 🔬 research/                     # Research & Reference Data
    └── extracted/                   # Game mechanics & strategy docs
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

## 📱 Application Features

### Core Features
- **30+ Characters** - Complete character database including collaboration variants
- **117 Support Cards** - Complete database with revolutionary 6-tier classification system
- **Research-Based Training** - Professional algorithm based on community research with diminishing returns
- **Advanced Skills System** - 50+ skills with strategy-specific recommendations and tier rankings
- **Sticky Training Header** - Always-visible training controls with bidirectional synchronization
- **6-Slot Deck Builder** - Advanced support card selection with search, filtering, and recommendations
- **Mobile-First Design** - Optimized for mobile devices with enhanced touch interactions
- **PWA Support** - Offline functionality and app installation
- **Debug System** - Professional debugging tools with file export capabilities

### Character Planner Interface
The character planner features a modern tabbed interface:

#### **Tabbed Organization**
- **Character Info Tab**: Character portrait, stats, aptitudes, and basic information
- **Support Cards Tab**: Complete 6-slot deck builder with search and filtering
- **Skills Tab**: Strategy-specific skill recommendations that adapt to running style and distance
- **Guide Tab**: Character-specific training strategies and tips

#### **Enhanced User Experience**
- **Sticky Training Header**: Distance, Running Style, and Character Mood always visible
- **Smooth Transitions**: Animated tab switching with preserved state
- **Focus Preservation**: Search inputs maintain focus while typing
- **Performance Optimized**: Local state management prevents unwanted re-renders
- **Mobile Responsive**: Touch-optimized interface with proper scaling

#### **Training Tools Section**
Below the tabs, organized into clean columns:
- **Left Column**: Quick Import tools and Stat Planning with enhanced controls
- **Right Column**: Training Recommendations with research-based calculations

### Support Card System - Revolutionary 6-Tier Classification
- **Complete Database**: 117 support cards across all rarities with level progression data
- **6-Tier SSR System**: Legendary (35%) > Ultra (30%) > Premium (25%) > Elite > Support > Standard (20%)
- **Revolutionary Discovery**: Legendary SSR tier with 35% friendship bonus
- **Complete Level Progression**: All cards with comprehensive level data
- **Interactive Deck Builder**: 6-slot card selection interface matching game layout
- **Advanced Search & Filtering**: Real-time filtering by name, character, rarity, type, and tier
- **Visual Card Display**: Color-coded cards with tier classifications and rarity badges

### Training Recommendation System
- **Research-Based Algorithm**: Based on Franco Lopez and Global Reference research
- **Multi-Context Awareness**: Detects survival/building/optimization training phases
- **Dynamic Stat Priorities**: Distance-specific guts thresholds (Sprint: 210, Mile: 260, Medium: 320, Long: 380)
- **Diminishing Returns**: Progressive penalties for balanced training (100+: 80%, 250+: 50%, etc.)
- **Rainbow Training**: Frequency calculations based on support deck composition
- **Energy Efficiency**: Analysis compared to G1/G2/G3 race benchmarks
- **Intelligent Recommendations**: All 5 training options show meaningful values (no more 0s)

## 🔧 Technical Details

### Technology Stack
- **Frontend:** Vanilla JavaScript (ES6+) with modular architecture
- **UI Framework:** Custom tabbed interface with smooth animations
- **Styling:** Tailwind CSS + Custom CSS
- **Architecture:** Component-based structure with advanced state management
- **PWA:** Service Worker + Web App Manifest
- **Build:** No build process - deployable as static files

### Performance
- **Module Loading**: Optimized JavaScript modules with Promise-based dependency management
- **State Management**: Dual-layer state system (global vs local) for optimal performance
- **Rendering**: Local state updates prevent unwanted re-renders
- **Search Optimization**: Real-time filtering with preserved user interactions
- **Memory Efficiency**: Smart event delegation and targeted content updates
- **Mobile-first Design**: Touch-optimized responsive interface

### Debug System
- **Console Capture**: Intercepts and saves console output to downloadable files
- **Strategic Debug Points**: Controlled debug logging with `window.DEBUG_TRAINING` flag
- **File Export**: Formatted JSON output with timestamps for analysis in VS Code
- **Non-Intrusive**: Debug system only runs when explicitly enabled

## 📖 Documentation

### For Users
- **Getting Started:** See this README
- **Updates:** See `CHANGELOG.md`
- **Debug Guide:** See `DEBUG-GUIDE.md`

### For Developers
- **Debug System:** `DEBUG-GUIDE.md` - Complete debugging workflow
- **Console Capture:** `debug-console-capture.js` - Copy/paste debugging script

## 🆕 Development Workflow

### Making Changes
1. **Application code:** Edit files in `src/`
2. **Documentation:** Update `README.md`, `CHANGELOG.md`
3. **Assets:** Add/modify files in `assets/`

### Debugging
1. **Enable debug mode:** `window.DEBUG_TRAINING = true`
2. **Capture console:** Use `debug-console-capture.js` script
3. **Analyze logs:** Debug files download automatically for analysis

### Testing
- Test locally with HTTP server
- Verify PWA functionality
- Check responsive design on mobile
- Test training recommendations with various stat combinations

## 🏆 Project Status

- **Current Version:** 1.9.0
- **Development Phase:** Research-Based Training System Complete
- **Last Updated:** 2025-01-08
- **Status:** Production Ready with Professional Training Algorithm

**Major Achievement**: Complete training system overhaul with research-based calculations, sticky header UX, diminishing returns, and professional debugging tools.

## 📄 License

This project is licensed under the terms specified in `project-docs/LICENSE`.

---

**Built with ❤️ for the Uma Musume community**