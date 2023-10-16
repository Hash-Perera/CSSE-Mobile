// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// axios.defaults.baseURL = "http://192.168.8.198:3001";

// axios.interceptors.request.use(async (config) => {
//   if (config.url !== "/auth/login" && config.url !== "/auth/register") {
//     const Token = await AsyncStorage.getItem("token");
//     config.headers.Authorization = `Bearer ${Token}`;
//   }
//   return config;
// });

// export default axios;
