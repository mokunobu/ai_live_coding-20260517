# KLG Company Site Design System

> このファイルは初期Stitchブリーフの保管コピー。現在の正本はルート `../../DESIGN.md`。Stitchへ渡す場合は、このファイルではなくルート `DESIGN.md` を使い、実行結果を `WRK-005` に記録する。

## Purpose

Create a refined B2B company website for Knowledge Grow Tree / ナレッジグローツリー.

The site should communicate practical AI/DX support, training, knowledge organization, and implementation support. The design must avoid generic AI aesthetics and instead express knowledge growth, trust, and business usefulness.

## Scope Separation

- Global rules: spacing, hierarchy, typography, contrast, responsive behavior, accessible states.
- Domain rules: B2B AI/DX company site, training/implementation support, service process, trust and CTA structure.
- Local KLG rules: knowledge grows like a tree; roots, trunk, branches, and fruit may be used as information structure, not decoration.

## Visual Direction

- Quiet, intelligent, practical, trustworthy, modern B2B.
- Use tree/growth metaphors structurally: root = knowledge base, trunk = support, branches = service areas, fruit = outcomes.
- Avoid childish nature motifs, decorative leaves everywhere, glowing AI spheres, brains, circuit boards, space backgrounds, glassmorphism, and dominant blue-purple gradients.
- Prefer clear information hierarchy, restrained motion, diagrams, process flows, and strong Japanese readability.

## Color Tokens

- background: #F7F7F2
- surface: #FFFFFF
- surface-muted: #ECEDE6
- text-primary: #18211D
- text-muted: #5B655F
- border: #D5D8CD
- accent: #2F6B4F
- accent-muted: #DDEBDD
- cta: #1D4F3A
- cta-hover: #173E2E
- focus: #B7822A
- error: #B42318

## Typography

- Japanese-first readability.
- Use a modern sans-serif stack suitable for Japanese business content.
- H1: strong but not oversized; literal company value or company name first.
- H2: compact, scannable, section-defining.
- Body: generous line-height, controlled measure, no ultra-light weights.
- Avoid large English slogans overpowering Japanese meaning.

## Shape and Spacing

- Cards and panels: 6-8px radius maximum.
- Do not nest cards inside cards.
- Use spacing to show information grouping: related items close, unrelated sections separated.
- PC and mobile must preserve grouping relationships.

## Components

- Header with clear navigation and primary inquiry CTA.
- Hero with company name/value, service summary, and visible next-section hint.
- Service process section: diagnose, organize knowledge, train/support, implement, establish, harvest outcomes.
- Service cards for AI/DX support, training, knowledge organization, implementation support.
- Trust section: only use verified facts; avoid invented metrics or customer logos.
- Contact CTA and form states: default, hover, focus, loading, error, success.

## Accessibility and Review Gates

- WCAG AA contrast target.
- Visible focus states.
- Do not rely on color alone.
- Include mobile layout behavior.
- Include empty, error, loading, success states for form-related UI.

## AI Generation Rules

- Every visual element must support business understanding, brand meaning, or navigation.
- If using tree imagery, connect it to information architecture or process flow.
- Use actual text hierarchy and content structure rather than atmospheric decoration.
- The output should feel like a professional Japanese B2B company site, not an AI tool landing page.
