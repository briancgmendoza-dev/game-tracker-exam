import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from "../../../store"
import HomePage from '..'

render(
  <Provider store={store}>
    <HomePage />
  </Provider>
)

// TODO: Mock redux, thunk and data

test('Should successfully render Home Page and render the ff:', () => {
  expect(screen.getByText(/Filter by Platform/i))
  expect(screen.getByText(/All/i))
  expect(screen.getByText(/Filter by Category/i))
  expect(screen.getByText(/Start typing.../i))
  expect(screen.getByText(/Sort By/i))
  expect(screen.getByText(/Release Date/i))
})
