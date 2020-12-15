import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconNullImage} from '../../../assets';
import {Link} from '../../atoms';

const NewsCard = () => {
  return (
    <View style={styles.container}>
      <IconNullImage />
      <View style={styles.wrapper}>
        <Text style={styles.newsTitle}>Hot News from UNKLAB Official</Text>
        <Text style={styles.newsDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          harum eos minus placeat accusantium, omnis reiciendis! Voluptatum
          minus natus eos eum voluptatem? Quia cumque laboriosam neque, soluta
          rerum harum quibusdam?
        </Text>
        <Link label="Read more ..." />
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    justifyContent: 'center',
    maxWidth: 230,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  newsDescription: {
    fontSize: 12,
    color: '#908A8A',
    textAlign: 'justify',
  },
});
