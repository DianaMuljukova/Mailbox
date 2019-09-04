import React from 'react';
import ContentMenu from "./ContentMenu";
import ContentGmail from "./ContentGmail";

const Content = () => {
    return (
        <section className="content">
            <div className="container">
                <div className="row content__row">
                    <ContentMenu/>
                    <ContentGmail/>
                </div>
            </div>
        </section>
    )
};
export default Content;