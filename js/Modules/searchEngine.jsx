import React from 'react';

class SearchEngineButton extends React.Component {
    constructor(props) {
        super(props)

    }

    handleSearchStart = () => {
        if (typeof this.props.searchStart === "function") {
            this.props.searchStart();
        }
    }

    render(){
        return(
            <button className="searchButton normalSearchButton" onClick={this.handleSearchStart} value={this.props.text}>{this.props.text}</button>
        )
    }
}

class LuckySearchEngineButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            countries: 
            [
                "Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Angola","Argentina","American Samoa","Austria","Australia","Aruba","Aland Islands","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthelemy","Brunei Darussalam","Bolivia","Bermuda","Bonaire","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos (Keeling) Islands","Democratic Republic of Congo","Central African Republic","Republic of Congo","Switzerland","Côte d'Ivoire","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curaçao","Christmas Island","Cyprus","Czech Republic","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Egypt","Estonia","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Federated States of Micronesia","Faroe Islands","France","Gabon","United Kingdom","Georgia","Grenada","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Glorioso Islands","Guadeloupe","Equatorial Guinea","Greece","South Georgia and South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kosovo","Kuwait","Cayman Islands","Kazakhstan","Lao People's Democratic Republic","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Madagascar","Montenegro","Saint Martin","Marshall Islands","Macedonia","Mali","Macau","Myanmar","Mongolia","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn Islands","Puerto Rico","Palestinian Territories","Portugal","Palau","Paraguay","Qatar","Reunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","Sao Tome and Principe","El Salvador","Sint Maarten","Syria","Swaziland","Turks and Caicos Islands","Chad","French Southern and Antarctic Lands","Togo","Thailand","Tajikistan","Tokelau","Timor-Leste","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","Jarvis Island","Baker Island","Howland Island","Johnston Atoll","Midway Islands","Wake Island","United States","Uruguay","Uzbekistan","Vatican City","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","US Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"
            ]
        }
    }

    searchStart = () => {
        if (typeof this.props.searchStart === "function") {
            let randomCountryNumber = Math.abs(Math.round(Math.random() * (0 - this.state.countries.length - 1) + 0)*100/100);
            let searchQuery = this.state.countries[randomCountryNumber];
            this.props.searchStart(searchQuery);
        }
    }


    render(){
        return(
            <button className="searchButton luckySearchButton" onClick={this.searchStart} value={this.props.text}>{this.props.text}</button>
        )
    }
}

class SearchEngineBar extends React.Component{
    constructor(props) {
        super(props)

    }

    clearBar = (event) => {
        event.target.value = ""
    }

    handleSearchQuery = (event) => {
        if (typeof this.props.getSearchQuery === "function") {
            this.props.getSearchQuery(event.target.value);
        }
    }

    handleEnter = (event) =>{
        if (event.key === "Enter") {
            if (typeof this.props.searchStart) {
                this.props.searchStart(event.target.value);
            }
        }
    }    

    render(){
        return(
            <input onKeyPress={this.handleEnter} onChange={this.handleSearchQuery} onClick={this.clearBar} className="searchBar" type="text" placeholder="Type a country name here!"/>
        )
    }
}

class SearchEngine extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            currentSearchQuery: "",
        }
    }

    componentDidUpdate = () => {
            this.searchStart(this.props.clickedCountry)
    }

    searchStart = (query) => {
        let currentQuery = query;
        if (currentQuery === undefined) {
            if (this.state.currentSearchQuery !== "") {
                currentQuery = this.state.currentSearchQuery;
            }
        }
        // if (currentQuery === "" || currentQuery === undefined) {
        //     console.log("query is empty");
        //     //TODO: Display something somewhere, when props.query is empty.
        //     return;
        // }
        fetch("https://restcountries.eu/rest/v2/name/"+currentQuery).then( (r) => {
            if (r.ok) {
                return r.json()
            }
            throw new Error("I'm sad now. Go away")
        })
        .then( (r) => {
            if (typeof this.props.getCountryInfo === "function" && typeof this.props.clearClickedCountry === "function") {
                this.props.getCountryInfo(r[0])
                this.props.clearClickedCountry()
                this.setState({
                    currentSearchQuery: ""
                })
            }
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    getSearchQuery = (e) =>{
        this.setState({
            currentSearchQuery: e
        })
    }

    render() {
        return(
            <div className="searchEngine">
                <SearchEngineBar searchStart={this.searchStart} getSearchQuery={this.getSearchQuery}/>
                <div className="buttonWrapper">
                    <SearchEngineButton searchStart={this.searchStart} text="Search country"/>
                    <LuckySearchEngineButton searchStart={this.searchStart} text="Feeling lucky?"/>
                </div>
            </div>
        )
    }
}

export {SearchEngine};