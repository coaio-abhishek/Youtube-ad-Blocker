// ==UserScript==
// @name         YouTube Cosmetic Ad Remover (Efficient)
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  Hide YouTube ad UI, overlays, and promoted items; auto-click skip when available
// @author       abhishek-shah
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const selectors = [
    "#player-ads",
    "#masthead-ad",
    "#offer-module",
    ".video-ads",
    "#pyv-watch-related-dest-url",
    "ytd-promoted-video-renderer",
    "ytd-display-ad-renderer",
    ".ytp-ad-overlay-container",
    ".ytp-ad-player-overlay"
  ];

  function cleanAds() {
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach(el => el.remove());
    }
    const skip = document.querySelector(".ytp-ad-skip-button, .ytp-ad-skip-button-modern");
    if (skip) skip.click();
  }

  cleanAds();

  const obs = new MutationObserver(() => cleanAds());
  obs.observe(document.documentElement || document.body, { childList: true, subtree: true });

  document.addEventListener('yt-navigate-finish', cleanAds);
  document.addEventListener('yt-page-data-updated', cleanAds);
})();
