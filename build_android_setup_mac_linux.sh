#!/bin/sh
echo "Installing Capacitor packages..."
npm install
echo "Adding Android platform..."
npx cap add android
echo "Syncing app files..."
npx cap sync android
echo "Opening Android Studio..."
npx cap open android
