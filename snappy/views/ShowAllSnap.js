import React, { useEffect, useState } from 'react';
import { getSnaps, readSnap, seenSnap } from '../services/snap/index';
import { Dimensions, Button, Text, StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import Image from 'react-native-scalable-image';


const AllSnaps = () => {
  const [snaps, setSnaps] = useState([]);
  const [snap, setSnap] = useState('');

  useEffect(() => {
    getSnaps(setSnaps);
  }, [snap]);

  const openSnap = ({ snap_id, duration }) => {
    readSnap(snap_id, setSnap).then(() => {
      setTimeout(() => {
        seenSnap(snap_id, setSnap);
      }, duration * 1000);
    });
  };


  function Item ({ snap_id, duration, from }) {
    /*    email = typeof email === 'string' ? email.split('@')[0] : ''; */
    return (
      <View style={styles.item}>
        <Text>{from} </Text>
        <Text>{duration} seconds</Text>
        <Button
          title="Take a Snap"
          onPress={() => openSnap({ snap_id, duration })}
        />
      </View>
    );
  }

  return (

    <SafeAreaView>
      <View>

      </View>
      <View>
        <FlatList
          data={snaps}
          renderItem={({ item }) => <Item snap_id={item.snap_id} duration={item.duration} from={item.from} />}
          keyExtractor={item => item.snap_id.toString()}
        />
        {snap !== '' &&
          <Image width={Dimensions.get('window').width} source={{ uri: snap }}
          />
        }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#CCCCCC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});
export default AllSnaps;
