import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../components/styles";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash.png")} />
      <Text style={styles.titlespalsh}>Get a Qualified Teacher Today!</Text>
      <TouchableOpacity
        style={styles.appButtonContainer}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.appButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
