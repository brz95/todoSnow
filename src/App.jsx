import React from 'react';
import Back from './Snow/Snow';
import Header from './components/Header/Header';
import Todos from './components/Todos/Todos';
import "./style.css"

const App = () => {
    return (
        <div className='app'>
            <div className="container">
            <Header/>
            <Todos/>
            <Back/>
            </div>
        </div>
    );
};

export default App;