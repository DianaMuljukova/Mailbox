import React from 'react';


export default (props) => {
    return (
        <div className="row content-messages__row">
            <div className="content-messages__categories">
                {
                    props.arr.map((item, i) => <Categories item={item} key={i} index={i} changeCategories={props.changeCategories} />)
                }
            </div>

            <a href="#"><i className="fas fa-plus"></i></a>

        </div>
    )
}

const Categories = (props) => (
    <a href={props.item.link} className={props.item.className + ' categories__link ' + props.item.default } onClick={() => props.changeCategories(props.index)}>
        <i className={props.item.icon}></i><span>{props.item.text}</span>
    </a>
);