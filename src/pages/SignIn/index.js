import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Gap, Link, TextInput} from '../../components';
import axios from 'axios';
import {storeData} from '../../utils';

const SignIn = ({navigation}) => {
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    const loginUrl = 'http://bni.unklab.ac.id:3000/api/auth/login/';
    const profileUrl = 'http://bni.unklab.ac.id:3000/api/profile/';

    const data = {
      username: regNumber,
      password: password,
    };

    axios
      .post(loginUrl, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resLogin) => {
        const token = resLogin.data.token;
        axios
          .get(profileUrl, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then((resProfile) => {
            const studentProfile = resProfile.data.data[0];
            const userData = {
              regNumber: studentProfile.REGISTRATION_NUMBER,
              nim: studentProfile.NIM,
              fullName: studentProfile.NAMA_SESUAI_IJAZAH,
              faculty: studentProfile.FACULTY_NAME,
              prodi: studentProfile.PRODY_NAME,
              token: token,
            };
            storeData('user', userData);
            navigation.navigate('MainApp');
          });
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Gap height={14} />
        <Text style={styles.welcome}>Welcome, please sign in!</Text>
        <Text style={styles.description}>
          Please use your registration number and password to sign in to your
          account.
        </Text>
        <Gap height={35} />
        <TextInput
          label="Registration No"
          placeholder="S123456789"
          value={regNumber}
          onChangeText={(value) => setRegNumber(value)}
        />
        <Gap height={31} />
        <TextInput
          label="Password"
          placeholder="***********"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <View style={styles.rememberMeWrapper}>
          <CheckBox label="Remember me" />
          <Link label="Forgot Password?" />
        </View>
        <Button label="Sign In Now" paddingVertical={15} onPress={onSignIn} />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    marginHorizontal: 47,
    marginTop: 35,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    maxWidth: 271,
    color: '#908A8A',
    lineHeight: 20,
    fontWeight: '400',
  },
  rememberMeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
});
