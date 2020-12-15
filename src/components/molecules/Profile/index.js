import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '..';
import {IconNullPhoto} from '../../../assets';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header type="with-label" notification />
      <View style={styles.profileWrapper}>
        <IconNullPhoto />
        <View style={styles.profile}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.nim}>105012010001</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34048A',
    height: 225,
    borderBottomRightRadius: 30,
  },
  profileWrapper: {
    flexDirection: 'row',
    marginVertical: 14,
    marginHorizontal: 18,
  },
  profile: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    color: '#FFF014',
    fontWeight: '400',
  },
  nim: {
    fontSize: 14,
    color: 'white',
  },
});
