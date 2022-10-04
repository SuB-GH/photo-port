import React from 'react';
import About from '..';

afterEach(cleanup);
describe('About component', () => {
    //renders About test
    // First Test - baseline testy to verify that the component is rendering
    it('renders', () => {
        render(<About />);
    });

    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
    });
})

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';