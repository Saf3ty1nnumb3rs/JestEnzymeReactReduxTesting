import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

export const Stack = (props) => {

  const renderCardList = () => {
    const { cards } = props.stack;
    return (
      cards.map(card => {
        return ( <Card key={card.id} card={card} /> )
      })
    )};

    const { title, cards } = props.stack;

    return (
      <div>
        <h3>{title}</h3>
        <br />
        {cards.length > 0 && renderCardList()}
      </div>
    );
}

function mapStateToProps(state) {
    return {
        stack: state.stack,
    }
}
export default connect(mapStateToProps, null)(Stack);