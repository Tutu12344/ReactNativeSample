import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	memoHeader: {
		height: 100,
		backgroundColor: "#17313C",
		justifyContent: "center",
		padding: 10,
	},
	memoHeaderTitle: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 4,
	},
	memoHeaderDate: {
		fontSize: 12,
		color: "#fff",
	},
	memoContent: {
		paddingTop: 30,
		paddingRight: 20,
		paddingLeft: 20,
		paddingBottom: 20,
		backgroundColor: "#fff",
		flex: 1,
	},
	memoBody: {
		lineHeight: 22,
		fontSize: 15,
	},
	editButton: {
		top: 70,
	},
});

const MemoDetailScreen = (data) => {
	const [memo, setMemo] = useState({body: "", createOn: "", key: ""});
	const [date, setDate] = useState("");
	const [body, setBody] = useState("");
	const dateString = (date) => {
		// console.log(date.toDate().toISOString());
		const str = date.toDate().toISOString();
		// console.log(date);
		return str.split("T")[0];
	};
	useEffect(() => {
		const m = data.route.params.memo;
		setMemo({body: m.body, createOn: dateString(m.createOn), key: m.key});
	}, []);
	const returnMemo = (memo) => {
		const newDate = firebase.firestore.Timestamp.now(); // ← 正しくはこうです
		// setMemo(memo);
		setMemo({
			body: memo.body,
			createOn: dateString(newDate),
			key: memo.key,
		});
	};
	return (
		<View style={styles.container}>
			<View style={styles.memoHeader}>
				<Text style={styles.memoHeaderTitle}>{memo.body}</Text>
				<Text style={styles.memoHeaderDate}>
					{/* {memo.date.toDate().toISOString().split("T")[0]} */}
					{/* {date} */}
					{memo.createOn}
				</Text>
			</View>
			<View style={styles.memoContent}>
				<Text style={styles.memoBody}>{memo.body}</Text>
			</View>
			<CircleButton
				style={styles.editButton}
				color="white"
				name="pencil"
				onPress={() => {
					// console.log("success");
					data.navigation.navigate("MemoEdit", {
						// ...memo,
						memo,
						returnMemo: returnMemo,
					});
				}}
			/>
		</View>
	);
};

export default MemoDetailScreen;
