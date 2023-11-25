import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import React, {useState} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = () => {
  const userName = "Rayane_Barbosa"
  const setUserName=useState("")
  const trocarnome =()=>{
     <Modal>
      
     </Modal>
  }
  return (
    <View style={styles.conteiner}>
      <View style={styles.cabecalho}>
        <Text style={styles.nome}> Rayane Barbosa </Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.comp}> compartilhar perfil </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.comp}> Editar Perfil </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image style={styles.image} source={require('../../../assets/perfil.jpg')} />
      </View>
      <View style={styles.usuario}>
        <Text style={styles.user}> @{userName} </Text>
        <TouchableOpacity onPress={trocarnome}>
        <FontAwesome5 name="pen" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>      379   |</Text>
        <Text style={styles.infoText}>     660  </Text>
        <Text style={styles.infoText}>    |    4000 </Text>
      </View>
      <View style={styles.infos}>
        <Text style={styles.infoText}> seguindo </Text>
        <Text style={styles.infoText}> seguidores</Text>
        <Text style={styles.infoText}> curtidas </Text>
      </View>
      <View style={styles.feed}>

      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch:{
    backgroundColor: '#c0c0c0',
    borderRadius:4,
    alignItems:'center', 
    fontSize: 20,
    width:140,
    height:40,
  },
  image: {
    borderRadius: 300,
    width: 104,
    height: 104,
    top: -270,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    zIndex: 99,
    flex: 5,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 3,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55,
    zIndex: 99,
    flex: 2,
  },
  botoes: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 300,
    left: 0,
    right: 0,
    zIndex: 99,
    flex:3,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 240,
    left: 0,
    right: 0,
    zIndex: 99,
  },
  infos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 260,
    left: 0,
    right: 0,
    zIndex: 99,
    flex:6,
  },
  usuario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 200,
    left: 0,
    right: 0,
    zIndex: 99,
    flex:4,
  },
  user: {
    fontSize:16,
  },
  comp: {
    alignSelf: 'center',
    alignItems:'center', 
    fontSize: 16,
  },
  nome: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  infoText:{
    fontSize:16
  },
  feed:{
    backgroundColor:'grey',
  }
})