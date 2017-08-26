import React from 'react';

class SearchEngineButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentResponse: "",
            query: "usb"
        }
    }

    searchStart = () =>{
        // if (this.props.query === "") {
        //     console.log("query is empty");
        //     //TODO: Display something somewhere, when props.query is empty.
        //     return;
        // }
        fetch("https://restcountries.eu/rest/v2/name/"+this.state.query).then( (r) => {
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
            <button className="searchButton" onClick={this.searchStart} value={this.props.text}>{this.props.text}</button>
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

        }
    }

    handleClick = () =>{

    }

    render() {
        return(
            <div className="searchEngine">
                <SearchEngineBar/>
                <SearchEngineButton text="Search country"/>
                <SearchEngineButton text="Feeling lucky?"/>
            </div>
        )
    }
}

export {SearchEngine};