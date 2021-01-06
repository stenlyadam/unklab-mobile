import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {ScheduleItem} from '../../atoms';

const GradeBox = ({grade, isRegister, semester}) => {
  return (
    <View style={styles.container}>
      {isRegister && (
        <>
          <Text style={styles.title}>{`Grade ${semester}`}</Text>
          <View style={styles.headerWrapper}>
            <Text style={styles.time}>TIME</Text>
            <Text style={styles.course}>COURSE</Text>
            <Text style={styles.room}>GRADE</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {grade.map((item) => (
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
        </>
      )}
      {!isRegister && (
        <Text style={styles.errorMessage}>
          Anda tidak terdaftar di Semester sebelumnya
        </Text>
      )}
    </View>
  );
};

export default GradeBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
    color: colors.primary,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  day: {fontWeight: '700'},
  time: {
    width: '23%',
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  course: {
    width: '63%',
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  room: {
    width: '15%',
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.primary,
  },
});
