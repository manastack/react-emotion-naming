# react-emotion-naming

[![Testing](https://github.com/manastack/react-emotion-naming/actions/workflows/test.yml/badge.svg)](https://github.com/manastack/react-emotion-naming/actions/workflows/test.yml)

This is a helper for [@emotion/react](https://www.npmjs.com/package/@emotion/react).

This package enhances the attached CSS class name on any component with richer output to help identify your components in the DOM by debug.

In your page source, when debug is enabled, you see:

```typescript jsx
<div class="__FeedbackForm__ css-1gnta30">
```

instead of just

```typescript jsx
<div class="css-1gnta30">
```

## Requirements

- `@emotion/react`: ^11,
- `@emotion/styled`: ^11,
- `classnames`: ^2,
- `react`: ^16.8

## Installation

```bash
npm i @manauser/react-emotion-naming
```

or

```bash
yarn add @manauser/react-emotion-naming
```

or

```bash
pnpm i @manauser/react-emotion-naming
```

## Usage

**app.tsx** (variant 1 - with provider as a wrapper):

```typescript jsx
// app.tsx
import { FC } from 'react'
import { EmotionNamingProvider } from '@manauser/react-emotion-naming'

import Home from './home'
import Smt from './smt'

const App: FC = () => (
  <EmotionNamingProvider debugEnabled={import.meta.env.MODE !== 'production'}>
    <Smt />
    <Home />
  </EmotionNamingProvider>
)

export default App
```

or **app.tsx** (variant 2 - with provider as a HOC `withEmotionNamingProvider`):

```typescript jsx
// app.tsx
import { FC } from 'react'
import { withEmotionNamingProvider } from '@manauser/react-emotion-naming'

import Home from './home'
import Smt from './smt'

const App: FC = () => (
  <>
    <Smt />
    <Home />
  </>
)

export default withEmotionNamingProvider.apply(
  { debugEnabled: import.meta.env.MODE !== 'production' },
  [App],
)
```

or **app.tsx** (variant 3 - with combine providers via `combine-function`):

```typescript jsx
// app.tsx
import { FC } from 'react'

import Home from './home'
import Smt from './smt'
import { withProviders } from './providers'

const App: FC = () => (
  <>
    <Smt />
    <Home />
  </>
)

export default withProviders(App)
```

where `withProviders` is a function that wraps the component in all the providers you need.  
You need to install for this case `compose-function` package.

```typescript jsx
// providers.ts
import { withEmotionNamingProvider } from '@manauser/react-emotion-naming'
import compose from 'compose-function'

export const withProviders = compose(
  withEmotionNamingProvider.bind({
    debugEnabled: import.meta.env.MODE !== 'production',
  }),
)
```

**smt.tsx** (as example with a hook `useEmotionNaming`):

```typescript jsx
// smt.tsx
import { FC } from 'react'

import { useEmotionNaming } from '@manauser/react-emotion-naming'

import StyledSmt from './smt.style'

const Smt: FC = () => {
  const setClassName = useEmotionNaming()

  return <StyledSmt className={setClassName('Smt')}>smt</StyledSmt>
}

export default Smt
```

**smt.style.ts**:

```typescript jsx
// smt.style.ts
import styled from '@emotion/styled'

const StyledSmt = styled.span`
  // some styles
`

export default StyledSmt
```

**home.tsx** (as example with a HOC `withEmotionNaming`):

```typescript jsx
// home.tsx
import { FC } from 'react'

import {
  PropsWithEmotionNaming,
  withEmotionNaming,
} from '@manauser/react-emotion-naming'

import StyledHome from './home.style'

type Props = {
  // own props
}

const Home: FC<PropsWithEmotionNaming<Props>> = ({ setClassName }) => (
  <StyledHome className={setClassName('Home')}>home</StyledHome>
)

export default withEmotionNaming(Home)
```

home.style.ts:

```typescript jsx
// home.style.ts
import styled from '@emotion/styled'

const StyledHome = styled.div`
  // some styles
`

export default StyledHome
```

## Options for `EmotionNamingProvider`

- ### debugEnabled

  Type: `boolean`

  Enable debug mode.

- ### template (optional)

  Type: `(p: string) => string`

  Default: `(p) => '__' + p + '__'`

## License

[MIT](https://choosealicense.com/licenses/mit/)
