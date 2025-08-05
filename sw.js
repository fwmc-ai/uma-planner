// Uma Musume Career Planner - Service Worker
// Version 1.9.2 - Mobile Experience Enhancement

const CACHE_NAME = 'uma-planner-v1.9.2-production';
const STATIC_CACHE_NAME = 'uma-static-v1.9.2-production';

// Files to cache for offline functionality  
const CACHE_BUST = '?v=1.9.2-' + Date.now();
const STATIC_ASSETS = [
  './',
  './index.html' + CACHE_BUST,
  './manifest.json' + CACHE_BUST,
  './version.json' + CACHE_BUST,
  './css/styles.css' + CACHE_BUST,
  './assets/images/logo.png',
  './assets/images/backgrounds/nakayama_background.png',
  './assets/images/backgrounds/mobile-background.png',
  // Tailwind CSS production version
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
];

// Character images - school uniforms and special variants
const SCHOOL_IMAGES = [
  // Special anime collaboration characters
  './assets/umaicons/special/beyond_the_horizon_tokai_teio.png',
  './assets/umaicons/special/end_of_skies_mejiro_mcqueen.png',
  // Regular school uniforms
  './assets/umaicons/school/agnes_tachyon.webp',
  './assets/umaicons/school/air_groove.webp',
  './assets/umaicons/school/biwa_hayahide.webp',
  './assets/umaicons/school/daiwa_scarlet.webp',
  './assets/umaicons/school/el_condor_pasa.webp',
  './assets/umaicons/school/gold_ship.webp',
  './assets/umaicons/school/grass_wonder.webp',
  './assets/umaicons/school/haru_urara.webp',
  './assets/umaicons/school/king_halo.webp',
  './assets/umaicons/school/maruzensky.webp',
  './assets/umaicons/school/matikanefukukitaru.webp',
  './assets/umaicons/school/mayano_top_gun.webp',
  './assets/umaicons/school/mejiro_mcqueen.webp',
  './assets/umaicons/school/mejiro_ryan.webp',
  './assets/umaicons/school/mihono_bourbon.webp',
  './assets/umaicons/school/nice_nature.webp',
  './assets/umaicons/school/oguri_cap.webp',
  './assets/umaicons/school/rice_shower.webp',
  './assets/umaicons/school/sakura_bakushin_o.webp',
  './assets/umaicons/school/silence_suzuka.webp',
  './assets/umaicons/school/special_week.webp',
  './assets/umaicons/school/super_creek.webp',
  './assets/umaicons/school/symboli_rudolf.webp',
  './assets/umaicons/school/taiki_shuttle.webp',
  './assets/umaicons/school/tokai_teio.webp',
  './assets/umaicons/school/vodka.webp',
  './assets/umaicons/school/winning_ticket.webp',
  './assets/umaicons/school/tm_opera_o.webp'
];

// Character images - secondary outfits
const SECONDARY_IMAGES = [
  './assets/umaicons/secondary/agnes_tachyon.webp',
  './assets/umaicons/secondary/air_groove.webp',
  './assets/umaicons/secondary/daiwa_scarlet.webp',
  './assets/umaicons/secondary/el_condor_pasa.webp',
  './assets/umaicons/secondary/gold_ship.webp',
  './assets/umaicons/secondary/grass_wonder.webp',
  './assets/umaicons/secondary/haru_urara.webp',
  './assets/umaicons/secondary/king_halo.webp',
  './assets/umaicons/secondary/matikanefukukitaru.webp',
  './assets/umaicons/secondary/mayano_top_gun.webp',
  './assets/umaicons/secondary/mejiro_ryan.webp',
  './assets/umaicons/secondary/sakura_bakushin_o.webp',
  './assets/umaicons/secondary/super_creek.webp',
  './assets/umaicons/secondary/vodka.webp',
  './assets/umaicons/secondary/winning_ticket.webp',
  './assets/umaicons/secondary/biwa_hayahide.webp',
  './assets/umaicons/secondary/maruzensky.webp',
  './assets/umaicons/secondary/mejiro_mcqueen.webp',
  './assets/umaicons/secondary/mihono_bourbon.webp',
  './assets/umaicons/secondary/nice_nature.webp',
  './assets/umaicons/secondary/oguri_cap.webp',
  './assets/umaicons/secondary/rice_shower.webp',
  './assets/umaicons/secondary/silence_suzuka.webp',
  './assets/umaicons/secondary/special_week.webp',
  './assets/umaicons/secondary/symboli_rudolf.webp',
  './assets/umaicons/secondary/taiki_shuttle.webp',
  './assets/umaicons/secondary/tm_opera_o.webp',
  './assets/umaicons/secondary/tokai_teio.webp'
];

// All resources to cache
const ALL_ASSETS = [...STATIC_ASSETS, ...SCHOOL_IMAGES, ...SECONDARY_IMAGES];

// Install event - cache essential assets first, images in background
self.addEventListener('install', (event) => {
  console.log('🏇 Uma Musume Planner SW: Installing...');
  
  event.waitUntil(
    // Cache critical assets first for fast app startup
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🏇 Uma Musume Planner SW: Caching critical app assets');
        // Cache files individually to handle missing files gracefully
        return Promise.all(
          STATIC_ASSETS.map(async (url) => {
            try {
              await cache.add(url);
              console.log(`🏇 Uma Musume Planner SW: Cached ${url}`);
            } catch (error) {
              console.warn(`🏇 Uma Musume Planner SW: Failed to cache ${url}:`, error.message);
            }
          })
        );
      })
      .then(() => {
        console.log('🏇 Uma Musume Planner SW: Critical assets cached, installing...');
        return self.skipWaiting();
      })
  );
  
  // Cache character images in background after critical assets
  // This prevents blocking app installation on large image downloads
  setTimeout(() => {
    caches.open(CACHE_NAME).then((cache) => {
      console.log('🏇 Uma Musume Planner SW: Background caching character images...');
      
      // Cache school images first (more commonly used)
      const cacheSchoolImages = SCHOOL_IMAGES.map(url => {
        return cache.add(url).catch(err => {
          console.warn(`🏇 Uma Musume Planner SW: Could not cache school image ${url}:`, err);
        });
      });
      
      Promise.allSettled(cacheSchoolImages).then(() => {
        console.log('🏇 Uma Musume Planner SW: School images cached');
        
        // Then cache secondary images
        const cacheSecondaryImages = SECONDARY_IMAGES.map(url => {
          return cache.add(url).catch(err => {
            console.warn(`🏇 Uma Musume Planner SW: Could not cache secondary image ${url}:`, err);
          });
        });
        
        Promise.allSettled(cacheSecondaryImages).then(() => {
          console.log('🏇 Uma Musume Planner SW: All character images cached');
        });
      });
    });
  }, 1000); // Wait 1 second after critical assets are cached
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🏇 Uma Musume Planner SW: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Delete old cache versions
              return cacheName.startsWith('uma-') && cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('🏇 Uma Musume Planner SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('🏇 Uma Musume Planner SW: Activation complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Enhanced fetch strategy with image optimization
  const isImageRequest = event.request.url.includes('/assets/umaicons/') || 
                         event.request.url.includes('.webp') || 
                         event.request.url.includes('.png') || 
                         event.request.url.includes('.jpg');

  if (isImageRequest) {
    // For images: Cache-first strategy with compression hints
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Fetch with compression preferences for images
          return fetch(event.request, {
            headers: {
              'Accept': 'image/webp,image/avif,image/*,*/*;q=0.8',
              'Accept-Encoding': 'gzip, deflate, br'
            }
          }).then((response) => {
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          }).catch(() => {
            // Return a placeholder or empty response for missing images
            return new Response('', { status: 404, statusText: 'Image not found' });
          });
        })
    );
  } else {
    // For non-images: Standard cache-first strategy
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request)
            .then((response) => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });

              return response;
            })
            .catch(() => {
              if (event.request.mode === 'navigate') {
                return caches.match('/index.html');
              }
              
              return new Response('Content not available offline', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                  'Content-Type': 'text/plain'
                })
              });
            });
        })
    );
  }
});

// Background sync for future features
self.addEventListener('sync', (event) => {
  console.log('🏇 Uma Musume Planner SW: Background sync triggered:', event.tag);
  
  if (event.tag === 'background-update') {
    event.waitUntil(
      // Future: Update character data, check for new content
      console.log('🏇 Uma Musume Planner SW: Background update completed')
    );
  }
});

// Push notifications (future feature)
self.addEventListener('push', (event) => {
  console.log('🏇 Uma Musume Planner SW: Push notification received');
  
  // Future: Handle push notifications for new characters, events, etc.
  const options = {
    body: 'New content available in Uma Musume Career Planner!',
    icon: '/assets/images/logo.png',
    badge: '/assets/images/logo.png',
    tag: 'uma-planner-update',
    data: {
      url: '/'
    }
  };

  event.waitUntil(
    self.registration.showNotification('Uma Musume Career Planner', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('🏇 Uma Musume Planner SW: Notification clicked');
  
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Message handling for client communication
self.addEventListener('message', (event) => {
  console.log('🏇 Uma Musume Planner SW: Message received:', event.data);
  
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
      case 'GET_VERSION':
        event.ports[0].postMessage({ version: CACHE_NAME });
        break;
      case 'CLEAR_CACHE':
        caches.delete(CACHE_NAME).then(() => {
          event.ports[0].postMessage({ success: true });
        });
        break;
      default:
        console.log('🏇 Uma Musume Planner SW: Unknown message type:', event.data.type);
    }
  }
});

console.log('🏇 Uma Musume Career Planner Service Worker loaded successfully');