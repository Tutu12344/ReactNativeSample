import React, {useState} from "react";
import firebase from "firebase";
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
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = () => {
		const firebaseConfig = {
			apiKey: "AIzaSyBpamZsA8ZWdFQBdJlul0uCy8Zpz0ilh20",
			authDomain: "react-native-todo-2bfca.firebaseapp.com",
			databaseURL: "https://react-native-todo-2bfca.firebaseio.com",
			projectId: "react-native-todo-2bfca",
			storageBucket: "react-native-todo-2bfca.appspot.com",
			messagingSenderId: "55302893030",
			appId: "1:55302893030:web:871964c232cfa741963a27",
		};
		firebase.initializeApp(firebaseConfig);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>ログイン</Text>
			<TextInput
				style={styles.input}
				value={email}
				onChange={(text) => {
					setEmail(text.target.value);
				}}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Email Address"
			/>
			<TextInput
				style={styles.input}
				value={password}
				onChange={(text) => {
					setPassword(text.target.value);
				}}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Password"
				secureTextEntry
			/>
			<TouchableHighlight
				style={styles.button}
				onPress={handleSubmit}
				underlayColor="#C70F66">
				<Text style={styles.buttonTitle}>ログインする</Text>
			</TouchableHighlight>
		</View>
	);
};

export default LoginScreen;
