---
id: SRC-004
title: AIデザイン依頼と参照事例調査元
type: source
status: needs-direct-verification
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17
evidence_captured_at:
tags:
  - source/design-reference
  - site/company
  - ai/design
---

# SRC-004 AIデザイン依頼と参照事例調査元

## 目的

AIに会社HPデザインを依頼するときのブリーフ、禁止事項、参照ギャラリー、KLG向け参照事例の候補URLを管理する。

## 元ネタ

サブエージェント調査で提示された参照URL。サブエージェント要約そのものは元ネタではなく、下記URLを確認対象とする。

## 参照URL

### AI依頼・アクセシビリティ・レスポンシブ

- OpenAI Prompt engineering best practices: `https://help.openai.com/en/articles/6654000-how-to-use-advanced-prompt-engineering`
- OpenAI Prompt engineering guide: `https://platform.openai.com/docs/guides/prompt-engineering`
- W3C WCAG 2.2: `https://www.w3.org/TR/WCAG22/`
- web.dev Responsive design basics: `https://web.dev/responsive-web-design-basics`
- web.dev Accessible responsive design: `https://web.dev/articles/accessible-responsive-design`

### デザインギャラリー

- Awwwards: `https://www.awwwards.com/`
- Godly: `https://godly.website/`
- Land-book: `https://land-book.com/`
- Siteinspire: `https://www.siteinspire.com/`
- One Page Love: `https://onepagelove.com/`
- Lapa Ninja: `https://www.lapa.ninja/`
- Mobbin: `https://mobbin.com/`
- Saaspo: `https://saaspo.com/`
- Choicely ITカテゴリ: `https://www.choicely.jp/webdesign/industry/it/`

### カンパニーサイト参照候補

- Thoughtworks: `https://www.thoughtworks.com/`
- Work & Co: `https://www.work.co/`
- Instrument: `https://www.instrument.com/`
- Merixstudio: `https://www.merixstudio.com/`
- Netguru: `https://www.netguru.com/`
- intive: `https://www.intive.com/`
- ustwo: `https://ustwo.com/`
- frog: `https://www.frog.co/`
- NTTデータMSE制作事例: `https://coosy.co.jp/work/mse/`
- NTTデータ アイ制作事例: `https://www.concentinc.jp/works/nttd-i_202301/`

## 確認済み事実

- 参照URLはサブエージェント調査結果に含まれていた。
- このカード作成時点では、全URLの本文やデザインを親スレッドで個別保存していない。

## 私の解釈

- AIっぽい汎用表現を避けるには、AIに渡すブリーフで情報設計、ブランドトーン、実装制約、禁止表現を明示する必要がある。
- デザイン参照は、ギャラリーそのものより、KLGの事業、規模、B2Bの信頼形成に合う事例へ絞って使うべき。

## 再現手順

1. 各URLを開く。
2. KLGに流用してよい要素と、流用してはいけない要素を確認する。
3. 必要なページはスクリーンショットまたはHTMLを `docs/evidence/` に保存する。
4. 実制作前に、参照事例を3-5件へ絞る。

## エビデンス

- 現時点ではサブエージェント調査結果のみ。下流で使う前に必要URLを直接保存する。

## 使用候補

- [[../knowledge/KNW-002-AIデザイン依頼ベストプラクティス|KNW-002 AIデザイン依頼ベストプラクティス]]
- [[../info/INF-005-カンパニーサイト参照事例候補|INF-005 カンパニーサイト参照事例候補]]

## 要確認 / 使わない運用

- 参照サイトのデザインを丸コピーしない。
- 事例サイトの実績、顧客、規模、数字をKLGの事実として扱わない。
- 下流でデザインブリーフに使う前に、選定事例を直接確認する。
