import styled, { css } from 'styled-components'

const setColor = (props) => {
  if (props.color === 'white') {
    return css`
      border-color: ${props.theme.color.grey01};
      background-color: #fff;
      color: ${props.theme.color.grey01};
    `
  }
  return css`
    border-color: ${props.theme.color.primary};
    background-color: ${props.theme.color.primary};
    color: white;
  `
}
const Button = styled('button')`
  position: relative;
  pointer-events: auto;
  height: 40px;
  width: 100%;
  padding: 7px 15px;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  ${setColor}
`

export default Button
