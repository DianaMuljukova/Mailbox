import React from 'react';

export default () => {
    return (
        <div className="col-xl-3 content__menu">
            <button><div className="button-block"><i className="fas fa-pen"></i> <p>compose</p></div></button>
            <ul className="content__list">
                <li>Входящие</li>
                <li>Помеченные</li>
                <li>Отправленные</li>
                <li>Черновики</li>
                <li>Спам</li>
                <li>Еще <i className="fas fa-chevron-down"></i></li>
            </ul>
        </div>
    )
}