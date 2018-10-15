import React from 'react';
import AppWrapper from '../ui/AppWrapper';
import AppHeader from '../ui/AppHeader';

export default function ControlPanel(props) {
    const {mode} = props.data;
    const {changeMode} = props.actions;

    return (
        <div className="container">
            <div className="row">
                <div className="main">
                    <AppHeader {...{mode, changeMode}}/>
                    <AppWrapper {...props}/>
                </div>
            </div>
        </div>
    );
}
