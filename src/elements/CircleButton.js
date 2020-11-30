import React, {useState, useEffect} from "react";
import {StyleSheet, TouchableHighlight, View, Platform} from "react-native";
import * as Font from "expo-font";
import {createIconSet} from "@expo/vector-icons";
import fontAwsome from "../../assets/fonts/fa-solid-900.ttf";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomIcon = createIconSet(
	{
		pencil: "\uf303",
		plus: "\uf067",
		check: "\uf00c",
	},
	"FontAwesome",
);

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 24,
		right: 24,
		width: 48,
		height: 48,
	},
	CircleButton: {
		width: 48,
		height: 48,
		borderRadius: 24,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 3,
		zIndex: 10,
		...Platform.select({
			android: {
				margin: 8,
				elevation: 4,
			},
		}),
	},
	CircleButtonTitle: {
		// fontFamily: "FontAwesome",
		lineHeight: 32,
		fontSize: 24,
	},
});

const CircleButton = (data) => {
	const {style, color, name, onPress} = data;
	let bgColor = "#E31676";
	let textColor = "#fff";
	if (color == "white") {
		bgColor = "#fff";
		textColor = "#E31676";
	}
	// useEffect(() => {
	// 	// const fn = async () => {
	// 	// 	await Font.loadAsync({
	// 	// 		FontAwesome: fontAwsome,
	// 	// 	});
	// 	// };
	// 	// fn();
	// 	// setFontLoaded(true);

	// 	const {currentUser} = firebase.auth();
	// });
	return (
		<TouchableHighlight
			style={[styles.container, style]}
			onPress={onPress}
			underlayColor="transparent">
			<View style={[styles.CircleButton, {backgroundColor: bgColor}]}>
				{/* {fontLoaded ? (
					<CustomIcon
						name={name}
						style={[styles.CircleButtonTitle, {color: textColor}]}
					/>
				) : null} */}
				<Icon
					name={name}
					style={[styles.CircleButtonTitle, {color: textColor}]}
				/>
			</View>
		</TouchableHighlight>
	);
};

export default CircleButton;
