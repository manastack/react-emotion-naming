import { Global } from '@emotion/react'
import { withEmotionNamingProvider } from '@manauser/react-emotion-naming'

import { FC } from 'react'

import { Home } from '@pages/home'

import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <Home />
  </>
)

export default withEmotionNamingProvider.apply(
  {
    debugEnabled: import.meta.env.MODE !== 'production',
  },
  [App],
)
