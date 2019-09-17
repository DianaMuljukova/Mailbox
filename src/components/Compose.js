import React, {Component} from 'react';
import ContentMenu from "./ContentMenu";

export default class Compose extends Component {
    constructor (props) {
        super (props);
        this.state = {
            author: 'Diana Muljukova'
        }
    }

    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">
                        <ContentMenu />
                        <div className="col-xl-9 newMessage">
                            <div className="newMessage__head">
                                <div>
                                <button className="newMessage__send">Отправить</button>
                                <span> от кого: </span>
                                <img src="/img/avatar.png" alt="" className="header__avatar" />
                                <span>{this.state.author}</span>
                                </div>
                                <div>
                                    <i className="fas fa-times"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}