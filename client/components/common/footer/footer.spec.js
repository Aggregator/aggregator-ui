/* eslint-env mocha */

import React from 'react'
import {createRenderer} from 'react-addons-test-utils'

import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import Footer from './footer'

describe('Footer component', () => {
  it('shallow renders a footer', () => {
    let renderer = createRenderer()
    renderer.render(<Footer />)
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <footer></footer>
    expect(actualElement).toEqual(expectedElement)
  })
})
