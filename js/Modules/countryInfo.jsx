import React from 'react';

class CountryInfo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        if (this.props.infoToDisplay === "") {
            return null
        }
        return
        <div className="countryInfoWrapper">
            <p className="countryInfoText name">Name: {this.props.infoToDisplay.name}</p> 
            <p className="countryInfoText capital">Capital city: {this.props.infoToDisplay.capital}</p>    
            <p className="countryInfoText region">Region: {this.props.infoToDisplay.subregion}</p>    
            <p className="countryInfoText population">Population: {this.props.infoToDisplay.population}</p>    
            <p className="countryInfoText currency">Currency: {this.props.infoToDisplay.currencies.name}</p>    
            <p className="countryInfoText language">Language: {this.props.infoToDisplay.languages.name}</p>    
            <p className="countryInfoText flag">Flag: <img src={this.props.infoToDisplay.flag} alt={this.props.infoToDisplay.name & "flag"}></img></p>    
        </div>
    }
}

export {CountryInfo};