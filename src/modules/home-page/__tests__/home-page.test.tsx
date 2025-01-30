import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../../App'

render(<App />)

test('Should render Home Page', () => {
  expect(screen.getByRole('heading', { level: 1, name: 'Find & Track the best free-to-play games!' })).toBeDefined()
})
