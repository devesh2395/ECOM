import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeModules } from 'react-native'

const {TruecallerAuthModule} = NativeModules; 
//recieve bgColor as a prop
export default function Authbtn({ bgColor, btnLabel, textColor, Press}) {
    return (
        <TouchableOpacity onPress={Press} style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 250, marginVertical: 15}}>
            <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold" }}>{btnLabel}</Text>
        </TouchableOpacity>
    )
}
//potentially useless 