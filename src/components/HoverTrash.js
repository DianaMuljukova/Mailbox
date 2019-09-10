import React from 'react';

const HoverTrash = props => (
    <div className="trash-hover">
        <i className="fas fa-trash" onClick={props.deleteMessage}></i>
    </div>
);

export default HoverTrash;