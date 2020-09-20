import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import styles from "../../style/styles";
const { height, width } = Dimensions.get("window");
import * as Animate from "react-native-animatable";

export default function Splash({ navigation }) {
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
      <View
        style={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#fff",
        }}
      >
        <Animate.Text animation="bounceIn" style={styles.titlespalsh}>
          We Believe Quality Education is a Fundermental Human Right.
        </Animate.Text>
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
