import React, { createContext, useReducer, useEffect } from 'react';
import { paperReducer } from '../reducers/paperReducer';

export const PaperContext = createContext();

const PaperContextProvider = (props) => {
    /* Store context about papers in this state*/ 
    const [papers, dispatch] = useReducer(paperReducer,[], () => {
        const localData = localStorage.getItem('papers');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('papers', JSON.stringify(papers))
    }, [papers]);
    return (
        <PaperContext.Provider value={{papers, dispatch}}>
        { props.children }
        </PaperContext.Provider>
    )
}

export default PaperContextProvider;