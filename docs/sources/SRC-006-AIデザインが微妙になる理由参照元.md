---
id: SRC-006
title: AIデザインが微妙になる理由参照元
type: source
status: verified
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17T08:02:11+0900
evidence_captured_at:
tags:
  - source/ai-design
  - design/judgment
  - site/company
---

# SRC-006 AIデザインが微妙になる理由参照元

## 目的

AI生成デザインが「微妙」「AIっぽい」「平均的」に見える理由を、感覚ではなく判断基準として扱えるようにする。

## 元ネタ

- Builder.io: `https://www.builder.io/blog/ai-design`
- Ministry of Programming: `https://ministryofprogramming.com/blog/why-ai-generated-ui-fails-in-production`
- Shuffle: `https://shuffle.dev/blog/2026/01/why-do-most-ai-generated-websites-look-the-same/`
- Vandelay Design: `https://www.vandelaydesign.com/why-ai-generated-designs-look-the-same/`
- WIRED: `https://www.wired.com/story/ai-isnt-going-to-reinvent-the-alphabet-anytime-soon/`
- Antigravity Lab: `https://antigravitylab.net/articles/ai-tools/ai-generated-ui-why-it-feels-off`
- LifeOS 個人未来観測所: `https://rkpg.net/ai-design-gap-guide/`

## 記録場所

- 原本: 上記URL
- 保存ファイル: なし
- 証跡: 2026-05-17にWeb検索とページ確認

## 確認済み事実

- 複数の資料で、AI生成デザインの問題は「見た目の流行要素」だけではなく、文脈、意図、ユーザー理解、制約、評価軸の不足として説明されている。
- Builder.ioは、AIデザインツールでは視覚的なフィードバックループが弱いと説明している。
- Ministry of Programmingは、AI生成UIはユーザーフロー、レスポンシブ、アクセシビリティ、エラー状態、保守可能な設計で破綻しやすいと説明している。
- Shuffleは、短く曖昧な入力、レイアウトやスタイルの指示不足が似た出力につながると説明している。
- Vandelay Designは、一般的なプロンプトと学習データの平均化により、AI生成デザインが同質化しやすいと説明している。
- WIREDは、AIによるタイポグラフィの問題を、文字をシステムではなく画像として扱う限界として説明している。
- Antigravity Labは、AI生成UIの違和感の本質を「判断の不在」と説明している。
- LifeOSの記事は、非デザイナーがAI出力を仕上げられない理由を「判断基準がない」こととして整理している。

## 私の解釈

- 「AIのデザインが微妙なのはAIがデザインを知らないから」は、実務上は「AIに案件固有の判断基準、文脈、制約が与えられていない」と言い換える方が扱いやすい。
- AIに大量の参照だけを渡しても、判断軸がなければ平均化した出力になりやすい。
- 改善策は、良いサイトを集めるだけでなく、良い理由を小さい判断カードに分解し、生成前のブリーフと生成後のレビューの両方で使うこと。

## 再現手順

- 検索語句:
  - `AI design is bad because AI doesn't know design article`
  - `AI-generated UI feels off judgment`
  - `AI生成UI 違和感 判断の不在`
  - `AIデザイン 判断基準`
- 各URLを開き、AIデザインの失敗要因を抽出する。
- 抽出結果は [[../info/INF-007-AIデザインが微妙になる原因|INF-007]] にまとめる。

## エビデンス

- 上記URL
- ローカルHTML保存は未実施。

## 使用候補

- [[../info/INF-007-AIデザインが微妙になる原因|INF-007 AIデザインが微妙になる原因]]
- [[../knowledge/KNW-003-デザイン判断カード運用|KNW-003 デザイン判断カード運用]]

## 要確認 / 使わない運用

- 個別記事の主張を絶対ルールとして扱わない。
- AI批判の結論だけを採用しない。実際のデザイン生成では、判断カードとレビューで検証する。
- 重要な引用や具体的な数値を下流で使う場合は、該当ページを再確認し、必要に応じてローカル証跡を保存する。
