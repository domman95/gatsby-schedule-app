import React, {useState, useEffect} from 'react'
import Firebase from '../services/firebase';
import { hours, workers } from './data';

const MainContext = React.createContext(null);

async function getCustomers() {
    const snapshot = await Firebase().collection('customers').get()
    const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    return data;
}


const MainProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers().then(res => setCustomers(...customers, res));
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (   
        <MainContext.Provider
            value={{
                open: isOpen,
                toggleMenu,
                customers,
                hours,
                workers
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainContext

export { MainProvider }