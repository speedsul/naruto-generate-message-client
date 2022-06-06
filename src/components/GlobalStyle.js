import { createGlobalStyle } from 'styled-components'
import bgImg from '../images/bg.jpeg'

export const GlobalStyle = createGlobalStyle`
body { 
    padding:0;
    margin:0;
    font-family: 'New Tegomin', serif;
    background: url(${bgImg}) center no-repeat;
    background-size: cover;
}`
