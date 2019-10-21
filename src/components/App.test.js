import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the Stacklist', () => {
        expect(app.find('Connect(Stacklist)').exists()).toBe(true);
;    })
})