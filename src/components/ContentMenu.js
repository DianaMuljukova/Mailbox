import React from 'react';
import {NavLink} from "react-router-dom";

export default () => {

    return (
        <div className="col-xl-3 content__menu">
            <NavLink to={'/compose'} className="compose"><div className="button-block"><i className="fas fa-pen"></i> <p>compose</p></div></NavLink>
            <ul className="content__list">
                <li>Inbox</li>
                <li>Starred</li>
                <li>Sent Mail</li>
                <li>Drafts</li>
                <li>Spam</li>
                <li>More labels <i className="fas fa-chevron-down"></i></li>
            </ul>
        </div>
    )
}