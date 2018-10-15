import React from 'react';
import InputBox from './InputBox';

export default function Header(props) {
    const {addNew} = props;

    return (
        <header>
            <InputBox {...{addNew}}/>;
        </header>
    );
}
