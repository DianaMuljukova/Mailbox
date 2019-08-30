import React from 'react';
import HeaderInput from "./HeaderInput";

const Header = () => {
    return (
        <section className="header">
        <div className="container">
           <div className="row header__row">
               <div className="col-xl-6 header__main">
                   <a href="" className="header__button">
                       <i className="fas fa-bars"></i>
                   </a>
                   <span className="header__title">Mailbox</span>
                   <HeaderInput />
               </div>

               <div className="col-xl-2 header__add">
                   <img src="/img/avatar.png" alt="" className="header__avatar" />
                   <a href="" className="header__bell">
                       <i className="fas fa-bell"></i>
                   </a>
                   <a href="" className="header__load">
                       <i className="fas fa-ellipsis-v"></i>
                   </a>
               </div>
           </div>
        </div>
        </section>
    )
};

export default Header;