import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';

const DaysBox = ({semester, onChangeDay}) => {
  const changeDay = (day) => {
    onChangeDay(day);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.semester}>{semester}</Text>
      <View style={styles.wrapper}>
        <Button type="rounded" label="SEN" onPress={() => changeDay('Senin')} />
        <Button
          type="rounded"
          label="SEL"
          onPress={() => changeDay('Selasa')}
        />
        <Button type="rounded" label="RAB" onPress={() => changeDay('Rabu')} />
        <Button type="rounded" label="KAM" onPress={() => changeDay('Kamis')} />
        <Button type="rounded" label="JUM" onPress={() => changeDay('Jumat')} />
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
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
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});
