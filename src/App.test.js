import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
const response = { speaker: 'speaker', quote: 'teste quote' }
const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
test('Renders the app with a button, a quote a button', () => {
  render(<App />)

  const buttonEl = screen.getByRole('button')
  const imageEl = screen.getByRole('img')

  expect(buttonEl).toBeInTheDocument()
  expect(imageEl).toBeInTheDocument()
})
test('calls api on button click and update ist text', async () => {
  render(<App />)
  const buttonEl = screen.getByRole('button')
  fireEvent.click(buttonEl)
  const quoteEl = await screen.findByText(response.quote)

  expect(quoteEl).toBeInTheDocument()
})
test('calls api on startup an renders it response', async () => {
  render(<App />)

  const quoteEl = await screen.findByText(response.quote)
  expect(quoteEl).toBeInTheDocument()
})
