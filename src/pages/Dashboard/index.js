import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {MenuBox, NewsCard, Profile} from '../../components/molecules';

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Profile
          studentName="John Doe"
          registrationNo="S2010001"
          nim="105012010001"
          notification
          arrowBack
          titleHeader="Universitas Klabat"
        />
        <View style={styles.menuBoxContainer}>
          <MenuBox navigation={navigation} />
        </View>
        <Gap height={20} />
        <View style={styles.newsHeaderWrapper}>
          <View style={styles.newsHeader}>
            <Text style={styles.whatsNewsLabel}>What’s New</Text>
            <Text style={styles.latestNewsLabel}>Latest news from UNKLAB!</Text>
          </View>
          <Button
            label="All News"
            width={100}
            height={30}
            paddingVertical={4}
            onPress={() => navigation.navigate('StudentCard')}
          />
        </View>

        <NewsCard />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

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
    marginTop: -60,
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
