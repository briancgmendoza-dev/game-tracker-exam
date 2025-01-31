import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from "../../../../store"
import HomePage from '../../../../modules/home-page'

render(
  <Provider store={store}>
    <HomePage />
  </Provider>
)

test('Should successfully render Filter by Platform component', () => {
  expect(screen.getByText(/Filter by Platform/i))
  expect(screen.getByText(/All/i))
})


// TODO: Add fireEvent to mimic select behavior
