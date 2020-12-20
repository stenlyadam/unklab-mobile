import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {IconRupiah} from '../../assets';
import {Button, TransactionItem} from '../../components';
import {Profile, SaldoBox} from '../../components/molecules';

const AccountBalance = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Profile
        arrowBack
        titleHeader="Account Balance"
        navigation={navigation}
        headerOnly
        download
      />
      <View style={styles.headerWrapper}>
        <Text style={styles.accountBalanceLabel}>Account Balance</Text>
        <View style={styles.amountWrapper}>
          <IconRupiah />
          <Text style={styles.amountLabel}>1.650.000</Text>
        </View>

        <Text style={styles.dateLabel}>December 17, 2020</Text>
      </View>
      <View style={styles.saldoBoxWrapper}>
        <SaldoBox />
      </View>
      <View style={styles.detailTransactionHeaderWrapper}>
        <Text style={styles.detailTransactionLabel}>Detail Transactions</Text>
        <Button type="icon-only" icon="icon-calendar" />
      </View>
      <View style={styles.transactionItemWrapper}>
        <TransactionItem
          description="Registration Sem. Ganjil 2020/2021"
          date="August 10, 2020"
          amount="Rp. 6.147.000"
          icon="registration"
          type="debit"
        />
        <TransactionItem
          description="Charge Internet"
          date="August 10, 2020"
          amount="Rp. 215.000"
          icon="charge-wireless"
          type="debit"
        />
        <TransactionItem
          description="Payment for Registration"
          date="August 12, 2020"
          amount="Rp. 7.000.000"
          icon="payment"
          type="credit"
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountBalance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    width: '100%',
    height: 150,
    backgroundColor: '#34048A',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  accountBalanceLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFF014',
    textAlign: 'center',
    marginBottom: 10,
  },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountLabel: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
  dateLabel: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
    color: '#8F8F8F',
  },
  saldoBoxWrapper: {
    marginHorizontal: 30,
  },
  detailTransactionHeaderWrapper: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  detailTransactionLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  transactionItemWrapper: {
    marginHorizontal: 25,
  },
});
