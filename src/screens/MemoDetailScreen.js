import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";
import CircleButton from "../elements/CircleButton";

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
		top: 75,
	},
});

const MemoDetailScreen = (data) => {
	const [memo, setMemo] = useState({body: "", createOn: ""});
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
		setMemo({body: m.body, createOn: dateString(m.createOn)});
		// setMemo(memo);
		// setBody(memo.body);
		// setDate(dateString(memo.createOn));
		setBody(m.body);
		setDate(dateString(m.createOn));

		// const d = memo.createdOn.toDate();
		// console.log(memo.date.toDate().toISOString().split("T")[0]);
		// setDate(memo.createOn.toDate().toISOString().split("T")[0]);
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.memoHeader}>
				<Text style={styles.memoHeaderTitle}>{body}</Text>
				<Text style={styles.memoHeaderDate}>
					{/* {memo.date.toDate().toISOString().split("T")[0]} */}
					{/* {date} */}
					{memo.createOn}
				</Text>
			</View>
			<View style={styles.memoContent}>
				<Text style={styles.memoBody}>{body}</Text>
			</View>
			<CircleButton
				style={styles.editButton}
				color="white"
				name="pencil"
				onPress={() => {
					data.navigation.navigate("MemoEdit");
				}}
			/>
		</View>
	);
};

export default MemoDetailScreen;
