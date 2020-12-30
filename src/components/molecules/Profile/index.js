import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '..';
import {
  IconBadgeLevel1,
  IconBadgeLevel2,
  IconBadgeLevel3,
  IconBadgeLevel4,
  IconNullPhoto,
} from '../../../assets';

const Profile = ({
  studentName,
  nim,
  registrationNo,
  faculty,
  prodi,
  notification,
  search,
  arrowBack,
  titleHeader,
  navigation,
  badge,
  type2,
  headerOnly,
  download,
}) => {
  const Badge = () => {
    if (badge === 'level-1') {
      return <IconBadgeLevel1 />;
    }
    if (badge === 'level-2') {
      return <IconBadgeLevel2 />;
    }
    if (badge === 'level-3') {
      return <IconBadgeLevel3 />;
    }
    if (badge === 'level-4') {
      return <IconBadgeLevel4 />;
    }
    return <IconBadgeLevel1 />;
  };

  if (headerOnly) {
    return (
      <View style={styles.containerType3}>
        <Header
          type="with-label"
          arrowBack={arrowBack}
          search={search}
          download={download}
          titleHeader={titleHeader}
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  return (
    <View style={styles.container(type2)}>
      <Header
        type="with-label"
        notification={notification}
        arrowBack={arrowBack}
        titleHeader={titleHeader}
        onPress={() => navigation.goBack()}
      />
      {type2 && (
        <>
          <Text style={styles.fakultas}>{faculty}</Text>
          <Text style={styles.prodi}>{prodi}</Text>
        </>
      )}
      <View style={styles.profileWrapper}>
        <IconNullPhoto />
        <View style={styles.profile}>
          <Text style={styles.name}>{studentName}</Text>
          <Text style={styles.nim}>{`${nim} / ${registrationNo}`}</Text>
        </View>
        <View style={styles.badgeWrapper}>{badge && <Badge />}</View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: (type2) => ({
    backgroundColor: '#34048A',
    height: type2 ? 200 : 225,
    borderBottomRightRadius: type2 ? 10 : 30,
    borderBottomLeftRadius: type2 ? 10 : 0,
    paddingRight: 20,
  }),
  containerType3: {
    backgroundColor: '#34048A',
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
  badgeWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  fakultas: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
  },
  prodi: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
  },
});
