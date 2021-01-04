import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {Loading, MenuBox, NewsCard, Profile} from '../../components/molecules';
import {colors, getData} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const Dashboard = ({navigation}) => {
  const [studentProfile, setStudentProfile] = useState({
    regNumber: '',
    nim: '',
    fullName: '',
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

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Profile
            studentName={studentProfile.fullName}
            registrationNo={studentProfile.regNumber}
            nim={studentProfile.nim}
            titleHeader="Universitas Klabat"
            photo={studentProfile.photo}
          />
          <View style={styles.menuBoxContainer}>
            <MenuBox navigation={navigation} />
          </View>
          <Gap height={20} />
          <View style={styles.newsHeaderWrapper}>
            <View style={styles.newsHeader}>
              <Text style={styles.whatsNewsLabel}>What’s New</Text>
              <Text style={styles.latestNewsLabel}>
                Latest news from UNKLAB!
              </Text>
            </View>
            <Button
              label="All News"
              width={100}
              height={30}
              paddingVertical={4}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <NewsCard />
            <NewsCard />
          </ScrollView>
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  menuBoxContainer: {
    marginTop: -80,
    marginHorizontal: 20,
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
    color: colors.text.secondary,
  },
});
