import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import DesktopContainer from './desktopContainer';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('View header list', () => {
  act(() => {
    render(<DesktopContainer />, container);
  });

  const headerArray = Array.from(container.querySelectorAll('.item'));
  expect(headerArray[0].textContent).toBe('Home');
  expect(headerArray[1].textContent).toBe('Repository list');

  expect(headerArray[2].querySelector('input').placeholder).toBe('リポジトリ検索');
  expect(headerArray[2].querySelector('.ui.inverted.button').textContent).toBe('Search');
});
