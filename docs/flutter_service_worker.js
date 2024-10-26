'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1d56ed824ac373b10df9580749791a86",
"version.json": "009c9e65172e010890f7f65fde438006",
"splash/img/dark-1x.gif": "09301da74c1aa56d9c67a1eb62e692a2",
"splash/img/light-1x.gif": "09301da74c1aa56d9c67a1eb62e692a2",
"splash/img/light-2x.gif": "ecdddb8894eadd261ef50b5443a69ca9",
"splash/img/dark-4x.gif": "886c9f526674e8d4fde9a3957555166f",
"splash/img/light-3x.gif": "b1d44263a372f6995ae4a1d82c385063",
"splash/img/dark-3x.gif": "b1d44263a372f6995ae4a1d82c385063",
"splash/img/light-4x.gif": "886c9f526674e8d4fde9a3957555166f",
"splash/img/dark-2x.gif": "ecdddb8894eadd261ef50b5443a69ca9",
"index.html": "c75f7ac8cc38f0def826ce9c615ccac9",
"/": "c75f7ac8cc38f0def826ce9c615ccac9",
"main.dart.js": "0c3ac326089c3d2698c6d2b838b5b937",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "e1df774ef8747a91653e1b9d295d3d23",
"icons/Icon-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-maskable-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-maskable-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"icons/Icon-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"manifest.json": "fd51365a9066e229c94d2c43fc49bf94",
"assets/AssetManifest.json": "0b4b69ac2ac21103b5c31ee4d1a3100c",
"assets/NOTICES": "469388b376d6a09d9a169352ae959f40",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/AssetManifest.bin.json": "26142c1ed4a06953f8f633667fea5c65",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4420fe9886936e1f53dfec7f804783e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b5ccecc94516ddc8c07b60203a2e777c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b85583a200e2b418984fd458a0a46e2c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ed70e82944f723810e2d7a8607756b9c",
"assets/fonts/MaterialIcons-Regular.otf": "0bd60caf57fe203436aad2bf224db1f5",
"assets/assets/images/me.png": "e9ef1678afe302f03a41b5ba76eecbde",
"assets/assets/images/background-light.png": "e09fcb744cc50db47bb978b8d63a2e0b",
"assets/assets/images/loading-76.gif": "239568a8d02a9245a2d1bf6f0dd307e2",
"assets/assets/images/background-dark.png": "7cf88f41b50df091c9d9f115066f03c8",
"assets/assets/images/logo.svg": "df08988fdc848d0a0722655527f00dcd",
"assets/assets/projects/portfolio1.png": "3baffacb99cf020247d76980814d8d87",
"assets/assets/projects/portfolio.png": "91e9ac269d5f6bb3b69bb6f7073a484f",
"assets/assets/projects/ashghal.png": "d8e513220935fa1a7c1d473b4f848874",
"assets/assets/projects/bzzz.svg": "8487b10dd11ad95e938082044013bd2f",
"assets/assets/projects/bzzz1.png": "36efd751c60cc6c750e271a0dc531eda",
"assets/assets/projects/collectio.png": "8c324551762412ebb0a4a686d47de793",
"assets/assets/projects/bzzz_logo.png": "afa21840153143fac0bb1e38a85e606e",
"assets/assets/projects/tinderfood.png": "310b88e229fc42054988be594c3968e5",
"assets/assets/projects/bzz.jpg": "3b599b09bf0cbef5db929db7564b74be",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
