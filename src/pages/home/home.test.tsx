import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Home } from '.'

describe('<Home />', () => {
  test('Home: mounts properly', () => {
    const wrapper = render(<Home />)

    expect(wrapper).toBeTruthy()

    const linkElement = screen.getByText(/home/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toBeTruthy()
  })
})
