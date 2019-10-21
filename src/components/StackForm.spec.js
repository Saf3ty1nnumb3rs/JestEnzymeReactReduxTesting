import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe('StackForm', () => {
    const stackform = shallow(<StackForm />);

    it('renders the form title', () => {
        expect(stackform.find('h4').text()).toEqual('Create a New Stack');
    });

    it('renders a Form component', () => {
        expect(stackform.find('Form').exists()).toBe(true);
    });

    it('renders a button to add a new card', () => {
        expect(stackform.find('Button').first().props().children).toEqual('Add Card');
    });

    it('renders a button to Save the stack', () => {
        expect(stackform.find('Button').at(1).props().children).toEqual('Save and Add Stack');
    });

    describe('and updating the title', () => {
      beforeEach(() => {
        stackform.find('FormControl').simulate('change', { target: { value: changeTitle}})
      });

      it('updates the title in state', () => {
        expect(stackform.state().title).toEqual(changeTitle);
      });
    });

    describe('when adding a new card',() => {
      beforeEach(() => {
        stackform.find('Button').at(0).simulate('click');
      });

      afterEach(() => {
        stackform.setState({ cards: [] })
      });
      
      it('adds a new card to the state', () => {
        expect(stackform.state().cards.length).toEqual(1);
      });

      it('renders the prompt section', () => {
        expect(stackform.find('FormLabel').at(1).props().children).toEqual('Prompt:');
      });

      it('renders the answer section', () => {
        expect(stackform.find('FormLabel').at(2).props().children).toEqual('Answer:');
      });

      describe('when updating the card prompt', () => { 
        beforeEach(() => {
          stackform.find('FormControl').at(1).simulate('change', { target: { value: changePrompt}});
        });

        it('updates the prompt in state', () => {
          expect(stackform.state().cards[0].prompt).toEqual(changePrompt);
        })
      })

      describe('when updating the card answer', () => {
        beforeEach(() => {
          stackform.find('FormControl').at(2).simulate('change', { target: { value: changeAnswer}});
        });

        it('updates the answer in state', () => {
          expect(stackform.state().cards[0].answer).toEqual(changeAnswer);
        })
      })
    })
});