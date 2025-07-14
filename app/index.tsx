import React, { useState } from 'react';
import {
  View,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

const getImagePairs = () => {
  const baseNIM = '10584110';
  const suffixNIM = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const imgSuffix = '_.jpg?1751871539';
  const defaultImg =
    'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

  return Array.from({ length: 10 }, (_, i) => {
    const nim = `${baseNIM}${i + 59}${suffixNIM}`;
    return {
      mainImage: `${baseURL}${nim}${imgSuffix}`,
      altImage: defaultImg,
    };
  });
};

const imagePairs = getImagePairs();

const GridGambarAgus = () => {
  const [states, setStates] = useState(
    imagePairs.map(() => ({ zoom: 1, showAlt: false }))
  );

  const toggleImage = (index: number) => {
    setStates((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              zoom: item.zoom < 2 ? item.zoom * 1.2 : 2,
              showAlt: !item.showAlt,
            }
          : item
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.grid}>
      {imagePairs.map((pair, index) => (
        <Pressable key={index} onPress={() => toggleImage(index)}>
          <Image
            source={{
              uri: states[index].showAlt ? pair.altImage : pair.mainImage,
            }}
            style={[
              styles.image,
              { transform: [{ scale: states[index].zoom }] },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default GridGambarAgus;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 16,
    height: Dimensions.get('window').width / 3 - 16,
    margin: 4,
    borderRadius: 8,
    resizeMode: 'cover',
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#bbb',
  },
});
