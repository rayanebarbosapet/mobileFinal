import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View Styles={Styles.conteiner}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const Styles = StyleSheet.create({
    conteiner:{
 flex:1,
    }
})