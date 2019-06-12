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
            faceTwo: 'one'
        };
        this.roll = this.roll.bind(this);
    }
    roll() {
        let num1 = Math.floor(Math.random() * 6) + 1;
        let num2 = Math.floor(Math.random() * 6) + 1;
        let numsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
        let faceOne = numsArray[num1];
        let faceTwo = numsArray[num2];
        this.setState({
            faceOne: faceOne,
            faceTwo: faceTwo
        });
    }

    render() {
        return (
            <div>
                <Die face={this.state.faceOne} />
                <Die face={this.state.faceTwo} />
                <br />
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;