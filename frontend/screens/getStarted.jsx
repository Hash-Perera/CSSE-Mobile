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
import { COLORS } from "../constraints/constants";
const { width, height } = Dimensions.get("window"); // Get the window dimensions

const GetStarted = () => {
  const navigation = useNavigation();

  /* navigate to Login */
  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/ticketEaseLogo.png")}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleGetStarted}>
        <Text style={styles.loginButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 1.2,
    height: height * 0.75,
    resizeMode: "contain",
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: COLORS.buttonColor,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    width: width * 0.65,
    marginTop: height * 0.1,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
