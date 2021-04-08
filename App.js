import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Home from './screen/Home';
import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'


export default function App() {
  const [openApp, setOpenApp] = useState(false)

  const handleOpenApp = () => {
    setOpenApp(true)
  }

  if (openApp) {
    return <Home/>
  } else {
    return (
      <View style={styles.Container}>
          <View style={styles.Modal}>
              <View style={styles.IconView}>
                  <Image style={styles.Icon} source={require('./assets/logos/icon.png')} />
              </View>
              <Text style={styles.Header}>Welcome to Veedeo</Text>
              <Text style={styles.Text}>This app was made to perform the video player - TikTok look-alike. Enjoy!</Text>
              <TouchableOpacity onPress={() => handleOpenApp()} style={styles.Button}>
                  <Text style={styles.ButtonText}>Get Started</Text>
              </TouchableOpacity>
          </View>
      </View>
    )
  }
}


const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0b233d'
    },
    Modal: {
        backgroundColor: 'white',
        width: WIDTH *.85,
        height: HEIGHT * .7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 20,
        paddingLeft: 20
    },
    IconView: {
        backgroundColor: '#0b233d',
        width: WIDTH *.3,
        height: WIDTH *.3,
        borderRadius: WIDTH *.15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icon: {
        height: 50,
        width: 50
    },
    Header: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 30,
        marginBottom: 5
    },
    Text: {
        textAlign: 'center',
        fontSize: 15
    },
    Button: {
        backgroundColor: '#0b233d',
        height: 45,
        borderRadius: 50,
        width: WIDTH *.7,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButtonText: {
        color: 'white'
    }
})

