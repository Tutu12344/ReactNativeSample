import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#265366',
    height: 80,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 20,
  },
});

const Appbar = () => (
  <View style={styles.appbar}>
    <View>
      <Text style={styles.appbarTitle}>MEMO</Text>
    </View>
  </View>
);

export default Appbar;
