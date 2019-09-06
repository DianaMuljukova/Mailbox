import React, {useState, useEffect} from 'react';

export default () => {


    const [checkArr, setCheck] = useState([]);
    const [arr, setArr] = useState([]);
    const [trash, setTrash] = useState(false)


    let handleChange = (i) => {
        let array = [ ...arr];
        if (!arr.includes(i)) {
            array.push(i);
        } else {
            array = array.filter(item => item != i)
        }
        setArr(array);
    };

    let handleHighlight = (i) => {
        let array1 = [ ...checkArr];
        if (!array1.includes(i)) {
            array1.push(i);
        } else {
            array1 = array1.filter(item => item != i)
        }
        setCheck(array1);
    };

    let handleMouseOver = (i) => {
        setTrash(!trash)
    };

    const renderMessages = (item, i) => (
        <div className="content-messages__item" onMouseOver={() => handleMouseOver(i)}>
            <div className="content-messages__main">
                <div className="author">
                    <i className={arr.includes(i)  ? 'fas fa-check-square' : 'far fa-square'} onClick={() => handleChange(i)}></i>
                    <i className="far fa-star" onClick={() => handleHighlight(i)} style={{color: checkArr.includes(i) ? '#F7B71D' : ''}}></i>
                    <span>{item.author}</span>
                </div>

                <div className="text">
                    <span>{item.theme}</span>
                    <i className="fas fa-circle"></i>
                    <span>{item.text}</span>
                </div>
            </div>

            <div>
                {
                    trash ?  <i className="fas fa-trash"></i> : null
                }
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