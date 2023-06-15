import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen } from './Constants'
import Field from './Field'



const Signup = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
        <Text style={{ color: 'white', fontSize: 30, marginVertical: 10 }}>Sign Up</Text>
        
          <Text style={{fontSize: 25, color: 'white', paddingBottom: 30}}>Phone Number</Text>
          <Field></Field>
          <Text style={{fontSize: 25, color: 'white', paddingBottom: 30}}>Name</Text>
          <Field></Field>
          <Text style={{fontSize: 25, color: 'white', paddingBottom: 30}}>Email Address</Text>
          <Field></Field>
          <Text style={{fontSize: 25, color: 'white', paddingBottom: 30}}>Password</Text>
          <Field></Field>
          <Btn bgColor={darkGreen} textColor='white' btnLabel="Continue" Press={() => props.navigation.navigate("Details")}/>

        </View>
      
    </Background>
  )
}

export default Signup