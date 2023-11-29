import {StyleSheet} from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  headerButtonText:{
    fontSize:20,
    color:colors.theme
  },
  listItem:{
    marginLeft: 10,
    paddingTop: 5,
    borderBottomWidth: 0.5
  },
  listItemText:{
    fontSize: 15, 
    color: 'black'
  },
  contactInfoHeader:{
    backgroundColor: '#EEE8E8',
    paddingStart: 12
  },
  contactInfoHeaderText:{
    fontSize: 18, 
    fontWeight: 'bold', 
    color: 'black'
  },
  contactInfoInputHeader:{
    fontSize: 15,
    color: 'black',
    width: '25%'
  },
  contactInfoInput: {
    borderWidth: 0.5,
    fontSize: 13,
    height: 35,
    width: '70%',
    margin: 10,
  }
});