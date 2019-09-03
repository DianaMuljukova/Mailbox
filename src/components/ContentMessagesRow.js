import React from 'react';

export default ({arr}) => {
    return (
        <div className="row content-messages__row">
            <div className="content-messages__categories">
                {
                    arr.map(item => renderCategories(item))
                }
            </div>

            <a href="#"><i className="fas fa-plus"></i></a>

        </div>
    )
}

const renderCategories = (item) => (
    <a href={item.link}>
        <i className={item.icon}></i><span>{item.text}</span>
    </a>
)