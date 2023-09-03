const CACHE = 'Runas-cache';

return false;

importScripts('./lib/workbox-sw.js');

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = [
    "./config/config.js",
    "./index.html",
    "./lib/mobile-select-master/dist/style/mobile-select.css",
    "./lib/mobile-select-master/dist/mobile-select.iife.min.js",
    "./lib/jquery-3.7.1.min.js.js",
    "./lib/workbox-sw.js",
    "./scripts/RunasGuessr.js",
    "./manifest.json",
    "./images/08-Wunjo.png",
    "./images/25-Odin.png",
    "./images/06-Kano.png",
    "./images/10-Nauthiz.png",
    "./images/01-Fehu.png",
    "./images/12-Jera.png",
    "./images/15-Algiz.png",
    "./images/19-Ehwaz.png",
    "./images/20-Mannaz.png",
    "./images/22-Inguz.png",
    "./images/24-Othala.png",
    "./images/09-Hagalaz.png",
    "./images/11-Isa.png",
    "./images/icon.png",
    "./images/21-Laguz.png",
    "./images/13-Eihwaz.png",
    "./images/05-Raido.png",
    "./images/icon.pngZone.Identifier",
    "./images/23-Dagaz.png",
    "./images/07-Gebo.png",
    "./images/16-Sowelu.png",
    "./images/02-Uruz.png",
    "./images/03-Thurisaz.png",
    "./images/18-Berkana.png",
    "./images/04-Ansuz.png",
    "./images/17-Teiwaz.png",
    "./images/14-Perth.png",
    "./images/icons/apple-icon-180.png",
    "./images/icons/manifest-icon-512.maskable.png",
    "./images/icons/manifest-icon-96.maskable.png",
    "./images/icons/manifest-icon-192.maskable.png",
    "./styles/styles.css",
    "./sw.js",
    "./Sounds/click.mp3",
    "./Sounds/deselect.mp3",
    "./Sounds/Good.mp3",
    "./Sounds/Wrong.mp3"
]

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.addAll(offlineFallbackPage))
    );
});

if (workbox.navigationPreload.isSupported()) {
    workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
    new RegExp('/*'),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: CACHE
    })
);

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResp = await event.preloadResponse;

                if (preloadResp) {
                    return preloadResp;
                }

                const networkResp = await fetch(event.request);
                return networkResp;
            } catch (error) {

                const cache = await caches.open(CACHE);
                const cachedResp = await cache.match(offlineFallbackPage);
                return cachedResp;
            }
        })());
    }
});