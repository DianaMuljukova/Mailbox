import React from 'react';
import {NavLink} from 'react-router-dom';


export default (props) => {
    return (
        <div className="row content-messages__row">
            <div className="content-messages__categories">
                {
                    mailCategories.map((item, i) => <Categories item={item} key={i} index={i}
                                                           categoryName={props.categoryName}
                                                           changeCategories={props.changeCategories}/>)
                }
            </div>

            <NavLink to={'#'}><i className="fas fa-plus"></i></NavLink>

        </div>
    )
}

const mailCategories = [
    {
        className: 'blue',
        icon: 'far fa-folder',
        text: 'Primary',
        link: '#'

    },
    {
        className: 'green',
        icon: 'fas fa-user-friends',
        text: 'Social',
        link: '#'
    },
    {
        className: 'yellow',
        icon: 'fas fa-percent',
        text: 'Promotions',
        link: '#'
    },
    {
        className: 'purple',
        icon: 'fas fa-info-circle',
        text: 'Updates',
        link: '#'
    },
    {
        className: 'red',
        icon: 'fas fa-ban',
        text: 'Spam',
        link: '#'
    }
];

const Categories = (props) => (
    <a
        href={props.item.link}
        className={`${props.item.className} categories__link ${props.item.text.toLowerCase() === props.categoryName ? 'active' : ''}`}
        onClick={() => props.changeCategories(props.index, props.item.text)}
    >
        <i className={props.item.icon}></i><span>{props.item.text}</span>
    </a>
);