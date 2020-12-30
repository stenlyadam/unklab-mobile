import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DummyQrCode,
  DummySignature,
  IconNullPhoto,
  LogoUnklab,
} from '../../../assets';
import {Gap} from '../../atoms';

const Card = ({regNumber, nim, fullName, faculty, prodi, validThru}) => {
  const [showFrontCard, setShowFrontCard] = useState(true);

  if (showFrontCard) {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image source={LogoUnklab} style={styles.logo} />
          <View style={styles.header}>
            <Text style={styles.unklab}>Universitas Klabat</Text>
            <Text style={styles.fakultas}>{faculty}</Text>
          </View>
        </View>
        <Gap height={5} />
        <View style={styles.profileWrapper}>
          <View style={styles.profile}>
            <Text style={styles.nimTitle}>NIM</Text>
            <Text style={styles.nim}>{nim}</Text>
            <Gap height={15} />
            <Text style={styles.regNumberTitle}>REG. NUMBER</Text>
            <Text style={styles.regNumber}>{regNumber}</Text>
          </View>
          <IconNullPhoto />
        </View>
        <Gap height={5} />
        <View style={styles.validThruWrapper}>
          <Text style={styles.prodi}>{prodi}</Text>
          <View>
            <Text style={styles.validThru}>VALID THRU</Text>
            <Text style={styles.date}>{validThru}</Text>
          </View>
        </View>
        <Text style={styles.name}>{fullName}</Text>

        <TouchableOpacity
          style={styles.tap}
          onPress={() => setShowFrontCard(false)}>
          <Text style={styles.tapToSee}>Tap to see your QR Code</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.disclaimer}>
          This Student ID belongs to Universitas Klabat issued to the person
          whose name and photograph appears hereon. Universitas Klabat is not
          responsible for any misuse of this Student ID card.
        </Text>
        <View style={styles.qrCodeWrapper}>
          <DummyQrCode />
          <View style={styles.presidentWrapper}>
            <DummySignature />
            <Text style={styles.presidentName}>Marthen Sengkey, PhD</Text>
            <Text style={styles.president}>President</Text>
          </View>
        </View>

        <View>
          <Text style={styles.address}>
            Jl. Arnold Mononutu, Airmadidi, Minahasa Utara, Sulawesi Utara,
            Indonesia, 95371
          </Text>
          <Text style={styles.phoneNumber}>
            Telp: +62 431 891035, 891041/42
          </Text>
          <Text style={styles.fax}>Fax: +62 431 891036</Text>
          <Text style={styles.email}>E-Mail: email@unklab.ac.id</Text>
          <Text style={styles.website}>http://www.unklab.ac.id</Text>
        </View>
        <TouchableOpacity
          style={styles.tap}
          onPress={() => setShowFrontCard(true)}>
          <Text style={styles.tapToSee}>Tap to see the your ID Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    width: 370,
    height: 250,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: '#170B3B',
  },
  headerWrapper: {
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  profile: {
    marginRight: 15,
  },
  validThruWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  nimTitle: {
    color: 'white',
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '400',
  },
  nim: {
    color: 'white',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '700',
  },
  regNumberTitle: {
    color: 'white',
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '400',
  },
  regNumber: {
    color: 'white',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '700',
  },
  validThru: {
    color: 'white',
    fontSize: 8,
  },
  date: {
    color: 'white',
    fontSize: 12,
    textAlign: 'right',
    fontWeight: '700',
  },
  prodi: {
    color: '#FFF014',
    fontSize: 12,
    fontWeight: '400',
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    maxWidth: 230,
    textTransform: 'uppercase',
  },
  unklab: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  fakultas: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },
  tap: {
    position: 'absolute',
    top: 230,
    width: 241,
    height: 30,
    backgroundColor: '#341948',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tapToSee: {
    color: 'white',
  },
  disclaimer: {
    color: 'white',
    fontSize: 6,
    textAlign: 'center',
    marginTop: -10,
  },
  qrCodeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  presidentWrapper: {
    marginLeft: 10,
  },
  presidentName: {
    fontSize: 12,
    fontWeight: '200',
    color: 'white',
  },
  president: {
    fontSize: 10,
    fontWeight: '200',
    color: 'white',
  },
  address: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
  phoneNumber: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
  fax: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
  email: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
  website: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
  },
});
