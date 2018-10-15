import React, {Component} from 'react';
import ControlPanel from '../ui/ControlPanel';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';

class App extends Component {
    render() {
        return (
            <StateProvider>
                <KeyStrokeHandler>
                    <ControlPanel/>
                </KeyStrokeHandler>
            </StateProvider>
        );
    }
}

export default App;
