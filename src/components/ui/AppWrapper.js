import React from 'react';
import Stories from './Stories';
import Session from './Session';
import {MODE_SESSION, MODE_STORIES} from '../../services/mode';

export default function AppWrapper(props) {
    const {mode} = props.data;

    switch (mode) {
        case MODE_STORIES:
            return <Stories {...props}/>;
        case MODE_SESSION:
            return <Session {...props}/>;

        default:
            return null;
    }
}
