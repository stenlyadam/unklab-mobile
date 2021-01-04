import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScheduleItem} from '../../atoms';

const ScheduleBox = ({schedule, day}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Class Schedule for <Text style={[styles.title, styles.day]}>{day}</Text>
      </Text>
      <View style={styles.headerWrapper}>
        <Text style={styles.time}>TIME</Text>
        <Text style={styles.course}>COURSE</Text>
        <Text style={styles.room}>GRADE</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {schedule.map((item) => (
          <ScheduleItem
            key={item.subject_code}
            time={`${item.start} - ${item.end}`}
            courseNameInd={item.name_ind}
            courseNameEng={item.name_eng}
            teacher={item.name}
            room={item.class_name}
            parallel={item.parallel}
            credit={item.credit}
            days={item.days}
            grade={item.grade}
            percentage={item.percentage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ScheduleBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
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
    fontSize: 12,
    fontWeight: '700',
  },
  course: {
    width: '63%',
    fontSize: 12,
    fontWeight: '700',
  },
  room: {
    width: '15%',
    fontSize: 12,
    fontWeight: '700',
  },
});
