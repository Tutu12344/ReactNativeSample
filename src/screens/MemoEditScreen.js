import React, {useState, useEffect} from "react";
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
	const [memo, setMemo] = useState({body: "", createOn: "", key: ""});

	useEffect(() => {
		const m = data.route.params.memo;
		setMemo({body: m.body, createOn: m.createOn, key: m.key});
	}, []);

	const handlePress = () => {
		const {currentUser} = firebase.auth();
		const db = firebase.firestore();
		const newDate = firebase.firestore.Timestamp.now(); // ← 正しくはこうです

		db.collection(`users/${currentUser.uid}/memos`)
			.doc(memo.key)
			.update({body: memo.body, createOn: newDate})
			.then(() => {
				// data.route.params.returnMemo({
				// 	body: memo.body,
				// 	key: memo.key,
				// 	createOn: newDate,
				// });
				data.route.params.returnMemo(memo);
				data.navigation.goBack();

				console.log("success");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.memoEditInput}
				onChangeText={(text) => setMemo({...memo, body: text})}
				value={memo.body}
				textAlignVertical="top"
				multiline
			/>
			<CircleButton name="check" onPress={handlePress} />
			{console.log(memo)}
		</View>
	);
};

export default MemoEditScreen;
