import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScheduleItem = ({
  time,
  courseNameInd,
  courseNameEng,
  teacher,
  room,
  parallel,
  type,
  days,
  grade,
  percentage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.color(type), styles.time]}>{time}</Text>
      <View style={styles.courseWrapper}>
        <Text style={[styles.color(type), styles.courseName]}>
          {`${courseNameEng} - ${parallel}`}
        </Text>
        <Text
          style={[
            styles.color(type),
            styles.courseName,
          ]}>{`[${days}] at ${room}`}</Text>
        <Text
          style={[
            styles.color(type),
            styles.teacher,
          ]}>{`Teacher: ${teacher}`}</Text>
      </View>
      <Text
        style={[
          styles.color(type),
          styles.room,
        ]}>{`${grade} (${percentage})`}</Text>
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
    fontSize: 10,
    width: '23%',
    fontWeight: '700',
  },
  courseWrapper: {
    width: '65%',
  },
  courseName: {
    fontSize: 10,
    fontWeight: '700',
  },
  teacher: {
    fontSize: 10,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  room: {
    fontSize: 10,
    fontWeight: '700',
    width: '15%',
  },
});
