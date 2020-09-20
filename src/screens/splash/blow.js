import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
const { width, height } = Dimensions.get("window");
import * as Animatable from "react-native-animatable";

export default class blow extends Component {
  state = { wait: true };
  componentDidMount = () => {
    setInterval(() => {
      this.setState({ wait: false });
    }, 1000);
  };
  navigateFunc = () => {
    this.props.navigation.navigate("splash");
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
    // backgroundColor: "#2d3e50",
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  blow: {
    // backgroundColor: "#86bc42",
    width: 400,
    height: 400,
    borderColor: "#86bc42",
    borderWidth: 2,
    borderRadius: 250,
  },
});
