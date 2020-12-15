import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconArrowWhite} from '../../../assets';
import {Button, Gap} from '../../atoms';

const Header = ({type, notification, arrowBack, titleHeader}) => {
  if (type === 'with-label') {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {arrowBack && (
            <>
              <IconArrowWhite />
              <Gap width={10} />
            </>
          )}
          <Text style={styles.title}>{titleHeader}</Text>
        </View>
        {notification && <Button type="icon-only" icon="icon-notification" />}
      </View>
    );
  }
  return (
    <View>
      <Button type="icon-only" icon="icon-arrow" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
    marginHorizontal: 18,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});
