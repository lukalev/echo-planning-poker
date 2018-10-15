import React from 'react';
import Info from './Info';
import SessionList from './SessionList';

export default function Session(props) {
    const {list, mode} = props.data;
    const {changeStatus} = props.actions;

    return (
                <div className="main">
                    <SessionList {...{list, changeStatus}}/>
                    <Info {...{mode}}/>
                </div>
    );
}
