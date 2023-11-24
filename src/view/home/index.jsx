import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform, FlatList, Dimensions } from 'react-native'
import React, {useState, useRef} from 'react'
import FeedItem from '../../components/FeedItem'

const {height: heightScreen} = Dimensions.get("screen")

const Home = () => {
  let feedItems = [
    {
      id: '1',
      video: 'https://i.imgur.com/Cnz1CPK.mp4',
      name: '@rayane321',
      description: 'Criando o ShortDev do zero com RN',
    },
    {
      id: '2',
      video: 'https://i.imgur.com/E0tK2bY.mp4',
      name: '@rayaneDev',
      description: 'Fala turma, estou aprendendo React Native com sujeito programador',
    },
    {
      id: '3',
      video: 'https://i.imgur.com/mPFvFyX.mp4',
      name: '@rayane321',
      description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
    }
  ]

  const [showItem, setShowItem]= useState(feedItems[0])

  const onViewRef = useRef(({viewableItems})=>{
    if(viewableItems && viewableItems.length>0){
      setShowItem(feedItems[viewableItems[0].index])
    }
  })

  return (
    <View style={Styles.conteiner}>
      <View style={Styles.labels}>
        <TouchableOpacity>
          <Text style={[Styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[Styles.labelText, { color: "#FFF" }]}>Pra você</Text>
          <View style={Styles.indicator}></View>
        </TouchableOpacity>
      </View>
      <FlatList data={feedItems}
      renderItem={({item})=><FeedItem data={item} currentVisibleItem={showItem} />}
      onViewableItemsChanged={ onViewRef.current}
      snapToAlignment='center'
      snapToInterval={heightScreen}
      scrollEventThrottle={200}
      decelerationRate={"fast"}
      viewabilityConfig={{
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold:100,
      }}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const Styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#000"
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55,
    zIndex: 99,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  indicator: {
    backgroundColor: "#FFF",
    width: 32,
    height: 2,
    alignSelf: 'center'
  }
})