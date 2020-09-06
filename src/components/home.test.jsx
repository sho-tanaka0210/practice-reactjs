import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Consts from '../consts/consts'
import Home from './home';

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

it('アプリ名が表示されているかのテスト', () => {
  act(() => {
    render(<Home/>, container);
  });

  const headerArray = Array.from(container.querySelectorAll('h3.ui.header'));
  expect(headerArray[0].textContent).toBe(Consts.DISCORD_APP_NAME);
  expect(headerArray[1].textContent).toBe(Consts.CHECK_RESPONSE_NAME);
  expect(headerArray[2].textContent).toBe(Consts.DOCKER_IMAGE_NAME);
});

it('概要が表示されているかのテスト', () => {
  act(() => {
    render(<Home/>, container);
  });

  const pArray = Array.from(container.querySelectorAll('.ui.container>div>p'));
  expect(pArray[0].textContent).toBe(Consts.DISCORD_APP_OVERVIEW);
  expect(pArray[1].textContent).toBe(Consts.CHECK_RESPONSE_OVERVIEW);
  expect(pArray[2].textContent).toBe(Consts.DOCKER_IMAGE_OVERVIEW);
});
