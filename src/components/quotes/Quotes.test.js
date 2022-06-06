import { render, screen, fireEvent } from '@testing-library/react'
import { Quotes } from './Quotes'
const quote = 'test quote'
const speaker = 'speaker'
test('render received quote, speaker end a button', () => {
  render(<Quotes quote={quote} speaker={speaker} />)

  const quoteEl = screen.getByText(quote)
  const speakerEl = screen.getByText(speaker)
  const buttonEl = screen.getByRole('button')

  expect(quoteEl).toBeInTheDocument()
  expect(speakerEl).toBeInTheDocument()
  expect(buttonEl).toBeInTheDocument()
})
test('calls as callback when button is pressed', () => {
  const callback = jest.fn()

  render(<Quotes quote={quote} speaker={speaker} onUpdate={callback} />)
  const buttonEl = screen.getByRole('button')
  fireEvent.click(buttonEl)
  expect(callback).toHaveBeenCalledTimes(1)
})
