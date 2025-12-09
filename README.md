# CalcOat 🌱

A plant-based environmental impact calculator with a minimalist Oatly-inspired design. Calculate the carbon, water, and land savings from switching dairy to plant-based alternatives.

## Features

- 🧮 Interactive impact calculator with real-time calculations
- 📊 Data visualization with Recharts
- 🎨 Minimalist black/white brutalist design
- 📱 Fully responsive and accessible (WCAG 2.1 AA)
- 🔄 Storyblok CMS integration with ISR
- ⚡ Next.js 14 App Router with TypeScript

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **CMS**: Storyblok
- **Charts**: Recharts
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Storyblok account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tadan/calcOat.git
cd calcOat
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_token_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

### Vercel via GitHub Actions (Recommended)

This project automatically deploys to Vercel on every push to `main`.

#### Initial Setup:

1. **Import your GitHub repo to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository
   - Click "Import"
   - Vercel will auto-detect Next.js settings

2. **Add environment variable in Vercel:**
   - In your Vercel project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN` = your Storyblok token

3. **Get your Vercel project IDs:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel link` (follow prompts to link to your Vercel project)
   - The IDs are now in `.vercel/project.json` (this file is gitignored)

4. **Add GitHub Secrets:**
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add these three secrets:
     - `VERCEL_TOKEN`: Get from [vercel.com/account/tokens](https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID`: Copy from `.vercel/project.json`
     - `VERCEL_PROJECT_ID`: Copy from `.vercel/project.json`

5. **Done!** Every push to `main` now automatically deploys.

#### Manual Deployment (Alternative):

If you prefer manual deployments without GitHub Actions:

```bash
vercel --prod
```

## Project Structure

```
calcoat/
├── app/                      # Next.js App Router pages
│   ├── calculator/          # Calculator page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── calculator/          # Calculator components
│   ├── layout/              # Layout components (Header, Footer)
│   ├── storyblok/          # Storyblok components
│   └── ui/                  # UI components (Button, Card, etc.)
├── lib/
│   ├── calculations/        # Impact calculation logic
│   ├── storyblok/          # Storyblok API client
│   └── utils/              # Utility functions
└── types/                   # TypeScript type definitions
```

## Environment Variables

- `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN`: Your Storyblok access token (required)

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript compiler check

## Design Philosophy

Inspired by Oatly's minimalist aesthetic:
- Black and white color palette
- Thick brutal borders (3px-6px)
- Courier New monospace font (Magda Mono fallback)
- Strong geometric patterns
- Playful copy with serious design

## Data Sources

Environmental impact data based on peer-reviewed research:
- Poore, J., & Nemecek, T. (2018). Reducing food's environmental impacts through producers and consumers. *Science*, 360(6392), 987-992.

## License

MIT

## Author

Made by Daniele Tatasciore as an homage to Oatly's addictive products.

- Portfolio: [work.daniele.is](https://work.daniele.is)
- Email: work@daniele.is

---

🤖 Built with [Claude Code](https://claude.com/claude-code)
