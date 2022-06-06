import styled from 'styled-components'
import { string, func } from 'prop-types'
import { Button } from '../button'

export const Quotes = ({ quote, speaker, onUpdate }) => (
  <Wrapper>
    <Quote>{quote}</Quote>
    <Speaker>{speaker}</Speaker>
    <Button onClick={onUpdate}>Quote No Jutsu</Button>
  </Wrapper>
)

Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func,
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`
const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`
const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 50px;
`
