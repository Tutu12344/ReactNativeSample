import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MemoListScreen from "./src/screens/MemoListScreen";
import Appbar from "./src/components/Appbar";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFDF6",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 80,
	},
});
const App = () => (
	<View style={styles.container}>
		<Appbar />

		{/* <MemoListScreen /> */}
		{/* <MemoDetailScreen /> */}
		{/* <MemoEditScreen /> */}
		{/* <LoginScreen /> */}
		<SignUpScreen />
	</View>
);

export default App;
