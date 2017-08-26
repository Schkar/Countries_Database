import React from 'react';

class SearchEngineButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentResponse: "",
            searchQuery: "usa"
        }
    }

    searchStart = () =>{
        // if (this.props.query === "") {
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
            console.log(r[0].name);
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
            searchQuery: "usa"
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

        this.state = {

        }
    }

    render(){
        return(
            <input className="searchBar" type="text"/>
        )
    }
}

class SearchEngine extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            searchQuery: ""
        }
    }

    handleClick = () =>{

    }

    render() {
        return(
            <div className="searchEngine">
                <SearchEngineBar/>
                <SearchEngineButton text="Search country"/>
                <LuckySearchEngineButton text="Feeling lucky?"/>
            </div>
        )
    }
}

export {SearchEngine};