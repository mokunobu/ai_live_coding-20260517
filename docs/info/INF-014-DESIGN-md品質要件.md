---
id: INF-014
title: DESIGN.md品質要件
type: info
status: draft
created: 2026-05-17
updated: 2026-05-17
source_cards:
  - SRC-014-DESIGN-md仕様とライブラリ参照元
tags:
  - info/design-md
  - design-system
  - ai/design
---

# INF-014 DESIGN.md品質要件

## 目的

AIがしょぼい見た目調整だけで会社サイトを作ることを防ぐため、DESIGN.mdに最低限必要な要素を整理する。

## 元ネタ

- [[../sources/SRC-014-DESIGN-md仕様とライブラリ参照元|SRC-014]]

## 確認済み事実

- 公式DESIGN.mdは、token frontmatterとhuman-readable proseを組み合わせる形式として説明されている。
- 公式CLIにはlintがあり、contrast、missing typography、orphaned tokens、section orderなどを検査する。
- DESIGN.md系ライブラリや生成ツールは、colors、typography、spacing、components、layout、motion、accessibility、responsive rules、do's and don'ts、agent prompt guideを重要要素としている。
- AGENTS.mdからDESIGN.mdを参照する運用が紹介されている。

## 私の解釈

- DESIGN.mdは、AIに「いい感じにして」と頼むための文章ではない。
- AIがUIを作る前に読む、デザイントークン、コンポーネントルール、禁止事項、レビュー条件の仕様書として扱うべき。
- KLGサイトでは、ブランドメタファー、B2B信頼感、日本語可読性、Cloudflare実装、問い合わせ状態まで入れないと不足する。

## 使用候補

- [[../knowledge/KNW-016-DESIGN-md品質ゲート|KNW-016 DESIGN.md品質ゲート]]
- [[../knowledge/KNW-015-Stitch-DESIGN-md運用|KNW-015 Stitch DESIGN.md運用]]
- `DESIGN.md`

## 要確認

- 公式CLI `@google/design.md` を使ってlintできるか。
- Stitchにアップロードしたとき、frontmatterのtokensがどの程度解釈されるか。

## 使わない運用

- カラー名と雰囲気だけのDESIGN.mdを正本にしない。
- 参照ブランドのDESIGN.mdをKLGへそのまま流用しない。
