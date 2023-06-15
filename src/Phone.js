import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Field from './Field'
import Btn from './Btn'
import {darkGreen} from './Constants'

const Phone = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: 'white', fontSize: 30, marginVertical: 10 }}>Phone Number</Text>
        
          <Text style={{fontSize: 25, color: 'white', paddingBottom: 30}}>Enter Phone Number</Text>
          <Field></Field>
          <Btn bgColor={darkGreen} textColor='white' btnLabel="Send OTP" Press={() => props.navigation.navigate("OTP")}/>
          <Btn bgColor={darkGreen} textColor='white' btnLabel="Go Back" Press={() => props.navigation.navigate("Start")}/>

        </View>
      
    </Background>
  )
}

export default Phone