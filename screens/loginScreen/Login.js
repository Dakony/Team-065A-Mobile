import React, { Component } from "./node_modules/react";
import { Text, View, StyleSheet } from "react-native";

export class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Login;
