import { render } from "@testing-library/react"

import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

describe("Index", () => {
        it("renders correctly", () => { 
                
                render (
                        
                        <Provider store={store}>
                                <PersistGate persistor={persistor}>
                                        <App />
                                </PersistGate>
                        </Provider>
                )
                
        })
})