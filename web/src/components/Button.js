import styled from 'styled-components'

const Button = styled('button')`
  position: relative;
  pointer-events: auto;
  height: 40px;
  width: 100%;
  padding: 7px 15px;
  border-color: ${(props) => props.theme.color.primary};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.primary};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  display: inline-block;
  color: white;
  font-weight: bold;
`

export default Button
