---
id: SRC-015
title: キャッチコピーとB2B価値提案参照元
type: source
status: draft
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17
tags:
  - source/copywriting
  - source/value-proposition
  - domain/b2b
  - local/klg-site-renewal
---

# SRC-015 キャッチコピーとB2B価値提案参照元

## 目的

KLGサイトのキャッチコピーがAIっぽい、ダサい、心が動かない状態になる原因を調べ、判断カードへ分解するための元ネタを管理する。

## 元ネタ

- textlint-ja `@textlint-ja/textlint-rule-preset-ai-writing`: `https://github.com/textlint-ja/textlint-rule-preset-ai-writing`
- textlint configuring: `https://textlint.org/docs/configuring/`
- CXL value proposition: `https://cxl.com/blog/value-proposition-examples-how-to-create/`
- Baymard UX writing: `https://baymard.com/learn/ux-writing`
- 宣伝会議 BtoB企業コピー: `https://www.sendenkaigi.com/marketing/media/sendenkaigi/027585/`
- Soranoue Creative Works キャッチコピー: `https://soranoue.net/cm/copy/`
- EDiT. キャッチフレーズの作り方: `https://edit.roaster.co.jp/writing/2627/`
- 日本政策金融公庫 起業家応援マガジン: `https://www.jfc.go.jp/k/pfcj/pdf/uru_141126.pdf`
- motive キャッチコピー作成: `https://motive.co.jp/column/catchcopy-creation/`

## 確認済み事実

- `@textlint-ja/textlint-rule-preset-ai-writing` はAIが生成した文章によく見られる記述パターンを検出し、自然な日本語表現を促すプリセットとして説明されている。
- textlintは `.textlintrc` 系の設定ファイルでルールを有効化できる。
- CXLは価値提案について、何を提供するか、誰向けか、どんな便益があるか、何が違うかを明確に答える必要があるとしている。
- Baymardは、曖昧、過剰、専門的すぎる見出しやマーケティングコピーは信頼性や理解を損ねると説明している。
- 宣伝会議はBtoBコピーでは事業が自分ごとになりにくく、パーパスを見つける、価値を集約する、例える/見立てる視点が重要としている。
- Soranoueは、短く誰にでも伝わること、発見性、A=Bの構造を挙げている。
- EDiT.は、目的、ターゲット、訴求ポイントを決める前に言葉をいじると、何を言いたいかわからないコピーになりやすいとしている。
- 日本政策金融公庫の資料は、洒落た文章より、悩み/欲求を持つ人へ解決価値をストレートに具体的に伝える型を示している。
- motiveは、抽象的すぎるコピー、自社目線のコピー、競合と差がつかないコピーを避けるべきパターンとしている。

## 注意点

- コピーライティング記事の一般論を、KLGの事実として扱わない。
- 実績、数値、顧客名、成果保証は未確認なら使わない。
- 「心が動く」は主観評価になりやすいため、判断カードでは具体性、対象者、変化、独自性、リズム、検証可能性に分解する。

## 関連

- INF: [[../info/INF-015-ダサいキャッチコピー原因分析|INF-015]]
- KNW: [[../knowledge/KNW-017-判断カード-キャッチコピーは相手の変化を具体化する|KNW-017]]
- WRK: [[../work/WRK-007-KLGキャッチコピー設計書-2026-05-17|WRK-007]]
