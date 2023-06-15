import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { darkGreen } from './Constants'

const Field = (props) => {
  return (
    <TextInput {...props} style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 10, width: '100%', backgroundColor: 'rgb(220, 220, 220)'}} placeholderTextColor={darkGreen}>

    </TextInput>
  )
}

export default Field