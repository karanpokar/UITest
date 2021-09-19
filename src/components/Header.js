import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Header = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#000',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View style={styles.openDrawer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <AntDesign name="bars" color={'white'} size={26} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.bellIcon}>
          <AntDesign name="bells" color={'white'} size={26} />
        </View>
        <View style={styles.subscribeButton}>
          <Text style={{color: 'white'}}>Subscribe</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  subscribeButton: {
    marginHorizontal: 10,
    flexBasis: '20%',
    borderRadius: 25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
  },
  bellIcon: {
    height: 40,
    width: 40,
    backgroundColor: '#282828',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  openDrawer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
