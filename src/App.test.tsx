import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from "./store"
import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>
)

test('Should successfully run App and render heading', () => {
  expect(screen.getByRole('heading', { level: 1, name: 'Find & Track the best free-to-play games!' })).toBeDefined()
})
