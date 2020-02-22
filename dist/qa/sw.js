importScripts("/precache-manifest.4c0b6aad41026123db09aab9cc292195.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
  var precacheController = new workbox.precaching.PrecacheController();
  console.log(`Yay! Workbox is loaded 🎉`);

  // 预缓存静态资源
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

  function match({ url, event, }) {
  }
  // 路由请求缓存
  workbox.routing.registerRoute(
    match,
    new workbox.strategies.StaleWhileRevalidate()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
