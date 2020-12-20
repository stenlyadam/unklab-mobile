import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../atoms';

const SaldoBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.saldoLabelWrapper}>
          <Text style={styles.saldoLabel}>saldo unklab e-money</Text>
        </View>
        <Text style={styles.saldo}>Rp 199,000</Text>
      </View>
      <Button type="icon-only" icon="icon-pay" />
    </View>
  );
};

export default SaldoBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginTop: -40,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    justifyContent: 'center',
  },
  saldoLabelWrapper: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
  },
  saldoLabel: {
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '400',
  },
  saldo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#051EF9',
  },
});
