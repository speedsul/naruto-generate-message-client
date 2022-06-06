import { screen, render } from '@testing-library/react'
import { Button } from './'

test('renders button with tsxt', () => {
  render(<Button>Text</Button>)

  const buttonEl = screen.getByText('Text')
  expect(buttonEl).toBeInTheDocument()
})
