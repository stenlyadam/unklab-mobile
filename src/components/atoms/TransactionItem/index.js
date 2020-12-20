import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconMoney, IconRegistration, IconWireless} from '../../../assets';

const TransactionItem = ({description, date, amount, icon, type}) => {
  const Icon = () => {
    if (icon === 'registration') {
      return <IconRegistration />;
    } else if (icon === 'payment') {
      return <IconMoney />;
    } else if (icon === 'charge-wireless') {
      return <IconWireless />;
    }
    return <IconRegistration />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icon />
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={styles.amount(type)}>{amount}</Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  wrapper: {
    flexDirection: 'row',
  },
  descriptionWrapper: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  description: {
    fontSize: 8,
  },
  date: {
    fontSize: 6,
    color: '#8B8A8A',
  },
  amount: (type) => ({
    fontSize: 12,
    fontWeight: '700',
    color: type === 'debit' ? '#FB0303' : '#02870F',
  }),
});
