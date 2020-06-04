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
    readSnap(snap_id, setSnap)
      .finally(() => {
        setTimeout(() => {
          seenSnap(snap_id, setSnap);
        }, duration * 1000);
      });
  };
  function Item({ snap_id, duration, from }) {
    return (
      <View style={styles.item}>
        <Text style={styles.item3}>{from} </Text>
        <Text style={styles.duration}>{duration}</Text>
        <Text style={styles.circle}></Text>
        <Button
          title="Open snap"
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
        <Text style={styles.item2}>If you have some snaps, <br></br>they're gonna be showable here</Text>
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
    backgroundColor: '#CADBDC',
    color: '#342B38',
    fontSize: 25,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item2: {
    backgroundColor: '#CADBDC',
    color: '#342B38',
    fontSize: 19,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item3: {
    color: '#342B38',
    fontSize: 20,
    /*     padding: 20,
        marginVertical: 8,
        marginHorizontal: 16, */
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 1000,
    backgroundColor: '#FF9595',
    padding: 20,
    left: 280,
    top: 7,
    position: 'absolute',
    opacity: .2
  },
  duration: {
    color: '#342B38',
    fontSize: 19,
    padding: 20,
    left: 275,
    top: -3,
    position: 'absolute',
  }
});
export default AllSnaps;
