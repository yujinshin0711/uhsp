import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import DetailScreen2 from './screens/DetailScreen2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Detail" component={DetailScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
