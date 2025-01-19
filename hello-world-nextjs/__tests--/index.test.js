import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home Page', () => {
  it('renders a welcome message', () => {
    render(<Home />)
    const welcomeMessage = screen.getByText(/Hello World from Next.js!/i)
    expect(welcomeMessage).toBeInTheDocument()
  })
})

