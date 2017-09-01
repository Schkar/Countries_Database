import React from 'react';

class LoadingIcon extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="loadingCircle"></div>
        )
    }
}

class LoadingTexts extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            texts: [
                'Loading map of countries',
                'Loading location of Covenant Ark',
                'Loading pictures of funny cats',
                'Loading sensitive data from FBI database',
                'Loading sensitive data from CIA database',
                'Loading mysterious stuff',
                'Loading UFO landing videos',
                'Loading location of the Holy Grail',
                'Loading UFO launching videos',
                'Loading more pictures of funny cats (it is never too much)',
                'Loading cake recipes (however Cake is a Lie)',
                'Loading Half-Life 3 announcement',
                'Loading some nuclear launching codes (just in case!)'
            ],
            currentValue: 0,
            currentText: ""
        }
    }

    componentDidMount = () =>{
        this.textLoad()
    }

    textLoad = () =>{
        if (this.state.currentValue === this.state.texts.length - 1) {
            if (typeof this.props.checkLoadingStatus === "function") {
                this.props.checkLoadingStatus(true)
            }
            return;
        }
        let random = this.state.currentText.length * 100 + (Math.random() * 1000 - 500) + 500;
        return new Promise( (resolve) => {
            this.setState({
                currentText: this.state.texts[this.state.currentValue],
                currentValue: this.state.currentValue + 1
            })
            setTimeout(function(){
                resolve()
            },random)
        }).then(this.textLoad)
    }

    render(){
        return(
            <p className="currentText">{this.state.currentText}</p> 
        )
    }
}

class LoadingScreen extends React.Component{
    constructor(props){
        super(props)
    }

    checkLoadingStatus = (value) => {
        if (typeof this.props.checkLoadingStatus === "function") {
            this.props.checkLoadingStatus(value)
        }
    }

    render(){
        return(
            <div>
                <LoadingIcon/>
                <LoadingTexts checkLoadingStatus={this.checkLoadingStatus}/> 
            </div>
        )
    }
}

export {LoadingScreen}