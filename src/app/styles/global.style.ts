import { css } from '@emotion/react'

const GlobalStyles = css`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;

    color: #f3f4f6;
    background: #0b0f19;
  }

  #root {
    position: relative;

    height: 100%;
  }
`

export default GlobalStyles
