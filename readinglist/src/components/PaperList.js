import React, { useContext } from 'react';
import PaperDetails from './PaperDetails';
import { PaperContext } from '../contexts/PaperContext';

const PaperList = () => {
  const { papers } = useContext(PaperContext);
  return papers.length ? (
    <div className="paper-list">
      <ul>
        {papers.map(paper => {
          return ( <PaperDetails paper={paper} key={paper.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No papers to read.</div>
  );
}

export default PaperList;