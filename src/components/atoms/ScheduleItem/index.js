import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScheduleItem = ({time, courseName, teacher, room, type}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.color(type), styles.time]}>{time}</Text>
      <View style={styles.courseWrapper}>
        <Text style={[styles.color(type), styles.courseName]}>
          {courseName}
        </Text>
        <Text style={[styles.color(type), styles.teacher]}>{teacher}</Text>
      </View>
      <Text style={[styles.color(type), styles.room]}>{room}</Text>
    </View>
  );
};

export default ScheduleItem;

const styles = StyleSheet.create({
  color: (type) => {
    if (type === 'major') {
      return {color: '#0D69F2'};
    } else if (type === 'general') {
      return {color: '#067511'};
    } else if (type === 'minor') {
      return {color: '#FF5005'};
    } else {
      return {color: 'black'};
    }
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#979797',
  },
  time: {
    fontSize: 12,
    width: '23%',
    fontWeight: '700',
  },
  courseWrapper: {
    width: '54%',
  },
  courseName: {
    fontSize: 12,
    fontWeight: '700',
  },
  teacher: {
    fontSize: 10,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  room: {
    fontSize: 12,
    fontWeight: '700',
    width: '23%',
  },
});
