import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../atoms';

const Header = ({
  type,
  notification,
  arrowBack,
  titleHeader,
  onPress,
  search,
  download,
  logout,
  onLogout,
}) => {
  if (type === 'with-label') {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          {arrowBack && (
            <>
              <Button
                type="icon-only"
                icon="icon-arrow-white"
                onPress={onPress}
              />
              <Gap width={10} />
            </>
          )}
          <Text style={styles.title}>{titleHeader}</Text>
        </View>
        {notification && <Button type="icon-only" icon="icon-notification" />}
        {search && <Button type="icon-only" icon="icon-search" />}
        {download && <Button type="icon-only" icon="icon-download" />}
        {logout && (
          <Button type="icon-only" icon="icon-logout" onPress={onLogout} />
        )}
      </View>
    );
  }
  return (
    <View>
      <Button type="icon-only" icon="icon-arrow" onPress={onPress} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 14,
    marginLeft: 16,
    marginRight: 10,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});
