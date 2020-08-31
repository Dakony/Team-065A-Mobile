import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
// import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <ImageBackground
      source={require("../../img/quaBg.jpg")}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: "#000", opacity: 0.6, flex: 1 }}>
        <View
          style={{
            // backgroundColor: "#000",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#0cee91", fontSize: 30, fontWeight: "bold" }}>
            QUATEACH
          </Text>
          <Text
            style={{
              color: "#fff",
              padding: 2,
              marginLeft: 15,
              marginRight: 5,
              fontSize: 18,
            }}
          >
            Finding quality teachers today....
          </Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 40 }}>
          <Button style={styles.btn}>
            <Text style={[styles.btnText, { color: "#0cee91" }]}>Login</Text>
          </Button>
          <Button style={[styles.btn, styles.btnlogin]}>
            <Text style={[styles.btnText, { color: "#fff" }]}>Sign up</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  btn: {
    width: 300,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderColor: "#0cee91",
    borderWidth: 2,
    elevation: 7,
  },
  btnText: { fontSize: 16, fontWeight: "bold" },
  btnlogin: { marginTop: 20, backgroundColor: "#0cee91", borderColor: "#fff" },
});
