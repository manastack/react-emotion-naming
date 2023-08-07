import {
  PropsWithEmotionNaming,
  withEmotionNaming,
  // @ts-ignore
} from '@manauser/react-emotion-naming'

import { FC } from 'react'

import { Smt } from '@widgets/smt'

import StyledHome from './home.style'

type Props = {}
const Home: FC<PropsWithEmotionNaming<Props>> = ({
  setClassName,
}: PropsWithEmotionNaming<Props>) => (
  <StyledHome className={setClassName('Home')}>
    <Smt /> home
  </StyledHome>
)

export default withEmotionNaming(Home)
