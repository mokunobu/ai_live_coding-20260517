---
id: SRC-013
title: AI生成UIとデザインシステム参照元
type: source
status: verified
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17T08:26:28+0900
evidence_captured_at:
tags:
  - source/ai-design
  - source/design-system
  - ui/state
---

# SRC-013 AI生成UIとデザインシステム参照元

## 目的

AI生成UIを「完成品」として扱わず、状態、フロー、アクセシビリティ、トークン、コンポーネント境界でレビューするための元ネタを管理する。

## 元ネタ

- NN/g Design Systems 101: `https://www.nngroup.com/articles/design-systems-101/`
- Android Developers Material Design 3 in Compose: `https://developer.android.com/develop/ui/compose/designsystems/material3`
- IBM Carbon Color overview: `https://carbondesignsystem.com/elements/color/overview/`
- Brad Frost Atomic Design Methodology: `https://atomicdesign.bradfrost.com/chapter-2/`
- arXiv Interrogating Design Homogenization in Web Vibe Coding: `https://arxiv.org/abs/2603.13036`
- DIS 2025 Good Accessibility, Handcuffed Creativity: `https://mintviz.usv.ro/publications/2025.DIS.2.pdf`
- Ministry of Programming: `https://ministryofprogramming.com/blog/why-ai-generated-ui-fails-in-production`
- Shuffle: `https://shuffle.dev/blog/2026/01/why-do-most-ai-generated-websites-look-the-same/`

## 確認済み事実

- NN/gは、デザインシステムを再利用可能なコンポーネントとパターンでスケールするための標準セットと説明している。
- NN/gは、デザインシステムにはリポジトリだけでなく、それを管理する人が必要だと説明している。
- Material Design 3は、`MaterialTheme` を通じて色、タイポグラフィ、形状、状態別コンポーネントを扱う例を示している。
- IBM Carbonは、色トークンをハードコード値の代わりに使い、役割と値を分けて、テーマや状態変更に対応すると説明している。
- Brad Frostは、Atomic Designをatoms、molecules、organisms、templates、pagesの5段階でUIを捉える方法として説明している。
- arXiv 2026の論文は、生成AIが支配的なスタイル慣習を再生産し、Web vibe codingでデザイン多様性を狭めるリスクを論じている。
- DIS 2025の論文は、AI生成UIが基本的なアクセシビリティ準拠を示す一方で、均質なデザインテーマに依存する傾向を報告している。

## 私の解釈

- AI生成デザインを改善するには、見た目のNGリストだけでなく、トークン、コンポーネント、状態、フロー、下層ページ、アクセシビリティのレビューゲートが必要。
- KLGのサイト制作では、フルデザインシステムを作る必要はないが、色、文字、余白、CTA、カード、フォーム、状態の最小ルールは先に決めるべき。

## 再現手順

1. 上記URLを確認する。
2. デザインシステム、トークン、状態、原子化、AI同質化の観点を抽出する。
3. [[../info/INF-013-AI生成UIレビュー追加軸|INF-013]] と判断カードへ分解する。

## 使用候補

- [[../info/INF-013-AI生成UIレビュー追加軸|INF-013 AI生成UIレビュー追加軸]]
- [[../knowledge/KNW-012-AI生成UIは初稿として状態とフローでレビューする|KNW-012 AI生成UIは初稿として状態とフローでレビューする]]
- [[../knowledge/KNW-013-デザイントークンは役割と状態で管理する|KNW-013 デザイントークンは役割と状態で管理する]]

## 要確認 / 使わない運用

- arXiv 2026論文は新しいため、査読状況を確認してから強い根拠として扱う。
- DIS 2025論文の対象UIと生成条件を、KLGサイト一般へ過度に外挿しない。
- Material 3やCarbonをKLGのブランドとしてそのまま採用しない。構造だけを抽出する。
