import React, { createContext, useReducer } from 'react';
import { paperReducer } from '../reducers/paperReducer';

export const PaperContext = createContext();

const PaperContextProvider = (props) => {
    /* Store context about papers in this state*/ 
    const [papers, setPapers] = useReducer(paperReducer,[
        {title: `Single-cell RNA-seq analysis of 
        human coronary arteries using an 
        enhanced workflow reveals SMC transitions
        and candidate drug targets`, author: 'Wei Feng Ma',
    id: 1},
        {title: `Genome-wide analysis identifies 
        novel susceptibility loci 
        for myocardial infarction `, author: 'Jaana A Hartiala',
    id: 2}
    ]);
    const addPaper = (title, author) => {
        setPapers([...papers, {title, author, id: uuid() }]);
    };
    const removePaper = (id) => {
        setPapers(papers.filter(paper => paper.id !== id));
    };
    return (
        <PaperContext.Provider value={{papers, addPaper, removePaper}}>
        { props.children }
        </PaperContext.Provider>
    )
}

export default PaperContextProvider;