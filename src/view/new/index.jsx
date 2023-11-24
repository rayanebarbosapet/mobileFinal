import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const New = () => {
  return (
    <View Styles={Styles.conteiner}>
      <Text>New</Text>
    </View>
  )
}

export default New

const Styles = StyleSheet.create({
    conteiner:{
 flex:1,
    }
})