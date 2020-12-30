import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {DataItem} from '../../components/atoms';
import {Profile as HeaderProfile} from '../../components/molecules';
import axios from 'axios';
import {getData} from '../../utils';
import moment from 'moment';

const Profile = ({navigation}) => {
  const [token, setToken] = useState('');
  const [studentProfile, setStudentProfile] = useState({
    regNumber: '',
    nim: '',
    fullName: '',
    gender: '',
    dob: '',
    pob: '',
    phoneNumber: '',
    address: '',
  });

  useEffect(() => {
    const url = 'http://bni.unklab.ac.id:3000/api/profile/';

    getData('user').then((res) => {
      setToken(res.token);
    });

    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        const data = res.data.data[0];
        setStudentProfile({
          regNumber: data.REGISTRATION_NUMBER,
          nim: data.NIM,
          fullName: data.NAMA_SESUAI_IJAZAH,
          faculty: data.FACULTY_NAME,
          prodi: data.PRODY_NAME,
          gender: data.GENDER === 'F' ? 'Female' : 'Male',
          dob: moment(data.DOB).format('L'),
          pob: data.POB,
          phoneNumber: data.HANDPHONE,
          address: data.ADDRESS,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    regNumber,
    nim,
    fullName,
    faculty,
    prodi,
    gender,
    dob,
    pob,
    phoneNumber,
    address,
  } = studentProfile;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <HeaderProfile
          studentName={fullName}
          registrationNo={regNumber}
          nim={nim}
          faculty={faculty}
          prodi={prodi}
          arrowBack
          titleHeader="Student Profile"
          navigation={navigation}
          type2
        />
        <View style={styles.informationWrapper}>
          <DataItem
            label="Email Address"
            description={`${regNumber}@student.unklab.ac.id`}
          />
          <DataItem label="Gender" description={gender} />
          <DataItem label="Date of Birth" description={`${pob}, ${dob}`} />
          <DataItem label="Phone No" description={phoneNumber} />
          {/* <DataItem
            label="Parent / Guardian Full Name"
            description="Vivi Sumanti Tuuk"
          />
          <DataItem
            label="Parent / Guardian Phone No"
            description="08114381718"
          /> */}
          <DataItem label="Current Address" description={address} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
  informationWrapper: {
    margin: 20,
  },
});
