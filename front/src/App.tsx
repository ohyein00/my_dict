import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import WordList from './pages/WordList';
import Write from './pages/Write';
import NotFound from './pages/NotFound';
import theme from './styles/theme';

const Container = styled.div`
  letter-spacing: -0.01em;
  font-weight: 400;
  background: #f0ebfd;
  min-height: 100vh;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route path="/" element={<WordList />} />
          <Route path="/write" element={<Write />}>
            <Route path=":id" element={<Write />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
