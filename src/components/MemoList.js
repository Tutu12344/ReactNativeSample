import React from "react";
import {StyleSheet, View, Text, TouchableHighlight} from "react-native";

const styles = StyleSheet.create({
	memoList: {
		width: "100%",
		flex: 1,
	},
	memoListItem: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		backgroundColor: "#fff",
	},
	memoTitle: {
		fontSize: 18,
		marginBottom: 4,
	},
	memoDate: {
		fontSize: 12,
		color: "#a2a2a2",
	},
});

const MemoList = (data) => {
	const list = [];
	const renderMemo = (memo) => {
		return (
			<TouchableHighlight
				onPress={() => {
					data.navigation.navigate("MemoDetail");
				}}>
				<View style={styles.memoListItem}>
					<Text style={styles.memoTitle}>{memo.body}</Text>
					<Text style={styles.memoDate}>2017/10/10</Text>
				</View>
			</TouchableHighlight>
		);
	};
	data.memoList.forEach((memo) => {
		list.push(renderMemo(memo));
	});
	return <View style={styles.memoList}>{list}</View>;
};

export default MemoList;
