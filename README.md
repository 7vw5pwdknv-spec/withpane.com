# HOLDRY Marketing Site

A Next.js 14 + Tailwind CSS marketing site for HOLDRY, a private acquisition platform helping Regional Vice Presidents acquire and operate essential service businesses across the United States.

## Tech Stack 
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS for styling
- Static marketing site ready for Vercel or Cloudflare Pages
- Formspree forms for contact paths

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   The site will be available at http://localhost:3000.
3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Environment Notes
- Update `FORMSPREE_ENDPOINT` in `src/components/ContactForm.tsx` and the seller form action in `src/app/(site)/contact/page.tsx` with your own Formspree IDs before going live.
- No environment variables are required for local development.

## Deployment
- Deploy directly to Vercel or Cloudflare Pages using the Next.js build.
- Ensure `npm run build` succeeds in your environment; the site is static and requires no backend services.

## Project Structure
```
src/
  app/             # App Router pages and layouts
  components/      # Reusable UI components
```

## Contact
For questions about this site or to coordinate a launch, contact the HOLDRY team.
