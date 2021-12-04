import react,{createContext, useState, useEffect} from 'react'

export const AppContext = createContext()

export const AppProvider = ({children})=>{

  const [currentID, setCurrentID] = useState(0)

    return (
      <AppContext.Provider value={{currentID, setCurrentID}}>
        {children}
      </AppContext.Provider>
    )
}