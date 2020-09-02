import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Name from './name';

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

it('引数の文字が表示されることのテスト', () => {
  let titleName = 'テスト名';
  act(() => {
    render(<Name title={titleName} />, container);
  });

  const headerArray = Array.from(container.querySelectorAll('h3'));
  expect(headerArray[0].textContent).toBe(titleName);
});
