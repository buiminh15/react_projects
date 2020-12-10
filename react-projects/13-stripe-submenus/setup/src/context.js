import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()
export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [location, setLocation] = useState({})
    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {
        setIsSubmenuOpen(true)
        setLocation(coordinates)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu, location }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
