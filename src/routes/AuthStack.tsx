import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signup from '../Screens/Signup'
import Login from '../Screens/Login'

export type AuthStackParamList = {
    Signup: undefined,
    Login: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false
    }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})