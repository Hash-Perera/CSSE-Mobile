import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { COLORS } from "../constraints/constants";
const { width, height } = Dimensions.get("window");

const PassengerToken = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={styles.container}>
        <Text style={styles.title}>Scan QR Code</Text>
        <Image
          source={require("../assets/images/sampleQR.jpeg")}
          style={styles.qrImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassengerToken;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: height * 0.05,
    fontSize: width * 0.08,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  qrImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginTop: height * 0.1,
  },
});
