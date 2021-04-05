import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {rootReducer} from "./redux/rootReducer"
import App from './App'
import './index.css'
import './miscalculation/src/css/app.min.css'
import './miscalculation/src/css/vendor.min.css'



const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
