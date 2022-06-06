import './App.css';
import React, { Component } from 'react';

import Main from './Components/Maincomponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
