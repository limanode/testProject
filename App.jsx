import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import ContactListPage from './app/pages/ContactsListPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { strings } from './app/common/strings';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ContactList" 
            component={ContactListPage}
            options={{
              headerTitle: () => {
                <Header title={strings.contacts}/>
              }
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const Header = ({title}) => {
  return(
    <View style={{alignItems:'center'}}>
      {/* <Icon name="rocket" size={30} color="#900" /> */}
      <Text>{'test'}</Text>
    </View>
  )
}

export default App;
