# ViroReact AR Playground

A simple AR app built with React Native and ViroReact. You can load 3D models, move them, resize them, and trigger animations. It also supports marker-based AR using reference images.

---

## Features

* Custom 3D models and textures.
* Animations attached to models.
* Object interaction:

  * Drag to reposition.
  * Pinch to scale.
* Marker-based AR using a reference image.
* Runs on a physical Android or iOS device.

---

## Requirements

You need:

* A physical smartphone. AR will not work on emulators.
* React Native environment setup:
  [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
* Node.js and npm installed.

---

## Installation

1. Clone the repo:

   ```bash
   git clone <your-repository-link>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. iOS only: install CocoaPods:

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Start the Metro bundler:

   ```bash
   npm start
   ```

5. Connect your phone with USB and run:

   | Platform | Command                        |
   | -------- | ------------------------------ |
   | Android  | `npx react-native run-android` |
   | iOS      | `npx react-native run-ios`     |

If setup is correct, the AR scene will load on your phone.

---

## Editing the App

Main AR logic is inside:

```
App.tsx
```

To test code changes:

* Android: Press R key twice in Metro terminal.
* iOS: Shake device and select Reload.

---

## Project Structure

```
project/
├── ios/
├── android/
├── src/
│   ├── scenes/        # AR scenes
│   ├── assets/        # Models, textures, markers
│   └── App.tsx
└── package.json
```

---

## 3D Assets

Place models and textures under:

```
src/assets/
```

Supported formats:

* .obj with .mtl for textures
* .glb or .gltf

If you add new assets, update imports inside the AR scene.

---

## Marker AR Setup

Reference image files go into:

```
src/assets/markers/
```

Update marker paths in AR scene code. Use clear, high-contrast images for better detection.

---

## Troubleshooting

* If nothing appears: check device permissions for camera.
* If the app fails to install: confirm Android SDK or iOS setup.
* If models appear tiny or huge: adjust scale property in code.

---

## Resources

React Native setup:
[https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

ViroReact documentation:
[https://viro-community.readme.io/](https://viro-community.readme.io/)

---
