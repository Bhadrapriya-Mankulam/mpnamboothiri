# Deployment Guide - GitHub Pages

This website is configured to deploy to GitHub Pages using static export.

## Prerequisites

1. GitHub repository: `git@github.com:gadheyan-dev/priest-mumbai.git`
2. Node.js and npm installed
3. Git configured

## Initial Setup

### 1. Initialize Git Repository (if not already done)

```bash
git init
git remote add origin git@github.com:gadheyan-dev/priest-mumbai.git
```

### 2. Install Dependencies

```bash
npm install
```

## Deployment Steps

### Option 1: Deploy to GitHub Pages Root (gh-pages branch)

1. **Build and deploy:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build the static site (`next build`)
   - Deploy to the `gh-pages` branch
   - Push to GitHub

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

3. **Your site will be available at:**
   - `https://gadheyan-dev.github.io/priest-mumbai/`

### Option 2: Deploy to Repository Root

If you want the site at `https://gadheyan-dev.github.io/priest-mumbai/` (without subdirectory):

1. Update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '/priest-mumbai', // Repository name
     images: {
       unoptimized: true,
     },
     trailingSlash: true,
   }
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Option 3: Use Custom Domain

1. Add `CNAME` file to `public/CNAME`:
   ```
   your-domain.com
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

3. Configure DNS as per GitHub Pages documentation

## Important Notes

### Static Export Limitations

Since GitHub Pages serves static files, the following features won't work:

1. **API Routes**: The booking form API (`/api/booking`) won't work in static export
   - **Solution**: Use a third-party service like:
     - Formspree
     - Netlify Forms
     - EmailJS
     - Or embed a Google Form

2. **Server-Side Features**: Any server-side code won't execute
   - This site is already configured for static export ✅

3. **Dynamic Routes**: Pre-rendered at build time
   - Service pages are already using `generateStaticParams` ✅

### Booking Form Alternative

For the booking form to work, you can:

1. **Use Formspree** (recommended):
   - Sign up at https://formspree.io
   - Get form endpoint
   - Update `components/BookingForm.tsx` to use Formspree endpoint

2. **Use EmailJS**:
   - Sign up at https://www.emailjs.com
   - Configure email template
   - Update form to use EmailJS SDK

3. **Use a service worker**:
   - Implement client-side form submission
   - Store submissions in localStorage (not recommended for production)

## Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
npm run build

# The output will be in /out directory

# Initialize gh-pages branch (one time)
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initial gh-pages commit"
git push origin gh-pages

# Deploy
cd out
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin git@github.com:gadheyan-dev/priest-mumbai.git
git push -f origin gh-pages
```

## Troubleshooting

### 404 Errors

- Ensure `trailingSlash: true` in `next.config.js`
- Check that `basePath` is set correctly if using subdirectory

### Images Not Loading

- Static export requires `images.unoptimized: true`
- Ensure images are in `/public/images/` directory
- Use relative paths starting with `/`

### Audio Not Playing

- Ensure audio file is in `/public/audio/` directory
- Check browser console for 404 errors
- Some browsers block autoplay - users need to manually start audio

## Continuous Deployment

To set up automatic deployment on push:

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

This will automatically deploy when you push to the main branch.

