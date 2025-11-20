# YouTube Ad Nuker  
---with Tampermonkey---

## 📖 What This Script Does in (irt)
This script removes cosmetic ads from YouTube and auto-clicks the “Skip Ad” button the moment it appears. It uses a MutationObserver for real-time DOM cleanup and runs at `document-start` for early interception. No jQuery, no timers — just fast, stealthy ad nuking.

---

## ✨ Features
-  Cosmetic Ad Removal: overlays, banners, promoted videos, and header ads.
- ⏩ Auto-Skip: clicks the “Skip Ad” button instantly.
-  Efficient Execution: MutationObserver + interval fallback.
-  Early Interception: runs before YouTube fully loads.
- 🔄 SPA Support: works across YouTube’s single-page navigation.

---

## 🖼️ Expected Behavior from the browser while eye on bars of extention attached....

If the extension is working correctly, it should look like this: -----alt:-I have attached uBlock Origin for network level ad blocking and to bypass YouTube’s anti-adblock detection.
 

<p align="center">
  <img src="Screenshot%202025-11-19%20182240.png" alt="YouTube Ad Nuker img for supposed purpose from your browser" width="600">
</p>


You should see:
- No overlays, banners, or promoted video blocks. (i.e would say a clear videos)
- “Skip Ad” button auto-clicked without user input. (i'm working on it)
- Clean interface with no cosmetic ad clutter. (-snipped- all unwanted vague of such generic shitgraph banner.)
- Consistent behavior even when switching videos.

---

## 🚀 How to Install
1. Install [Tampermonkey](https://www.tampermonkey.net) in your browser.
2. Open Tampermonkey → Create a new script.
3. Paste in the code from `youtube-ad-nuker.user.js`.
4. Save and enable the script.
5. Refresh YouTube — ads should vanish, skip buttons should auto-click.

---

## ⚙️ How It Works
- MutationObserver watches for ad elements and removes them instantly.
- Interval fallback runs every second to catch stubborn leftovers.
- Script executes at `document-start` for early ad interception.
- Handles YouTube’s dynamic page loads (no reload needed).

---

## 🛠️ Recommended Pairing for smooth.....
- **uBlock Origin**: Enable EasyList, AdGuard Base, and uBlock filters.

---

## 🧪 Troubleshooting
If ads still appear:
- Make sure Tampermonkey is enabled. (check once if it is wworking or not for your youtube on the browser)
- Confirm the script is running on `youtube.com`. (same as above, mentioned earlier.....)
- Pair with uBlock Origin for network-level blocking. (I highly recommend it....)
- Reload the page or restart the browser.

---

## 💬 Support
Pull requests are welcome!  
For major changes, open an issue first to discuss what you’d like to improve.  

---

## 📜 License
This project is licensed under the MIT License.  

---
