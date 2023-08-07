// @ts-ignore
import { useEmotionNaming } from '@manauser/react-emotion-naming'

import { FC } from 'react'

import StyledSmt from './smt.style'

type Props = {}
const Smt: FC<Props> = () => {
  const setClassName = useEmotionNaming()

  return <StyledSmt className={setClassName('Smt')}>smt</StyledSmt>
}

export default Smt
