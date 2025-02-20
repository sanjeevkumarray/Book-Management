import React from 'react';
import { StyledApp } from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ManageBooks } from './pages/ManageBooks';

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ManageBooks />} />   
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
