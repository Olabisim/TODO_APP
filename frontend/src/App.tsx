import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/index'
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        ></ToastContainer>
        <Routes />
    </Router>
  );
}

export default App;
