import React, { useContext } from 'react';
import { PaperContext } from '../contexts/PaperContext';

const PaperDetails = ({ paper }) => {
  const { dispatch } = useContext(PaperContext);
  return (
    <li onClick={() => dispatch({type: 'REMOVE_PAPER', id: paper.id})}>
      <div className="title">{paper.title}</div>
      <div className="author">{paper.author}</div>
    </li>
  );
}

export default PaperDetails;