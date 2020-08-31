import React from "react";
import { StyleSheet, Text, View } from "react-native";
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

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </Button>
        <Button
          style={[
            styles.btn,
            { marginTop: 20, backgroundColor: "#3e8c7d", borderColor: "#fff" },
          ]}
        >
          <Text style={[styles.btnText, { color: "#fff" }]}>Login</Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  btn: {
    width: 250,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderColor: "#3e8c7d",
    borderWidth: 2,
  },
  btnText: { color: "#3e8c7d", fontSize: 16, fontWeight: "bold" },
});
