import { render, screen, fireEvent } from '@testing-library/react'
import FormContact from './FormContact'
import { BrowserRouter } from 'react-router-dom'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)
  return render(ui, { wrapper: BrowserRouter })
}

test('validates form inputs on submit', async () => {
  const handleSubmit = vi.fn()
  renderWithRouter(<FormContact onSubmit={handleSubmit} />)

  fireEvent.submit(screen.getByRole('form'))

  expect(await screen.findAllByText('This field is required')).toHaveLength(3)
  expect(handleSubmit).not.toHaveBeenCalled()
})
