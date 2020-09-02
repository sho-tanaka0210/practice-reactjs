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
});

it('概要が表示されているかのテスト', () => {
  act(() => {
    render(<Home/>, container);
  });

  const pArray = Array.from(container.querySelectorAll('.ui.text.container>p'));
  expect(pArray[0].textContent).toBe(Consts.DISCORD_APP_OVERVIEW);
  expect(pArray[1].textContent).toBe(Consts.CHECK_RESPONSE_OVERVIEW);
});

it('ボタン押下時にボタンの表示が変更されるかのテスト', () => {
  const onChange = jest.fn();
  act(() => {
    render(<Home/>, container);
  });

  const buttonArray = Array.from(container.querySelectorAll('.ui.text.container>button'));
  expect(buttonArray[0].innerHTML).toBe(Consts.BUTTON_READ_MORE);
  expect(buttonArray[1].innerHTML).toBe(Consts.BUTTON_READ_MORE);

  act(() => {
    buttonArray[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    buttonArray[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(0);
  expect(buttonArray[0].innerHTML).toBe(Consts.BUTTON_CLOSE);
  expect(buttonArray[1].innerHTML).toBe(Consts.BUTTON_CLOSE);

  act(() => {
    buttonArray[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    buttonArray[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(buttonArray[0].innerHTML).toBe(Consts.BUTTON_READ_MORE);
  expect(buttonArray[1].innerHTML).toBe(Consts.BUTTON_READ_MORE);

});
