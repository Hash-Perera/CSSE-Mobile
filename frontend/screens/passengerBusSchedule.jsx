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
import React, { useState } from "react";
import { COLORS } from "../constraints/constants";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";
import BusScheduleCard from "../components/scheduleBusCardP";

const PassengerBusSchedule = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  const [busScheduleData, setBusScheduleData] = useState([
    {
      id: "a",
      routeNo: "177",
      busRouteStart: "Kollupitiya",
      busRouteEnd: "Kaduwela",
      time: "7:00 AM",
    },
    {
      id: "b",
      routeNo: "15",
      busRouteStart: "Anuradhapura",
      busRouteEnd: "Colombo",
      time: "7:00 AM",
    },
    {
      id: "c",
      routeNo: "602",
      busRouteStart: "Kandy",
      busRouteEnd: "Kurunagala",
      time: "7:00 AM",
    },
    {
      id: "d",
      routeNo: "17",
      busRouteStart: "Kandy",
      busRouteEnd: "panadura",

      time: "7:00 AM",
    },
    {
      id: "e",
      routeNo: "138",
      busRouteStart: "kottawa",
      busRouteEnd: "Colombo",
      time: "7:00 AM",
    },
    {
      id: "f",
      routeNo: "190",
      busRouteStart: "migoda",
      busRouteEnd: "Colombo",
      time: "7:00 AM",
    },
  ]);
  const [filteredData, setFilteredData] = useState(busScheduleData);

  /* Search function */
  const handleSearch = () => {
    const filtered = busScheduleData.filter((item) => {
      const routeNoMatch = item.routeNo
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const busRouteStartMatch = item.busRouteStart
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const busRouteEndMatch = item.busRouteEnd
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Filter if either routeNo or bus details matches the searchQuery
      return busRouteStartMatch || busRouteEndMatch || routeNoMatch;
    });
    if (filtered == "") {
      alert("No results found");
    }
    setFilteredData(filtered);
  };

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
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Image
              source={require("../assets/images/search.png")}
              style={styles.searchBtnImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <BusScheduleCard item={item} handleCardPress={handleCardPress} />
          )}
          idExtractor={(item) => item.id}
          horizontal={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

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
export default PassengerBusSchedule;
