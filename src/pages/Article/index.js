import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {Profile} from '../../components/molecules';
import {colors} from '../../utils';

const Article = ({navigation, route}) => {
  const {content, title, rubrik} = route.params;
  return (
    <View style={styles.page}>
      <Profile
        arrowBack
        titleHeader="News Article"
        navigation={navigation}
        headerOnly
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rubrik}>{rubrik}</Text>
        <AutoHeightWebView
          style={styles.webView}
          source={{html: content}}
          scrollEnabled={false}
          scalesPageToFit={true}
          viewportContent={'width=device-width, user-scalable=no'}
          customStyle={`
      p {
        font-size: 14px;
        text-align: left;
      }
    `}
        />
      </View>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  rubrik: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '700',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  webView: {
    width: '100%',
    marginTop: 10,
  },
});
