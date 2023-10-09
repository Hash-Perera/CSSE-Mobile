import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Contact from "../screens/contact";
import Backup from "../screens/backup";
import Setting from "../screens/setting";
import Home from "../screens/home";
import { Ionicons } from "@expo/vector-icons";
import ProfIcon from "../assets/images/user.png";
import { COLORS } from "../constraints/constants";

export default function GeneralNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={ProfIcon}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65,
                }}
              />
              <Text>Hash</Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.primary,
          width: 250,
        },

        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveBackgroundColor: COLORS.co_primary,
        drawerLabelStyle: {
          color: COLORS.white,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={COLORS.white} />
          ),
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Contacts"
        options={{
          drawerLabel: "Contact",
          title: "Contact",
        }}
        component={Contact}
      />
      <Drawer.Screen
        name="Backup"
        options={{
          drawerLabel: "Backup",
          title: "Contact",
        }}
        component={Backup}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
        }}
        component={Setting}
      />
    </Drawer.Navigator>
  );
}
