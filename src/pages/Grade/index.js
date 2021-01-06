import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {GradeBox, Loading, Profile} from '../../components';
import {colors, getData} from '../../utils';

const Grade = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [grade, setGrade] = useState([]);
  const [semester, setSemester] = useState('');
  const [isRegister, setIsRegister] = useState(true);

  const filterSchedule = (data) => {
    const filterData = data.filter((item) => item.grade !== 'PASS');
    setGrade(filterData);
  };

  useEffect(() => {
    const url = 'http://202.62.11.53:3000/api/last_semester_grade/';
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
          titleHeader="Last Semester Grade"
          arrowBack
          navigation={navigation}
          headerOnly
        />
        <View style={styles.boxWrapper}>
          <GradeBox grade={grade} isRegister={isRegister} semester={semester} />
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default Grade;

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
