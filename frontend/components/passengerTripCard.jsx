import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "../constraints/constants";
const { width, height } = Dimensions.get("window");

const PassengerTripCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity onPress={() => handleCardPress(item.key)}>
      <View style={styles.cardContainer}>
        <View style={styles.routeNo}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: width * 0.06,
              color: COLORS.white,
            }}
          >
            177
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.routeText}>Kaduwela - Kollupitiya</Text>
          <Text style={styles.routeText2}>6 Aug - 6 : 40 PM</Text>
          <Text style={styles.timeText}>Rs. 50.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PassengerTripCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.9,
    height: height * 0.15,
    backgroundColor: COLORS.white,
    borderRadius: width * 0.05,
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.05,
    flexDirection: "row",
    alignItems: "center",
  },

  routeNo: {
    backgroundColor: COLORS.primary,
    width: width * 0.2,
    height: height * 0.15,
    borderTopLeftRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: height * 0.02,
  },
  routeText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
  },
  routeText2: {
    fontSize: width * 0.03,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
  },
  timeText: {
    fontSize: width * 0.025,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    top: height * 0.01,
  },
});
