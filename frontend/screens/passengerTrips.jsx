import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constraints/constants";
import PassengerTripCard from "../components/passengerTripCard";

const PassengerTrips = () => {
  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
  };
  const [tripData, setTripData] = useState([
    {
      id: "a",
      busNo: "Nw-6530",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "2021-09-12",
    },
    {
      id: "b",
      busNo: "123",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "2021-09-12",
    },
    {
      id: "c",
      busNo: "123",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "2021-09-12",
    },
    {
      id: "d",
      busNo: "123",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "2021-09-12",
    },
    {
      id: "e",
      busNo: "123",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "2021-09-12",
    },
    {
      id: "f",
      busNo: "123",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "6 Aug",
    },
    {
      id: "g",
      busNo: "123",
      routeNo: "177",
      busRouteStart: "Kandy",
      busRouteEnd: "Colombo",
      cost: "Rs. 200",
      tripDistance: "100km",
      tripTime: "7:00 AM",
      busDate: "2021-09-12",
    },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={styles.contanier}>
        <FlatList
          data={tripData}
          renderItem={({ item }) => (
            <PassengerTripCard item={item} handleCardPress={handleCardPress} />
          )}
          idExtractor={(item) => item.id}
          horizontal={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});
export default PassengerTrips;
