import styled from 'styled-components'

export default styled.div`
  padding-left: 4px;
  padding-right: 4px;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  background-color: ${(props) => props.primary};
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
`
