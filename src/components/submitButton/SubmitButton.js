import React from 'react';


function SubmitButton(props) {

    return (
        <div>
            <strong>Score:</strong> {props.state.score}<br />
            <strong>Question:</strong> {props.state.data.question}<br />
            <strong>Value:</strong> {props.state.data.value}<br />
            <strong>Category:</strong> {category}<br />
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Submit Answer:</label>
                        <input onChange={props.handleChange} type="text" name="answer" value={props.state.answer} />
                    </div>
                    <button>Submit Form</button> <br />
                    {props.state.answer}

                </form>
            </div>
        </div>
        /*<div className="Team" >

            <h1>{props.name}</h1>

            <div className="symbol">
                <img width={350} src={props.logo} alt={props.name} />
            </div>

            <div>
                <h1>Shots taken by {props.name}: {props.stats.shots}</h1>

            </div>

            <div>
                <h1>Scored {props.stats.score} by {props.name}</h1>
            </div>

            {shotPercentageDiv}


            <button onClick={props.shotHandler}>Shoot</button>
        </div>*/
    )
}

export default SubmitButton;