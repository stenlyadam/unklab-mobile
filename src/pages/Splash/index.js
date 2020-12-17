import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {LogoUnklab, Pathway} from '../../assets';
import {Gap} from '../../components';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
