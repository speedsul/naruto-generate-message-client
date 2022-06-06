import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

export const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>
}
Button.propTypes = {
  children: string,
}
const Btn = styled.button`
  padding: 10px;
  border-radius: 0;
  background-color: orange;
  font-size: 1.5em;
  color: white;
  font-family: 'New Tegomin', serif;
  box-shadow: #333 3px 3px;
  &:hover {
    background: #a40000;
    cursor: pointer;
  }
`
