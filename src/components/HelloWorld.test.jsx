import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld.jsx'

test('renders Hello World', () => {
  render(<HelloWorld />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
