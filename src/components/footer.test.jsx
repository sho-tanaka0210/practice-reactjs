import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Footer from '../../src/components/footer'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('footer');
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

/**
 * ヘッダーの表示テスト
 */
it('View footer', () => {
  act(() => {
    render(<Footer />, container);
  });

  const footer = container.querySelector('div');
  expect(footer.textContent).toBe('This is a footer.');
});
