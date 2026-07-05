# D&T Draft HQ - GitHub APK Builder

This project lets GitHub build the Android APK for you, so you do NOT need Android Studio.

## What you need

- A free GitHub account.
- This folder uploaded to a GitHub repository.

## Step 1 - Create the GitHub repo

1. Go to GitHub.
2. Click the + button.
3. Click New repository.
4. Name it:
   dt-draft-hq
5. Set it to Public.
6. Click Create repository.

## Step 2 - Upload this project

Upload every file and folder from this project into the repository.

Important: upload the contents of the folder, not the ZIP itself.

You should see files like:

- package.json
- capacitor.config.ts
- www
- .github/workflows/build-apk.yml

## Step 3 - Run the APK build

1. Go to your repository.
2. Click Actions.
3. Click Build Android APK.
4. Click Run workflow.
5. Wait around 5-10 minutes.

## Step 4 - Download the APK

1. Open the finished workflow run.
2. Scroll to Artifacts.
3. Download:
   DT-Draft-HQ-debug-apk
4. Extract it.
5. You will get:
   app-debug.apk

## Step 5 - Install on your phone

1. Send app-debug.apk to your Android phone.
2. Open it.
3. Allow install from unknown apps if Android asks.
4. Tap Install.

## Notes

This builds a debug APK, which is fine for your own phone.
If you ever want it on Google Play, you need a signed release build.
