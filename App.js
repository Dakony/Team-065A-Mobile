import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

// import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
// import Login from "./src/screens/loginScreen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Signup from "./src/screens/register/SignUp";
import Splash from "./src/screens/splash/Splash";
import Login from "./src/screens/loginScreen/Login";
import blow from "./src/screens/splash/blow";
const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="blow"
              component={blow}
              options={{
                cardStyleInterpolator:
                  CardStyleInterpolators.forScaleFromCenterAndroid,
              }}
            />
            <Stack.Screen
              name="splash"
              options={{
                cardStyleInterpolator:
                  CardStyleInterpolators.forScaleFromCenterAndroid,
              }}
              component={Splash}
            />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
