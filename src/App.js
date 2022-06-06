import { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { Quotes } from './components'
import imageNaruto from './images/naruto.png'
import { getQuote } from './service/quotesService'
import jutsuSound from './sounds/jutso.mp3'

const audio = new Audio(jutsuSound)
function App() {
  const isMounted = useRef(true)
  const [data, setData] = useState({
    quote: 'Loading quote ...',
    speaker: 'Loadind speaker...',
  })

  const getMessages = async () => {
    const res = await getQuote()
    if (isMounted.current) {
      audio.play()
      setData(res)
    }
  }
  useEffect(() => {
    getMessages()
    return () => {
      isMounted.crurrent = false
    }
  }, [])
  return (
    <Content>
      <Quotes {...data} onUpdate={getMessages} />
      <NarutoImg src={imageNaruto} alt='Naruto' />
    </Content>
  )
}
const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`
export default App
