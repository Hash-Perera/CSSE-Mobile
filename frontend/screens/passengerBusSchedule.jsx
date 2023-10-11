import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import React from "react";
import { COLORS } from "../constraints/constants";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import BusScheduleCard from "../components/scheduleBusCardP";

const PassengerBusSchedule = () => {
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for bus schedule"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Image
              source={require("../assets/images/search.png")}
              style={styles.searchBtnImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[
            { key: "a" },
            { key: "b" },
            { key: "c" },
            { key: "d" },
            { key: "e" },
            { key: "f" },
            { key: "g" },
          ]}
          renderItem={({ item }) => (
            <BusScheduleCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.key}
          horizontal={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassengerBusSchedule;

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: height * 0.02,
    height: height * 0.08,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#ffff",
    marginRight: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * 0.04,
    height: "80%",
  },
  searchInput: {
    width: "100%",
    height: "80%",
    paddingHorizontal: width * 0.04,
    marginLeft: width * 0.02,
    borderRadius: height * 0.04,
  },
  searchBtn: {
    width: width * 0.11,
    height: "70%",
    backgroundColor: "#9CC5FF",
    borderRadius: height * 0.013,
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.02,
  },
  searchBtnImage: {
    width: "35%",
    height: "50%",
    tintColor: "white",
  },
  flatListContent: {
    paddingHorizontal: width * 0.01,
    justifyContent: "center",
    alignItems: "center",
  },
});
