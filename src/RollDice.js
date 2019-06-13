import React from 'react';
import Die from './Die';

//The solution displays an animation every time the dice are rolled.

//A new piece of state is necessary to say whether the dice are 
//currently rolling or not.

//This is done by appending a class containing a CSS animation, 
//and then removing it after one second (hint: setTimeout with setState, 
//but be careful what this references!).

//The button can also dynamically change its text and become disabled
// (un-clickable) until the animation has completed.

//It relies on the additional piece of state that says whether 
//the dice are currently rolling or not.


class RollDice extends React.Component {
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
            numsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'],
            faceOne = numsArray[num1],
            faceTwo = numsArray[num2];
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
                <button onClick={this.roll}>{buttonText}</button>
            </div>
        )
    }
}

export default RollDice;