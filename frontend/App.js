import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { COLORS } from "./constraints/constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import SignUp from "./screens/signUp";
import GetStarted from "./screens/getStarted";
import Home from "./screens/PassengerHome";
import TopUp from "./screens/passengerTopUp";
import PassengerToken from "./screens/passengerToken";
import PassengerBusSchedule from "./screens/passengerBusSchedule";
import PassengerTrips from "./screens/passengerTrips";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TopUp"
            component={TopUp}
            options={{
              title: "Top Up Your Credits",
              headerStyle: {
                backgroundColor: COLORS.drawable,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="PassengerToken"
            component={PassengerToken}
            options={{
              title: "My Token",
              headerStyle: {
                backgroundColor: COLORS.drawable,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="PassengerBusSchedule"
            component={PassengerBusSchedule}
            options={{
              title: "Bus Schedule",
              headerStyle: {
                backgroundColor: COLORS.drawable,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="PassengerTrips"
            component={PassengerTrips}
            options={{
              title: "My Trips",
              headerStyle: {
                backgroundColor: COLORS.drawable,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
