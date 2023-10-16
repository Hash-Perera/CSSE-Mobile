import React, { useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { COLORS } from "../constraints/constants";
import { useNavigation } from "@react-navigation/native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const TopUp = () => {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  const updateInputValue = (amount) => {
    setInputValue(amount.toString());
  };
  function showToast() {
    Toast.show("Top up Successfull.", {
      duration: Toast.durations.LONG,
    });
  }

  /* modal */
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["80%"];

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };
  const handleDoneButtonPress = async () => {
    if (inputValue === "") {
      alert("Please enter an amount!");
      return;
    }

    const AuthToken = await AsyncStorage.getItem("token");

    const apiConfig = {
      headers: {
        Authorization: `Bearer ${AuthToken}`,
        "Content-Type": "application/json",
      },
    };

    const data = {
      userData: inputValue,
    };

    axios
      .post("auth/inc-value", data, apiConfig)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    setIsLoading(true);
    showToast();
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Home");
    }, 800);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <RootSiblingParent>
        <BottomSheetModalProvider>
          <View style={styles.topContainer}>
            <Text style={styles.amountText}>Amount</Text>
            <View style={styles.amountContainer}>
              <TextInput
                style={styles.amountInput}
                placeholder="0.00"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
            </View>
            <View style={styles.sampleAmounts}>
              <View style={styles.amountRow}>
                <TouchableOpacity
                  style={styles.sampleAmount}
                  onPress={() => updateInputValue(100)}
                >
                  <Text style={styles.sampleAmountText}>100</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sampleAmount}
                  onPress={() => updateInputValue(400)}
                >
                  <Text style={styles.sampleAmountText}>400</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sampleAmount}
                  onPress={() => updateInputValue(1000)}
                >
                  <Text style={styles.sampleAmountText}>1000</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.amountRow}>
                <TouchableOpacity
                  style={styles.sampleAmount}
                  onPress={() => updateInputValue(2000)}
                >
                  <Text style={styles.sampleAmountText}>2000</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sampleAmount}
                  onPress={() => updateInputValue(3000)}
                >
                  <Text style={styles.sampleAmountText}>3000</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sampleAmount}
                  onPress={() => updateInputValue(5000)}
                >
                  <Text style={styles.sampleAmountText}>5000</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.proceedBtn}
              onPress={handlePresentModal}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: width * 0.05,
                  fontWeight: "bold",
                }}
              >
                Top Up
              </Text>
            </TouchableOpacity>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
            >
              <View style={styles.modalContent}>
                <Text style={styles.modalTittle}>Confirm Top-up</Text>
                <View style={styles.horizontalLine} />
                <View style={styles.rContent}>
                  <Text style={styles.modalText}>
                    <Text style={{ fontWeight: "bold" }}>Amount:</Text>{" "}
                    {inputValue}
                  </Text>
                  <Text style={styles.modalText}>
                    <Text style={{ fontWeight: "bold" }}>Date:</Text>{" "}
                    {date.toLocaleDateString()}
                  </Text>
                </View>
                {isLoading ? (
                  <ActivityIndicator size="large" color="#007BFF" />
                ) : (
                  <TouchableOpacity
                    style={styles.modalBtn}
                    onPress={handleDoneButtonPress}
                  >
                    <Text style={styles.modalBtnText}>Done</Text>
                  </TouchableOpacity>
                )}
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </RootSiblingParent>
    </SafeAreaView>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: height * 0.05,
  },
  amountText: {
    color: COLORS.black,
    fontSize: width * 0.057,
    fontWeight: "bold",
    textAlign: "center",
  },
  amountInput: {
    width: width * 0.8,
    height: height * 0.13,
    backgroundColor: COLORS.white,
    borderRadius: width * 0.03,
    textAlign: "center",
    fontSize: width * 0.057,
    fontWeight: "bold",
    marginTop: height * 0.03,
  },
  sampleAmounts: {
    flexDirection: "column",
    marginTop: height * 0.05,
    alignItems: "center",
  },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: height * 0.03,
    gap: width * 0.05,
  },
  sampleAmount: {
    width: width * 0.25,
    height: height * 0.1,
    backgroundColor: COLORS.white,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
  },
  sampleAmountText: {
    color: COLORS.black,
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  proceedBtn: {
    width: width * 0.6,
    height: height * 0.08,
    backgroundColor: COLORS.buttonColor,
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.08,
  },
  modalTittle: {
    color: COLORS.black,
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginBottom: height * 0.02,
    alignSelf: "center",
  },
  horizontalLine: {
    borderBottomColor: "#FF99CC",
    borderBottomWidth: 0.3,
    marginVertical: height * 0.001,
  },
  rContent: {
    marginTop: height * 0.02,
    gap: height * 0.04,
    backgroundColor: "#F0F0F0",
    borderRadius: width * 0.03,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.6,
    height: height * 0.32,
    alignSelf: "center",
  },
  modalBtn: {
    width: width * 0.4,
    height: height * 0.075,
    backgroundColor: COLORS.buttonColor,
    borderRadius: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.08,
    alignSelf: "center",
  },
  modalBtnText: {
    color: COLORS.white,
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  successImage: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: "contain",
  },
});
