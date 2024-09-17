/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, ImageStyle, StyleProp, View} from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Image source={{uri}} style={[style]} />
    </View>
  );
};
