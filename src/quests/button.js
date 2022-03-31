import React, { Component } from 'react';

class Button extends Component {

    render(props) {
        
    function downloadCV(){
        alert('A label desse botão é baixar CV')
    }
        return (
            <div>
            <button className="btn" onClick={downloadCV}>{this.props.label}</button>
            </div>
        );
    }
}

export default Button;