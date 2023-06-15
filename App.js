import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './src/Home';
import Start from './src/Start';
import Phone from './src/Phone';
import Truecaller from './src/Truecaller';
import OTP from './src/OTP';
import Details from './src/Details';
import Signup from './src/Signup';
import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
      

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Truecaller" component={Truecaller} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Sugnup" component={Signup} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

export default App;