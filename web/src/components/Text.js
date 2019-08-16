import styled, { css } from 'styled-components'
import { withDynamicTag } from './DynamicTag'

const setVariant = (props) => {
  if (props.title) {
    return css`
      line-height: 27px;
      font-size: 18px;
    `
  }
  if (props.medium) {
    return css`
      line-height: 18px;
      font-size: 12px;
    `
  }
  if (props.small) {
    return css`
      line-height: 16px;
      font-size: 10px;
    `
  }
  if (props.bold) {
    return css`
      line-height: 24px;
      font-size: 16px;
      font-weight: bold;
    `
  }
  return css`
    line-height: 21px;
    font-size: 14px;
  `
}
const Text = styled.p`
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  line-height: normal;
  text-transform: none;
  letter-spacing: none;
  ${(props) => setVariant(props)}
`

export default withDynamicTag(Text)
