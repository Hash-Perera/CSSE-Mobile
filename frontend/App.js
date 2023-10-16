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
import UserProfile from "./screens/userProfile";
import InspectorDashboard from "./screens/inspectorDash";
import ScanQR from "./screens/scanQR";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

axios.defaults.baseURL = "http://192.168.8.198:3001";
// AsyncStorage.removeItem("token");
// axios.defaults.headers.common["Authorization"] = await AsyncStorage.getItem(
//   "token"
// );

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
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{
              title: "My Profile",
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
            name="InspectorDashboard"
            component={InspectorDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScanQR"
            component={ScanQR}
            options={{
              title: "Scan QR Code",
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
