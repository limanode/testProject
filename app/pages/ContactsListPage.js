import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../common/colors';


const contactList = require('../data/data.json')

class ContactListPage extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.theme}}>
        <ScrollView>
          <Text>test</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ContactListPage;
