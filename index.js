import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import App from './App'

//redux load
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './src/modules';
import { Provider } from 'react-redux';

const store = createStore(reducers, devToolsEnhancer());

class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

export default index
