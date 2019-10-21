import React from 'react';
import { shallow } from 'enzyme';
import { Stacklist } from './Stacklist';
import { stacks } from '../data/fixtures';

const props = { stacks };

describe('Stacklist', () => {
    const stacklist = shallow(<Stacklist {...props} />);
  
    it('renders the correct number of stacks', () => {
        expect(stacklist.find('Card').length).toEqual(props.stacks.length);
    });

    it('renders the correct number of links and delete buttons within the cards', () => {
      expect(stacklist.find('Link').length).toEqual(props.stacks.length);
      expect(stacklist.find('Button').length).toEqual(props.stacks.length);
    });
})