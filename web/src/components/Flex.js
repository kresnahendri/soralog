import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: ${(props) => props.jc || 'center'};
  align-items: ${(props) => props.ai || 'center'};
  flex-direction: ${(props) => props.fd || 'row'};
  flex-wrap: ${(props) => props.fw || 'nowrap'};
  flex-shrink: ${(props) => props.fs || '1'};
  flex-basis: ${(props) => props.fb || 'auto'};
  flex: ${(props) => props.f || 'none'};
`
