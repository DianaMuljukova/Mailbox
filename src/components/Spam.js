import React, {Component} from 'react';

export default class Spam extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            this.props.renderSpam(this.props.item, this.props.i)
        )
    }
}