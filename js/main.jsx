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
            clickedCountry: ""
        }        
    }

    mapClick = (e) => {
        if (e !== null) {
            this.setState({
                clickedCountry: e
            })
        }
    }



    getCountryInfo = (e) => {

    }
    


    render(){
        return (
            <div>
                <SearchEngine getCountryInfo={this.getCountryInfo} clickedCountry={this.state.clickedCountry}/>
                <Map mapClick={this.mapClick}/>
                <CountryInfo infoToDisplay={this.state.infoToDisplay}/>
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <MainApp/>
        </div>,
        document.getElementById('app')
    );
});