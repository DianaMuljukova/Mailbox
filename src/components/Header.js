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
                            <a href="" className="header__button" onClick={(e) => this.toggleMenu(e)}>
                                <i className="fas fa-bars"></i>
                            </a>
                            <NavLink className="header__title"
                            to={'/'}
                            >Mailbox</NavLink>
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
    }
};

export default Header;