import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput} from "react-native";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	memoEditInput: {
		backgroundColor: "#fff",
		flex: 1,
		paddingTop: 32,
		paddingRight: 16,
		paddingLeft: 16,
		paddingBottom: 16,
		fontSize: 16,
	},
});

const MemoEditScreen = (data) => {
	const [body, setBody] = useState("");
	const handlePress = () => {
		const db = firebase.firestore();
		const currentUser = data.route.params.currentUser;
		db.collection(`users/${currentUser.uid}/memos`)
			.add({
				body: body,
				createOn: new Date(),
			})
			.then((docRef) => {
				console.log(docRef.id);
			})
			.catch((error) => {
				console.log(error);
			});
		data.navigation.goBack();
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.memoEditInput}
				value={body}
				onChangeText={(text) => setBody(text)}
				multiline
				placeholder="Todo"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<CircleButton name="check" onPress={handlePress} />
		</View>
	);
};

export default MemoEditScreen;
