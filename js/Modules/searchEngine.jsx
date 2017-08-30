import React from 'react';

class SearchEngineButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentResponse: "",
            searchQuery: "usa"
        }
    }

    // shouldComponentUpdate(){
    //     if (this.props.clickedCountry !== "") {
    //         this.searchStart()
    //     }
    // }

    searchStart = () =>{
        // if (this.state.searchQuery === "") {
        //     console.log("query is empty");
        //     //TODO: Display something somewhere, when props.query is empty.
        //     return;
        // }
        fetch("https://restcountries.eu/rest/v2/name/"+this.state.searchQuery).then( (r) => {
            if (r.ok) {
                return r.json()
            }
            throw new Error("I'm sad now. Go away")
        })
        .then( (r) => {
            if (typeof this.props.getCountryInfo === "function") {
                this.props.getCountryInfo(r[0])
            }
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    render(){
        return(
            <button className="searchButton normalSearchButton" onClick={this.searchStart} value={this.props.text}>{this.props.text}</button>
        )
    }
}

class LuckySearchEngineButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentResponse: "",
            searchQuery: ""
        }
    }

    searchStart = () => {
        fetch("https://restcountries.eu/rest/v2/name/"+this.state.searchQuery).then( (r) => {
            if (r.ok) {
                return r.json()
            }
            throw new Error("I'm sad now. Go away")
        })
        .then( (r) => {
            console.log(r[0].name);
        })
        .catch( (error) => {
            console.log(error);
        })
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

    handleSearchQuery = (event) => {
        if (typeof this.props.getSearchQuery === "function") {
            this.props.getSearchQuery(event.target.value)
        }
    }

    render(){
        return(
            <input onChange={this.handleSearchQuery} className="searchBar" type="text" placeholder="Type a country name here!"/>
        )
    }
}

class SearchEngine extends React.Component{
    constructor(props){
        super(props)

        
    }

    getSearchQuery = (e) =>{
        console.log(e);
    }

    getCountryInfo = (resp) =>{
        if (typeof this.props.getCountryInfo === "function") {
            this.props.getCountryInfo(resp)
        }
    }

    render() {
        return(
            <div className="searchEngine">
                <SearchEngineBar getSearchQuery={this.getSearchQuery}/>
                <div className="buttonWrapper">
                    <SearchEngineButton searchQuery={this.props.clickedCountry} clickedCountry={this.props.clickedCountry} getCountryInfo={this.getCountryInfo} text="Search country"/>
                    <LuckySearchEngineButton getCountryInfo={this.getCountryInfo} text="Feeling lucky?"/>
                </div>
            </div>
        )
    }
}

export {SearchEngine};