import React from 'react';
import Navbar from './components/Navbar';
import PaperContextProvider from './contexts/PaperContext';
import PaperList from './components/PaperList';
import PaperInputForm from "./components/PaperForm";

function App() {
  return (
    <div className="App">
      <PaperContextProvider>
        <Navbar />
        <PaperList />
        <PaperInputForm />
      </PaperContextProvider>
    </div>
  );
}

export default App;