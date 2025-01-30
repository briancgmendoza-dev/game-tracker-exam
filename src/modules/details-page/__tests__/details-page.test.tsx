import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../../../App'

render(<App />)

test('Should render Details Page', () => {
  expect(screen.getByRole('heading', { level: 1, name: 'Details' })).toBeDefined()
})
