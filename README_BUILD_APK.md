# D&T Draft HQ - Android APK Project

This is a Capacitor Android project wrapper for your D&T Draft HQ app.

Capacitor turns your HTML/CSS/JavaScript app into a real Android app that Android Studio can build into an APK.

## What you need to install on a computer

1. Android Studio
   - Search Google for: Android Studio download
   - Install the normal/default options.

2. Node.js
   - Search Google for: Node.js download
   - Install the LTS version.

## How to build the APK on Windows

1. Extract this ZIP.
2. Open the extracted folder.
3. Double-click:
   `build_android_setup_windows.bat`
4. Wait while it installs Capacitor and creates the Android project.
5. Android Studio should open automatically.
6. In Android Studio, wait until it finishes loading/syncing.
7. Click:
   `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`
8. When it finishes, click `locate`.
9. The APK will usually be here:
   `android/app/build/outputs/apk/debug/app-debug.apk`

## How to build on Mac/Linux

1. Extract the ZIP.
2. Open Terminal in the folder.
3. Run:
   `sh build_android_setup_mac_linux.sh`
4. Then in Android Studio:
   `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`

## How to install the APK on your Android phone

1. Send `app-debug.apk` to your phone.
2. Open it on your phone.
3. Android may ask to allow installing unknown apps.
4. Allow it for the app you used to open the APK.
5. Tap Install.

## Important

The debug APK is fine for your own phone and testing.
If you ever want it on Google Play, you need a signed release APK/AAB.

## What is included

- `www/` contains your app.
- `capacitor.config.ts` tells Capacitor the app name and ID.
- `package.json` tells Node what to install.
- Setup scripts do the annoying commands for you.
