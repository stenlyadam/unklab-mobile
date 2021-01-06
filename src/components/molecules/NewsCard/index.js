import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Link} from '../../atoms';

const NewsCard = ({title, image, navigation, content, rubrik}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showImage = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showImage}>
        <Image source={{uri: image}} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.newsTitle}>{title}</Text>
        <Link
          label="Read more ..."
          onPress={() =>
            navigation.navigate('Article', {
              content: content,
              title: title,
              rubrik: rubrik,
            })
          }
        />
      </View>
      <View style={styles.containerModal}>
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.containerButtonModal}>
            <Button
              type="icon-only"
              icon="icon-close"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View style={styles.containerImageModal}>
            <Image source={{uri: image}} style={styles.imageModal} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  wrapper: {
    justifyContent: 'center',
    maxWidth: 230,
    marginLeft: 10,
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  containerModal: {flex: 1},
  containerButtonModal: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingTop: 20,
    paddingLeft: 20,
  },
  containerImageModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  imageModal: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: -30,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
