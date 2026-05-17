---
id: KNW-016
title: DESIGN.md品質ゲート
type: knowledge
status: draft
created: 2026-05-17
updated: 2026-05-17
source_cards:
  - SRC-014-DESIGN-md仕様とライブラリ参照元
tags:
  - scope/domain
  - knowledge/design-md
  - domain/ai-design
  - domain/design-system
---

# KNW-016 DESIGN.md品質ゲート

## 目的

AIが見た目だけ整えた弱いサイトを作らないように、DESIGN.mdの最低品質を決める。

## 核となる主張

DESIGN.mdは「雰囲気メモ」ではなく、tokens、components、layout、responsive、accessibility、do/don't、agent prompt、review checklistを含むAI向けデザイン仕様でなければならない。

## 適用範囲

- StitchへアップロードするDESIGN.md。
- Codexや他AIにUI実装を依頼する前のデザイン仕様。
- KLG会社HPのデザインブリーフ。

使わない場面:
- まだブランド探索中で、複数方向をラフに比較する段階。

## 参照・根拠

- 元ネタ: [[../sources/SRC-014-DESIGN-md仕様とライブラリ参照元|SRC-014]]
- 抽出情報: [[../info/INF-014-DESIGN-md品質要件|INF-014]]

## 私の解釈

- DESIGN.mdが弱いと、AIは平均的なSaaS/AIランディングページへ戻る。
- KLGの場合、木のメタファー、B2B信頼感、日本語可読性、問い合わせ状態、実績未確認の扱いまで書かないと、しょぼいAIサイトになる可能性が高い。

## 再現手順

1. ルートに `DESIGN.md` を置く。
2. `AGENTS.md` から `DESIGN.md` を参照する。
3. DESIGN.mdにYAML frontmatterのtokensを入れる。
4. Markdown本文に、overview、visual atmosphere、layout、components、responsive、accessibility、do/don't、agent prompt、review checklistを入れる。
5. 可能なら `npx @google/design.md lint DESIGN.md` を実行する。
6. AI出力を `KNW-003`, `KNW-009`, `KNW-012`, `KNW-013` でレビューする。

## 判断基準

採用条件:
- DESIGN.mdをStitchやAI coding agentに渡す。
- 会社サイトのUIを生成・実装する。

不採用条件:
- DESIGN.mdが色名、雰囲気、禁止表現だけで構成されている。

失敗条件:
- tokenがない。
- component ruleがない。
- mobile/responsive ruleがない。
- form statesがない。
- accessibility ruleがない。
- do/don'tがない。
- AIに「どのルールをどう使うか説明せよ」と要求していない。

## AIへの指示 / 作業への使い方

```text
DESIGN.mdを必ず読んでからUIを作ってください。色、余白、角丸、文字、コンポーネント、レスポンシブ、アクセシビリティ、禁止表現、レビュー項目をDESIGN.mdから引用し、各セクションにどのルールを反映したか説明してください。
```

## レビュー質問

- DESIGN.mdはルートにあるか。
- AGENTS.mdから参照されているか。
- tokenとproseの両方があるか。
- component、responsive、accessibility、do/don't、agent prompt guideがあるか。
- AI出力がDESIGN.mdのどのルールを使ったか説明できるか。

## 検証 / 完了条件

- `DESIGN.md` がルートにある。
- `AGENTS.md` にDESIGN.md確認ルールがある。
- DESIGN.mdに最低要件が入っている。
- 可能なら公式CLI lintで重大エラーがない。

## 関連カード

- SRC: [[../sources/SRC-014-DESIGN-md仕様とライブラリ参照元|SRC-014]]
- INF: [[../info/INF-014-DESIGN-md品質要件|INF-014]]
- WRK: [[../work/WRK-005-Stitchデザインシステム-2026-05-17|WRK-005]]
- supports: [[KNW-003-デザイン判断カード運用|KNW-003]], [[KNW-009-判断カード-AIっぽさ回避|KNW-009]], [[KNW-013-デザイントークンは役割と状態で管理する|KNW-013]]
- contradicts:
- applies_to: DESIGN.md作成、Stitchアップロード、AI UI実装
