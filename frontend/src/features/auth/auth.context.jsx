import { createContext, useState } from "react"
import {login, register, getMe} from "./services/auth.api"

export const AuthContext = createContext()

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoding] = useState(false)

  const handleLogin = async (username, password) => {
    setLoding(true)
    try {
      const response = await login(username, password)
      setUser(response.user)
    } catch (error) {
     console.log(error );
      
    } finally {
      setLoding(false)
    }
  }


  const handleRegister = async (username, email, password) =>{
    setLoding(true)

    try {
      const response = await register(username, email, password)
      setUser(response.user)
    } catch (error) {
      console.log(error);
      
    }
    finally {
      setLoding(false)
    }
  }


  return (
    <AuthContext.Provider value={{user, loading, handleLogin, handleRegister}}>
      {children}
    </AuthContext.Provider>
  )
}