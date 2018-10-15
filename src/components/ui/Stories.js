import React from 'react';
import Info from './Info';
import Header from './Header';
import StoriesList from './StoriesList';

export default function Stories(props) {
    const {list, mode, query} = props.data;
    const {addNew, changeStatus, setSearchQuery} = props.actions;
    const items = list;

    return (
                <div className="main">
                    <Header {...{addNew, mode, query, setSearchQuery}}/>
                    <StoriesList {...{items, changeStatus}}/>
                    <Info {...{mode}}/>
                </div>
    );
}
