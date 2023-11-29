import React, { useEffect, useState, useRef } from 'react';
import {Text, View, ScrollView, TouchableOpacity, PermissionsAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../common/colors';
import { styles } from '../common/styles';
import { strings } from '../common/strings';
import  ContactInfoTextInput  from '../common/components/ContactInfoTextInput';
import Toast from 'react-native-simple-toast'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

var RNFS = require('react-native-fs');


const ContactInfoPage = ({navigation, route}) => {
    const params = route.params;
    console.log('params', params)

    // const firstNameRef = useRef();
    // const lastNameRef = useRef();
    // const emailRef = useRef();
    // const phoneRef = useRef();

    const [firstName, setFirstName] = useState(params.firstName)
    const [lastName, setLastName] = useState(params.lastName)
    const [email, setEmail] = useState(params.email)
    const [phone, setPhone] = useState(params.phone)

    useEffect(() => {
        getContactInfo()
    }, [])

    const getContactInfo = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys();
            for (let i = 0; i < keys.length; i++){
                if (keys[i] == params.id){
                    const result = await AsyncStorage.getItem(keys[i]);
                    console.log(result)
                    return result
                }
            }
        } catch(e) {
          // read error
          console.log(e)
        }
    }

    const setNewContactInfo = async (key, value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(key, jsonValue)
        } catch(e) {
          // save error
        }
      }

    const save = async() => {
        //if first name or last name fields are empty
        if (firstName === '' || lastName === ''){
            Toast.show('Please fill in first and last names', Toast.SHORT)
        }
        else{
            params.firstName = firstName;
            params.lastName = lastName;
            params.email = email;
            params.phone = phone;

            const contactInfo = {
                ...params    
            }
            console.log('newcontactInfo', contactInfo)
            setNewContactInfo(params.id, contactInfo)
            
            navigation.goBack()
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress = {save}>
                    <Text style={styles.headerButtonText}>{strings.save}</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation, firstName, lastName, email, phone])
    
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={{alignItems: 'center', paddingTop: 20}}>
                    <Icon name="circle" size={120} color={colors.theme}/>
                </View>

                <View style={styles.contactInfoHeader}>
                    <Text style={styles.contactInfoHeaderText}>{strings.mainInfo}</Text>
                </View>

                <ContactInfoTextInput
                    // ref={firstNameRef} 
                    title={strings.firstName}
                    initial={firstName}
                    editInfo={(input) => {
                        setFirstName(input.nativeEvent.text)
                        //lastNameRef.current?.focus() 
                    }}
                />
                <View style={{borderWidth: 0.5, alignItems:'center', marginEnd: 20, marginStart: 10}}/>
                
                <ContactInfoTextInput 
                    // ref={lastNameRef} 
                    title={strings.lastName}
                    initial={lastName}
                    editInfo={(input) => {
                        setLastName(input.nativeEvent.text) 
                    }}
                />

                <View style={styles.contactInfoHeader}>
                    <Text style={styles.contactInfoHeaderText}>{strings.subInfo}</Text>
                </View>

                <ContactInfoTextInput
                    // ref={emailRef}  
                    title={strings.email}
                    initial={email}
                    editInfo={(input) => {
                        setEmail(input.nativeEvent.text) 
                    }}
                />

                <View style={{borderWidth: 0.5, alignItems:'center', marginEnd: 20, marginStart: 10}}/>

                <ContactInfoTextInput
                    // ref={phoneRef}  
                    title={strings.phone}
                    initial={phone}
                    editInfo={(input) => {
                        setPhone(input.nativeEvent.text) 
                    }}
                    keyboardType={'numeric'}
                />
                
                <View style={{borderWidth: 0.5, alignItems:'center', marginEnd: 20, marginStart: 10}}/>

            </ScrollView>
        </SafeAreaView>
    );
    
}

export default ContactInfoPage;