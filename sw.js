// Uma Musume Career Planner - Service Worker
// Version 1.0.1 - Image Loading Fix

const CACHE_NAME = 'uma-planner-v1.0.1';
const STATIC_CACHE_NAME = 'uma-static-v1.0.1';

// Files to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/version.json',
  '/css/styles.css',
  '/data/characters.json',
  '/data/thresholds.json',
  '/logo.png',
  '/nakayama_background.png',
  // Tailwind CSS CDN
  'https://cdn.tailwindcss.com'
];

// Character images - school uniforms
const SCHOOL_IMAGES = [
  '/umaicons/school/agnes_tachyon.webp',
  '/umaicons/school/air_groove.webp',
  '/umaicons/school/biwa_hayahide.webp',
  '/umaicons/school/daiwa_scarlet.webp',
  '/umaicons/school/eishin_flash.webp',
  '/umaicons/school/el_condor_pasa.webp',
  '/umaicons/school/gold_ship.webp',
  '/umaicons/school/grass_wonder.webp',
  '/umaicons/school/haru_urara.webp',
  '/umaicons/school/king_halo.webp',
  '/umaicons/school/maruzensky.webp',
  '/umaicons/school/marvelous_sunday.webp',
  '/umaicons/school/matikanefukukitaru.webp',
  '/umaicons/school/mayano_top_gun.webp',
  '/umaicons/school/mejiro_mcqueen.webp',
  '/umaicons/school/mejiro_ryan.webp',
  '/umaicons/school/mihono_bourbon.webp',
  '/umaicons/school/nice_nature.webp',
  '/umaicons/school/oguri_cap.webp',
  '/umaicons/school/rice_shower.webp',
  '/umaicons/school/sakura_bakushin_o.webp',
  '/umaicons/school/silence_suzuka.webp',
  '/umaicons/school/special_week.webp',
  '/umaicons/school/super_creek.webp',
  '/umaicons/school/symboli_rudolf.webp',
  '/umaicons/school/taiki_shuttle.webp',
  '/umaicons/school/tokai_teio.webp',
  '/umaicons/school/vodka.webp',
  '/umaicons/school/winning_ticket.webp',
  '/umaicons/school/yukino_bijin.webp',
  '/umaicons/school/tm_opera_o.webp'
];

// Character images - secondary outfits
const SECONDARY_IMAGES = [
  '/umaicons/secondary/agnes_tachyon.webp',
  '/umaicons/secondary/air_groove.webp',
  '/umaicons/secondary/daiwa_scarlet.webp',
  '/umaicons/secondary/eishin_flash.webp',
  '/umaicons/secondary/el_condor_pasa.webp',
  '/umaicons/secondary/gold_ship.webp',
  '/umaicons/secondary/grass_wonder.webp',
  '/umaicons/secondary/haru_urara.webp',
  '/umaicons/secondary/king_halo.webp',
  '/umaicons/secondary/marvelous_sunday.webp',
  '/umaicons/secondary/matikanefukukitaru.webp',
  '/umaicons/secondary/mayano_top_gun.webp',
  '/umaicons/secondary/mejiro_ryan.webp',
  '/umaicons/secondary/sakura_bakushin_o.webp',
  '/umaicons/secondary/super_creek.webp',
  '/umaicons/secondary/vodka.webp',
  '/umaicons/secondary/winning_ticket.webp',
  '/umaicons/secondary/yukino_bijin.webp',
  '/umaicons/secondary/biwa_hayahide.webp',
  '/umaicons/secondary/maruzensky.webp',
  '/umaicons/secondary/mejiro_mcqueen.webp',
  '/umaicons/secondary/mihono_bourbon.webp',
  '/umaicons/secondary/nice_nature.webp',
  '/umaicons/secondary/oguri_cap.webp',
  '/umaicons/secondary/rice_shower.webp',
  '/umaicons/secondary/silence_suzuka.webp',
  '/umaicons/secondary/special_week.webp',
  '/umaicons/secondary/symboli_rudolf.webp',
  '/umaicons/secondary/taiki_shuttle.webp',
  '/umaicons/secondary/tm_opera_o.webp',
  '/umaicons/secondary/tokai_teio.webp'
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
        return cache.addAll(STATIC_ASSETS);
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
  const isImageRequest = event.request.url.includes('/umaicons/') || 
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
    icon: '/logo.png',
    badge: '/logo.png',
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