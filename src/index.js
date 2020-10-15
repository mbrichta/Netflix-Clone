import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { GlobalStyle } from './global-styles'
import { FirebaseContext } from './context/firebase'
import { firebase } from './lib/firebase.prod'

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: firebase }}>
            <GlobalStyle />
            <App />
        </FirebaseContext.Provider>
    </>, document.getElementById('root'));
