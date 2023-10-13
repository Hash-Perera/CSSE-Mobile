import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS } from "../constraints/constants";

const { width, height } = Dimensions.get("window");

const UserProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/user.png")}
          style={styles.avatar}
        />
        <View style={styles.profileInfoContainer}>
          <Text style={styles.userName}>David John</Text>
          <Text style={styles.userInfo}>+62 812 3456 7890</Text>
          <Text style={styles.userInfo}>JohnDoe@gmail.com</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnText}>Edit Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn}>
              <Text style={styles.editBtnText}>Delete Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    top: width * 0.1,
    width: width * 0.33,
    height: width * 0.33,
  },
  profileInfoContainer: {
    top: width * 0.15,
    alignItems: "center",
    marginTop: width * 0.05,
    backgroundColor: "#fff",
    width: width * 0.9,
    padding: width * 0.04,
    borderRadius: width * 0.03,
    justifyContent: "space-around",
    flexDirection: "column",
    gap: width * 0.01,
    height: width * 0.5,
  },
  userName: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  userInfo: {
    fontSize: width * 0.04,
    color: "#aaa",
  },
  editProfileButton: {
    marginTop: width * 0.025,
    backgroundColor: "#279EFF",
    padding: width * 0.035,
    borderRadius: width * 0.03,
    fontSize: width * 0.04,
  },
  btnContainer: {
    top: width * 0.05,
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: width * 0.05,
  },
  editBtn: {
    backgroundColor: COLORS.buttonColor,
    padding: width * 0.035,
    borderRadius: width * 0.03,
    fontSize: width * 0.04,
    marginTop: width * 0.05,
  },
  deleteBtn: {
    backgroundColor: COLORS.error,
    padding: width * 0.035,
    borderRadius: width * 0.03,
    fontSize: width * 0.04,
    marginTop: width * 0.05,
  },
  editBtnText: {
    color: COLORS.white,
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
