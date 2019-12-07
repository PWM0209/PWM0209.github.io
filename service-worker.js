/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d833e1503094fb0332ae50229f883b54"
  },
  {
    "url": "about/index.html",
    "revision": "64b9c3cf2f86fed0e43bf5941daa34f5"
  },
  {
    "url": "archives/index.html",
    "revision": "484d6e8a48c40b69662b94178b3c3f96"
  },
  {
    "url": "assets/css/0.styles.3c8ce66d.css",
    "revision": "d2817f48fb558b85a77868878d8d4af9"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.21ca1749.js",
    "revision": "2edd203c356c334f8fa0e76942edfd6f"
  },
  {
    "url": "assets/js/11.2daa55e5.js",
    "revision": "490e3bd6a2da70486da7821509ad9381"
  },
  {
    "url": "assets/js/12.96dd3055.js",
    "revision": "d547ceccbf792a2a127a356070ae2afd"
  },
  {
    "url": "assets/js/13.c46df1ac.js",
    "revision": "b1b66e95285b366189641d8c1e846cb8"
  },
  {
    "url": "assets/js/14.abc1cbe7.js",
    "revision": "7095a275af02e757c0790d557bfa2322"
  },
  {
    "url": "assets/js/15.292faf40.js",
    "revision": "9de062abd84eccee1e04f71f22197466"
  },
  {
    "url": "assets/js/16.925d5b0f.js",
    "revision": "4ba1db0e6320af031d19513d7c12419a"
  },
  {
    "url": "assets/js/17.df831b71.js",
    "revision": "bcff2316c5680f808fa719448a858e61"
  },
  {
    "url": "assets/js/18.405c678f.js",
    "revision": "216458ec3c9c8696bf2bd3038196b8ad"
  },
  {
    "url": "assets/js/19.dd8e294c.js",
    "revision": "fecc79f005da66628380973f96a01571"
  },
  {
    "url": "assets/js/2.84eaee02.js",
    "revision": "61c0eea84334c0d56f7bef854f1922a9"
  },
  {
    "url": "assets/js/20.795a991e.js",
    "revision": "b514c4b90a0465f750152cb3bce3ccda"
  },
  {
    "url": "assets/js/21.e0663643.js",
    "revision": "79dab47017678254ecb85c523a6c3d98"
  },
  {
    "url": "assets/js/22.cd92fcdb.js",
    "revision": "7078b9cac3342601caee629bb801f62e"
  },
  {
    "url": "assets/js/23.35e01ef9.js",
    "revision": "1fd41590cdd73628c93abc37f6a65abd"
  },
  {
    "url": "assets/js/3.1638692f.js",
    "revision": "92a9fd9b9e41c76299373a037b4ce67b"
  },
  {
    "url": "assets/js/4.a7afdd15.js",
    "revision": "54dadd22d35ee4f30fea1b3b9eb8a823"
  },
  {
    "url": "assets/js/5.26c3adb8.js",
    "revision": "67f44a2f5e5cad3d326428e98d019c87"
  },
  {
    "url": "assets/js/6.25d0a1c2.js",
    "revision": "e1912e3ca41879451d3baf8f1ddc3ca9"
  },
  {
    "url": "assets/js/7.95862c26.js",
    "revision": "25855ca7f0b82dd13aea91124e49423d"
  },
  {
    "url": "assets/js/8.8a6e3bb2.js",
    "revision": "eac08f54a88ad68d7a33a77c6262a2e6"
  },
  {
    "url": "assets/js/9.efa9122d.js",
    "revision": "4f1bf4e0b5eead48e2df33e59218b944"
  },
  {
    "url": "assets/js/app.fe9294d6.js",
    "revision": "93e1f486f29a01ebb57aa0f1841a3a77"
  },
  {
    "url": "blog/Java/index.html",
    "revision": "c4e4f6e2e56c0c0c62464e9cbcb4d0f6"
  },
  {
    "url": "church_s.png",
    "revision": "ac84b369165a3048d7cecc6f8ddc6779"
  },
  {
    "url": "friends/index.html",
    "revision": "4cc140e4c7c6b4578bec5a6d5d7a09b6"
  },
  {
    "url": "hero.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "icon_mushroom.jpg",
    "revision": "79c1e544ff0c2a3f7ca7f7dce6e0b8d5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "79d4437a54e31342c27f5624020c100e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "38bff2fb154cdee00639ece6066442c1"
  },
  {
    "url": "logo.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "project/index.html",
    "revision": "518e01a09f79642e6bdd0ebaf66ca8d8"
  },
  {
    "url": "project/qduoj-add-problem.html",
    "revision": "0c1a7768b9224fea42e9a3531a3657e7"
  },
  {
    "url": "share/book/index.html",
    "revision": "6aab37edd22699fdaf7b7eab67351029"
  },
  {
    "url": "share/software/index.html",
    "revision": "3ef29f3f1bcc0f128a80f0a00de2accd"
  },
  {
    "url": "share/software/index2.html",
    "revision": "ff577c4408a80327d3fb08d9b9c1663d"
  },
  {
    "url": "tags/index.html",
    "revision": "a9735628d040058f5388edf74ac33dfe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
