import { Context, createContext } from 'react'

import { EmotionNamingContextValue } from './emotion-naming.model'

const initialReactEmotionNamingContextValue: EmotionNamingContextValue = () =>
  ''

export const EmotionNamingContext = ((): Context<EmotionNamingContextValue> =>
  createContext<EmotionNamingContextValue>(
    initialReactEmotionNamingContextValue as EmotionNamingContextValue,
  ))()
