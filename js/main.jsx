import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from './Modules/map.jsx';
import {SearchEngine} from './Modules/searchEngine.jsx';
import {CountryInfo} from './Modules/countryInfo.jsx';

class MainApp extends React.Component {
    constructor(){
        super()
        
        this.state = {
            infoToDisplay: "",
            activeCountry: ""
        }        
    }
    
    render(){
        return (
            <div>
                <SearchEngine/>
                <Map/>
                <CountryInfo infoToDisplay={this.state.infoToDisplay}/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            Whatever
            <MainApp/>
        </div>,
        document.getElementById('app')
    );
});