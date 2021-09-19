import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Category from '../components/Category';
import Perks from '../components/Perks';
import MemberPerks from '../components/MemberPerks';
const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <ScrollView style={{backgroundColor: 'rgb(28,28,28)'}}>
        <ImageBackground
          style={{borderRadius: 15, margin: 15}}
          imageStyle={{height: '100%', resizeMode: 'cover', borderRadius: 15}}
          source={{
            uri: 'https://st2.depositphotos.com/1594308/5547/i/600/depositphotos_55474203-stock-photo-friends-dancing-at-party.jpg',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              flex: 1,
              padding: 20,
              paddingVertical: 50,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 35,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
              }}>
              Welcome to
            </Text>
            <Image
              source={require('../images/logo.png')}
              style={{
                height: '30%',
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'flex-start',
              }}>
              Bollywood. Lifestyle. Rewards. Community.
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#9C9C9C',
                alignSelf: 'flex-start',
                marginVertical: 10,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sagittis vulputate nunc eu condimentum. Nam pellentesque egestas
              imperdiet. Duis facilisis finibus quam id auctor. Nam at sem
              tortor. Donec pretium auctor massa, sed placerat leo congue vel.
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#E33C28',
                width: 150,
                height: 50,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Know More
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            marginHorizontal: 20,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Experience
        </Text>
        <Experience />
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            marginHorizontal: 20,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Popular Offer Category
        </Text>
        <Category />
        <Text
          style={{
            fontSize: 22,
            color: 'white',
            marginHorizontal: 20,
            marginVertical: 20,
            fontWeight: 'bold',
          }}>
          Why become a Showfest Member {'\n'}TODAY!
        </Text>
        <Perks />
        <MemberPerks />
      </ScrollView>
    </View>
  );
};

export default Home;
