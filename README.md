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

### Vercel (Recommended)

This project includes automatic deployment via GitHub Actions.

#### Setup:

1. Create a Vercel project and link it to your repository
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory and follow the prompts
4. Get your Vercel token from https://vercel.com/account/tokens
5. Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after running `vercel`
   - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after running `vercel`

6. Add your Storyblok token as an environment variable in Vercel:
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Add `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN`

#### Manual Deployment:

```bash
vercel --prod
```

Now every push to `main` will automatically deploy to Vercel!

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
