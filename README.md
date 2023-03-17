# HMS Clock

## Hour-Minute-Second, Digital Clock

A Chrome Extension to display a clock with hours, minutes, and seconds.

Install the published version on the [Chrome Web Store](https://chrome.google.com/webstore/detail/hms-clock/mbjkpklcjihpfbldfapoecehlibmfffk)

I created this Extension because I used to trade stock options and I needed to know exactly when the market would open to the second, but having another tab open wasn't good and I used my phone to trade.

Having a Chrome Extension that displayed the full time digitally would have been perfect.

Get the latest, unpublished version here.

1. Download the ZIP
2. In Chrome, navigate to the extensions page
3. At the top right, toggle "Developer mode" to ON.
4. Click on [Load unpacked]
5. Select the ZIP file
6. The install is complete, the extension can be found by clicking on the puzzle icon at the top right of your browser. For easy access, click on the pin icon.

# Coding

This was a good opportunity to figure out how to store state for extensions. ChatGPT pointed me in the direction of the [chrome.storage API](https://developer.chrome.com/docs/extensions/reference/storage/).

Ideally, users would be able to use this extension across browsers, and by setting the color/time preference in the synced chrome storage, they wouldn't have to reset it every time they logged into a new browser.
