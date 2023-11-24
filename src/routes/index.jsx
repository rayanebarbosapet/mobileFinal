import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import ButtonNew from "../components/ButtonNew"

import Stack from './stack'
import Home from '../view/home'
import Search from '../view/search'
import Inbox from '../view/inbox'
import New from '../view/new'
import Profile from '../view/profile'

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: "#000",
                borderTopWidth: 0,
            },
            tabBarActiveTintColor:"#FFF"
        }
        }>
            <Screen 
            name="Home" 
            component={Stack} 
            options={{tabBarIcon:({focused, size, color}) =>{
                if (focused) {
                    return<Ionicons name="home" size={size} color={color}/>
                } 
                return<Ionicons name="home-outline" size={size} color={color}/>

            }}} />
            <Screen name="Search" component={Search} options={{tabBarIcon:({focused, size, color}) =>{
                if (focused) {
                    return<Ionicons name="search" size={size} color={color}/>
                }
                return<Ionicons name="search-outline" size={size} color={color}/>
            }}}   />
            <Screen name="New" component={New} options={{tabBarIcon:({ size }) =>{
               return<ButtonNew size={size}/>
            }}} />
            <Screen name="Inbox" component={Inbox} options={{tabBarIcon:({focused, size, color}) =>{
                if (focused) {
                    return<Ionicons name="ios-chatbubble-ellipses" size={size} color={color}/>
                }
                return<Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color}/>
            }}}  />
            <Screen name="Perfil" component={Profile} options={{tabBarIcon:({focused, size, color}) =>{
                if (focused) {
                    return<Ionicons name="person" size={size} color={color}/>
                }
                return<Ionicons name="person-outline" size={size} color={color}/>
            }}}  />
        </Navigator>
    )
}

export default Tabs;