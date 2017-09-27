import React from 'react';


class Instructions extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            class: "instructionsWrapper" 
        }
    }

    handleClick = () => {
        if (this.state.class === "instructionsWrapper open") {
            this.setState({
                class: "instructionsWrapper"
            })
            return;
        }
        this.setState({
            class: "instructionsWrapper open"
        })
    }

    render(){
        return(
            <div className={this.state.class}>
                <h2 className="instructionsTitle" onClick={this.handleClick}>Instructions</h2>
                <div className="instructionsTextWrapper">
                    <p className="instructionsText">To search database simply type a country name into search bar and hit the Search Button!</p>
                    <p className="instructionsText">If you are feeling lucky, try the Lucky Button!</p>
                    <p className="instructionsText">If you don't know the country name, try clicking it on the map!</p>
                    {/* <p className="instructionsText">Something might or might not happen if you "accidentaly" mistype the country name</p> */}
                </div>
            </div>
        )
    }
}


export {Instructions}