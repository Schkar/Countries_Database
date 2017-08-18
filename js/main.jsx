import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from './Modules/map.jsx';

class MainApp extends React.Component {
    
    render(){
        return (
            <div>
                Hello World 2000
                <Map/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div><MainApp/></div>,
        document.getElementById('app')
    );
});