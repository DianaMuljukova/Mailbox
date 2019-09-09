import React from 'react';
import ContentMessagesRow from "./ContentMessagesRow";
import ContentMessages from "./ContentMessages";

export default () => {
    return (
        <div className="col-xl-9">
            <ContentMessagesRow
                arr={mailCategories}
            />
            <ContentMessages/>
        </div>
    )
}

const mailCategories = [
    {
        className: 'blue',
        icon: 'far fa-folder',
        text: 'Primary',
        link: '#',
        default: 'active'

    },
    {
        className: 'red',
        icon: 'fas fa-user-friends',
        text: 'Social',
        link: '#',
        default: 'notactive'
    },
    {
        className: 'yellow',
        icon: 'fas fa-percent',
        text: 'Promotions',
        link: '#',
        default: 'notactive'
    },
    {
        className: 'green',
        icon: 'fas fa-info-circle',
        text: 'Updates',
        link: '#',
        default: 'notactive'
    },
    {
        className: 'pink',
        icon: 'fas fa-ban',
        text: 'Spam',
        link: '#',
        default: 'notactive'
    }
];

