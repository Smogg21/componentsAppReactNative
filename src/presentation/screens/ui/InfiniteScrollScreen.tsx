import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {FlatList} from 'react-native-gesture-handler';

export const InfiniteScrollScreen = () => {
  const [number, setNumber] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {};

  return (
    <CustomView margin>
      <Title text="Infinite Scroll" safe />
      <FlatList />
    </CustomView>
  );
};
