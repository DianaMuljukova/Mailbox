import React from 'react';

export default ({arr}) => {
    return (
        <div className="row content-messages__row">
            <div className="content-messages__categories">
                {
                    arr.map(item => <Categories item={item} key={item.link}/>)
                }
            </div>

            <a href="#"><i className="fas fa-plus"></i></a>

        </div>
    )
}

const Categories = ({item}) => (
    <a href={item.link} className={item.className + ' categories__link ' + item.default }>
        <i className={item.icon}></i><span>{item.text}</span>
    </a>
);