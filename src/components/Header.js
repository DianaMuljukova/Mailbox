import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import HeaderInput from "./HeaderInput";


class Header extends Component {

    constructor (props){
        super(props);
        this.state = {
            isOpen: true
        }
    }

    toggleMenu = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    render() {
        return (
            <section className="header">
                <div className="container">
                    <div className="row header__row">
                        <div className="col-xl-6 header__main">
                            <button className="header__button" onClick={(e) => this.toggleMenu(e)}>
                                <i className="fas fa-bars"></i>
                            </button>
                            <NavLink className="header__title"
                            to={'/'}
                            >Mailbox</NavLink>
                            <HeaderInput />
                        </div>

                        <div className="col-xl-2 header__add">
                            <img src="/img/avatar.png" alt="" className="header__avatar" />
                            <NavLink to={'#'} className="header__bell">
                                <i className="fas fa-bell"></i>
                            </NavLink>
                            <NavLink to={'#'} className="header__load">
                                <i className="fas fa-ellipsis-v"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default Header;