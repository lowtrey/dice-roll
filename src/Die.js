import React from 'react';
import './Die.css';

class Die extends React.Component {
    render() {
        return(
                <i className={this.props.face}></i>
        );
    }
}

export default Die;