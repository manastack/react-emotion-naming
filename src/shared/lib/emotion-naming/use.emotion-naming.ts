import { useContext } from 'react'

import { EmotionNamingContext } from './emotion-naming.context'
import { EmotionNamingContextValue, SetClassName } from './emotion-naming.model'

export const useEmotionNaming = (): EmotionNamingContextValue =>
  useContext<SetClassName>(EmotionNamingContext)
