import cn, { Argument } from 'classnames'

import { FC, useMemo } from 'react'

import { EmotionNamingContext } from './emotion-naming.context'
import {
  EmotionNamingContextValue,
  EmotionNamingProviderProps,
} from './emotion-naming.model'

export const EmotionNamingProvider: FC<EmotionNamingProviderProps> = ({
  children,
  debugEnabled,
  template = (name) => `__${name}__`,
}) => {
  const value: EmotionNamingContextValue = useMemo<EmotionNamingContextValue>(
    () =>
      (name: string, ...args: Argument[]) =>
        cn(...args, { [template(name)]: debugEnabled }),
    [debugEnabled, template],
  )

  return (
    <EmotionNamingContext.Provider {...{ value }}>
      {children}
    </EmotionNamingContext.Provider>
  )
}
