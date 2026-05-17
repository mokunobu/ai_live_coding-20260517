---
id: SRC-014
title: DESIGN.md仕様とライブラリ参照元
type: source
status: verified
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17T09:28:00+0900
evidence_captured_at:
tags:
  - source/design-md
  - source/design-system
  - ai/design
---

# SRC-014 DESIGN.md仕様とライブラリ参照元

## 目的

KLGサイト制作で使う `DESIGN.md` を、見た目メモではなくAIが読めるデザインシステム仕様として扱うための元ネタを管理する。

## 元ネタ

- Google Labs DESIGN.md: `https://github.com/google-labs-code/design.md`
- DESIGNmd community library: `https://designmd.ai/about`
- DesignMD catalog: `https://www.designmd.co/about`
- designermd: `https://design.siak.in/`
- design.dev DESIGN.md Generator: `https://design.dev/ai/design-md-generator/`

## 確認済み事実

- Google LabsのDESIGN.mdは、coding agentへvisual identityを伝える形式仕様として説明されている。
- Google LabsのREADMEは、YAML frontmatterのdesign tokensとMarkdown proseを組み合わせる形式を示している。
- Google LabsのCLIには `lint`, `diff`, `export`, `spec` があり、contrast、missing typography、orphaned tokens、section orderなどのlint ruleがある。
- DESIGNmd community libraryは、DESIGN.mdをcolors、typography、spacing、component patternsなどを含むMarkdownベースの形式として説明している。
- DesignMD catalogは、実ブランドの色、フォント、コンポーネントパターンをDESIGN.md形式へ整理するカタログとして説明している。
- designermdは、Colors、typography、components、layout、elevation、motion、accessibility、responsive rules、do's and don'ts、agent-ready promptsを含む11セクションを提示している。
- design.devは、`DESIGN.md` をプロジェクトルートに置き、`AGENTS.md` から参照する使い方と、公式CLIでlint/export/diffする使い方を説明している。

## 私の解釈

- KLGのDESIGN.mdは、見た目の雰囲気メモでは不足する。
- 少なくとも、tokens、components、layout、responsive、accessibility、do/don't、agent prompt、review checklistが必要。
- ルート `DESIGN.md` を正本にし、Stitch用や実装用の派生はWRKに記録する。

## 使用候補

- [[../info/INF-014-DESIGN-md品質要件|INF-014 DESIGN.md品質要件]]
- [[../knowledge/KNW-016-DESIGN-md品質ゲート|KNW-016 DESIGN.md品質ゲート]]
- [[../files/klg-stitch-design|klg-stitch-design]]

## 要確認 / 使わない運用

- DESIGN.md仕様はalphaと説明されているため、公式仕様とCLIの変更を定期的に確認する。
- カタログ由来のブランドDESIGN.mdは参考であり、そのままKLGへ流用しない。
- デザインを「かっこいい雰囲気」だけで指定する目的には使わない。
