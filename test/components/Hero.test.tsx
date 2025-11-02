import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    
    expect(screen.getByText('Vedic Priest in Mumbai')).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Hero />)
    
    expect(screen.getByText('Book a Puja')).toBeInTheDocument()
    expect(screen.getByText('Call Now')).toBeInTheDocument()
  })

  it('displays service badges', () => {
    render(<Hero />)
    
    expect(screen.getByText(/15\+ Years Experience/)).toBeInTheDocument()
    expect(screen.getByText(/On-site & Remote Pujas/)).toBeInTheDocument()
  })
})

