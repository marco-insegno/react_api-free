import { createContext, useContext, useState } from 'react'
import useFetch from './useFetch';

const AppContext = createContext();

function AppProvider({ children }) {

    const { loading, error, data} = useFetch();

    const [scrollPosition,setScrollPosition] = useState(0);

    const getScrollPosition = (value) => {
        setScrollPosition(value);
    }

    const deleteScrollPosition = (value) => {
        setScrollPosition(0);
    }

    return (
        <AppContext.Provider value={{
            loading,
            error,
            data,
            scrollPosition,
            getScrollPosition,
            deleteScrollPosition
        }}>
            {children}
        </AppContext.Provider>
    )
}

function useGlobalContext() {
    return (
        useContext(AppContext)
    )
}

export { AppProvider, useGlobalContext }