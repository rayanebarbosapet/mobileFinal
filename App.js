import { NavigationContainer } from "@react-navigation/native";
import {StatusBar}from 'react-native'
import Tabs  from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} translucent={true}/>
   <Tabs/>
   </NavigationContainer>
  );
}

