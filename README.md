# 🏇 Uma Musume Pretty Derby Career Planner

> **A comprehensive training optimization tool for Uma Musume Pretty Derby Global**

[![Version](https://img.shields.io/badge/version-1.2.3-blue.svg)](https://github.com/fwmc-ai/uma-planner/releases)
[![PWA](https://img.shields.io/badge/PWA-enabled-green.svg)](https://web.dev/progressive-web-apps/)
[![Mobile](https://img.shields.io/badge/mobile-optimized-brightgreen.svg)](https://fwmc-ai.github.io/uma-planner/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Live Application**: [https://fwmc-ai.github.io/uma-planner/](https://fwmc-ai.github.io/uma-planner/)

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start Guide](#-quick-start-guide)
- [How to Use](#-how-to-use)
- [Character Database](#-character-database)
- [Training System](#-training-system)
- [Technical Architecture](#-technical-architecture)
- [Development](#-development)
- [Contributing](#-contributing)
- [Changelog](#-changelog)

## 🎯 Overview

The Uma Musume Pretty Derby Career Planner is a **Progressive Web Application (PWA)** designed to help players optimize their character training and career planning strategies. Built with vanilla JavaScript and featuring a modular architecture, it provides comprehensive training recommendations based on real game mechanics.

### Why Use This Tool?

- **🎯 Optimize Training**: Get personalized recommendations based on character strengths and target goals
- **📊 Real-Time Analysis**: See exactly how your stats compare to optimal thresholds
- **📱 Mobile-First**: Perfect experience on phones, tablets, and desktop
- **🔄 Offline Ready**: Works without internet connection once loaded
- **🚀 Lightning Fast**: 93% reduced codebase with modular architecture

## ✨ Features

### 🏆 **Core Features**
- **Complete Character Database**: All 32 Global release characters with accurate data
- **Intelligent Training Recommendations**: Real Uma Musume mechanics-based advice
- **Interactive Stat Planning**: Visual controls with real-time threshold analysis
- **Multiple Running Style Support**: Characters display all viable running styles
- **Target-Based Optimization**: Distance and style-specific stat requirements

### 📱 **Mobile Experience**
- **Perfect Keyboard Persistence**: Search typing works flawlessly on mobile
- **Responsive Layout**: Optimized for all screen sizes
- **Touch-Friendly Controls**: Proper touch targets and smooth interactions
- **Custom Mobile Background**: Eliminates stretching on vertical screens

### 🎨 **User Interface**
- **Professional Design**: Clean, modern interface with intuitive navigation
- **Visual Character Portraits**: School and secondary costume support
- **Smart Search**: Real-time character filtering with highlighted results
- **Scroll-to-Top Navigation**: Smooth page navigation for long content

### ⚡ **Performance & Technical**
- **Progressive Web App**: Install to home screen, works offline
- **Modular Architecture**: 93% size reduction (2064 → 151 lines main file)
- **Zero Dependencies**: Pure vanilla JavaScript, no frameworks
- **Clean Console**: Production-ready with zero errors or warnings

## 🚀 Quick Start Guide

### **1. Access the Application**
Visit: **[https://fwmc-ai.github.io/uma-planner/](https://fwmc-ai.github.io/uma-planner/)**

### **2. Install as PWA (Optional)**
- **Mobile**: Tap "Add to Home Screen" in your browser menu
- **Desktop**: Click the install icon in your address bar
- **Benefits**: Faster loading, offline access, app-like experience

### **3. Start Planning**
1. **Browse Characters** on the home page
2. **Search** by name or filter by rarity
3. **Select a Character** to open the training planner
4. **Set Your Goals** using the target selectors
5. **Plan Your Stats** with the interactive controls

## 📱 How to Use

### **Home Page - Character Selection**

#### **Character Browser**
- **⭐⭐⭐ Characters**: 3-star premium characters with highest potential
- **⭐⭐ Characters**: 2-star characters with solid capabilities  
- **⭐ Characters**: 1-star characters perfect for beginners

#### **Search & Filter**
- **🔍 Search Box**: Type character names for instant filtering
- **🏫 School / ✨ Secondary**: Toggle between costume portraits
- **💡 Tip**: Search works in real-time - no need to press enter!

#### **Character Cards**
Each character card displays:
- **Character Portrait**: Visual representation with costume toggle
- **Running Styles**: All viable racing styles (Front, Pace, Late, End)
- **Surface Aptitudes**: Turf/Dirt performance grades (S/A/B/C/D/E/G)
- **Distance Aptitudes**: Sprint/Mile/Medium/Long performance grades
- **Fan Goal Thresholds**: Target fan counts for each career milestone

### **Character Planner - Training Optimization**

#### **Training Target Selection**
**Set your goals first** - this determines all recommendations:
- **Target Style**: Choose your preferred running style
  - **Front Runner**: Lead from the start
  - **Pace Setter**: Control the early pace
  - **Late Charger**: Sprint in the final stretch
  - **End Spurt**: Explosive final kick
- **Target Distance**: Select your focus distance
  - **Sprint**: 1000-1400m races
  - **Mile**: 1400-1800m races  
  - **Medium**: 1800-2500m races
  - **Long**: 2500m+ races

#### **Quick Import Stats**
**Fastest way to input your current stats:**
1. **Enter 5 numbers** in order: `Speed, Stamina, Power, Guts, Wisdom`
2. **Any format works**: `450 550 400 350 300` or `450, 550, 400, 350, 300`
3. **Press Enter** for instant import
4. **Reset to Base** button restores character's starting stats

#### **Interactive Stat Planning**
**Fine-tune your stats with precision:**
- **Slider Controls**: Drag for quick adjustments
- **+/- Buttons**: Precise incremental changes
- **Color-Coded Feedback**:
  - 🟢 **Green**: Above optimal threshold
  - 🟡 **Yellow**: Close to threshold (80%+)
  - 🔴 **Red**: Below recommended level
  - 🟠 **Orange**: Diminishing returns warning

#### **Training Recommendations**
**Smart recommendations based on your current stats:**
- **🥇 Priority Training**: Most important areas to focus
- **📈 Efficiency Analysis**: Best stat gains per training session
- **⚠️ Warnings**: Alerts for over-investment in stats
- **🎯 Target Guidance**: How close you are to optimal builds

#### **Performance Analysis**
**Real-time stat evaluation:**
- **Threshold Comparison**: Your stats vs. optimal requirements
- **Efficiency Warnings**: Diminishing returns notifications
- **Fan Goal Progress**: Track your career milestone progress

### **Character-Specific Advice**
**Personalized recommendations for each character:**
- **Natural Strengths**: What this character excels at
- **Training Priorities**: Which stats to focus on first
- **Style Recommendations**: Best running styles for this character
- **Distance Optimization**: Ideal race distances

### **Skill Recommendations**
**Strategic skill selection guidance:**
- **Essential Skills**: Must-have skills for your build
- **Situational Skills**: Useful in specific scenarios
- **Style-Specific**: Skills that complement your running style
- **Distance-Specific**: Skills optimized for your target distance

## 🗃️ Character Database

### **Complete Global Release Roster (32 Characters)**

#### **⭐⭐⭐ Premium Characters (15)**
High-potential characters with exceptional abilities:
- Special Week, Silence Suzuka, Tokai Teio, Vodka, Daiwa Scarlet
- Gold Ship, Symboli Rudolf, TM Opera O, Mejiro McQueen, Maruzensky
- Agnes Tachyon, Mihono Bourbon, Biwa Hayahide, El Condor Pasa, Grass Wonder

#### **⭐⭐ Solid Characters (9)**  
Reliable characters with strong capabilities:
- Oguri Cap, Taiki Shuttle, Mejiro Ryan, King Halo, Air Groove
- Super Creek, Matikanefukukitaru, Mayano Top Gun, Winning Ticket

#### **⭐ Starter Characters (8)**
Perfect for beginners and budget builds:
- Haru Urara, Nice Nature, Sakura Bakushin O, Yukino Bijin
- Marvelous Sunday, Rice Shower, Eishin Flash, TM Opera O

### **Data Accuracy**
- ✅ **100% Accurate**: All data matches Global release exactly
- ✅ **Real Stats**: Actual base stats, aptitudes, and fan goals
- ✅ **Current Meta**: Up-to-date with latest game versions
- ✅ **Verified Skills**: Confirmed skill recommendations from gameplay data

## 🎓 Training System

### **Stat Thresholds**
Each distance/style combination has optimal stat requirements:

#### **Sprint Races (1000-1400m)**
- **Speed**: 1000+ (critical for early acceleration)
- **Power**: 800+ (burst performance)
- **Stamina**: 400+ (sufficient for short distance)

#### **Mile Races (1400-1800m)**  
- **Speed**: 900+ (acceleration and top speed)
- **Stamina**: 500+ (endurance for longer distance)
- **Power**: 700+ (consistent performance)

#### **Medium Races (1800-2500m)**
- **Stamina**: 600+ (endurance critical)
- **Speed**: 800+ (still important for positioning)
- **Power**: 600+ (sustained performance)

#### **Long Races (2500m+)**
- **Stamina**: 700+ (maximum endurance needed)
- **Guts**: 400+ (mental fortitude for long races)
- **Power**: 500+ (consistent pace maintenance)

### **Training Efficiency**
**Diminishing Returns Thresholds:**
- **Speed**: Efficiency drops after 1200
- **Guts**: Over-investment after 400  
- **Wisdom**: Limited benefit after 400
- **Stamina**: Varies by distance, excess wastes training

### **Smart Training Advisor**
The planner calculates optimal training paths based on:
- **Character's Natural Growth**: Some characters gain stats faster
- **Current Stat Levels**: Prioritizes biggest gaps first
- **Target Requirements**: Focuses on your chosen distance/style
- **Efficiency Curves**: Avoids over-investment in capped stats

## 🏗️ Technical Architecture

### **Modern Web Technologies**
- **Vanilla JavaScript**: No frameworks, pure ES6+ with modules
- **Tailwind CSS**: Utility-first styling for rapid development
- **Progressive Web App**: Service worker, manifest, offline support
- **Responsive Design**: Mobile-first with desktop enhancements

### **Modular Architecture**
**10 Organized JavaScript Modules:**
```
js/
├── module-loader.js          # Custom module loading system
├── constants.js              # Character database and configuration  
├── utils.js                  # Core utility functions
├── data-helpers.js           # Data processing and filtering
├── skills.js                 # Skill recommendation system
├── character-advice.js       # Character training advice
├── state.js                  # Application state management
├── events.js                 # Event handling and delegation
├── app.js                    # Application controller
└── components/
    ├── home-page.js          # Home page UI component
    └── character-planner.js  # Character planner UI component
```

### **Performance Optimizations**
- **93% Size Reduction**: Main file reduced from 2064 to 151 lines
- **Module Loading**: Promise-based dependency management
- **Event Delegation**: Performance-optimized event handling
- **Service Worker**: Intelligent caching for offline use
- **Mobile Optimization**: Enhanced touch and keyboard handling

### **Browser Compatibility**
- **Chrome 80+**: Full feature support
- **Firefox 75+**: Full feature support  
- **Safari 13+**: Full feature support
- **Edge 80+**: Full feature support
- **Mobile Browsers**: Optimized for iOS Safari and Android Chrome

## 🛠️ Development

### **Local Development Setup**

#### **Prerequisites**
- Modern web browser
- Local web server (recommended: Live Server VS Code extension)

#### **Getting Started**
```bash
# Clone the repository
git clone https://github.com/fwmc-ai/uma-planner.git

# Navigate to project directory
cd uma-planner

# Open with Live Server or your preferred local server
# Visit: http://localhost:5500 (or your server's URL)
```

#### **Project Structure**
```
uma-planner/
├── index.html                # Main application entry point
├── manifest.json            # PWA manifest
├── sw.js                    # Service worker
├── css/
│   └── styles.css           # Custom styles and mobile optimizations
├── js/                      # Modular JavaScript architecture
├── umaicons/               # Character portrait images
│   ├── school/             # School uniform portraits
│   └── secondary/          # Secondary costume portraits
├── backups/                # Version backups and documentation
└── docs/                   # Additional documentation
```

### **Development Guidelines**

#### **Code Style**
- **ES6+ JavaScript**: Modern syntax with module imports
- **Strict Mode**: All modules use 'use strict'
- **IIFE Pattern**: Modules wrapped in immediately invoked function expressions
- **No Dependencies**: Pure vanilla JavaScript, no external libraries

#### **Architecture Principles**
- **Modular Design**: Each feature in its own module
- **State Management**: Centralized state with `updateAppState()`
- **Event Delegation**: Global event handling for performance
- **Component Pattern**: Reusable UI components

#### **Mobile-First Development**
- **Touch Targets**: Minimum 44px for accessibility
- **Responsive Breakpoints**: Mobile-first with desktop enhancements
- **Performance**: Optimized for mobile devices and slower connections

### **Build Process**
This project uses **no build tools** by design:
- **Direct Deployment**: Files can be served directly
- **No Compilation**: Pure HTML/CSS/JS
- **CDN Dependencies**: Tailwind CSS loaded via CDN
- **Service Worker**: Handles caching and offline functionality

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Development Standards**
- **Code Quality**: Follow existing patterns and conventions
- **Testing**: Manually test all changes across devices
- **Documentation**: Update README and CHANGELOG for significant changes
- **Mobile Testing**: Verify mobile functionality on real devices

### **Areas for Contribution**
- **Character Data**: Updates for new Global release characters
- **Skill Database**: Expanded skill recommendations
- **UI/UX**: Design improvements and accessibility enhancements
- **Performance**: Further optimizations and caching improvements
- **Features**: New training tools and analysis features

## 📋 Changelog

### **Version 1.2.3 - Enhanced Mobile Experience (2025-07-16)**
- **🔧 Fixed**: Critical mobile search keyboard persistence issue
- **🎨 Enhanced**: Unified bubble design system with perfect alignment  
- **🚀 Added**: Scroll-to-top navigation and clickable logo
- **📱 Improved**: Target selector workflow and responsive layout
- **⚡ Optimized**: Mobile browser compatibility and touch handling

### **Version 1.2.2 - Modular Architecture (2025-07-15)**
- **🏗️ Major**: Complete modular architecture transformation (93% size reduction)
- **🎨 Added**: Custom mobile background eliminates stretching/blurring
- **🐛 Fixed**: All console errors and warnings resolved
- **📱 Enhanced**: Mobile experience optimization
- **🔧 Improved**: Service worker caching and offline functionality

[View Complete Changelog](CHANGELOG.md)

## 📞 Support & Feedback

### **Getting Help**
- **Issues**: [GitHub Issues](https://github.com/fwmc-ai/uma-planner/issues)
- **Documentation**: Check this README and [Project Status](PROJECT_STATUS.md)
- **Live Demo**: [https://fwmc-ai.github.io/uma-planner/](https://fwmc-ai.github.io/uma-planner/)

### **Reporting Bugs**
When reporting bugs, please include:
- **Browser and version**
- **Device type** (mobile/desktop)
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** if applicable

### **Feature Requests**
We love hearing your ideas! Please:
- **Check existing issues** to avoid duplicates
- **Describe the problem** your feature would solve
- **Explain the proposed solution**
- **Consider the impact** on mobile users

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Uma Musume Pretty Derby** by Cygames for the amazing game
- **Global Community** for character data verification and testing
- **Contributors** who helped improve the application
- **Mobile Users** who provided feedback for the enhanced experience

---

<div align="center">

**🏇 Ready to optimize your Uma Musume training? [Start Planning Now!](https://fwmc-ai.github.io/uma-planner/) 🏇**

*Built with ❤️ for the Uma Musume Global community*

</div>