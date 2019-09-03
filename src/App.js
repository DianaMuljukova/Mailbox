import React from 'react';
import Header from "./components/Header";
import GmailRow from "./components/GmailRow";
import Content from "./components/Content";
import './styles/App.scss';

function App() {
  return (
      <>
        <Header />
        <GmailRow />
        <Content />
      </>
  );
}

export default App;
