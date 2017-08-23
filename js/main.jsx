import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from './Modules/map.jsx';
import {SearchEngine} from './Modules/searchEngine.jsx';
import {CountryInfo} from './Modules/countryInfo.jsx';

class MainApp extends React.Component {
    
    render(){
        return (
            <div>
                <Map/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <SearchEngine/>
            <MainApp/>
            <CountryInfo/>
        </div>,
        document.getElementById('app')
    );
});