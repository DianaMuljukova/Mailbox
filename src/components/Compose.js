import React, {Component} from 'react';
import ContentMenu from "./ContentMenu";
import ToSend from "./ToSend";
import {NavLink} from 'react-router-dom';
import Input from "./Input";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Compose extends Component {
    constructor (props) {
        super (props);
        this.state = {
            author: 'Diana Muljukova',
            formControls: {
                email: {
                    isEmailValid: true,
                    errorMessage: 'Email введен некорректно',
                    touched: false
                }
            }
        }
    }

    changeInput = (e) => {
        let isEmailValid = true;
        let value = e.target.value;
        isEmailValid = validateEmail(value);
        this.state.formControls.email.touched ?
        this.setState({
            formControls: {
                email: {
                    isEmailValid,
                    touched: true
                }
            }
        }) : this.setState({
                formControls: {
                    email: {
                        isEmailValid,
                        touched: true
                    }
                }
            })
    };

    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">
                        <ContentMenu />
                        <div className="col-xl-9 newMessage">
                            <div className="newMessage__head">
                                <div className="newMessage__conf">
                                <ToSend />
                                <span> от кого: </span>
                                <img src="/img/avatar.png" alt="" className="header__avatar" />
                                <span>{this.state.author}</span>
                                </div>
                                <div>
                                    <NavLink to={'/'}>
                                        <i className="fas fa-times"></i>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="row">
                                <Input
                                onChange={this.changeInput}
                                isValid={this.state.formControls.email.isEmailValid}
                                />
                                <input type="text" className="newMessage__theme newMessage__input" placeholder="Тема" />
                                <div className="newMessage__tools">
                                    <i className="fas fa-paperclip"></i>
                                    <i className="fas fa-bold"></i>
                                    <i className="fas fa-italic"></i>
                                </div>
                                <textarea rows="20" autoFocus={true} />
                                <ToSend />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}