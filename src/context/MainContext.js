import React, {useState} from 'react'

const defaultState = {
    open: true,
    toggleMenu: () => {}
}

const MainContext = React.createContext(defaultState);

const MainProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (   
        <MainContext.Provider
            value={{
                open: isOpen,
                toggleMenu
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainContext

export { MainProvider }