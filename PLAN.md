# Project Plan: Crypto Staking Dashboard (crypto-staking-dash)

## Overview
A DeFi staking dashboard featuring a massive neon APY counter, glassmorphic token swap cards, and a wallet-connect modal. Designed with a cyberpunk aesthetic for sale on UI8.

## Deliverables

### 1. Project Structure (Next.js App Router)
```text
/
├── app/
│   ├── layout.tsx         # Root layout with providers (Wallet, Theme)
│   ├── page.tsx           # Main landing page
│   ├── globals.css        # Tailwind directives and global cyber styles
│   └── fonts/             # Custom fonts (e.g., Space Grotesk, Inter)
├── components/
│   ├── ui/                # Reusable basic UI components (Buttons, Inputs)
│   ├── dashboard/         # Dashboard specific components
│   │   ├── APYCounter.tsx # Neon glowing APY counter
│   │   ├── SwapCard.tsx   # Glassmorphic swap interface
│   │   └── StakingPools.tsx
│   ├── layout/            # Layout components (Header, Footer)
│   └── 3d/                # Spline integration wrappers
├── lib/                   # Utilities (cn, formatting)
├── public/                # Static assets
└── tailwind.config.ts     # Cyberpunk theme configuration
```

### 2. Section-by-Section Breakdown
- **Header:** Glassmorphic navbar, glowing "Connect Wallet" button.
- **Hero:** 
  - Layout: Split layout (Text/CTA left, Spline 3D object right).
  - Content: Neon title "Stake & Earn in the Cyber Realm".
  - Animation: Text stagger fade-in (Framer Motion).
  - Spline: 3D rotating cyber-coin or abstract geometric node.
- **Main Dashboard Area:**
  - Layout: CSS Grid.
  - Content: Massive Neon APY Counter, Glassmorphic Token Swap Card, User Balance.
  - Styling: Heavy use of backdrop-blur, semi-transparent borders, and neon box-shadows.
- **Staking Pools Table:**
  - Layout: Data table.
  - Content: List of pools, APY, TVL, and "Stake" action buttons.

### 3. Design System
- **Colors:**
  - Background: Deep Void `#0D0E15`
  - Primary Neon: Cyber Blue `#00F0FF`
  - Secondary Accent: Neon Pink `#FF003C`
  - Cards: Glass `#FFFFFF0A` with `backdrop-blur-md`
- **Typography:** `Space Grotesk` (Headings) and `Inter` (Body).
- **Spacing:** standard Tailwind 4pt scale.

### 4. Animation Plan (Framer Motion)
- Use `initial={{ opacity: 0, y: 20 }}` and `animate={{ opacity: 1, y: 0 }}` for entrance animations.
- Use `whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00F0FF" }}` for interactive cards and buttons.

### 5. Spline Integration Plan
- Embed the Spline scene using `@splinetool/react-spline`.
- Wrap in a React `Suspense` boundary with a skeleton fallback to prevent layout shift.
- Optimize by only loading when in view if placed further down the page.

### 6. Component Architecture
- `WalletModal`: Manages connection state, uses portal to render above content.
- `GlassCard`: Reusable wrapper taking `children` and `className` for the glassmorphic effect.

### 7. Performance Strategy
- Dynamic imports (`next/dynamic`) for heavy components like Spline.
- Next.js `next/image` for all static assets.

### 8. UI8 Packaging Checklist
- Clean `package.json` with only necessary dependencies.
- Detailed `README.md` on how to run and customize.
- High-res screenshots of the UI.
- Zip file containing source code (excluding `node_modules` and `.next`).
