import React, {useState} from "react";
import {
	StyleSheet,
	View,
	TouchableHighlight,
	TextInput,
	Text,
} from "react-native";
import firebase from "firebase";
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

const SignUpScreen = (data) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				console.log("success", result.user);
				data.navigation.navigate("Home");
				const resetAction = CommonActions.reset({
					index: 0,
					routes: [{name: "Home"}],
				});
				data.navigation.dispatch(resetAction);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>メンバー登録</Text>
			<TextInput
				style={styles.input}
				value={email}
				onChangeText={(text) => setEmail(text)}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Email Address"
			/>
			<TextInput
				style={styles.input}
				value={password}
				onChangeText={(text) => setPassword(text)}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Password"
				secureTextEntry
			/>
			<TouchableHighlight
				style={styles.button}
				onPress={handleSubmit}
				underlayColor="#C70F66">
				<Text style={styles.buttonTitle}>送信する</Text>
			</TouchableHighlight>
		</View>
	);
};

export default SignUpScreen;
