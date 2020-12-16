import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {DataItem} from '../../components/atoms';
import {Profile as HeaderProfile} from '../../components/molecules';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <HeaderProfile
          studentName="John Doe"
          registrationNo="S2010001"
          nim="105012010001"
          arrowBack
          titleHeader="Student Profile"
          navigation={navigation}
          type2
        />
        <View style={styles.informationWrapper}>
          <DataItem
            label="Email Address"
            description="s2010001@student.unklab.ac.id"
          />
          <DataItem label="Gender" description="Male" />
          <DataItem label="Date of Birth" description="19/09/1987" />
          <DataItem label="Phone No" description="08114381719" />
          <DataItem
            label="Parent / Guardian Full Name"
            description="Vivi Sumanti Tuuk"
          />
          <DataItem
            label="Parent / Guardian Phone No"
            description="08114381718"
          />
          <DataItem
            label="Current Address"
            description="Jalan Arnold Mononutu No. 1, Kel. Airmadidi Bawah
RT/RW 01/08, Kec. Airmadidi, Kab. Minahasa Utara
95371, Sulawesi Utara"
          />
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
