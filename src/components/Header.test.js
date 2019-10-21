import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    const header = shallow(<Header />);

    it('renders the `Flashcard Pro` title', () => {
        expect(header.find('h1').first().text()).toEqual('F');
        expect(header.find('h2').first().text()).toEqual('lash');
        expect(header.find('h1').at(1).text()).toEqual('C');
        expect(header.find('h2').at(1).text()).toEqual('ard');
        expect(header.find('h1').at(2).text()).toEqual('P');
        expect(header.find('h2').at(2).text()).toEqual('ro');
    });

    it('renders a Home icon link', () => {
        expect(header.find('TiHomeOutline').exists()).toBe(true);
    })
    it('renders a link to create new stacks', () => {
        expect(header.find('Link h4').text()).toEqual('Create A Stack');
    });
})