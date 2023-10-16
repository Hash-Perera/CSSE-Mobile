import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { COLORS } from "../constraints/constants";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const { width, height } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";

const ScanQR = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned yet !");
  const [name, setName] = useState(null);
  const [accBal, setAccBal] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  /* modal */
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["80%"];
  const [tokenValue, settokenValue] = useState("");

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
  };
  function showToast() {
    Toast.show("Payment Successfull.", {
      duration: Toast.durations.LONG,
    });
  }
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  const AuthTokenFun = async () => {
    const AuthToken = await AsyncStorage.getItem("token");
    settokenValue(AuthToken);
  };

  const apiConfig = {
    headers: {
      Authorization: `Bearer ${tokenValue}`,
      "Content-Type": "application/json",
    },
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
    AuthTokenFun();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const objectData = JSON.parse(data);
    setText("");
    setUserId(objectData._id);
    setName(objectData.userName);
    setAccBal(objectData.accountBalance);
  };

  const handleDoneButtonPress = () => {
    console.log("Payement Done");
    console.log(userId + name + inputValue);
    console.log(apiConfig);
    setIsLoading(true);
    axios
      .post(
        "/auth/dec-value",
        { userId: userId, amount: inputValue },
        apiConfig
      )
      .then(() => {
        showToast();
        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate("InspectorDashboard");
        }, 10);
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsLoading(false);
      });
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  return (
    <RootSiblingParent>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>
          <Text style={styles.maintext}>{text}</Text>
          {scanned && (
            <>
              <Text style={styles.subText}>Name : {name}</Text>
              <Text style={styles.subText}>Account Balance : {accBal}</Text>
            </>
          )}

          {scanned && (
            <Button
              title={"Scan again?"}
              onPress={() => {
                setScanned(false);
                setText("Not Scanned yet !");
                setAccBal(null);
                setName(null);
              }}
              color="tomato"
            />
          )}

          {scanned && (
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
                Pay
              </Text>
            </TouchableOpacity>
          )}

          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTittle}>Confirm Top-up</Text>
              <View style={styles.horizontalLine} />
              <View style={styles.amountContainer}>
                <TextInput
                  style={styles.amountInput}
                  placeholder="0.00"
                  keyboardType="numeric"
                  value={inputValue}
                  onChangeText={(text) => setInputValue(text)}
                />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 18,
    margin: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  subText: {
    fontSize: 20,
    margin: 5,
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
});
export default ScanQR;
