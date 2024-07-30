'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dd79acdea23ca7805a423f273921c857",
"assets/AssetManifest.bin.json": "86355ac8aafa5204a4d6f0425c7db7c0",
"assets/AssetManifest.json": "1f7c740a4c8d23714c21cd531c2da01b",
"assets/assets/images/avatar.png": "5db32383d924bb6e53c5ae56005d77e1",
"assets/assets/images/beat.png": "28462f9edd0dec4e8c2e7a39bfee6eac",
"assets/assets/images/beat1.png": "fe5fb43159350c8852b85ccdd8542226",
"assets/assets/images/bgpng.png": "e88915f31afd25cd0cd56f01651d0d1e",
"assets/assets/images/bitcoin-btc-logo.png": "d6a21bc3c9efb83425341d0e319f8110",
"assets/assets/images/bnb.png": "9a9b0354149ff6f2ac01ce6c9c05df4b",
"assets/assets/images/bookmark.png": "405929716762e708c6a309d74f86cd3e",
"assets/assets/images/bubbles.png": "45cc5ca295e4c7df191629792c13f7ca",
"assets/assets/images/burger.png": "b4942f2eff7a787a7b28cce0ab6a937c",
"assets/assets/images/choose-your-meal.png": "1b892fb9eab2d1a2ec1643ff8c55775a",
"assets/assets/images/choose-your-payment-method.png": "69b0eaf3c75649c62e0e3a0834a9db59",
"assets/assets/images/clock.png": "838704fe3830b70156b1e42060e7a0a3",
"assets/assets/images/close.png": "5871fac4a4c4e3e08d6d952baea7b7bf",
"assets/assets/images/coke.png": "572fdf17b714ff4faffdb9431027b7ed",
"assets/assets/images/colorLogo.png": "85bceb16fe12eb2f323ffb4b4167abf0",
"assets/assets/images/dark_logo.png": "e3121450785d00b48a47133963465f66",
"assets/assets/images/dark_logoooo.png": "e93f2df0948e4197e4a1b597df6b4ebe",
"assets/assets/images/dinner.png": "f08d53d296e190f43cd9bb4f449df454",
"assets/assets/images/dish.png": "6434ddb840817a1ce633e3399bd5ac19",
"assets/assets/images/downarrow.png": "60689d67b8a6c2739d24f30cf9d4c745",
"assets/assets/images/drink.png": "160c6ace2a9339b30e1e572e1af69b9d",
"assets/assets/images/elephant.png": "ea0dc48a37201f7e203c3fb5a3763ff6",
"assets/assets/images/eth.png": "a52b7798229546d34bf59659c39c382d",
"assets/assets/images/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/images/fail.png": "be9598271a35cc4237ba187318acb801",
"assets/assets/images/fast-delivery.png": "07d8cfd9d7bfc4364eda0ab4ea119520",
"assets/assets/images/fire.png": "ada9698a705c38e971ebf17a796c5bd6",
"assets/assets/images/forgetPassword.png": "a229f4c355863eac24f3cdc2801c8559",
"assets/assets/images/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/images/home.png": "a08fd7c31b31195f4ddd3e5ab751b955",
"assets/assets/images/hotdog.png": "70d1c45508c7a9ed3a187e2473ef04e6",
"assets/assets/images/light_logo.png": "ef9a8be1ecc2fd9bad395b185fa27eca",
"assets/assets/images/light_logoo.png": "e435dcdbf713b754f78fff4fb557cfa2",
"assets/assets/images/logo.png": "7ac039185ffc9480b6b09ab5b1a38845",
"assets/assets/images/logowhite.png": "4ca3c52668e0e9035fc3ec021128ee0d",
"assets/assets/images/mushroom.png": "9c7ff8dd5a2c556f39a56997d2b2971d",
"assets/assets/images/oldbubbles.png": "20c5f60a412da2ae70dfdd335203936b",
"assets/assets/images/oldDark_logo.png": "747ed33948cbe44ac666b1532fdbc4df",
"assets/assets/images/oldfail.png": "2b5ce55dccf986197863e67bd64a6a26",
"assets/assets/images/oldLight_logo.png": "4db0c0c5f7292432bafe4ff91f39e46d",
"assets/assets/images/onBoardingImage1.png": "bef4337a00dd7919abcd03a712c26d67",
"assets/assets/images/onBoardingImage11.png": "6148cc5885d08eaf7fe373f1f6a2271d",
"assets/assets/images/onBoardingImage111.png": "50f3371bc922706e9f147650022c8141",
"assets/assets/images/onBoardingImage2.png": "7028f5b3a89b1efb84e2f4d23c84cc99",
"assets/assets/images/onBoardingImage22.png": "1021e64975bb5ec4cd2a218a52ba641a",
"assets/assets/images/onBoardingImage222.png": "cf8c6ae7f749de2c7bdf8c7983dfa4c8",
"assets/assets/images/onBoardingImage3.png": "e9f382374bb25d5cc94310368ddae0f9",
"assets/assets/images/onBoardingImage33.png": "aa29b1aa9eee63d8ae48b1a7fc85325f",
"assets/assets/images/onBoardingImage333.png": "4656f2cdbf6ae169b78ab76ca1bcac36",
"assets/assets/images/onion.png": "2e1144e0ea9f4203702de85ecba87ca7",
"assets/assets/images/pepper.png": "e74e898980de46099f5ae48796b82de4",
"assets/assets/images/pizza-item.png": "1283c82e64ebd19c09861faddeddd09d",
"assets/assets/images/pizza.png": "b9fc39d45b970e3a31d509c1f3d3d081",
"assets/assets/images/product-background.jpg": "a237051bc98fce9b848b7e5eb75a2f3f",
"assets/assets/images/profile.jpeg": "36100b4c2d5efb7e47dc03501d887c58",
"assets/assets/images/profile.jpg": "36100b4c2d5efb7e47dc03501d887c58",
"assets/assets/images/profileold.png": "ac86e26dc1c7d83714f1026677a2cfbc",
"assets/assets/images/salad.jpg": "aa3f8273b03560dd77096d3e937e3ddf",
"assets/assets/images/sandwich.jpg": "50beb767f0e4132673fad1c6f86f6db3",
"assets/assets/images/signin.png": "fa47583567b594bfb8a190e6c7fd3c58",
"assets/assets/images/signin1.png": "bfb109a7ad4c7b545030b658ff13f8a2",
"assets/assets/images/signup.png": "5077f7529534cf8eb5830d3d93250f90",
"assets/assets/images/signup1.png": "59a2c6e80e14ba6e853e1fd68603a615",
"assets/assets/images/sphagetti.png": "d9b1207c42037a1edcff9c86c19478eb",
"assets/assets/images/spoon.png": "a16f2d32fcd267dd30e09b708c87edfe",
"assets/assets/images/star.png": "8d7a23107043ed62c626653a3a1e9ce7",
"assets/assets/images/tomato.png": "8ad1eeae52663bcf02d553efd6612695",
"assets/assets/images/twitter.png": "dc0b10e90496c7d607b9d391c3a027ca",
"assets/assets/images/uparrow.png": "627a1b64a2c2f54326e3e55ba101cec6",
"assets/assets/images/usd.png": "47b50cb8caa3fc97530395568673b624",
"assets/assets/images/user.png": "e459835010bf256bf5e3f7423b43bc51",
"assets/FontManifest.json": "203b12d32ea8ff92c105267496d68575",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bfefc237774a937502518dc406abe1ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0c11aec8be5ad87e480f3c43dc2df274",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2570b29bb9832b76256f912dc375eb90",
"/": "2570b29bb9832b76256f912dc375eb90",
"main.dart.js": "37a28c9db4a8e9e1792e08f91dcb6c45",
"manifest.json": "4fc5ab64cf2a4ea881cf09a7ae80c2f0",
"version.json": "f314b32712c589aae07812bc1776497b"};
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
