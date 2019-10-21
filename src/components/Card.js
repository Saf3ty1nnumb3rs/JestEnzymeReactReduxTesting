import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();

        this.state = {
            reveal: false
        }
    }
    render() {
        const { prompt, answer } = this.props.card;
        const reveal = this.state.reveal ? 'text-revealed' : 'text-hidden';
        return (
            <div className="card" onClick={() => this.setState({ reveal: !this.state.reveal } )}>
                <div className="card-prompt"><h4>{prompt}</h4></div>
                <div className={`card-answer ${reveal}`}><h4>{answer}</h4></div>
            </div>
        );
    }
}

export default Card;