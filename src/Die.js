import React from 'react';
import './Die.css';

class Die extends React.Component {
    render() {
        return(
            <div>
                <i className={`Die fas fa-dice-${this.props.face}`}></i>
            </div>
        );
    }
}

export default Die;