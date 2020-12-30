import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {BadgeBox, Card, PointBox, Profile} from '../../components/molecules';
import {getData} from '../../utils';

const StudentCard = ({navigation}) => {
  const [studentProfile, setStudentProfile] = useState({
    regNumber: '',
    nim: '',
    fullName: '',
    faculty: '',
    prodi: '',
  });

  useEffect(() => {
    getData('user').then((res) => {
      setStudentProfile({
        regNumber: res.regNumber,
        nim: res.nim,
        fullName: res.fullName,
        faculty: res.faculty,
        prodi: res.prodi,
      });
    });
  }, []);

  const {regNumber, nim, fullName, faculty, prodi} = studentProfile;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Profile
          studentName={studentProfile.fullName}
          registrationNo={studentProfile.regNumber}
          nim={studentProfile.nim}
          arrowBack
          titleHeader="Student ID Card"
          navigation={navigation}
          badge="level-1"
        />
        <View style={styles.menuBoxContainer}>
          <PointBox />
          <Gap height={15} />
          <Card
            regNumber={regNumber}
            nim={nim}
            fullName={fullName}
            faculty={faculty}
            prodi={prodi}
            validThru="08/21"
          />
          <Gap height={30} />
          <BadgeBox />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34048A',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  menuBoxContainer: {
    marginTop: -60,
    alignItems: 'center',
  },
  newsHeaderWrapper: {
    flexDirection: 'row',
    marginHorizontal: 18,
    justifyContent: 'space-between',
  },
  newsHeader: {
    justifyContent: 'center',
  },
  whatsNewsLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  latestNewsLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#908A8A',
  },
});
