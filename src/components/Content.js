import React from 'react';
import ContentMenu from "./ContentMenu";
import Compose from "./Compose";
import ContentGmail from "./ContentGmail";
import {Route} from 'react-router-dom';

const Content = () => {
    return (
        <section className="content">
            <div className="container">
                <div className="row content__row">
                    <ContentMenu/>
                    <Route path={'/compose'} component={Compose} />
                    <Route exact path={'/'} component={ContentGmail} />
                </div>
            </div>
        </section>
    )
};
export default Content;