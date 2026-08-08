# System Architecture Overview

## Overview
Unicorn Overlord Meta Engine is a high-performance Next.js application built with TypeScript and Tailwind CSS. It functions as a complete tactics hub and battle simulator for the game *Unicorn Overlord*.

## Tech Stack
- **Framework:** Next.js 15.5.23 (App Router)
- **Language:** TypeScript 5.x
- **UI Engine:** React 19, Framer Motion, Lucide React Icons, Canvas Confetti
- **Styling:** CSS Modules & Utility Classes with Dark-Gold Glassmorphism Theme

## Core Modules
1. **Class Database (`src/data/classes.ts`)**: Contains definitions for all 78 character classes, their base stats, growth paths, and active/passive skill sets.
2. **Item Catalog (`src/data/items.ts`)**: Contains 432 relic items, weapons, shields, rings, and accessories with stat modifiers and passive skill triggers.
3. **Preset Squad Compendium (`src/data/squads.ts`)**: Meta compositions curated for coliseum PvP and campaign battle maps.
4. **Squad Builder (`src/components/tabs/SquadBuilder.tsx`)**: Interactive 2x3 formation grid with dual-condition tactics programming and growth type customization.
5. **Tactical Battle Simulator (`src/components/builder/BattleSimulator.tsx`)**: AP/PP round-based combat engine with status effect handling, damage formulas, hit/evasion calculation, guard/cover interception, and initiative queue sorting.
