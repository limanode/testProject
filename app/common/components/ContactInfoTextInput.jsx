import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles';

class ContactInfoTextInput extends Component  {
    render(){
        return(
            <View style={{flexDirection:'row', alignItems:'center', marginStart: 10, marginEnd: 10}}>
                <Text style={styles.contactInfoInputHeader}>{this.props.title}</Text>
                <TextInput
                    ref={this.props.ref}
                    style={styles.contactInfoInput}
                    defaultValue={this.props.initial}
                    onSubmitEditing={this.props.editInfo}
                    keyboardType={this.props.keyboardType}
                />
            </View>
        )
    }
}

export default ContactInfoTextInput;