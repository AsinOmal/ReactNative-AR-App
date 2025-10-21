import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroBox
} from "@reactvision/react-viro";
import React from "react";
import { StyleSheet } from "react-native";

const InitialScene = () => (
  <ViroARScene>
    {/* <ViroText
      text={"Hello"}
      position={[-0.1, 0, -4]}
      style={{ fontSize: 15, fontFamily: "Arial", color: "red" }}
    /> */}

    <ViroBox height={2} length={2} width={2} position={[0, -1, -1]} scale={[0.2,0.2,0.2]}/>
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

