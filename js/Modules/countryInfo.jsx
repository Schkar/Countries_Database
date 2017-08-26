import React from 'react';

class CountryInfo extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            this.props.infoToDisplay === "" ?  null : <div>this.props.infoToDisplay </div>
        )
    }
}

export {CountryInfo};