import { StyleSheet, Text, View } from 'react-native'
import React, { FC, PropsWithChildren, createContext, useState } from 'react'

import AppWrite from './service'

type AppContextType = {
    appwrite: AppWrite,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppwriteContext = createContext<AppContextType>({
    appwrite: new AppWrite,
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})


export const AppWriteProvider: FC<PropsWithChildren> = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const defaultValue = {
        appwrite: new AppWrite,
        isLoggedIn,
        setIsLoggedIn: () => {}
    }
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}


const styles = StyleSheet.create({})