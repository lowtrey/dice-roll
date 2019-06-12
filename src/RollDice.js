import React from 'react';
import Die from './Die';

class RollDice extends React.Component {
    render() {
        return (
            <div>
                <Die />
                <Die />
                <br />
                <button>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;