import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from './Background'

const DATA = [
  {
    id: 'a',
    title: 'First Item',
  },
  {
    id: 'b',
    title: 'Second Item',
  },
  {
    id: 'c',
    title: 'Third Item',
  },
  {
    id: 'd',
    title: 'Fourth Item',
  },
  {
    id: 'e',
    title: 'Fifth Item',
  },
  {
    id: 'f',
    title: 'Sixth Item',
  },
  {
    id: 'g',
    title: 'Seventh Item',
  },
  {
    id: 'h',
    title: 'Eighth Item',
  },
  {
    id: 'i',
    title: 'Ninth Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const Details = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />

    );
  };

  return (
    
      <ScrollView>
      <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      
    </SafeAreaView>
      </ScrollView>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default Details