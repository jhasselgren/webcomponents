import {h, render} from 'preact';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { rootReducer } from './store';
import { BuyButton } from './button';
import { MiniCart } from './cart';

const store = createStore(rootReducer, applyMiddleware(thunk));

(window as any).store = store;

class XMiniCart extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    render(
      <Provider store={store}>
        <MiniCart />
      </Provider>,
      mountPoint
    );
  }
}

customElements.define('x-mini-cart', XMiniCart);

class XBuyButton extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name') || '';
    const itemNo = this.getAttribute('itemNo') || '';

    render(
      <Provider store={store}>
        <BuyButton itemNo={itemNo} name={name} />
      </Provider>,
      mountPoint
    );
  }
}

customElements.define('x-buy-button', XBuyButton);
