import React, { Component } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactInfoPage from './ContactInfoPage';
import ContactListPage from './ContactsListPage';
import { strings } from '../common/strings';
import { colors } from '../common/colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { styles } from '../common/styles';

const Stack = createNativeStackNavigator();

class ContactStack extends Component {
    render(){
        return(
            <Stack.Navigator initialRouteName="ContactList">
                <Stack.Screen
                    name="ContactList" 
                    component={ContactListPage}
                    options={{
                    title: strings.contacts,
                    headerTitleAlign:'center',
                    headerLeft: () => (
                        <Icon name="magnifying-glass" size={20} color={colors.theme}/>
                    ),
                    headerRight: () => (
                        <Icon name="plus" size={20} color={colors.theme} />
                    )
                    }} 
                />
                <Stack.Screen
                    name="ContactInfo" 
                    component={ContactInfoPage}
                    options={({navigation}) => ({
                        headerTitle:'',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={styles.headerButtonText}>{strings.cancel}</Text>
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                                <Text style={styles.headerButtonText}>{'test'}</Text>
                            
                        )
                    })} 
                />
            </Stack.Navigator>
        )
    }
}

export default ContactStack;