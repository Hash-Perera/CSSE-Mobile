import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput, Provider } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constraints/constants";
import axios from "axios";
import Toast from "react-native-root-toast";

const { width, height } = Dimensions.get("window");

const SignUp = () => {
  //Form field
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [accountType, setAccountType] = useState("");

  const navigation = useNavigation();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleBack = () => {
    navigation.navigate("Login");
  };

  const register = async () => {
    const data = {
      userName: username,
      email: email,
      password: password,
      contact: contact,
      accountType: accountType,
      accountBalance: 0,
    };
    await axios
      .post("/auth/register", data)
      .then(() => {
        Toast.show("Succesfully Registerd ! Login Now", {
          duration: Toast.durations.LONG,
        });
        navigation.navigate("Login");
      })
      .catch((error) => {
        Toast.show(error, {
          duration: Toast.durations.LONG,
        });
        console.log(error);
      });
  };

  const accountTypes = [
    {
      label: "Local",
      value: "Local",
    },
    {
      label: "Foreign",
      value: "Foreign",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Image
                source={require("../assets/images/loginBackground.png")}
                resizeMode="cover"
                style={styles.imageCover}
              />
              <TouchableOpacity onPress={handleBack} style={styles.btnBack}>
                <Image source={require("../assets/images/backIcon.png")} />
              </TouchableOpacity>
              <Text style={styles.tittle}>Create{"\n"} Account</Text>
            </View>
            <View style={styles.formContainer}>
              <KeyboardAvoidingView behavior="position">
                <View style={styles.inputContainer}>
                  <TextInput
                    label="Name"
                    mode="outlined"
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                  />
                  <TextInput
                    label="Email"
                    mode="outlined"
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                  />
                  <TextInput
                    label="Password"
                    mode="outlined"
                    placeholder="Enter password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <TextInput
                    label="Confirm Password"
                    mode="outlined"
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <DropDown
                    label={"Account Type"}
                    mode={"outlined"}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={accountType}
                    setValue={setAccountType}
                    list={accountTypes}
                    inputProps={{
                      right: <TextInput.Icon name={"menu-down"} />,
                    }}
                    style={styles.input}
                  />
                  <TextInput
                    label="Phone number"
                    mode="outlined"
                    placeholder="Phone number"
                    style={styles.input}
                    onChangeText={(text) => setContact(text)}
                  />
                </View>
              </KeyboardAvoidingView>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.registerButton}>
                  <Text style={styles.registerButtonText} onPress={register}>
                    Register
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.signButton}
                  onPress={handleBack}
                >
                  <Text style={styles.signButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  imageCover: {
    height: height * 0.5,
    width: "100%",
  },
  btnBack: {
    position: "absolute",
    top: "10%",
    left: "1%",
  },
  tittle: {
    position: "absolute",
    top: "38%", // 38% of the screen height from the top
    left: "4%", // 25% of the screen width from the left
    fontSize: width * 0.1, // 10% of the screen width as font size
    fontWeight: "bold",
    color: "#fff",
  },
  formContianer: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  inputContainer: {
    margin: width * 0.08,
    gap: 11,
  },
  buttonContainer: {
    marginTop: height * 0.001,
  },
  registerButton: {
    backgroundColor: COLORS.buttonColor,
    padding: width * 0.03,
    borderRadius: width * 0.1,
    alignItems: "center",
    width: "45%",
    alignSelf: "center",
    marginTop: height * 0.001,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  signButton: {
    alignItems: "center",
    marginTop: height * 0.02,
    backgroundColor: "#A5B2D2",
    padding: width * 0.03,
    width: "45%",
    alignSelf: "center",
    borderRadius: width * 0.1,
    marginBottom: height * 0.02,
  },
  signButtonText: {
    color: "#070A35",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});

export default SignUp;
