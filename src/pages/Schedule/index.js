import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {DaysBox, Gap, Profile, ScheduleBox} from '../../components';

const Schedule = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Profile
        arrowBack
        titleHeader="Class Schedule"
        navigation={navigation}
        search={true}
        type3
      />

      <View style={styles.boxWrapper}>
        <DaysBox />
        <Gap height={20} />
        <ScheduleBox />
      </View>
    </SafeAreaView>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34048A',
    flex: 1,
  },
  boxWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
  },
});
