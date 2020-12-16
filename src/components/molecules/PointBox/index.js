import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';

const PointBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pointWrapper}>
        <Text style={styles.yourPoint}>Your Points</Text>
        <Text style={styles.point}>15</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Button type="icon-only" icon="icon-info" />
        <Text style={styles.lastUpdate}>Last updated: 21 Juli 2020</Text>
      </View>
    </View>
  );
};

export default PointBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: 370,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    justifyContent: 'space-between',
  },
  pointWrapper: {
    justifyContent: 'space-between',
  },
  infoWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  yourPoint: {
    fontSize: 12,
    fontWeight: '400',
  },
  point: {
    fontSize: 36,
    fontWeight: '700',
  },
  lastUpdate: {
    fontSize: 12,
    fontWeight: '200',
  },
});
