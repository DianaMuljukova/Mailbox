import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import GmailRow from "./components/GmailRow";
import Content from "./components/Content";
import Compose from "./components/Compose";
import './styles/App.scss';

function App() {
    return (
        <>
            <Header />
            <GmailRow />

            <Route path={'/'} exact component={Content} />
            <Route path={'/compose'} component={Compose} />
        </>
    );
}

export default App;
