import React from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const MemberPerks = () => {
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
          backgroundColor: 'white',
          width: width * 0.7,

          flex: 1,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
          alignSelf: 'center',
          paddingVertical: 20,
          marginBottom: 30,
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 20,
            backgroundColor: item.color,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{item.index}</Text>
        </View>
        <Text style={{marginLeft: 30, color: '#000', fontSize: 18}}>
          {item.body}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, marginBottom: 20}}>
      {/* <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {data.map(item => RenderCards(item))}
      </ScrollView> */}
      <View
        style={{
          backgroundColor: '#000',
          alignSelf: 'center',
          width: width * 0.9,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: 'center',
          paddingHorizontal: 20,
          alignSelf: 'center',
          paddingVertical: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'flex-start',
            marginVertical: 20,
          }}>
          Membership Perks
        </Text>
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
              width: `${1 * 10}%`,
              borderRadius: 10,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default MemberPerks;

// <View
//   key={item.index}
//   style={{
//     backgroundColor: '#000',
//     alignSelf: 'center',
//     width: width * 0.9,
//     marginHorizontal: 20,
//     borderRadius: 20,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     paddingVertical: 10,
//   }}>
//   <Text
//     style={{
//       color: 'white',
//       fontSize: 20,
//       alignSelf: 'flex-start',
//       marginVertical: 20,
//     }}>
//     Membership Perks
//   </Text>
//   <View
//     style={{
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       backgroundColor: 'white',
//       width: width * 0.7,

//       flex: 1,
//       marginHorizontal: 20,
//       borderRadius: 20,
//       alignItems: 'center',
//       paddingHorizontal: 20,
//       alignSelf: 'center',
//       paddingVertical: 20,
//       marginBottom: 30,
//     }}>
//     <View
//       style={{
//         height: 80,
//         width: 80,
//         borderRadius: 20,
//         backgroundColor: item.color,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: 20,
//       }}>
//       <Text style={{color: 'white', fontSize: 20}}>{item.index}</Text>
//     </View>
//     <Text style={{marginLeft: 30, color: '#000', fontSize: 18}}>
//       {item.body}
//     </Text>
//   </View>
//   <View
//     style={{
//       backgroundColor: '#000',
//       height: 10,
//       width: '80%',
//       alignSelf: 'center',
//       borderRadius: 10,
//       marginVertical: 10,
//     }}>
//     <View
//       style={{
//         backgroundColor: '#fff',
//         height: 10,
//         width: `${1 * 10}%`,
//         borderRadius: 10,
//       }}></View>
//   </View>
// </View>
