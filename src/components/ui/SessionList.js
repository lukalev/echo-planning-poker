import React, {Component} from 'react';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0
        };
    }

    handleChange(e) {
        let evaluation = 0;
        if (e.target.text==='Needs info')
            evaluation = -1;
        else if (e.target.text==='Undoable')
            evaluation = -2;
        else
            evaluation = Number(e.target.text);
        this.props.changeStatus(this.props.list[this.state.selectedItem].id,evaluation);
        this.setState({selectedItem:this.state.selectedItem+1});
    }

    render() {
        let list = this.props.list;
        let selectedItem = this.state.selectedItem;
        console.log(selectedItem);
        if (list.length === 0) {
            return (
                <p className="alert alert-info">{MSG_NO_ITEMS}</p>
            );
        }
        else if (list.length-1 < selectedItem) {
            return (
                <p className="alert alert-info">All done</p>
            );
        }
        return (
            <div>
            <p key={list[selectedItem].key}>
                {list[selectedItem].text}</p>
                <ul className="filters">
                <li><a onClick={(e) => this.handleChange(e)}>1</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>2</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>3</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>5</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>8</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>13</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>20</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>40</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>100</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>Needs info</a></li>
                <li><a onClick={(e) => this.handleChange(e)}>Undoable</a></li>
                </ul>
            </div>
        );
    }
}
export default SessionList;