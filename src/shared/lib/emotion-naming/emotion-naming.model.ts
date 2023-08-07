import { Argument } from 'classnames'

import { ComponentType, PropsWithChildren } from 'react'

export type SetClassName = (name: string, ...args: Argument[]) => string

export type EmotionNamingContextValue = SetClassName

export type OwnEmotionNamingProviderProps = {
  debugEnabled: boolean
  template?: (name: string) => string
}

export type EmotionNamingProviderProps =
  PropsWithChildren<OwnEmotionNamingProviderProps>

export type PropsWithEmotionNaming<Props extends {}> = Props & {
  setClassName: SetClassName
}

export type WithEmotionNaming = <Props extends {}>(
  Component: ComponentType<PropsWithEmotionNaming<Props>>,
) => ComponentType<Props>

export type WithEmotionNamingProvider = <Props extends {}>(
  this: OwnEmotionNamingProviderProps,
  Component: ComponentType<Props>,
) => ComponentType<Props>
