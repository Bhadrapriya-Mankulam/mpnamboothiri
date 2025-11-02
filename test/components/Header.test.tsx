import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders the logo and navigation links', () => {
    render(<Header />)
    
    expect(screen.getByText('Pandit')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Booking')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Book a Puja button', () => {
    render(<Header />)
    
    expect(screen.getByText('Book a Puja')).toBeInTheDocument()
  })
})

