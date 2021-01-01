import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {Card, PointBox, Profile} from '../../components/molecules';
import {getData} from '../../utils';

const StudentCard = ({navigation}) => {
  const [studentProfile, setStudentProfile] = useState({
    regNumber: '',
    nim: '',
    fullName: '',
    faculty: '',
    prodi: '',
    photo: '',
  });

  useEffect(() => {
    const url = 'http://bni.unklab.ac.id:3000/api/profile/';
    getData('user').then((res) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + res.token,
          },
        })
        .then((resProfile) => {
          const image = `data:image/jpeg;base64, ${resProfile.data.imageBase64}`;
          setStudentProfile({
            regNumber: res.regNumber,
            nim: res.nim,
            fullName: res.fullName,
            faculty: res.faculty,
            prodi: res.prodi,
            photo: image,
          });
        });
    });
  }, []);

  const {regNumber, nim, fullName, faculty, prodi, photo} = studentProfile;

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
          photo={studentProfile.photo}
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
            photo={photo}
          />
          <Gap height={30} />
          {/* <BadgeBox /> */}
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
