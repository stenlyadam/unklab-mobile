import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';

const DaysBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.semester}>Semester Genap 2020/2021</Text>
      <View style={styles.wrapper}>
        <Button type="rounded" label="MON" />
        <Button type="rounded" label="TUE" />
        <Button type="rounded" label="WED" />
        <Button type="rounded" label="THU" />
        <Button type="rounded" label="FRI" />
      </View>
    </View>
  );
};

export default DaysBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  semester: {
    marginLeft: 10,
    marginBottom: 5,
    color: '#34048A',
    fontSize: 12,
    fontWeight: '400',
  },
});
