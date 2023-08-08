import { EmotionNamingProvider } from '@manauser/react-emotion-naming'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Home } from '.'

describe('<Home />', () => {
  test('Home: mounts properly', () => {
    const wrapper = render(
      <EmotionNamingProvider
        debugEnabled
        template={(p: string) => `__${p.toUpperCase()}__`}
      >
        <Home />
      </EmotionNamingProvider>,
    )

    expect(wrapper).toBeTruthy()

    const linkElement = screen.getByText(/home/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeTruthy()
    expect(linkElement.className || '').toContain('__HOME__')
  })
})
