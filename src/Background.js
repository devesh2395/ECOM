import { View, ImageBackground} from 'react-native'
import React from 'react'

const Background = ({ children }) => {
    //recieve 'children' as a prop
    //position: 'absolute' keeps the image at the bottom
    return (
        <View>
            <ImageBackground source={require("./assets/wall.jpg")} style={{ height: '100%' }}></ImageBackground>
            <View style={{position: 'absolute'}}>
                {children}
            </View>
        </View>
    )
}

export default Background