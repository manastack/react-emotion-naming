import { ComponentType, ReactElement } from 'react'

import {
  PropsWithEmotionNaming,
  WithEmotionNaming,
} from './emotion-naming.model'
import { useEmotionNaming } from './use.emotion-naming'

export const withEmotionNaming: WithEmotionNaming =
  <Props extends {}>(Component: ComponentType<PropsWithEmotionNaming<Props>>) =>
  (props: Props): ReactElement<Props> => {
    const setClassName = useEmotionNaming()
    return <Component {...props} {...{ setClassName }} />
  }
