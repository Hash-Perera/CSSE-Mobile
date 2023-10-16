import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constraints/constants";
import QRCode from "react-native-qrcode-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const { width, height } = Dimensions.get("window");

const PassengerToken = () => {
  const [userData, setUserData] = useState(null);

  const getUserDetails = async () => {
    tokenValue = await AsyncStorage.getItem("token");
    const apiConfig = {
      headers: {
        Authorization: `Bearer ${tokenValue}`,
        "Content-Type": "application/json",
      },
    };

    axios.get("/auth/user-details", apiConfig).then((reponse) => {
      setUserData(reponse.data);
    });
  };

  useEffect(() => {
    getUserDetails();
    console.log(userData);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={styles.container}>
        <Text style={styles.title}>Scan Me</Text>
        <QRCode size={300} value={JSON.stringify(userData)} />
      </View>
    </SafeAreaView>
  );
};

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
    marginBottom: 100,
  },
  qrImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginTop: height * 0.1,
  },
});
export default PassengerToken;
