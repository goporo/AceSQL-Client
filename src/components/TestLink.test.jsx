import renderer from 'react-test-renderer'
import TestLink from './TestLink'
import { React } from 'react'

it('changes the class when hovered', () => {
  const component = renderer.create(
    <TestLink page="http://www.facebook.com">Facebook</TestLink>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
