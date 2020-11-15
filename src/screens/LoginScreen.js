import React from "react";
import {
	StyleSheet,
	View,
	TouchableHighlight,
	TextInput,
	Text,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		padding: 24,
		backgroundColor: "#fff",
	},
	input: {
		height: 48,
		backgroundColor: "#eee",
		marginBottom: 16,
		borderWidth: 1,
		borderColor: "#DDD",
		padding: 8,
	},
	title: {
		fontSize: 28,
		alignSelf: "center",
		marginBottom: 24,
	},
	button: {
		backgroundColor: "#E31676",
		height: 48,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		width: "60%",
		alignSelf: "center",
	},
	buttonTitle: {
		color: "#fff",
		fontSize: 18,
	},
});

const LoginScreen = (data) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>ログイン</Text>
			<TextInput style={styles.input} value="Email Address" />
			<TextInput style={styles.input} value="Password" />
			<TouchableHighlight
				style={styles.button}
				onPress={() => {
					data.navigation.navigate("Home");
				}}
				underlayColor="#C70F66">
				<Text style={styles.buttonTitle}>ログインする</Text>
			</TouchableHighlight>
		</View>
	);
};

export default LoginScreen;