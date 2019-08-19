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
  background-color: ${(props) => props.theme.color.primary};
  color: white;
  font-size: 8px;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  align-items: center;
  animation: bounce .3s;
  @keyframes bounce {
    0% { transform: scale(.8); } 
    30% { transform: scale(1.2); } 
    100% { transform: scale(1); } 
  }
`
