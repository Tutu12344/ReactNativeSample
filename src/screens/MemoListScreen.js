import React from "react";
import {StyleSheet, View, Text} from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
});

const MemoListScreen = () => (
	<View style={styles.container}>
		<MemoList />
		<CircleButton center="+" />
	</View>
);

export default MemoListScreen;
