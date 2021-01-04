import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {Card, Loading, Profile} from '../../components/molecules';
import {colors, getData} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const StudentCard = ({navigation}) => {
  const [studentProfile, setStudentProfile] = useState({
    regNumber: '',
    nim: '',
    fullName: '',
    faculty: '',
    prodi: '',
    photo: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = 'http://bni.unklab.ac.id:3000/api/profile/';
    setLoading(true);
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

  const {regNumber, nim, fullName, faculty, prodi, photo} = studentProfile;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Profile
            arrowBack
            titleHeader="ID Card"
            navigation={navigation}
            headerOnly
          />
          <View style={styles.menuBoxContainer}>
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
      {loading && <Loading />}
    </>
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
    marginTop: 30,
    marginHorizontal: 10,
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
