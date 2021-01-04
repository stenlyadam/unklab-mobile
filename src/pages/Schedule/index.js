import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {DaysBox, Gap, Loading, Profile, ScheduleBox} from '../../components';
import {colors, getData, storeData} from '../../utils';

const Schedule = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [semester, setSemester] = useState('');
  const [isRegister, setIsRegister] = useState(true);
  const [day, setDay] = useState('Senin - Jumat');

  const filterSchedule = (data) => {
    const filterData = data.filter((item) => item.grade !== 'PASS');
    setSchedule(filterData);
    storeData('schedule', filterData);
  };

  const filterScheduleByDay = (data, dayName) => {
    const filterData = data.filter((item) => item.days.includes(dayName));
    setSchedule(filterData);
  };

  useEffect(() => {
    getData('schedule').then((res) => {
      filterScheduleByDay(res, day);
    });
  }, [day]);

  useEffect(() => {
    const url = 'http://bni.unklab.ac.id:3000/api/schedule/';
    setLoading(true);
    getData('user').then((resStorage) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + resStorage.token,
          },
        })
        .then((res) => {
          const dataSemester = res.data.data[0];
          const data = res.data.data;

          setSemester(dataSemester.semester_description);
          filterSchedule(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setIsRegister(false);
        });
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Profile
          titleHeader="Schedule And Grade"
          arrowBack
          navigation={navigation}
          headerOnly
        />
        <View style={styles.boxWrapper}>
          <DaysBox semester={semester} onChangeDay={(value) => setDay(value)} />
          <Gap height={20} />
          <ScheduleBox schedule={schedule} day={day} isRegister={isRegister} />
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  boxWrapper: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
});
