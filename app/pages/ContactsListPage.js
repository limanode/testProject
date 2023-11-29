import React, { Component, useEffect } from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem } from '../common/components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const contactList = require('../data/data.json')

const ContactListPage = ({navigation}) => {

  useFocusEffect(() => {
    
  },[])

  //store data.json in AsyncStorage
  useEffect(() => {
    multiSet(contactList)
  }, [])

  const multiSet = async (input) => {
    try {
      for (let i = 0; i < input.length; i++){
        let key = input[i].id
        await AsyncStorage.setItem(key, JSON.stringify(input[i]))
      }
    } catch(e) {
      //save error
      console.log(e)
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={contactList}
        renderItem={({item}) => 
          <ListItem 
            contactInfo={item}
            goToInfo={() => navigation.navigate('ContactInfo', item)} 
          />
        }
      />
    </SafeAreaView>
  );
}

export default ContactListPage;
