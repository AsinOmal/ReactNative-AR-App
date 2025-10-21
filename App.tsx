import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
} from "@reactvision/react-viro";
import React from "react";
import { StyleSheet } from "react-native";

const InitialScene = () => {
  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require("./assets/woodtexture.jpg"),
    },
  });

  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: { rotateX: "+=90", rotateY: "+=90" },
    },
  });

  return (
    <ViroARScene>
      {/* <ViroText
      text={"Hello"}
      position={[-0.1, 0, -4]}
      style={{ fontSize: 15, fontFamily: "Arial", color: "red" }}
    /> */}

      <ViroBox
        height={2}
        length={2}
        width={2}
        materials={["wood"]}
        position={[0, 0, -1]}
        animation={{ name: "rotate", loop: true, run: true }}
        scale={[0.2, 0.2, 0.2]}
      />
    </ViroARScene>
  );
};

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
