import React from 'react';

const DeleteMessages = props => {
    return (
        <button
            href="#"
            className="link"
            onClick={(e) => props.deleteSeveralMessages(e)}
        >
            <i className="fas fa-trash"></i>
        </button>
    )
};

export default DeleteMessages;