import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {

    const [inputValue, setInputValue] = useState('')
    const [result, setResult] = useState([])

    const value = {
        inputValue,
        setInputValue,
        result,
        setResult
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
