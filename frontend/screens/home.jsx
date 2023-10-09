import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import UserEventCard from "../components/userEventCard";

export default function Home() {
  const handleCardPress = (item) => {
    console.log("Card Pressed");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topContainer}>
        <Text style={{ fontWeight: "bold" }}>Blank Boxes</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Upcoming Events</Text>

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
            <UserEventCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.key}
          horizontal={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginRight: 13,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
});
