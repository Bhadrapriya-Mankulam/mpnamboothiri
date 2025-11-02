import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookingForm from '@/components/BookingForm'
import { Service } from '@/lib/content'

const mockServices: Service[] = [
  {
    slug: 'test-service',
    name: 'Test Puja',
    short: 'A test ceremony',
    duration: '2 hours',
    itemsClient: [],
    itemsPriest: [],
    startingDakshina: 'Contact',
    onSite: true,
    online: false,
  },
]

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm services={mockServices} />)
    
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone Number/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Service/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Preferred Date/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Location/)).toBeInTheDocument()
  })

  it('requires all mandatory fields', () => {
    render(<BookingForm services={mockServices} />)
    
    const submitButton = screen.getByText('Submit Booking Request')
    expect(submitButton).toBeInTheDocument()
    
    // Form should have required attributes
    expect(screen.getByLabelText(/Full Name/)).toHaveAttribute('required')
    expect(screen.getByLabelText(/Phone Number/)).toHaveAttribute('required')
    expect(screen.getByLabelText(/Email/)).toHaveAttribute('required')
  })
})

