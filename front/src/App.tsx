import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WordList from './pages/WordList';
import Write from './pages/Write';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WordList />} />
      <Route path="/write" element={<Write />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
