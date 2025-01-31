import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from "../../../store"
import DetailsPage from '..'

render(
  <Provider store={store}>
    <DetailsPage />
  </Provider>
)

// TODO: Mock redux, thunk and data

test('Should successfully render Details Page and render the ff:', () => {
  // HeroMessage component
  expect(screen.getByText(/Find & Track the best free-to-play games!/))
  expect(screen.getByText(/Search for what to play next!/))

  // CardContainer component -> Needs to mock redux first
})
