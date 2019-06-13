import React from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends React.Component {
    static defaultProps = {
        numbers : ['zero', 'one', 'two', 'three', 'four', 'five', 'six']
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
        let num1 = Math.floor(Math.random() * 6) + 1,
            num2 = Math.floor(Math.random() * 6) + 1,
            faceOne = this.props.numbers[num1],
            faceTwo = this.props.numbers[num2];
        setTimeout(() => {
            this.setState({
                faceOne: faceOne,
                faceTwo: faceTwo,
                isRolling: false
            });
        }, 1000);
    }
    render() {
        let face1 = this.state.isRolling ? `Rolling Die fas fa-dice-${this.state.faceOne}` : `Die fas fa-dice-${this.state.faceOne}`,
            face2 = this.state.isRolling ? `Rolling Die fas fa-dice-${this.state.faceTwo}` : `Die fas fa-dice-${this.state.faceTwo}`,
            buttonText = this.state.isRolling ? 'Rolling...' : 'Roll Dice!';
        return (
            <div>
                <Die face={face1} />
                <Die face={face2} />
                <br />
                <button
                onClick={this.roll}
                disabled={this.state.isRolling}
                className='button'
                >
                {buttonText}
                </button>
            </div>
        )
    }
}

export default RollDice;