/**
 * È QUI CHE DICHIARIAMO I NOSTRI STATE E LE NOSTRE FUNZIONI
 */


import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <AppContext.Provider
            value={
                {
                    isSidebarOpen,
                    closeSidebar,
                    openSidebar
                }
            }
        >
            {children}
        </AppContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };