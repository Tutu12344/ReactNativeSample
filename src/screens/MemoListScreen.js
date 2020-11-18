import React from "react";
import {StyleSheet, View, Text} from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
});

const MemoListScreen = (data) => {
	const handlePress = () => {
		const currentUser = data.route.params.currentUser;
		data.navigation.navigate("MemoCreate", {currentUser: currentUser});
	};

	return (
		<View style={styles.container}>
			<MemoList navigation={data.navigation} />
			<CircleButton name="plus" onPress={handlePress} />
		</View>
	);
};

export default MemoListScreen;
