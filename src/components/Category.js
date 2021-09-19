import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Category = () => {
  const data = [
    {
      name: 'Appliances',
      image: 'devices-other',
    },
    {
      name: 'Automatic',
      image: 'directions-car',
    },
    {
      name: 'Barber',
      image: 'content-cut',
    },
    {
      name: 'Appliances',
      image: 'devices-other',
    },
    {
      name: 'Automatic',
      image: 'directions-car',
    },
    {
      name: 'Barber',
      image: 'content-cut',
    },
  ];
  return (
    <ScrollView horizontal>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: '#000',
            height: 80,
            width: 80,
            borderRadius: 80,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <MaterialIcons name={item.image} color={'#939393'} size={40} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Category;
