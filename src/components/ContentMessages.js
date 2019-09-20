import React, {Component} from 'react';
import HoverTrash from "./HoverTrash";

export default class ContentMessages extends Component {
    constructor (props){
        super(props);
        this.state = {
            activeClassArr: [],
            messages: [
                {
                    id: 1,
                    author: 'Salit Kolla',
                    theme: 'Invitation',
                    text: 'Dribbble Meetup @ Somewhere, Sun Jan 5',
                    data: '7:29 pm',
                    type: 'promotions'
                },
                {
                    id: 2,
                    author: 'Lindsay Cortier',
                    theme: 'Your UI kit',
                    text: 'Hey Roman, thanks for your product!',
                    data: '6:11 pm',
                    type: 'social'
                },
                {
                    id: 3,
                    author: 'Tim Green',
                    theme: 'Prototype faster',
                    text: 'Just downloaded your design kit. Awesome',
                    data: '5:54 pm',
                    type: 'promotions'
                },
                {
                    id: 4,
                    author: 'Salit Kolla',
                    theme: 'Just purchased design system',
                    text: 'Wow boost of my UI workflow',
                    data: 'May 29',
                    type: 'updates'
                },
                {
                    id: 5,
                    author: 'Peter Harrinson',
                    theme: 'User’s feedback',
                    text: 'Purchased your design system. Thanks',
                    data: 'May 28',
                    type: 'updates'
                },
                {
                    id: 6,
                    author: 'Keri, me (2)',
                    theme: 'Your UI kit',
                    text: 'Hey Roman, thanks for your product!',
                    data: 'May 27',
                    type: 'promotions'
                },
                {
                    id: 7,
                    author: 'Michael Pottser',
                    theme: 'Prototype faster',
                    text: 'Just downloaded your design kit. Awesome',
                    data: 'May 27',
                    type: 'social'
                },
                {
                    id: 8,
                    author: 'Salit Kolla',
                    theme: 'Just purchased design system',
                    text: 'Wow boost of my UI workflow',
                    data: 'May 26',
                    type: 'social'
                },
                {
                    id: 9,
                    author: 'Lindsay Cortier',
                    theme: 'User’s feedback',
                    text: 'Purchased your design system. Thanks',
                    data: 'May 25',
                    type: 'promotions'
                },
                {
                    id: 10,
                    author: 'Tim Green',
                    theme: 'Your UI kit',
                    text: 'Hey Roman, thanks for your product!',
                    data: 'May 24',
                    type: 'updates'
                },
                {
                    id: 11,
                    author: 'Salit Kolla',
                    theme: 'Prototype faster',
                    text: 'Just downloaded your design kit. Awesome',
                    data: 'May 21',
                    type: 'social'
                },
                {
                    id: 12,
                    author: 'Mister X',
                    theme: 'XXX',
                    text: 'Just XXX',
                    data: 'May 21',
                    type: 'spam'
                },
                {
                    id: 13,
                    author: 'Miss X',
                    theme: 'XXX',
                    text: 'Just XXX',
                    data: 'May 21',
                    type: 'spam'
                },
                {
                    id: 14,
                    author: 'Work',
                    theme: 'Work',
                    text: 'Just downloaded your design kit. Awesome',
                    data: 'Sept 21',
                    type: 'spam'
                },
            ],
            checkArr: [],
            favoriteArr: []
        }
    }

    handleChange = (id, i) => {
        let newCheckArray = [ ...this.state.checkArr];
        if (!this.state.checkArr.includes(id)) {
            newCheckArray.push(id);
        } else {
            newCheckArray = newCheckArray.filter(item => item !== id)
        }
        let newActiveClassArr = [ ...this.state.activeClassArr];
        if (!this.state.activeClassArr.includes(id)) {
            newActiveClassArr.push(id);
        } else {
            newActiveClassArr = newActiveClassArr.filter(item => item !== id)
        }
        this.setState({
            checkArr: newCheckArray,
            activeClassArr: newActiveClassArr
        })
    };

    handleHighlight = (id, i) => {
        let newFavoriteArr = [ ...this.state.favoriteArr];
        if (!newFavoriteArr.includes(id)) {
            newFavoriteArr.push(id);
        } else {
            newFavoriteArr = newFavoriteArr.filter(item => item !== id)
        }
        this.setState({
            favoriteArr: newFavoriteArr
        })
    };

    renderMessages = (item, i) => (
        <div key={i} className={this.state.activeClassArr.includes(item.id) ? 'content-messages__item active' : 'content-messages__item'}>
            <div className="content-messages__main">
                <div className="author">
                    <i className={this.state.checkArr.includes(item.id)  ? 'fas fa-check-square' : 'far fa-square'} onClick={() => this.handleChange(item.id, i)}></i>
                    <i className="far fa-star" onClick={() => this.handleHighlight(item.id, i)} style={{color: this.state.favoriteArr.includes(item.id) ? '#F7B71D' : ''}}></i>
                    <span>{item.author}</span>
                </div>

                <div className="text">
                    <span>{item.theme}</span>
                    <i className="fas fa-circle"></i>
                    <span>{item.text}</span>
                </div>

                <HoverTrash deleteMessage={() => this.deleteMessages(item.id, i)} />
            </div>

            <div className="data">
                <span>{item.data}</span>
            </div>
        </div>
    );

    deleteMessages = (id, i) => {
        let newMessagesArr = this.state.messages;
        newMessagesArr = newMessagesArr.filter(item => item.id !== id);


        let checkArrDelete = this.state.checkArr;
        checkArrDelete = checkArrDelete.filter(item => item.id !== id);

        let favoriteArrDelete = this.state.favoriteArr;
        favoriteArrDelete = favoriteArrDelete.filter(item => item.id !== id);

        this.setState({
            messages: newMessagesArr,
            checkArr: checkArrDelete,
            favoriteArr: favoriteArrDelete
        });
    };

    render() {
        return (
            <div className="row">
                {
                    this.state.messages
                        .filter(item => item.type === this.props.categoryName || this.props.categoryName === 'primary')
                        .map((item, i) => this.renderMessages(item, i))
                }
            </div>
        )
    }
}





