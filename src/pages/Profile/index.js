import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {DataItem} from '../../components/atoms';
import {Loading, Profile as HeaderProfile} from '../../components/molecules';
import {colors, getData} from '../../utils';
import axios from 'axios';
import moment from 'moment';
import {showMessage} from 'react-native-flash-message';

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
    photo: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = 'http://202.62.11.53:3000/api/profile/';
    setLoading(true);
    getData('user').then((resStorage) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + resStorage.token,
          },
        })
        .then((res) => {
          const data = res.data.data[0];
          const image64 = `data:image/jpeg;base64, ${res.data.imageBase64}`;
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
            fatherName: data.FATHER_NAME,
            motherName: data.MOTHER_NAME,
            academicStatus: resStorage.academicStatus,
            photo: image64,
          });
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
    motherName,
    photo,
    academicStatus,
  } = studentProfile;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <HeaderProfile
            studentName={fullName}
            registrationNo={regNumber}
            nim={nim}
            faculty={faculty}
            prodi={prodi}
            titleHeader="Student Profile"
            photo={photo}
            academicStatus={academicStatus}
            type2
          />
          <View style={styles.informationWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <DataItem
                label="Email Address"
                description={`${regNumber}@student.unklab.ac.id`}
              />
              <DataItem label="Gender" description={gender} />
              <DataItem
                label="Place, Date of Birth"
                description={`${pob}, ${dob}`}
              />
              <DataItem label="Phone No" description={phoneNumber} />
              <DataItem label="Father Name" description={fatherName} />
              <DataItem label="Mother Name" description={motherName} />
              <DataItem label="Address" description={address} />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
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
    flex: 1,
    margin: 20,
  },
});
