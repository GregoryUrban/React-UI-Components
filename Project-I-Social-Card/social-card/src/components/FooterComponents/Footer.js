import React from 'react';
import './Footer.css'


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 5};
    }
    render(){
        return(
            <div className = 'footerIcons'>
            <i className="far fa-comment"></i>
            <i className="fas fa-sync"> 6</i>
            <i className="far fa-heart" onClick={heartValue}> {this.state.value}</i>
            <i className="far fa-envelope"></i>
        </div>
        )
    }
}

function heartValue(){
    console.log('The link was clicked.');
}


export default Footer;