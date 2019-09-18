import React from 'react';

const Input = props => {
    return (
        <input
            type="text"
            className={props.isValid ? 'newMessage__input' : 'newMessage__input invalid'}
            placeholder="Кому"
            onChange={e => props.onChange(e)}
            isValid={props.isValid}
        />
    )
};

export default Input;