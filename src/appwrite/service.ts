import { ID, Account, Client } from 'appwrite'
import Config from 'react-native-config'

import Snackbar from 'react-native-snackbar'

const appwriteClient = new Client()

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECTid: string = Config.APPWRITE_PROJECTID!

type CreateUserAccount = {
    email: string,
    password: string,
    name: string
}

type LoginUserAccount = {
    email: string,
    password: string
}

class AppWriteService {
    account;

    constructor() {
        appwriteClient
           .setEndpoint(APPWRITE_ENDPOINT)
           .setProject(APPWRITE_PROJECTid)

           this.account = new Account(appwriteClient)
    }

    async createAccount({email, password, name}: CreateUserAccount){
        try {
            const userAcc = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )

            if(userAcc){
                return this.login({
                    email,
                    password
                })
            } else {
                return userAcc
            }
        } catch(error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: create account problem line 41" + error)
        }
    }

    async login({email,password}: LoginUserAccount){
        try {
            return await this.account.createEmailSession(email,password)
        } catch(error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite service :: Login account problem line 67" + error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: get user problem line 75" + error)
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service :: Logout account problem line 83" + error)
        }
    }
}

export default AppWriteService