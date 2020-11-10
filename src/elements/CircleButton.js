import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 10,
  },
  CircleButtonTitle: {
    color: '#fff',
    lineHeight: 32,
    fontSize: 32,
  },
});

const CircleButton = (props) => (
  <View style={styles.CircleButton}>
    <Text style={styles.CircleButtonTitle}>{props.center}</Text>
  </View>
);

export default CircleButton;
