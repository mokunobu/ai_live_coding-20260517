---
name: KLG Company Site
description: B2B company website design system for Knowledge Grow Tree.
colors:
  primary: "#1D4F3A"
  secondary: "#2F6B4F"
  accent: "#B7822A"
  background: "#F7F7F2"
  surface: "#FFFFFF"
  surface-muted: "#ECEDE6"
  text-primary: "#18211D"
  text-muted: "#5B655F"
  border: "#D5D8CD"
  error: "#B42318"
typography:
  h1:
    fontFamily: "Noto Sans JP"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.15
  h2:
    fontFamily: "Noto Sans JP"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.25
  body-md:
    fontFamily: "Noto Sans JP"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Noto Sans JP"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  page-background:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-primary}"
  section-muted:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text-primary}"
  text-caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
  focus-indicator:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text-primary}"
  divider:
    backgroundColor: "{colors.border}"
    textColor: "{colors.text-primary}"
---

# KLG Company Site Design System

## Overview

This design system is for the renewed company website of Knowledge Grow Tree / ナレッジグローツリー.

The design must feel like a practical Japanese B2B company site: trustworthy, clear, structured, and useful. It should not feel like a generic AI product landing page.

KLG's local brand idea is that knowledge grows like a tree and eventually produces useful outcomes. Use this as an information structure, not as decorative nature imagery.

## Colors

- `background` is the main page background.
- `surface` is used for repeated items, forms, and small panels.
- `primary` and `secondary` are brand/action colors.
- `accent` is reserved for focus, highlights, and small structural emphasis.
- `error` is only for errors or destructive states.
- Text contrast should target WCAG AA.
- Avoid a one-note green site. Neutrals must carry the interface; green should clarify action and brand.

## Typography

- Japanese readability is primary.
- Use a clear sans-serif stack suitable for Japanese business text.
- H1 and H2 should be strong but not oversized.
- Body text must remain readable on mobile.
- Important text must be HTML text, not text embedded in images.
- Do not use large English slogans as the main meaning.

## Layout

- First viewport must immediately show the company name or literal value, the business category, and the primary next action.
- Leave a visible hint of the next section below the hero on desktop and mobile.
- Use full-width sections with constrained inner content.
- Do not nest cards inside cards.
- Group related information with proximity. Separate different topics with meaningful section spacing.
- Keep Japanese text lines readable; avoid very long text measures.

## Shapes

- Buttons and cards use `rounded.md` or smaller.
- Inputs use `rounded.sm`.
- Avoid pill-shaped controls unless they are clear segmented controls or tags.
- Cards are for repeated items, forms, and focused UI groups, not for every page section.

## Components

### Header

- Simple navigation: Services, Process, Company, Contact.
- Primary CTA: inquiry or consultation.
- Header must work on mobile with a clear menu state.

### Hero

- Use literal Japanese copy first.
- Explain who KLG helps and what kind of support it provides.
- Visuals should suggest knowledge structure, growth process, or business support. Avoid atmospheric AI decoration.

### Process

Use a process structure:

1. Diagnose current knowledge and business issues.
2. Organize knowledge and requirements.
3. Train and support people.
4. Implement systems or workflows.
5. Establish operation.
6. Harvest useful outcomes.

Do not imply guaranteed results.

### Service Cards

- Use cards only for individual repeated service items.
- Each card needs: service name, target problem, support content, next action.
- Cards must have consistent spacing, heading levels, and CTA treatment.

### Contact Form

Required states:

- default
- hover
- focus
- loading
- error
- success
- disabled

Error states must use text, not color alone.

## Do's and Don'ts

### Do

- Keep the design quiet, intelligent, practical, trustworthy, and modern B2B.
- Prefer editorial structure, precise spacing, process diagrams, and scannable Japanese text.
- Use muted natural neutrals with a controlled green accent.
- Use gold only as a small focus/accent color, not as a luxury theme.
- Use tree/growth metaphors as structure: roots, trunk, branches, and fruit can represent knowledge base, support, service areas, and outcomes.

### Don't

- Do not use dominant blue-purple gradients.
- Do not use glowing AI spheres, brains, circuit boards, space backgrounds, glassmorphism, or generic abstract blobs.
- Do not make every section a rounded card.
- Do not use large English slogans as the main meaning.
- Do not invent metrics, customer logos, awards, case studies, or service capabilities.
- Do not use tree or leaf decoration unless it improves information understanding.

## Scope Separation

- Global rules: spacing, hierarchy, typography, contrast, responsive behavior, accessible states.
- Domain rules: B2B AI/DX company site, training and implementation support, service process, trust and CTA structure.
- Local KLG rules: roots, trunk, branches, and fruit can represent knowledge base, support, service areas, and outcomes.

## Responsive Rules

- Mobile layout must preserve information grouping, not merely stack elements.
- Hero copy, CTA, and next-section hint must all fit without overlap.
- Cards should become a single column on small screens.
- Long Japanese headings must wrap cleanly.
- Navigation must remain accessible by keyboard and touch.

## Motion

- Motion should be restrained and functional.
- Use transitions for focus, hover, disclosure, and process progression.
- Avoid decorative animation that distracts from service understanding.

## Accessibility

- Target WCAG AA contrast for text and UI states.
- Visible focus state is required.
- Do not rely on color alone.
- Use semantic headings.
- Provide alt text for meaningful images.
- Keep form labels visible and explicit.

## Agent Prompt Guide

When generating UI, follow these rules:

- Start from content structure and user tasks, not visual effects.
- Use the tokens in this file for color, spacing, radius, and typography.
- Explain which component or section uses which design rule.
- If a visual element has no business, brand, or navigation purpose, remove it.
- Produce desktop and mobile behavior.
- Include form states when creating contact or inquiry UI.

## Review Checklist

- Does the first viewport explain what the company does?
- Is the design recognizably KLG without relying on decorative leaves?
- Are service areas, process, trust material, and CTA easy to scan?
- Are any AI-looking generic patterns present?
- Are colors and spacing token-based?
- Are mobile, focus, error, loading, and success states covered?
- Are all claims based on confirmed KLG facts?
