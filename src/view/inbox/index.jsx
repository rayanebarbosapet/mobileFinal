import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Inbox = () => {
  return (
    <View Styles={Styles.conteiner}>
      <Text>Inbox</Text>
    </View>
  )
}

export default Inbox

const Styles = StyleSheet.create({
    conteiner:{
 flex:1,
    }
})