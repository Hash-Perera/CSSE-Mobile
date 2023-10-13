import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constraints/constants";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const InspectorDashboard = () => {
  const [username, setUsername] = useState("David");
  const [refNo, setRefNo] = useState("798760C");

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: COLORS.backgroundColor }}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <TouchableOpacity
              style={styles.userPro}
              onPress={() => {
                navigation.navigate("UserProfile");
              }}
            >
              <Image
                source={require("../assets/images/user.png")}
                style={styles.proImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userLogout}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Image
                source={require("../assets/images/logout.png")}
                style={styles.logoutImg}
              />
            </TouchableOpacity>
            <View style={styles.userWelcome}>
              <Image
                source={require("../assets/images/pet.png")}
                style={styles.welcomeImg}
              />

              <View style={{ flexDirection: "column" }}>
                <Text style={styles.welcomeText}>{username} !</Text>
                <Text style={styles.welcomeNote}>"Riding the easy way"</Text>
              </View>
            </View>
          </View>
          <View style={styles.creditContainer}>
            <Text style={styles.labelText}>Reference Number</Text>
            <Text style={styles.balanceText}> {refNo}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScanQR");
              }}
            >
              <Image
                source={require("../assets/images/camera.png")}
                style={styles.cameraImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.funContainer}>
            <View style={{ flexDirection: "column", gap: width * 0.05 }}>
              <TouchableOpacity
                style={styles.fun}
                onPress={() => {
                  navigation.navigate("PassengerBusSchedule");
                }}
              >
                <Image
                  source={require("../assets/images/schedule.png")}
                  style={styles.funImg}
                />
                <Text style={styles.funText}>Schedule</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fun}
                onPress={() => {
                  navigation.navigate("PassengerToken");
                }}
              >
                <Image
                  source={require("../assets/images/scan-code.png")}
                  style={styles.funImg}
                />
                <Text style={styles.funText}>My Token</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column", gap: width * 0.05 }}>
              <TouchableOpacity
                style={styles.fun}
                onPress={() => {
                  navigation.navigate("PassengerTrips");
                }}
              >
                <Image
                  source={require("../assets/images/travel.png")}
                  style={styles.funImg}
                />
                <Text style={styles.funText}>My Trips</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.fun}
                onPress={() => {
                  navigation.navigate("UserProfile");
                }}
              >
                <Image
                  source={require("../assets/images/settingIcon.png")}
                  style={styles.funImg}
                />
                <Text style={styles.funText}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: COLORS.drawable,
    borderBottomEndRadius: width * 0.18,
    borderBottomStartRadius: width * 0.18,
    height: height * 0.3,
  },
  userPro: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.12,
    position: "absolute",
    top: height * 0.03,
    right: width * 0.05,
  },
  proImage: {
    left: width * 0.02,
    width: width * 0.1,
    height: width * 0.1,
  },
  logoutImg: {
    width: width * 0.1,
    height: width * 0.1,
    left: width * 0.05,
    top: height * 0.03,
  },
  userWelcome: {
    flexDirection: "row",
    marginTop: height * 0.02,
    marginLeft: width * 0.05,
    top: height * 0.07,
  },
  welcomeText: {
    fontSize: width * 0.09,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: width * 0.02,
  },
  welcomeNote: {
    fontSize: width * 0.05,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: width * 0.018,
    top: height * 0.016,
  },
  welcomeImg: {
    width: width * 0.15,
    height: width * 0.15,
  },
  creditContainer: {
    marginTop: height * 0.0,
    backgroundColor: COLORS.white,
    padding: width * 0.05,
    borderRadius: width * 0.05,
    width: width * 0.8,
    alignItems: "center",
    alignSelf: "center",
  },
  labelText: {
    fontSize: width * 0.06,
    color: COLORS.black,
    fontWeight: "bold",
  },
  balanceText: {
    top: height * 0.01,
    fontSize: width * 0.05,
    color: COLORS.black,
    fontWeight: "bold",
    marginBottom: height * 0.03,
  },
  cameraImg: {
    position: "absolute",
    top: height * 0.01,
    width: width * 0.17,
    height: width * 0.17,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  funContainer: {
    flexDirection: "row",
    marginTop: height * 0.04,
    marginLeft: width * 0.05,
    padding: width * 0.05,
    borderRadius: width * 0.05,
    width: width * 0.9,
    alignItems: "center",
    gap: width * 0.16,
    marginBottom: height * 0.05,
  },
  fun: {
    backgroundColor: COLORS.white,
    borderRadius: width * 0.05,
    padding: width * 0.06,
    width: width * 0.34,
    alignItems: "center",
    height: height * 0.17,
    alignSelf: "center",
  },
  funImg: {
    width: width * 0.15,
    height: width * 0.15,
  },
  funText: {
    fontSize: width * 0.04,
    color: COLORS.black,
    fontWeight: "bold",
    marginTop: height * 0.01,
  },
});

export default InspectorDashboard;
