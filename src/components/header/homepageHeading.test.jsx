import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import HomepageHeading from './homepageHeading';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('h1');
  // container *must* be attached to document so events work correctly.
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const sel = id => `[data-tesidt="${id}"]`

it('View homepage header', () => {
  act(() => {
    render(<HomepageHeading />, container);

    const homepageheading = sel('header')
    expect(homepageheading.textContent).toBe('リポジトリ概要紹介');
  });
});

it('View homepage header on mobile', () => {
  act(() => {
    render(<HomepageHeading mobile />, container);
  });

  const homepageheading = sel('header')
  expect(homepageheading.textContent).toBe('リポジトリ概要紹介');
});
