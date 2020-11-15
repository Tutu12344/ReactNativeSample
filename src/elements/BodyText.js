import React from "react";
import {StyleSheet, View, Text} from "react-native";

const styles = StyleSheet.create({
	text: {
		color: "#DDD",
		backgroundColor: "#eee",
	},
});
const BodyText = (props) => (
	<View>
		<Text style={styles.text}>{props.name}</Text>
	</View>
);

export default BodyText;
