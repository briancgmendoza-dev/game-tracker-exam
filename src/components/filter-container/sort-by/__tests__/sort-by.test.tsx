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

test('Should successfully render Sort By component', () => {
  expect(screen.getByText(/Sort By/i))
  expect(screen.getByText(/Release Date/i))
})


// TODO: Add fireEvent to mimic select behavior
