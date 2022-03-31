import React, { Component } from 'react';

class Texto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            texto: props.texto.toUpperCase()
        }
    }
    render() {
        return (
            <>
                <h2 className="texto">{this.state.texto}</h2><hr/>
            </>
        );
    }
}

export default Texto;