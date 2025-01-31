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

test('Should successfully render Filter by Category component', () => {
  expect(screen.getByText(/Filter by Category/i))
  expect(screen.getByText(/Start typing.../i))
})

// TODO: Add fireEvent to mimic select behavior
