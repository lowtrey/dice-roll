import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
    static defaultProps = {
        sides : ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {
            faceOne: 'one',
            faceTwo: 'one',
            isRolling: false
        };
        this.roll = this.roll.bind(this);
    }
    roll() {
        this.setState({
            isRolling: true
        });
        let newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)],
            newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        setTimeout(() => {
            this.setState({
                faceOne: newDie1,
                faceTwo: newDie2,
                isRolling: false
            });
        }, 1000);
    }
    render() {
        let face1 = this.state.isRolling ? `Rolling Die fas fa-dice-${this.state.faceOne}` : `Die fas fa-dice-${this.state.faceOne}`,
            face2 = this.state.isRolling ? `Rolling Die fas fa-dice-${this.state.faceTwo}` : `Die fas fa-dice-${this.state.faceTwo}`,
            buttonText = this.state.isRolling ? 'Rolling...' : 'Roll Dice!';
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={face1} />
                    <Die face={face2} />
                </div>
                <button
                onClick={this.roll}
                disabled={this.state.isRolling}
                className='btn btn-success'
                >
                {buttonText}
                </button>
            </div>
        )
    }
}

export default RollDice;