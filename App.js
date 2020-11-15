import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import MemoListScreen from "./src/screens/MemoListScreen";
import Appbar from "./src/components/Appbar";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

function RootStack() {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{
				headerStyle: {
					backgroundColor: "#265366",
				},
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Home" component={MemoListScreen} />
			<Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
			<Stack.Screen name="MemoEdit" component={MemoEditScreen} />
			<Stack.Screen name="SignUp" component={SignUpScreen} />
		</Stack.Navigator>
	);
}
// const RootStack = () => {
// 	return (
// 		<Stack.Navigator
// 			initialRouteName="Home"
// 			screenOptions={{
// 				headerStyle: {
// 					backgroundColor: "#265366",
// 				},
// 				headerTintColor: "#fff",
// 				headerTitleStyle: {
// 					fontWeight: "bold",
// 				},
// 			}}>
// 			<Stack.Screen name="Home" component={MemoListScreen} />
// 			<Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
// 		</Stack.Navigator>
// 	);
// };
export default function App() {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
}
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#FFFDF6",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		paddingTop: 80,
// 	},
// });
// const App = () => (
// 	<View style={styles.container}>
// 		<Appbar />

// 		{/* <MemoListScreen /> */}
// 		{/* <MemoDetailScreen /> */}
// 		{/* <MemoEditScreen /> */}
// 		{/* <LoginScreen /> */}
// 		<SignUpScreen />
// 	</View>
// );

// export default createAppContainer(App);
// export default () => {
// 	return (
// 		<NavigationContainer>
// 			<App />
// 		</NavigationContainer>
// 	);
// };
