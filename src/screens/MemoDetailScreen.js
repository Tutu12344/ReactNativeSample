import React from "react";
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
	editButton: {
		top: 75,
	},
});

const MemoDetailScreen = (data) => (
	<View style={styles.container}>
		<View style={styles.memoHeader}>
			<Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
			<Text style={styles.memoHeaderDate}>2017/2/10</Text>
		</View>
		<View style={styles.memoContent}>
			<Text>講座のアイデアです</Text>
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

export default MemoDetailScreen;
