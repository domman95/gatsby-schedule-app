import React, {useState, useEffect} from 'react'
import { hours, workers } from './data';
import { getCustomers, getVisits } from '../services/firebase';
import moment from 'moment';

const MainContext = React.createContext(null);

const MainProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [customers, setCustomers] = useState([]);
    const [visits, setVisits] = useState([]);
    
    useEffect(() => {
        const allVisits = [];
        getCustomers().then(res => {
            // get all customers and push it to state customers
            setCustomers(res)
            res.forEach(customer => {
                // check if customers has any visits and push it to state visits
                getVisits(customer.id).then(response => {
                    if (response.length > 0) {
                        response.forEach(item => {
                            allVisits.push({
                                ...item,
                                ...customer,
                                id: item.id
                            })
                        })
                        Promise.all(allVisits).then(val => setVisits(val))
                    }
                })
            })
        })
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (   
        <MainContext.Provider
            value={{
                open: isOpen,
                toggleMenu,
                customers,
                hours,
                workers,
                visits,
                date: moment()
            }}
        >
            {children}
        </MainContext.Provider>
    )
}

export default MainContext

export { MainProvider }