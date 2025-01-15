# Remove YouTube Ads (Improved with Popup Removal)

## Description
This userscript removes various types of ads from YouTube, including video ads, overlay ads, header ads, popups, and sponsored content. Additionally, it automatically skips video ads if they are playing, providing an ad-free viewing experience.

The script is designed to work with the Tampermonkey userscript manager and uses jQuery to identify and remove elements from YouTube's interface.

## Features
- **Ad Removal**: Removes YouTube ads in the video player, header, and as popups.
- **Video Ad Skipping**: Automatically skips video ads and prevents them from playing.
- **Popup Removal**: Removes popups and overlay ads that typically appear in the video player.
- **Dynamic Execution**: Continuously checks and removes ads every second to ensure no ads are missed during video playback.

## Installation Instructions

1. **Install Tampermonkey**:
   - If you haven't installed Tampermonkey yet, you can get it from [here](https://www.tampermonkey.net/).
   
2. **Install the Script**:
   - After installing Tampermonkey, create a new script and paste the code provided in the `Remove YouTube Ads (Improved with Popup Removal)` section.

3. **Enjoy an Ad-Free Experience**:
   - Visit any YouTube video, and the script will automatically start removing ads and popups.

## How it Works
- The script identifies various types of ads such as video ads, overlay ads, and header ads by targeting specific elements within the page and removes them using jQuery.
- **Video Ad Removal**: The script checks every second to see if a video ad is playing and, if detected, automatically stops it by clearing the video stream's source.
- **Popup and Overlay Removal**: It also removes pop-up and overlay ads that typically disrupt the viewing experience.

## Customization
- You can adjust the script to target additional ad elements or modify the timing of the checks by modifying the interval in the `setInterval` function.

## Known Limitations
- This script doesn't guarantee a 100% ad-free experience, as YouTube frequently updates its interface and ad systems. However, it is regularly updated to handle new ad types and bypasses age restrictions.
- Bypassing ads or other content may violate YouTube's terms of service. Use this script at your own discretion.

## Support
If you encounter any issues or bugs, feel free to open an issue on the [GitHub repository page](#).
