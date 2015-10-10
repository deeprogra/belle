/* global jest describe beforeEach it expect */

jest.dontMock('../components/Card');
jest.dontMock('../utils/inject-style');

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// Babel would move an import in front of the jest.dontMock. That's why require
// is used instead of import.
const Card = require('../components/Card');

describe('Card', () => {
  it('should come with default styles', () => {
    const card = TestUtils.renderIntoDocument(
      <Card />
    );
    const divNode = TestUtils.findRenderedDOMComponentWithTag(card, 'div');
    expect(divNode.getAttribute('style')).toBeDefined();
    expect(divNode.getAttribute('style').indexOf('background:#fff') > -1).toBeTruthy();
  });

  it('should be able to adopt the style of the card', () => {
    const card = TestUtils.renderIntoDocument(
      <Card style={{ background: '#F00' }}/>
    );
    const divNode = TestUtils.findRenderedDOMComponentWithTag(card, 'div');

    expect(divNode.getAttribute('style').indexOf('background:#F00') > -1).toBeTruthy();
  });

  it('should render its children', () => {
    const card = TestUtils.renderIntoDocument(
      <Card><span>Hello there</span></Card>
    );
    const divNode = TestUtils.findRenderedDOMComponentWithTag(card, 'div');
    const spanNode = TestUtils.findRenderedDOMComponentWithTag(card, 'span');

    expect(divNode.props.children.type).toEqual('span');
    expect(spanNode.children[0]).toEqual('Hello there');
  });
});
