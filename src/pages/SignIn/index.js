import axios from 'axios';
import React, {useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {LogoUnklab} from '../../assets';
import {Button, Gap, Loading, TextInput} from '../../components';
import {colors, storeData} from '../../utils';

const SignIn = ({navigation}) => {
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignIn = () => {
    const loginUrl = 'http://bni.unklab.ac.id:3000/api/auth/login/';
    const profileUrl = 'http://bni.unklab.ac.id:3000/api/profile/';

    const data = {
      username: regNumber,
      password: password,
    };
    setLoading(true);
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
            setRegNumber('');
            setPassword('');
            setLoading(false);
            navigation.navigate('MainApp');
          })
          .catch((err) => {
            setLoading(false);
            console.log('Error, ', err);
            showMessage({
              message: err.message.includes('code 500')
                ? 'Wrong Registration Number or Password'
                : err.message,
              type: 'default',
              backgroundColor: colors.background.error,
              color: colors.white,
            });
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log('error', err.message);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.background.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Image source={LogoUnklab} style={styles.logo} />
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
          {/* <View style={styles.rememberMeWrapper}>
            <CheckBox label="Remember me" />
            <Link label="Forgot Password?" />
          </View> */}
          <Gap height={40} />
          <Button label="Sign In Now" paddingVertical={15} onPress={onSignIn} />
        </View>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginHorizontal: 47,
    marginTop: 35,
  },
  logo: {
    width: 80,
    height: 80,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    maxWidth: 271,
    color: colors.text.secondary,
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
