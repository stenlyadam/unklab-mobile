import axios from 'axios';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {DataItem} from '../../components/atoms';
import {Profile as HeaderProfile} from '../../components/molecules';
import {getData} from '../../utils';

const Profile = ({navigation}) => {
  const [studentProfile, setStudentProfile] = useState({
    regNumber: '',
    nim: '',
    fullName: '',
    gender: '',
    dob: '',
    pob: '',
    phoneNumber: '',
    address: '',
    fatherName: '',
  });

  useEffect(() => {
    const url = 'http://bni.unklab.ac.id:3000/api/profile/';

    getData('user').then((resStorage) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + resStorage.token,
          },
        })
        .then((res) => {
          const data = res.data.data[0];
          console.log('respons,', res);
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
            fatherName: data.father_name,
          });
        });
    }, []);
  });

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
    fatherName,
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
          <DataItem
            label="Parent / Guardian Full Name"
            description={fatherName}
          />
          {/*
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
