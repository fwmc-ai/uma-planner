/**
 * Uma Musume Career Planner - Module Loader
 * Handles loading and dependency management for all JavaScript modules
 */

// Module loading system for Uma Musume Career Planner
window.UmaModuleLoader = {
    loadedModules: new Set(),
    loadingModules: new Set(),
    moduleQueue: [],
    
    /**
     * Load a module with dependencies
     * @param {string} moduleName - Name of the module to load
     * @param {Array} dependencies - Array of dependency module names
     * @param {Function} callback - Callback to execute when module and dependencies are loaded
     */
    loadModule: function(moduleName, dependencies = [], callback = null) {
        if (this.loadedModules.has(moduleName)) {
            if (callback) callback();
            return Promise.resolve();
        }
        
        if (this.loadingModules.has(moduleName)) {
            return new Promise((resolve) => {
                const checkLoaded = () => {
                    if (this.loadedModules.has(moduleName)) {
                        if (callback) callback();
                        resolve();
                    } else {
                        setTimeout(checkLoaded, 10);
                    }
                };
                checkLoaded();
            });
        }
        
        this.loadingModules.add(moduleName);
        
        return this.loadDependencies(dependencies).then(() => {
            return this.loadScript(moduleName);
        }).then(() => {
            this.loadedModules.add(moduleName);
            this.loadingModules.delete(moduleName);
            if (callback) callback();
        }).catch((error) => {
            this.loadingModules.delete(moduleName);
            console.error(`Failed to load module ${moduleName}:`, error);
            throw error;
        });
    },
    
    /**
     * Load multiple dependencies
     * @param {Array} dependencies - Array of dependency module names
     */
    loadDependencies: function(dependencies) {
        const dependencyPromises = dependencies.map(dep => {
            return this.loadModule(dep);
        });
        
        return Promise.all(dependencyPromises);
    },
    
    /**
     * Load a script file
     * @param {string} moduleName - Name of the module/script to load
     */
    loadScript: function(moduleName) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `./js/${moduleName}.js`;
            script.type = 'text/javascript';
            
            script.onload = () => {
                console.log(`Module loaded: ${moduleName}`);
                resolve();
            };
            
            script.onerror = () => {
                reject(new Error(`Failed to load script: ${moduleName}`));
            };
            
            document.head.appendChild(script);
        });
    },
    
    /**
     * Initialize the module loading system
     */
    init: function() {
        console.log('Uma Musume Module Loader initialized');
        
        // Create global namespace for modules
        if (!window.Uma) {
            window.Uma = {};
        }
        
        // Helper function for modules to register themselves
        window.Uma.defineModule = function(name, dependencies, factory) {
            if (typeof dependencies === 'function') {
                factory = dependencies;
                dependencies = [];
            }
            
            return UmaModuleLoader.loadDependencies(dependencies).then(() => {
                const module = factory();
                window.Uma[name] = module;
                return module;
            });
        };
    },
    
    /**
     * Load all core modules in correct order
     */
    loadCoreModules: function() {
        const coreModules = [
            'constants',
            'utils', 
            'data-helpers',
            'stats',
            'training',
            'skills',
            'character-advice',
            'components/home-page',
            'components/character-planner',
            'state',
            'events',
            'app'
        ];
        
        return this.loadModulesSequentially(coreModules);
    },
    
    /**
     * Load modules sequentially (one after another)
     * @param {Array} moduleNames - Array of module names to load in order
     */
    loadModulesSequentially: function(moduleNames) {
        return moduleNames.reduce((promise, moduleName) => {
            return promise.then(() => {
                return this.loadModule(moduleName);
            });
        }, Promise.resolve());
    }
};

// Initialize the module loader
window.UmaModuleLoader.init();