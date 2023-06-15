import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen } from './Constants'
import { green } from './Constants'

const Home = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
                <Text style={{ color: 'white', fontSize: 60, marginBottom: 40, marginTop: 100 }}>Welcome!</Text>
                <Btn bgColor={darkGreen} textColor='white' btnLabel="Get Started" Press={() => props.navigation.navigate("Start")}/>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({})

export default Home;