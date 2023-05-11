import { useState, useEffect, createContext, useContext } from "react";

import useFetch from "./useFetch";

const AppContext = createContext();

function AppProvider({ children }) {

    const {loading, error, data, count} = useFetch();

    return (
        <AppContext.Provider value={{
            loading,
            error,
            data,
            count,}}>

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