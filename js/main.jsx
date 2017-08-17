import React from 'react';
import ReactDOM from 'react-dom';

class MainApp extends React.Component {
    
    render(){
        return (
            <div>
                Hello World 2000
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