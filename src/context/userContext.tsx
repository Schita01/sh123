import { ReactNode, createContext, useState } from "react"


export type User = {
    name: string;
    age: number;
}

export type UserContextType = {
    user: null | User;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}


export const UserContext = createContext<null | UserContextType>(null)




const UserContextProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<null | User>(null)
    
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    
  )
}

export default UserContextProvider

