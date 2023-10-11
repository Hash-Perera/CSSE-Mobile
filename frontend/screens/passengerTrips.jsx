import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React from "react";
import { COLORS } from "../constraints/constants";
import PassengerTripCard from "../components/passengerTripCard";

const PassengerTrips = () => {
  const handleCardPress = (item) => {
    console.log("Card Pressed");
    console.log(item);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={styles.contanier}>
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
            <PassengerTripCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.key}
          horizontal={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default PassengerTrips;

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
});
