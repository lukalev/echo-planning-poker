import React, {Component} from 'react';
import {MODE_NONE, MODE_STORIES} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, addToList, updateStatus} from '../../services/session';

const wsUri = "ws://dlabs.si:1234/";

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            mode: MODE_STORIES,
            list: getAll(),
            ws: new WebSocket(wsUri),
        }
     
    }    

    componentDidMount(){
        var thisHandler=this;
        let state = this.state;
        state.ws.onmessage = (event) => {
            let data = JSON.parse(event.data);
            let updatedList;
            if (data.action==='addNew')
                updatedList = addToList(thisHandler.state.list, {text:data.params.text, completed: false, values:[]});
            else if (data.action==='updateStatus')
                updatedList = updateStatus(thisHandler.state.list, Number(data.params.itemId), Number(data.params.value));
            thisHandler.setState({list: updatedList});
          };
        this.setState(state);
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeStatus', 'changeMode'])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        let sendText = '{"action":"addNew","params":{"text":"'+text+'"}}';
        this.state.ws.send(sendText);
    }

    changeStatus(itemId, value) {
        let sendText = '{"action":"updateStatus","params":{"itemId":"'+itemId+'","value":"'+value+'"}}';
        this.state.ws.send(sendText);
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

}

export default StateProvider;
