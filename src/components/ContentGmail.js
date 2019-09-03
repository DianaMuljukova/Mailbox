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
        icon: 'far fa-folder',
        text: 'Primary',
        link: '#'

    },
    {
        icon: 'fas fa-user-friends',
        text: 'Social',
        link: '#'
    },
    {
        icon: 'fas fa-percent',
        text: 'Promotions',
        link: '#'
    },
    {
        icon: 'fas fa-info-circle',
        text: 'Updates',
        link: '#'
    },
    {
        icon: 'fas fa-ban',
        text: 'Spam',
        link: '#'
    }
];

