import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Loading, Profile, SaldoBox} from '../../components/molecules';
import {colors, getData} from '../../utils';

const AccountBalance = ({navigation}) => {
  const [balance, setBalance] = useState('');
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [financeNumber, setFinanceNumber] = useState('');

  useEffect(() => {
    const url = 'http://202.62.11.53:3000/api/balance/';
    setLoading(true);
    getData('user').then((resStorage) => {
      axios
        .get(url, {
          headers: {
            Authorization: 'Bearer ' + resStorage.token,
          },
        })
        .then((res) => {
          const amount = res.data.data[0].BALANCE;
          setFinanceNumber(res.data.finance_number);
          setBalance(amount);
          setFullName(resStorage.fullName);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.background.error,
            color: colors.white,
          });
        });
    });
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Profile
          arrowBack
          titleHeader="Account Balance"
          navigation={navigation}
          headerOnly
        />
        <View style={styles.headerWrapper}>
          <Text style={styles.accountBalanceLabel}>{fullName}</Text>
          {/* <View style={styles.amountWrapper}>
          <IconRupiah />
          <NumberFormat
            value={balance}
            displayType={'text'}
            thousandSeparator={true}
            renderText={(value) => (
              <Text style={styles.amountLabel}>{value}</Text>
            )}
          />
        </View> */}

          <Text
            style={
              styles.dateLabel
            }>{`Finance Number : ${financeNumber}`}</Text>
        </View>
        <View style={styles.saldoBoxWrapper}>
          <SaldoBox balance={balance} />
        </View>
        {/* <View style={styles.detailTransactionHeaderWrapper}>
        <Text style={styles.detailTransactionLabel}>Detail Transactions</Text>
        <Button type="icon-only" icon="icon-calendar" />
      </View> */}
        {/* <View style={styles.transactionItemWrapper}>
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
      </View> */}
      </SafeAreaView>
      {loading && <Loading />}
    </>
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
    fontSize: 18,
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
