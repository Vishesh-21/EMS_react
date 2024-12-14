import React, {createContext, useEffect, useState } from 'react'
import { getLocalStorage,setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
      setLocalStorage();
      const {employeeData,authorData} = getLocalStorage();
      setUserData({employeeData,authorData});
    }, [])

  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider> 
    </div>
  )
}
