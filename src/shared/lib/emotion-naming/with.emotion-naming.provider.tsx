import { ComponentType } from 'react'

import {
  OwnEmotionNamingProviderProps,
  WithEmotionNamingProvider,
} from './emotion-naming.model'
import { EmotionNamingProvider } from './emotion-naming.provider'

export const withEmotionNamingProvider: WithEmotionNamingProvider = function <
  Props extends {},
>(
  this: OwnEmotionNamingProviderProps,
  Component: ComponentType<Props>,
): ComponentType<Props> {
  const ownEmotionNamingProviderProps: OwnEmotionNamingProviderProps = this

  return (props: Props) => (
    <EmotionNamingProvider {...ownEmotionNamingProviderProps}>
      <Component {...props} />
    </EmotionNamingProvider>
  )
}
