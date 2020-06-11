import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from '../../views/header';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('header');
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('View header', () => {
  act(() => {
    render(<Header />, container);
  });

  const footer = container.querySelector('div');
  expect(footer.textContent).toBe('This is a header.');
});
