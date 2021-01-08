import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RNQRGenerator from 'rn-qr-generator';
import {showMessage} from 'react-native-flash-message';
import {LogoUnklab, TandaTanganRektor} from '../../../assets';
import {colors, getData} from '../../../utils';
import {Gap} from '../../atoms';

const Card = ({regNumber, nim, fullName, faculty, prodi, validThru, photo}) => {
  const [showFrontCard, setShowFrontCard] = useState(true);
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      RNQRGenerator.generate({
        value: res.nim, // required
        height: 100,
        width: 100,
        base64: false, // default 'false'
        correctionLevel: 'L', // default is 'H', also available 'M' and 'Q'.
      })
        .then((response) => {
          const {uri} = response;
          setQrCode(uri);
        })
        .catch((err) => {
          showMessage({
            message: `Cannot create QR Code ${err}`,
            type: 'default',
            backgroundColor: colors.background.error,
            color: colors.white,
          });
        });
    });
  }, []);

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
          <Image
            source={{uri: photo === '' ? undefined : photo}}
            style={styles.photo}
          />
        </View>
        <Gap height={5} />
        <View style={styles.validThruWrapper}>
          <Text style={styles.prodi}>{prodi}</Text>
          {/* <View>
            <Text style={styles.validThru}>VALID THRU</Text>
            <Text style={styles.date}>{validThru}</Text>
          </View> */}
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
          {qrCode !== '' && (
            <Image source={{uri: qrCode}} style={styles.qrcode} />
          )}
          <View style={styles.presidentWrapper}>
            <Image
              source={TandaTanganRektor}
              style={styles.tandaTanganRektor}
            />
            <View style={styles.presidentNameWrapper}>
              <Text style={styles.presidentName}>Marthen Sengkey, PhD</Text>
              <Text style={styles.president}>President</Text>
            </View>
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
    width: '100%',
    height: '60%',
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: colors.background.card,
  },
  headerWrapper: {
    flexDirection: 'row',
  },

  header: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  photo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logo: {
    width: 50,
    height: 50,
  },
  qrcode: {
    width: 120,
    height: 120,
  },
  tandaTanganRektor: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginLeft: -20,
    marginTop: -60,
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
    marginTop: 10,
  },
  nimTitle: {
    color: colors.white,
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '400',
  },
  nim: {
    color: colors.white,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '700',
  },
  regNumberTitle: {
    color: colors.white,
    textAlign: 'right',
    fontSize: 10,
    fontWeight: '400',
  },
  regNumber: {
    color: colors.white,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: '700',
  },
  validThru: {
    color: colors.white,
    fontSize: 8,
  },
  date: {
    color: colors.white,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: '700',
  },
  prodi: {
    color: colors.text.tertiary,
    fontSize: 14,
    fontWeight: '400',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    maxWidth: 230,
    textTransform: 'uppercase',
  },
  unklab: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  fakultas: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '400',
  },
  tap: {
    position: 'absolute',
    top: 270,
    width: 241,
    height: 30,
    backgroundColor: colors.background.tap,
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tapToSee: {
    color: colors.white,
  },
  disclaimer: {
    color: colors.white,
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
    color: colors.white,
  },
  presidentNameWrapper: {
    marginTop: -50,
  },
  president: {
    fontSize: 10,
    fontWeight: '200',
    color: colors.white,
  },
  address: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 8,
  },
  phoneNumber: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 8,
  },
  fax: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 8,
  },
  email: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 8,
  },
  website: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 8,
  },
});
