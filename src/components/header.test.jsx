import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from './header';

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

/**
 * メインヘッダーの表示テスト
 */
it('View main header', () => {
  act(() => {
    render(<Header />, container);
  });

  const className = '.ui.header';
  const header = container.querySelector(className);
  expect(header.tagName).toBe('H2');
});

/**
 * サブヘッダーの表示テスト
 */
it('View sub header', () => {
  act(()  => {
    render(<Header />, container);
  });

  const className = '.sub.header';
  const header = container.querySelector(className);
  expect(header.tagName).toBe('DIV');
});