import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constraints/constants";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const { width, height } = Dimensions.get("window"); // Get the window dimensions

const Home = () => {
  const navigation = useNavigation();

  /* Setters */
  const [tokenValue, settokenValue] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isData, setIsData] = useState(false);

  /* Navigate to Topup */
  const naviTop = () => {
    navigation.navigate("TopUp");
  };

  /* Get request call to fetch user data */
  const getUserData = async () => {
    const AuthToken = await AsyncStorage.getItem("token");

    const apiConfig = {
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get("/auth/user-details", apiConfig)
      .then((response) => {
        setUserDetails(response.data);
        setIsData(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /* Refreshing data */
  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: COLORS.backgroundColor }}>
        {isData && (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <TouchableOpacity
                style={styles.userPro}
                onPress={() => {
                  axios
                    .get("/bus/all-for-route", apiConfig)
                    .then((reponse) => {
                      console.log(reponse);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <Image
                  source={require("../assets/images/user.png")}
                  style={styles.proImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.userLogout}
                onPress={async () => {
                  await AsyncStorage.removeItem("token");
                  await AsyncStorage.removeItem("role");
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
                  <Text style={styles.welcomeText}>{userDetails.userName}</Text>
                  <Text style={styles.welcomeNote}>"Riding the easy way"</Text>
                </View>
              </View>
            </View>
            <View style={styles.creditContainer}>
              <Text style={styles.labelText}>Available Balance</Text>
              <Text style={styles.balanceText}>
                {userDetails.accountBalance}
              </Text>
              <TouchableOpacity style={styles.topUpBtn} onPress={naviTop}>
                <Text style={styles.topUpText}>Top Up</Text>
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

/* Stylesheet */
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
    marginLeft: width * 0.05,
    backgroundColor: COLORS.white,
    padding: width * 0.05,
    borderRadius: width * 0.05,
    width: width * 0.9,
    alignItems: "center",
  },
  labelText: {
    fontSize: width * 0.08,
    color: COLORS.black,
    fontWeight: "bold",
  },
  balanceText: {
    top: height * 0.01,
    fontSize: width * 0.06,
    color: COLORS.black,
    fontWeight: "bold",
  },
  topUpBtn: {
    top: height * 0.02,
    backgroundColor: COLORS.buttonColor,
    borderRadius: width * 0.05,
    marginTop: height * 0.01,
    width: width * 0.4,
    alignItems: "center",
    marginBottom: height * 0.02,
    height: height * 0.06,
  },
  topUpText: {
    fontSize: width * 0.04,
    color: COLORS.white,
    fontWeight: "bold",
    padding: width * 0.025,
  },
  funContainer: {
    flexDirection: "row",
    marginTop: height * 0.02,
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

export default Home;
