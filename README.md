# YouTube Cosmetic Ad Remover (Tampermonkey)

## 📖 Description
This userscript cleans up YouTube’s interface by removing overlays, banners, and promoted content. It also auto-clicks the skip button when available. Unlike older versions that relied on `setInterval` and jQuery, this version uses **MutationObserver** for instant reaction and lower CPU usage.

## ✨ Features
- **Cosmetic Ad Removal**: Removes overlays, banners, header ads, and promoted videos.  
- **Auto-Skip**: Automatically clicks the skip ad button when it appears.  
- **Efficient Execution**: Uses MutationObserver to react instantly to YouTube’s dynamic DOM changes.  
- **SPA Support**: Hooks into YouTube’s navigation events so cleanup works even when switching videos without page reload.  

## 🚀 Installation
1. Install the **Tampermonkey** extension for your browser: [Tampermonkey.net](https://www.tampermonkey.net/).  
2. Open Tampermonkey → **Create a new script**.  
3. Paste the code from `youtube-ad-remover.user.js`.  
4. Save and enable the script.  
5. Refresh YouTube — overlays and promoted items should disappear, skip button should auto-click.

## ⚙️ How It Works
- Targets known ad-related elements in YouTube’s DOM and removes them.  
- Watches for new elements using MutationObserver.  
- Auto-clicks skip button when present.  
- Listens to YouTube’s single-page app navigation events to keep cleaning even when switching videos.  

## ⚠️ Limitations
- Does **not** block unskippable video ads (they are part of the video stream).  
- Does **not** block ad requests at the network level.  
- For complete ad blocking, pair with **uBlock Origin** or DNS-level blockers.  

## 🛠️ Recommended Pairing
- **uBlock Origin**: Enable EasyList, AdGuard Base, uBlock filters, and Annoyances.  
- **SponsorBlock**: Skip in-video sponsorship segments automatically.  

## 💬 Support
If you encounter issues or want to suggest improvements, open an **Issue** in this repository.
