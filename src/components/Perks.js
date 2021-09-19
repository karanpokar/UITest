import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const Perks = () => {
  const [level, setLevel] = React.useState(1);
  const data = [
    {
      index: 1,
      color: 'red',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      index: 2,
      color: 'darkblue',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      index: 3,
      color: 'orange',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
  ];
  const RenderCards = item => {
    return (
      <View
        key={item.index}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: item.color,
          width: width * 0.9,
          height: 80,
          flex: 1,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
          alignSelf: 'center',
        }}>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 40,
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{item.index}</Text>
        </View>
        <Text style={{marginLeft: 30, color: 'white', fontSize: 18}}>
          {item.body}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {data.map(item => RenderCards(item))}
      </ScrollView>
      <View
        style={{
          backgroundColor: '#000',
          height: 10,
          width: '80%',
          alignSelf: 'center',
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 10,
            width: `${level * 33}%`,
            borderRadius: 10,
          }}></View>
      </View>
    </View>
  );
};

export default Perks;
