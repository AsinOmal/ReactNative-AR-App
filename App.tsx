import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
  ViroDirectionalLight,
} from "@reactvision/react-viro";
import React from "react";
import { StyleSheet } from "react-native";

const InitialScene = () => {
  ViroMaterials.createMaterials({
    wood: {
      diffuseTexture: require("./assets/woodtexture.jpg"),
    },
    metal: {
      diffuseTexture: require("./assets/metal.jpg"),
    },
  });

  ViroAnimations.registerAnimations({
    rotateBox: {
      duration: 2500,
      properties: { rotateX: "+=90", rotateY: "+=90" },
    },
    rotatex: {
      duration: 3500,
      properties: { rotateY: "+=90" },
    },
  });

  // const playstationModel = require("./assets/ps1.obj");
  // const objResources = [
  //   require("./assets/playstation-1/source/model/ps1.mtl"), // The Material Library file
  //   require("./assets/playstation-1/source/model/textures/import-smartlife-no-name.jpg"),
  //   require("./assets/playstation-1/source/model/textures/jbareham_181120_ply0819_0060.0.jpg"),
  //   require("./assets/playstation-1/source/model/textures/pes1.png"),
  //   // You would list all necessary texture files here
  // ];

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={1000} />

      {/* <ViroDirectionalLight
        color="#ffffff"
        direction={[0, -1, -0.2]}
        shadowOrthographicPosition={[0, 3, -5]}
        shadowOrthographicSize={10}
        castsShadow={true}
        lightReceivingBitMask={4}
      /> */}

      <ViroText
        text={"This is a Cube"}
        position={[-1, 1, -2]}
        style={styles.text}
      />

      {/* <ViroBox
        height={2}
        length={2}
        width={2}
        materials={["wood"]}
        position={[0, 0, -1]}
        animation={{ name: "rotate", loop: true, run: true }}
        scale={[0.2, 0.2, 0.2]}
      /> */}

      <ViroBox
        height={3}
        length={3}
        width={3}
        materials={["metal"]}
        position={[-1, 0, -2]}
        animation={{ name: "rotateBox", loop: true, run: true }}
        scale={[0.2, 0.2, 0.2]}
      />
      <ViroAmbientLight color="#FFFFFF" intensity={1000} />

      <Viro3DObject
        source={require("./assets/porshe911.glb")}
        type="GLB"
        position={[0.5, -0.5, -1.5]}
        scale={[0.2, 0.2, 0.2]}
        animation={{ name: "rotatex", loop: true, run: true }}
      />

      {/* <Viro3DObject
        source={playstationModel}
        resources={objResources}
        position={[1, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
        type="OBJ"
        lightReceivingBitMask={4}
        shadowCastingBitMask={4}
      /> */}
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: InitialScene,
      }}
      style={styles.navigator}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "Arial",
    color: "red",
  },
  navigator: {
    flex: 1,
  },
});
