import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../colors';
import { styles } from '../styles';

export const ListItem = ({contactInfo, goToInfo}) => {
    return(
        <View style = {styles.listItem}>
            <TouchableOpacity onPress={goToInfo}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="circle" size={50} color={colors.theme}/>
                    <View style ={{padding: 5}}>
                        <Text style={styles.listItemText}>
                            {contactInfo.firstName + " " + contactInfo.lastName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}