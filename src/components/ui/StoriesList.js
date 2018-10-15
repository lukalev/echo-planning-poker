import React from 'react';
import StoriesListItem from './StoriesListItem';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

export default function StoriesList(props) {
    const {items} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {items.map(item => (
                <StoriesListItem key={item.id} item={item} />
            ))}
        </ul>
    );
}
