# Expo WebBrowser.openBrowserAsync iOS Simulator Issue

This repository demonstrates an issue with Expo's `WebBrowser.openBrowserAsync` function on iOS simulators.  The URL opens in a new tab within the simulator's browser, rather than full-screen.  This behavior differs from what is expected and from the experience on physical devices or Android simulators.

## Steps to Reproduce

1. Clone this repository.
2. Run the app on an iOS simulator.
3. Press the button.  Observe that the URL opens in a new tab instead of taking over the entire screen.

## Expected Behavior

The URL should open full-screen in the simulator, similar to how it behaves on physical devices or Android simulators.

## Actual Behavior

The URL opens within a new tab inside the simulator's built-in browser.

## Solution

This issue is related to how Expo handles browser launching on the iOS simulator environment.  A possible workaround (though not ideal) is to use `Linking.openURL` instead. This will open the URL in the default system browser, providing the full-screen experience.  However, be aware of the difference in user experience between this and a full Expo-managed browser experience.
