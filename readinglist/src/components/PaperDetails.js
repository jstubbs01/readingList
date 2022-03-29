import React, { useContext } from 'react';
import { PaperContext } from '../contexts/PaperContext';

const PaperDetails = ({ paper }) => {
  const { removePaper } = useContext(PaperContext);
  return (
    <li onClick={() => removePaper(paper.id)}>
      <div className="title">{paper.title}</div>
      <div className="author">{paper.author}</div>
    </li>
  );
}

export default PaperDetails;