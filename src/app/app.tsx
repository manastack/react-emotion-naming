import { Global } from '@emotion/react'

import { FC } from 'react'

import { Home } from '@pages/home'

import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <Home />
  </>
)

export default App
