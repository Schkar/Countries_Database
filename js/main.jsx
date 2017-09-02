import React from 'react';
import ReactDOM from 'react-dom';
import {Map} from './Modules/map.jsx';
import {SearchEngine} from './Modules/searchEngine.jsx';
import {CountryInfo} from './Modules/countryInfo.jsx';
import {LoadingScreen} from './Modules/loadingPage.jsx';

class MainApp extends React.Component {
    constructor(){
        super()
        
        this.state = {
            infoToDisplay: "",
            clickedCountry: "",
            loadingFinished: false
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
        if (e !== undefined) {
            this.setState({
                infoToDisplay: e
            })
        }
    }

    checkLoadingStatus = (value) =>{
        if (value) {
            this.setState({
                loadingFinished: value
            })
        }
    }
    


    render(){
        return (
            <div>
                <div className="welcomeTextWrapper">
                    <p className="welcomeText">Welcome to the most advanced countries database!</p>
                    <p className="welcomeTextSmall">(in this part of the Internet)</p>
                </div>
                <SearchEngine getCountryInfo={this.getCountryInfo} clickedCountry={this.state.clickedCountry}/>
                <Map mapClick={this.mapClick}/>
                <LoadingScreen checkLoadingStatus={this.checkLoadingStatus}/>
                {/* {this.state.loadingFinished ?  : } */}
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