import React from 'react';
import {MODE_SESSION} from '../../services/mode';
import {INFO_SESSION, INFO_STORIES} from '../../assets/text/en_US';

export default function Info(props) {
    const message = props.mode === MODE_SESSION ? INFO_SESSION : INFO_STORIES;

    return <p className="info">{message}</p>;
}
