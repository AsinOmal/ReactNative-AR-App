import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from "@reactvision/react-viro";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const InitialScene = (props: any) => {
  const [position, setPosition] = useState([0, 0, -1]);
  const [carScale, setCarScale] = useState([0.2, 0.2, 0.2]);
  const [cubeScale, setCubeScale] = useState([[0.2, 0.2, 0.2]]);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const data = props.sceneNavigator.viroAppProps;

  const clearObjects = () => {
    setObject("");
  };

  ViroARTrackingTargets.createTargets({
    carImage: {
      source: require("./assets/porshe.jpeg"),
      physicalWidth: 0.5, //! Real world width in meters
    },
  });

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

  const rotateObject = (rotateState: any, rotationFactor: any, source) => {
    if (rotateState == 3) {
      let currentRotation = [
        rotation[0] - rotationFactor,
        rotation[1] - rotationFactor,
        rotation[2] - rotationFactor,
      ];
      console.log("current rottaion", currentRotation);
      console.log("rotation factor", rotationFactor);
      setRotation(currentRotation);
    }
  };

  const anchorFound = () => {
    console.log("Anchor/Image detected");
  };

  return (
    <ViroARScene>
      <ViroARImageMarker
        target="carImage"
        onAnchorFound={console.log(anchorFound)}
      >
        <Viro3DObject
          source={require("./assets/porshe911.glb")}
          type="GLB"
          rotation={rotation}
          position={position}
          scale={carScale}
          onDrag={moveObject}
          onRotate={rotateObject}
          dragType="FixedToWorld"
        />
      </ViroARImageMarker>
      <ViroAmbientLight color="#ffffff" intensity={1000} />

      {/* {data.object === "skull" ? (
        <Viro3DObject
          source={require("./assets/porshe911.glb")}
          type="GLB"
          rotation={rotation}
          position={position}
          scale={carScale}
          onDrag={moveObject}
          onRotate={rotateObject}
          dragType="FixedToWorld"
        />
      ) : (
        <ViroBox
          height={3}
          length={3}
          width={3}
          materials={["metal"]}
          position={position}
          scale={[0.2, 0.2, 0.2]}
          rotation={rotation}
          onDrag={moveObject}
          onRotate={rotateObject}
          dragType="FixedToWorld"
        />
      )} */}
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

        <TouchableOpacity
          onPress={() => {
            setObject("");
          }}
        >
          <Text style={styles.text}>Clear</Text>
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
