import React, {useState} from 'react';
import index from "postcss-normalize";


export default () => {

    const [check, setCheck] = useState(-1);


    let handleChange = (i) => {
        setCheck(i);
    };

    const renderMessages = (item, i) => (
        <div className="content-messages__item" onClick={() => handleChange(i)}>
            <div className="content-messages__main">
                <div className="author">
                    <i className={i == check ? 'fas fa-check-square' : 'far fa-square'}></i>
                    <i className="far fa-star"></i>
                    <span>{item.author}</span>
                </div>

                <div className="text">
                    <span>{item.theme}</span>
                    <i className="fas fa-circle"></i>
                    <span>{item.text}</span>
                </div>
            </div>

            <div>
                <span>{item.data}</span>
            </div>
        </div>
    );


    return (
        <div className="row">

            {
                messages.map((item, i) => renderMessages(item, i))
            }

        </div>
    )
}



const messages = [
    {
        author: 'Salit Kolla',
        theme: 'Invitation',
        text: 'Dribbble Meetup @ Somewhere, Sun Jan 5',
        data: '7:29 pm'
    },
    {
        author: 'Lindsay Cortier',
        theme: 'Your UI kit',
        text: 'Hey Roman, thanks for your product!',
        data: '6:11 pm'
    },
    {
        author: 'Tim Green',
        theme: 'Prototype faster',
        text: 'Just downloaded your design kit. Awesome',
        data: '5:54 pm'
    },
    {
        author: 'Salit Kolla',
        theme: 'Just purchased design system',
        text: 'Wow boost of my UI workflow',
        data: 'May 29'
    },
    {
        author: 'Peter Harrinson',
        theme: 'User’s feedback',
        text: 'Purchased your design system. Thanks',
        data: 'May 28'
    },
    {
        author: 'Keri, me (2)',
        theme: 'Your UI kit',
        text: 'Hey Roman, thanks for your product!',
        data: 'May 27'
    },
    {
        author: 'Michael Pottser',
        theme: 'Prototype faster',
        text: 'Just downloaded your design kit. Awesome',
        data: 'May 27'
    },
    {
        author: 'Salit Kolla',
        theme: 'Just purchased design system',
        text: 'Wow boost of my UI workflow',
        data: 'May 26'
    },
    {
        author: 'Lindsay Cortier',
        theme: 'User’s feedback',
        text: 'Purchased your design system. Thanks',
        data: 'May 25'
    },
    {
        author: 'Tim Green',
        theme: 'Your UI kit',
        text: 'Hey Roman, thanks for your product!',
        data: 'May 24'
    },
    {
        author: 'Salit Kolla',
        theme: 'Prototype faster',
        text: 'Just downloaded your design kit. Awesome',
        data: 'May 21'
    },
];
