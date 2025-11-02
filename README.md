# Vedic Priest Mumbai - Marketing Website

A modern, accessible marketing website for a Hindu priest based in Mumbai, built with Next.js 14, TypeScript, and Tailwind CSS. The site features elegant animations, respectful deity motifs, and a complete booking system.

## Features

- 🏛️ Modern design inspired by ancient temple aesthetics (Hampi & Ellora)
- 🎨 Custom color palette with saffron, deep indigo, and gilded gold accents
- ✨ Subtle animations (floating petals, bell swing, section reveals)
- 📱 Fully responsive and accessible (WCAG AA/AAA compliant)
- 🌐 Multi-language support structure (English, Hindi, Marathi)
- 📋 Complete booking system with form validation
- 🧪 Comprehensive testing (Vitest + Playwright)
- ⚡ Optimized for performance (targets Lighthouse 95+)
- 🔍 SEO optimized with JSON-LD schemas

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Validation**: Zod
- **SEO**: next-seo
- **Testing**: Vitest + Playwright

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd priest
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env
```

4. Update content files:
   - Edit `/content/site.json` with your contact information
   - Edit `/content/services.json` with your services
   - Edit `/content/testimonials.json` with testimonials

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
priest/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── services/       # Service pages
│   ├── booking/        # Booking flow
│   └── ...
├── components/         # React components
├── content/            # JSON content files
├── lib/                # Utility functions
├── public/             # Static assets
│   └── images/         # Image assets
├── test/               # Unit tests (Vitest)
├── e2e/                # E2E tests (Playwright)
└── ...
```

## Content Management

### Editing Site Information

Edit `/content/site.json`:
```json
{
  "name": "Your Name",
  "phone": "+91-XXXXXXXXXX",
  "whatsapp": "+91-XXXXXXXXXX",
  "email": "your@email.com",
  ...
}
```

### Adding/Editing Services

Edit `/content/services.json`:
```json
[
  {
    "slug": "service-name",
    "name": "Service Name",
    "short": "Brief description",
    "duration": "2-3 hours",
    "itemsClient": ["Item 1", "Item 2"],
    "itemsPriest": ["Item 1"],
    "startingDakshina": "Contact for details",
    "onSite": true,
    "online": false
  }
]
```

### Adding Testimonials

Edit `/content/testimonials.json`:
```json
[
  {
    "name": "Customer Name",
    "location": "Location",
    "text": "Testimonial text",
    "service": "Service Name"
  }
]
```

### Adding a New Service Page

1. Add service entry to `/content/services.json`
2. The service detail page will be automatically generated at `/services/[slug]`
3. To customize a specific service page, create `/app/services/[slug]/page.tsx`

## Images

### Adding Images

1. Download royalty-free images from:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)
   - [Wikimedia Commons](https://commons.wikimedia.org)

2. Place images in `/public/images/` with descriptive names:
   - `placeholder-portrait.jpg` - Priest portrait
   - `placeholder-temple.jpg` - Temple images
   - `placeholder-gallery-*.jpg` - Gallery images

3. Update `/public/attribution.md` with proper attributions

### Image Guidelines

- Use only royalty-free images
- Respectful representation (no deity caricatures)
- Optimize images before adding
- Use Next.js Image component for automatic optimization

## Environment Variables

Create a `.env.local` file:

```env
# Email Configuration (for booking form)
# Example with Resend:
RESEND_API_KEY=re_xxxxx
ADMIN_EMAIL=admin@example.com

# Or with SMTP:
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# Analytics (Optional)
PLAUSIBLE_DOMAIN=your-domain.com
ENABLE_ANALYTICS=true

# Site URL
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Email Setup

The booking form requires email configuration. Options:

1. **Resend** (Recommended):
   - Sign up at [resend.com](https://resend.com)
   - Get API key
   - Set `RESEND_API_KEY` in `.env.local`

2. **SMTP**:
   - Configure SMTP settings in `.env.local`
   - Update `/app/api/booking/route.ts` to use SMTP

3. **Mock/Development**:
   - Currently logs to console in development
   - Implement actual email service for production

## Building for Production

```bash
npm run build
npm start
```

## Testing

### Unit Tests (Vitest)

```bash
npm run test
```

Tests are located in `/test` directory.

### E2E Tests (Playwright)

```bash
npm run test:e2e
```

Run with UI:
```bash
npm run test:e2e:ui
```

E2E tests cover:
- Navigation
- Header scroll behavior
- Booking form validation
- Form submission flow

## Performance

The site is optimized for:
- Lighthouse Performance ≥ 95
- Lighthouse Best Practices = 100
- Lighthouse SEO = 100
- Lighthouse Accessibility = 100

### Performance Features

- Next.js Image optimization
- Font preloading
- Lazy loading below fold
- Optimized animations (only transform/opacity)
- Reduced motion support

## Accessibility

- WCAG AA/AAA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- High contrast ratios

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The site is optimized for Vercel deployment.

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for use by the priest/owner. All images must be properly attributed as per their licenses.

## Support

For issues or questions:
1. Check this README
2. Review code comments
3. Consult Next.js documentation

## Attribution

All images used must be properly attributed in `/public/attribution.md`. See the file for template and instructions.

---

**Note**: Replace placeholder content, images, and contact information before going live. Update environment variables with your actual email service credentials.

