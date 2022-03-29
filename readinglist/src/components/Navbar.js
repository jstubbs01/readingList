import React, { useContext } from 'react';
import { PaperContext } from '../contexts/PaperContext';

const Navbar = () => {
    const { papers } = useContext(PaperContext);
    return (
        <div className="navbar">
            <h1> John's Papers on Cardiovascular Disease  </h1>
            <p>I have { papers.length } papers to read</p>
        </div>
        );
}
export default Navbar;