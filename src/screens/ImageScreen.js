import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        src={require('../../assets/forest.jpg')}
        score={9.5}
      />
      <ImageDetail
        title="Beach"
        src={require('../../assets/beach.jpg')}
        score={9.8}
      />
      <ImageDetail
        title="Mountain"
        src={require('../../assets/mountain.jpg')}
        score={9.9}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
