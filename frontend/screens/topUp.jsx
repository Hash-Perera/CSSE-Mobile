import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLORS } from "../constraints/constants";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const TopUp = () => {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (amount) => {
    setInputValue(amount.toString());
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
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
        <TouchableOpacity style={styles.proceedBtn}>
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
      </View>
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
});
