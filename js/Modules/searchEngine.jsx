import React from 'react';

class SearchEngineButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <button className="searchButton" value={this.props.text}>{this.props.text}</button>
        )
    }
}

class SearchEngineBar extends React.Component{

    render(){
        return(
            <input className="searchBar" type="text"/>
        )
    }
}

class SearchEngine extends React.Component{


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