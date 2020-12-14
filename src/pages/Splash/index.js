import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {LogoUnklab, Pathway} from '../../assets';
import {Gap} from '../../components';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoUnklab} />
      <Gap height={10} />
      <Image source={Pathway} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34048A',
  },
});
