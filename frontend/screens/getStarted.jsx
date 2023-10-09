import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/EventGoSplash.png")}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleGetStarted}>
        <Text style={styles.loginButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#16213E",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: width * 0.65,
    marginTop: height * 0.25,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
