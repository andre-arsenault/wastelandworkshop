# Building the Ionic App for Android and iOS

## Prerequisites

### Node.js

- [Install the latest Long Term Support (LTS) version of Node.js](https://nodejs.org/en/) for your system (version 10.16.3 as of 16 Aug 2019).
- Verify its installation by typing `node --version` in a terminal window.

### Ionic CLI

- Use npm to globally-install the Ionic command-line interface. Npm is the Node Package Manager, and is included with the Node.js installation.

  `npm install -g ionic`

### Project Dependencies

- `cd` into your `wastelandworkshop` folder.
- Run: `npm i`. This will install all JavaScript libraries on which the Ionic app depends.
- You will need to repeat this step every time someone changes the set of dependencies in `package.json`.

### Android Studio (Android builds only)

- [Install the latest version of Android Studio](https://developer.android.com/studio/install).
- Be sure to launch it at least once and install the SDK packages necessary for at least one version of Android OS.
- Simulator installations are optional.

### Xcode (iOS builds only - requires a Mac)

- Install Xcode from the Mac App Store.
- Launch it at least once for the full installation to complete.
- Ensure the command-line tools are installed:
  - `xcode-select -p`
  - If the above doesn't come back with a valid path, run `xcode-select --install` to install the CLI tools.

# Working in your development environment

## Test in a browser

You can enjoy rapid iteration by using Ionic's capability of running your app in a local browser. Run the following command in your `wastelandworkshop` folder and leave it running and you edit and save your source files. The browser window will automatically update.

- `ionic serve`
- `ionic serve -w chrome` (Use Google Chrome specifically [Windows])
- `ionic serve -w "google chrome"` (Use Google Chrome specifically [Mac])

Once running in the browser, you can use the browser's Developer Tools to browse the DOM, adjust styles, view the console log, and more.

## Preparing to build the app for mobile devices

- `npx cap sync` - Ensures the Android Studio and Xcode project structure is in sync with the latest project plug-ins. You need to run this after a fresh installl, and again if the set of native plug-ins is ever changed.

- `npm run build` - Compiles the project's Angular code which puts it in the `www` folder, and then copies the `www` folder into the native Android/iOS project file structure (the `android` and `ios` folders respectively).

## Build the app for Android

- `npx cap open android` - Launches Android Studio and opens the `wastelandworkshop/android` project. Gradle will begin syncing automatically. Once it's done you can hit the Run button (^R) to launch the app on a simulator or physical Android device.

## Build the app for iOS

- `npx cap open ios` - Launches Xcode and opens the `wastelandworkshop/ios` project. Choose your target simulator or device from the target drop-down and hit the Run button (⌘R) to build and launch.
