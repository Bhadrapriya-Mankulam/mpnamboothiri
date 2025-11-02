import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ServiceCard'
import { Service } from '@/lib/content'

const mockService: Service = {
  slug: 'test-service',
  name: 'Test Puja',
  short: 'A test ceremony',
  duration: '2 hours',
  itemsClient: ['Item 1'],
  itemsPriest: ['Item 2'],
  startingDakshina: 'Contact',
  onSite: true,
  online: false,
}

describe('ServiceCard', () => {
  it('renders service information', () => {
    render(<ServiceCard service={mockService} />)
    
    expect(screen.getByText('Test Puja')).toBeInTheDocument()
    expect(screen.getByText('A test ceremony')).toBeInTheDocument()
    expect(screen.getByText(/2 hours/)).toBeInTheDocument()
  })

  it('shows On-site badge when applicable', () => {
    render(<ServiceCard service={mockService} />)
    
    expect(screen.getByText('On-site')).toBeInTheDocument()
  })
})

