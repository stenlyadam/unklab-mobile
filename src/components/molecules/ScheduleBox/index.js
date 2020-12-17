import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScheduleItem} from '../../atoms';

const ScheduleBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Class Schedule for{' '}
        <Text style={[styles.title, styles.day]}>Thursday</Text>
      </Text>
      <View style={styles.headerWrapper}>
        <Text style={styles.time}>TIME</Text>
        <Text style={styles.course}>COURSE</Text>
        <Text style={styles.room}>ROOM</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScheduleItem
          time="07.10 - 08.30"
          courseName="Introduction to Computing A"
          teacher="Joe Yuan Yulian Mambu"
          room="GK1-303"
          type="major"
        />
        <ScheduleItem
          time="08.40 - 10.00"
          courseName="Indonesian Civics A"
          teacher="Max Silinaung"
          room="GK1-101"
          type="general"
        />
        <ScheduleItem
          time="08.10 - 11.30"
          courseName="Chapel Program"
          teacher="Faculty of Computer Science"
          room="Fern Wallace Hall"
        />
        <ScheduleItem
          time="13.10 - 14.30"
          courseName="Computer Programming A"
          teacher="Green Arther Sandag"
          room="GA-201"
          type="minor"
        />
      </ScrollView>
    </View>
  );
};

export default ScheduleBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#34048A',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  day: {fontWeight: '700'},
  time: {
    width: '23%',
    fontSize: 14,
    fontWeight: '700',
  },
  course: {
    width: '54%',
    fontSize: 14,
    fontWeight: '700',
  },
  room: {
    width: '23%',
    fontSize: 14,
    fontWeight: '700',
  },
});
