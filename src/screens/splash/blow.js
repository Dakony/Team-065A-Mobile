import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Animated,
  BackHandler,
  Platform,
  Alert,
} from "react-native";
// import { PinchGestureHandler, State } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
import * as Animatable from "react-native-animatable";

export default class blow extends Component {
  state = { wait: true };
  componentDidMount = () => {
    if (Platform.OS == "android") {
      BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }
    setInterval(() => {
      this.setState({ wait: false });
    }, 1000);
  };
  navigateFunc = () => {
    this.props.navigation.navigate("splash");
  };

  handleBackButton = () => {
    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  };

  render() {
    return (
      <ImageBackground
        source={require("../../img/plainBG.png")}
        style={styles.contain}
      >
        {!this.state.wait ? (
          <Animatable.View
            onAnimationEnd={this.navigateFunc}
            animation="zoomIn"
            style={styles.blow}
          ></Animatable.View>
        ) : null}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  blow: {
    width: 400,
    height: 400,
    borderColor: "#86bc42",
    borderWidth: 2,
    borderRadius: 250,
  },
});
