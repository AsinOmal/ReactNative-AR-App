import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
} from "@reactvision/react-viro";
import React from "react";
import { StyleSheet } from "react-native";

const InitialScene = () => (
  <ViroARScene>
    <ViroText
      text={"hello world"}
      position={[-0.1, 0, -4]}
      style={{ fontSize: 15, fontFamily: "Arial", color: "red" }}
    />
  </ViroARScene>
);

export default () => {
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: InitialScene,
      }}
      style={{ flex: 1 }}
    />
  );
};

