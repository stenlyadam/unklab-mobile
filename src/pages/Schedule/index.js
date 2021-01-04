import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {DaysBox, Gap, Loading, Profile, ScheduleBox} from '../../components';
import {colors, getData, storeData} from '../../utils';
import axios from 'axios';

const Schedule = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [semester, setSemester] = useState('');
  const [day, setDay] = useState('All Days');

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
        .catch((err) => {
          setLoading(false);
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.background.error,
            color: colors.white,
          });
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
          <ScheduleBox schedule={schedule} day={day} />
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
