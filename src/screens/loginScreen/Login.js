// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  Alert,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Entypo } from "react-native-vector-icons";
import LinearGradient from "expo-linear-gradient";
import { FontAwesome, Feather } from "@expo/vector-icons";
import styles from "../../style/styles";

export default function Home({ navigation }) {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = (userName, password) => {
    const foundUser = (item) => {
      return userName == item.username && password == item.password;
    };

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <View style={styles.sigincontainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2d3e50" />
      <View style={styles.header}>
        <Image
          source={require("../../img/quaBwhite.png")}
          style={{
            width: 115,
            height: 28,
            margin: 10,
            alignSelf: "center",
            position: "absolute",
            top: 5,
          }}
        />
        <Text style={styles.text_header}>Login</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05374a" size={20} />
          <TextInput
            placeholder=" Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05374a" size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder=" Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#fff",
                },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate("signup")}
            style={[
              styles.signUp,
              {
                borderColor: "#3b5998",
                borderWidth: 2,
                marginTop: 15,
                flexDirection: "row",
              },
            ]}
          >
            <Entypo
              name="facebook-with-circle"
              size={25}
              color={"#3b5998"}
              style={{ marginRight: 10 }}
            />
            <Text
              style={[
                styles.textSign,
                {
                  color: "#3b5998",
                },
              ]}
            >
              Login with facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            style={[
              styles.signUp,
              {
                borderColor: "#86bc42",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#86bc42",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
