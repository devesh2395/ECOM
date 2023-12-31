import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen } from './Constants'
import Field from './Field'

const OTP = (props) => {
  return (
    <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{fontSize: 25, color: 'white', paddingBottom: 30}}>Enter the OTP</Text>
          <Field></Field>
          <Btn bgColor={darkGreen} textColor='white' btnLabel="Continue" Press={() => props.navigation.navigate("Products")}/>
          <Btn bgColor={darkGreen} textColor='white' btnLabel="Go Back" Press={() => props.navigation.navigate("Start")}/>

        </View>
    </Background>
  )
}

export default OTP