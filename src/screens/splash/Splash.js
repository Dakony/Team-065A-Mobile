import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from "react-native";
import styles from "../../style/styles";
const { height, width } = Dimensions.get("window");
import * as Animate from "react-native-animatable";
import LottieView from "lottie-react-native";

export default function Splash({ navigation }) {
  componentDidMount = () => {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  };
  return (
    <ImageBackground
      source={require("../../img/quaBg2.png")}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2d3e50" />

      <Image
        source={require("../../img/quaB.png")}
        style={{ width: 115, height: 25, margin: 10 }}
      />
      <View style={styles2.txtView}>
        <Animate.Text animation="bounceIn" style={styles.titlespalsh}>
          We Believe Quality Education is a Fundamental Human Right.
        </Animate.Text>
        {/* <LottieView
          source={require("../../../assets/lottie/image1/arrow.json")}
          imageAssetsFolder={"lottie/image1"}
          ref={(animation) => {
            this.animation = animation;
          }}
        /> ; */}

        <View style={styles2.imgView}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 100 / 2 }}
            source={require("../../img/gi.gif")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.appButtonContainer,
          { alignSelf: "center", marginBottom: 50 },
        ]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.appButtonText}>GET STARTED</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles2 = StyleSheet.create({
  imgView: {
    width: 68,
    height: 68,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#05374a",
    top: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  txtView: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
});
