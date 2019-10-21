import React, { Component, Fragment } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addStack } from '../actions';
import uuidv4 from 'uuid/v4';

export class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      cards: [],
    }
  }

  addCard() {
    const { cards } = this.state;
    const newCards = [...cards, { id: cards.length, prompt: '', answer: '' }];
    this.setState({
      cards: newCards,
    })
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards })
  }

  addStackRedirect() {
    this.props.addNewStack([...this.props.stacks, {...this.state, id: uuidv4()}])
    this.props.history.push('/');
  }
  renderCards = () => {
    return (
      this.state.cards.map((card, index) => {
        return (
           <div className="flex-block" key={card.id}>
             <br />
            <FormGroup>
              <FormLabel column>Prompt:</FormLabel>
              {' '}
              <FormControl
                onChange={event => this.updateCardPart(event, index, 'prompt')}
              />
              {'  '}
              <FormLabel column>Answer:</FormLabel>
              {'  '}
              <FormControl
                onChange={event =>  this.updateCardPart(event, index, 'answer')}
              />
              {'  '}
            </FormGroup>
           </div>
        )
      })
    )
  }
  render() {
    const { cards } = this.state;
    const disabled = !!cards.length && (cards[cards.length - 1].prompt === '' || cards[cards.length - 1].answer === '') && cards.length > 0;
    const disabledSave = !disabled && cards.length > 0 && this.state.title.length > 0;
      return (
          <Fragment>
            <Container>
              <h4>Create a New Stack</h4>
              <div className="flex-block">
                <Button variant="outline-secondary" className="m1" disabled={disabled} onClick={() => this.addCard()}>Add Card</Button>
                <br />
                <Button variant="outline-secondary" className="m1" disabled={!disabledSave} onClick={() => this.addStackRedirect()}>Save and Add Stack</Button>
              </div>
              <Form inline>
                <div className="flex-block">
                  <FormGroup>
                    <FormLabel column>Title:</FormLabel>
                    {' '}
                    <FormControl
                      onChange={event => this.setState({ title: event.target.value })}
                    />
                  </FormGroup>
                </div>
                {this.renderCards()}
              </Form>
            </Container>
          </Fragment>
      );
  }
}

function mapStateToProps(state) {
  return { stacks: state.stacks}
}
function mapDispatchToProps(dispatch){
  return {
    addNewStack: (stack) => dispatch(addStack(stack)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StackForm);