import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, CheckBox, Gap, Link, TextInput} from '../../components';

const SignIn = ({navigation}) => {
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
        <TextInput label="Registration No" placeholder="S123456789" />
        <Gap height={31} />
        <TextInput label="Password" placeholder="***********" secureTextEntry />
        <View style={styles.rememberMeWrapper}>
          <CheckBox label="Remember me" />
          <Link label="Forgot Password?" />
        </View>
        <Button
          label="Sign In Now"
          paddingVertical={15}
          onPress={() => navigation.replace('MainApp')}
        />
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
