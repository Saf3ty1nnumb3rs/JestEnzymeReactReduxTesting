import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import { setStack, loadStacks, deleteStack } from '../actions';


export const Stacklist = (props) => {
  
  const stacksToLoad = props.stacks.length === 0 ? stacks : props.stacks;

  useEffect(() => {
    props.loadAllStacks(stacksToLoad);
  })

  const deleteStacks = (id) => { props.removeStack(props.stacks, id) };

  const renderStacks = () => {
    const { updateStack } = props;
    const stacksToLoad = props.stacks.length === 0 ? stacks : props.stacks;
    return (
      stacksToLoad.map(stack => {
        const { id, title } = stack;
        return (
          <Card key={id} className="selector">
            <Link
              to='/stack'
              onClick={() => updateStack(stack)}
              className="link"
            >
              <Card.Title>{title}</Card.Title>
            </Link>
            <Button variant="outline-danger" className="trash" onClick={() => deleteStacks(id)}><h1><MdDeleteForever /></h1></Button>
          </Card>
        )
      })
    )
  };

  return <div>{renderStacks()}</div>
  
};

function mapStateToProps(state) {
  return { stacks: state.stacks}
}

function mapDispatchToProps(dispatch) {
    return {
        updateStack: (stack) => { dispatch(setStack(stack)) },
        loadAllStacks: (stacks) => { dispatch(loadStacks(stacks)) },
        removeStack: (stacks, id) => { dispatch(deleteStack(stacks, id))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Stacklist);
