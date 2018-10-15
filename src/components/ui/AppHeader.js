import React from 'react';
import {MODE_SESSION, MODE_STORIES} from '../../services/mode';

export default function AppHeader(props) {
    const {changeMode} = props;

    return (
        <header>
            <h1>Planning poker</h1>
            <a title="Stories"
                onClick={() => changeMode(MODE_STORIES)}>Stories</a>
                &nbsp;|&nbsp;
            <a title="Session"
                onClick={() => changeMode(MODE_SESSION)}>Session</a>
                
        </header>
    );
}
