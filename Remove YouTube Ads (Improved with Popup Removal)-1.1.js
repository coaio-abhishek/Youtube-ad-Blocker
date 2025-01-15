// ==UserScript==
// @name         Remove YouTube Ads (Improved with Popup Removal)
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js  // Updated to a more recent version of jQuery
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes specific YouTube ads, including popups and overlays.
// @author       [MR-Braadworst]
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("YouTube Ad Blocker Initialized!");

    // Function to remove ads
    function removeAds() {
        try {
            // Remove specific ad elements
            $("#player-ads").remove(); // Ads in the video player
            $("#masthead-ad").remove(); // Ads in the header
            $("#offer-module").remove(); // Offer modules
            $(".video-ads").remove(); // Video ads
            $("#pyv-watch-related-dest-url").remove(); // Sponsored links
            $("ytd-promoted-video-renderer").remove(); // Promoted videos in recommendations
            $("ytd-display-ad-renderer").remove(); // Display ads on the page
            $(".ytp-ad-overlay-container").remove(); // Overlay ads in the video player
            $(".ytp-ad-player-overlay").remove(); // Popup overlay ads
        } catch (error) {
            console.error("Error while removing ads:", error);
        }
    }

    // Check if a video ad is playing
    function removeVideoAd() {
        try {
            if ($(".videoAdUiRedesign")[0]) {
                console.log("Video ad detected. Skipping...");
                $(".video-stream").prop("src", ""); // Stop the video ad
            }
        } catch (error) {
            console.error("Error while stopping a video ad:", error);
        }
    }

    // Repeatedly check for and remove ads and video ads
    setInterval(() => {
        removeAds();
        removeVideoAd();
    }, 1000);

})();
