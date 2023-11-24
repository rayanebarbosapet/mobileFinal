import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../view/home";
import Perfil from "../view/profile";
import Inbox from "../view/inbox";
import New from "../view/new";
import Search from "../view/search";

const { Navigator, Screen } = createNativeStackNavigator();

const Stack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      < Screen name="Perfil" component={Perfil} />
      < Screen name="Inbox" component={Inbox} />
      < Screen name="New" component={New} />
      < Screen name="Search" component={Search} />
    </Navigator>
  );
};

export default Stack;
