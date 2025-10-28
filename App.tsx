import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const InitialScene = (props: any) => {
  const [position, setPosition] = useState([0, 0, -0.5]);
  const [carScale, setCarScale] = useState([0.2, 0.2, 0.2]);
  const [cubeScale, setCubeScale] = useState([[0.5, 0.5, 0.5]]);
  const [rotation, setRotation] = useState([0, 0, -5]);
  const data = props.sceneNavigator.viroAppProps;

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

  const moveObject = (newPosition: any) => {
    console.log(newPosition);
  };
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={1000} />

      {data.object === "skull" ? (
        <Viro3DObject
          source={require("./assets/porshe911.glb")}
          type="GLB"
          rotation={rotation}
          position={position}
          scale={carScale}
          onDrag={moveObject}
          dragType="FixedToWorld"
          animation={{ name: "rotatex", loop: true, run: true }}
        />
      ) : (
        <ViroBox
          height={3}
          length={3}
          width={3}
          materials={["metal"]}
          position={[0, 0, -1]}
          animation={{ name: "rotateBox", loop: true, run: true }}
          scale={[0.2, 0.2, 0.2]}
          onDrag={moveObject}
          dragType="FixedToWorld"
        />
      )}
    </ViroARScene>
  );
};

export default () => {
  const [object, setObject] = useState("skull");
  return (
    <View style={styles.mainView}>
      <ViroARSceneNavigator
        initialScene={{
          scene: InitialScene,
        }}
        viroAppProps={{ object: object }}
        style={styles.navigator}
      />
      <View style={styles.controlView}>
        <TouchableOpacity onPress={() => setObject("skull")}>
          <Text style={styles.text}>Display Porshe Car</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setObject("tv")}>
          <Text style={styles.text}>Display Cube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontFamily: "Arial",
    color: "red",
    margin: 20,
    padding: 10,
    fontWeight: "bold",
    backgroundColor: "#fff023",
  },
  navigator: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  controlView: {
    width: "100%",
    height: 100,
    borderRadius: 23,
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
