import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

const ButtonNew = ({size}) => {
  return (
    <View style={Styles.view}>
        <View style={Styles.inner}>
          <Entypo name="plus" size={size} color="#000"/>
        </View>
    </View>
  )
}

export default ButtonNew

const Styles = StyleSheet.create({
    view:{borderLeftWidth: 4,
    borderLeftColor:"#00ffff",
    borderRightWidth: 4,
    borderRightColor:"#ff1493",
    borderRadius:6,
    },
    inner:{
        backgroundColor:"#fff",
        padding:1,
        paddingLeft:4,
        paddingRight:4,
        borderRadius:3
    }
})