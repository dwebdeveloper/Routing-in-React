import React, { Component } from 'react';
//import our service
import JeopardyService from "./../jeopardyService";





class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {
                category: ''
            },
            score: 0,
            submitted: false,
            answer: ''

        }
    }

    /*Score increase or decrease based on the response from the submit button
    If user submits correct this.state.data.answer from this.state.data.question add this.state.data.value to score if true 
    If user submits incorrect this.state.data.answer from this.state.data.question add this.state.data.value to score if false.
    */
    handleChange = (event) => {
        let userAnswer = event.target.value;
        this.setState({ answer: userAnswer });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(currentState => {
            let score = currentState.score

            if (currentState.data.answer === currentState.answer) {
                score += currentState.data.value;
                console.log('correct')



            }
            else if (currentState.data.answer !== currentState.answer) {

                score -= currentState.data.value
                console.log(currentState.data.value)

            }
            return {
                score,
                answer: ''


            }

        })

        this.getNewQuestion()




    }








    //get a new random question from the API and add it to the data object in state

    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question

    componentDidMount() {
        this.getNewQuestion();
    }

    //display the results on the screen

    render() {

        let category = 'loading';
        if (this.state.data.category) {
            category = this.state.data.category.title
        };






        return (
            <div>
                <strong>Score:</strong> {this.state.score}<br />
                <strong>Question:</strong> {this.state.data.question}<br />
                <strong>Value:</strong> {this.state.data.value}<br />
                <strong>Category:</strong> {category}<br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Submit Answer:</label>
                            <input onChange={this.handleChange} type="text" name="answer" value={this.state.answer} />
                        </div>
                        <button>Submit Form</button> <br />
                        {this.state.answer}

                    </form>
                </div>
            </div>
        );
    }
}

export default Jeopardy;