import { createContext, useState, useEffect } from "react"
import { useMoralis } from "react-moralis"

export const AmazonContext = createContext()

export const AmazonProvider = ({children}) => {
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
    } = useMoralis()

    useEffect(() => {
        ;(async() => {
            //if loged in
            if(isAuthenticated){
                //get username from moralis DB, questionmark for if it has nickname
                const currentUserName = await user?.get('nickname')
                setUsername(currentUserName)
            }
        })()
        //if any of these variable changes, useEffect will be run
    }, [isAuthenticated, user, username])

    const handleSetUsername = () => {
        if(user){
            if(nickname){
                // add column at moralis db
                user.set('nickname',nickname)
                user.save()
                //clear the input state field
                setNickname('')
            } else {
                console.log("Can't set empty Nickname")
            }


        } else {
            console.log('No user')
        }
    }
    return (
        <AmazonContext.Provider
        value={{
            isAuthenticated,
            nickname,
            setNickname,
            username,
        }}
        >
            {children}
        </AmazonContext.Provider>
    )
}