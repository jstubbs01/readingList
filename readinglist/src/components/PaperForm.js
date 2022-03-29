import React, { useContext, useState } from "react";
import { PaperContext } from "../contexts/PaperContext";

const PaperInputForm = () => {
    const { addPaper } = useContext(PaperContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const reportSubmit = (e) => {
        e.preventDefault();
        addPaper(title, author);
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={reportSubmit}>
            <input type="text" placeholder = "paper title" value={title}
                onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder = "paper author" value={author}
                onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="add paper" />
        </form>
     );
}
 
export default PaperInputForm;