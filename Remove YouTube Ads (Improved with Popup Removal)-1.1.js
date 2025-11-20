// ==UserScript==
// @name         YouTube Ad Nuker
// @namespace    stealth.abhi
// @version      1.0
// @description  Auto-skip and remove YouTube ads instantly
// @author       abhishek-shah
// @match        https://www.youtube.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // MutationObserver to catch ad containers
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    // Remove ad banners
                    if (node.querySelector('.ytd-display-ad-renderer, .ytd-promoted-video-renderer')) {
                        node.remove();
                        console.log('Ad element nuked');
                    }
                    // Skip video ads
                    const skipBtn = node.querySelector('.ytp-ad-skip-button');
                    if (skipBtn) {
                        skipBtn.click();
                        console.log('Skipped video ad');
                    }
                }
            });
        });
    });

    // Observe the whole document
    observer.observe(document, { childList: true, subtree: true });

    // Also check periodically for stubborn ads
    setInterval(() => {
        document.querySelectorAll('.ytd-display-ad-renderer, .ytd-promoted-video-renderer').forEach(el => el.remove());
        const skipBtn = document.querySelector('.ytp-ad-skip-button');
        if (skipBtn) skipBtn.click();
    }, 1000);
})();
