import { AppRegistry } from "react-native";
import App from "./App"; // Replace with your main component
import { name as appName } from "./app.json";
import axios from "axios";

AppRegistry.registerComponent(appName, () => App);
