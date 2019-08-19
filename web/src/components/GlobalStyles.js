import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    background: rgb(232, 232, 232);
  }
  * {
    font-family: 'Montserrat', sans-serif;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 0;
    }
  }
  select {
    width: 100%;
    option {
      padding: 20px;
    }
  }
`
