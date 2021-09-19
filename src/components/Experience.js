import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Experience = () => {
  const data = [
    {
      name: 'ABC',
      city: 'DALAS',
      place: 'XYZ Center',
      day: 30,
      date: '30 March 2020',
      description: 'ABCdefghijklmnopqrstuvwxyz',
      id: 1,
      color: '#4472C4',
    },
    {
      name: 'ABC',
      city: 'New York',
      place: 'ABC Center',
      day: 22,
      date: '22 March 2020',
      description: 'ABCdefghijklmnopqrstuvwxyz',
      id: 2,
      color: '#F4C02E',
    },
    {
      name: 'EFG',
      city: 'Mumbai',
      place: '123 Center',
      date: '26 March 2020',
      day: 26,
      description: 'ABCdefghijklmnopqrstuvwxyz',
      id: 3,
      color: '#4472C4',
    },
    {
      name: 'ABC',
      city: 'DALAS',
      place: 'XYZ Center',
      date: '28 March 2020',
      day: 28,
      description: 'ABCdefghijklmnopqrstuvwxyz',
      id: 4,
      color: '#F4C02E',
    },
  ];
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={{marginBottom: 20}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 120,
            height: 50,
            backgroundColor: 'red',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 10,
          }}>
          <Entypo name={'video-camera'} color={'white'} size={24} />
          <Text style={{color: 'white'}}>Live</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 120,
            height: 50,
            backgroundColor: '#636363',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 10,
          }}>
          <MaterialCommunityIcons
            name={'movie-open'}
            color={'white'}
            size={24}
          />
          <Text style={{color: 'white'}}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 120,
            height: 50,
            backgroundColor: '#636363',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 10,
          }}>
          <Text style={{color: 'white'}}>Hotstar</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView horizontal>
        {data.map(item => (
          <View
            style={{
              width: 300,
              backgroundColor: '#000',
              marginHorizontal: 15,
              borderRadius: 10,
              padding: 20,
              marginVertical: 10,
            }}>
            {/* <Text>{item.name}</Text> */}
            <View
              style={{
                height: 150,
                backgroundColor: item.color,
                borderRadius: 10,
                marginBottom: 10,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 28, fontWeight: 'bold'}}>
                {item.name}
              </Text>
              <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
                {item.city}
              </Text>
              <View>
                <Text
                  style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
                  {item.place}
                </Text>
                <Text
                  style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
                  {item.date}
                </Text>
              </View>
            </View>
            <View style={{paddingHorizontal: 15}}>
              <Text style={{color: 'white', fontSize: 18, marginBottom: 20}}>
                {item.name}
              </Text>
              <View style={{width: '60%'}}>
                <Text style={{color: '#6A6A6A', fontSize: 16, marginBottom: 5}}>
                  {item.place}
                </Text>
                <Text
                  style={{color: '#6A6A6A', fontSize: 16, marginBottom: 10}}>
                  {item.description}
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'red', fontSize: 18}}>{item.day} </Text>
                  <Text style={{color: '#4E4E4E', fontSize: 18}}>| March</Text>
                </View>
                <Text style={{color: 'red', fontSize: 18}}>2 PM </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Experience;
