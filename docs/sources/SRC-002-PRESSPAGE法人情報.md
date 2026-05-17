---
id: SRC-002
title: PRESSPAGE法人情報
type: source
status: captured
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17 07:46 JST
evidence_captured_at: 2026-05-17 07:46 JST
tags:
  - source/company-registry
  - site/company
---

# SRC-002 PRESSPAGE法人情報

## 目的

現行HP内で本社所在地が食い違っているため、外部の法人番号系情報を確認し、会社概要の要確認事項として残す。

## 元ネタ

- URL: `https://presspage.biz/corporation/9120001232679/`
- ページ名: `株式会社ナレッジグローツリー - PRESSPAGE`
- 取得日時: 2026-05-17 07:46 JST

## 記録場所

- 保存HTML: `docs/evidence/klg-tree-2026-05-17/presspage-corporation.html`

## 確認済み事実

- PRESSPAGEは、株式会社ナレッジグローツリーの法人番号として `9120001232679` を掲載している。
- PRESSPAGEは、2023/04/19に所在地変更があり、旧所在地を `大阪府大阪市東淀川区東中島１丁目１７番５号`、新所在地を `大阪府大阪市東淀川区西淡路１丁目１番９号６０２号室` と掲載している。
- PRESSPAGEは、基本情報について `国税庁法人番号公表サイトのデータに基づいています` と記載している。
- PRESSPAGEは、最終登記更新日を `2023年4月26日` と掲載している。

## 私の解釈

- 現行HPの `会社情報` 親ページにある `西淡路１丁目１番９号６０２号室` は、PRESSPAGE上の新所在地と一致する。
- 現行HPの `会社情報/会社情報` 配下ページにある `東中島１丁目１７番５号` は、PRESSPAGE上では旧所在地として扱われている。
- ただしPRESSPAGEは一次情報ではないため、公開サイトでは国税庁法人番号公表サイト、登記情報、またはユーザー確認を正本にする必要がある。

## 再現手順

```sh
curl -L 'https://presspage.biz/corporation/9120001232679/' -o docs/evidence/klg-tree-2026-05-17/presspage-corporation.html
```

## エビデンス

- `docs/evidence/klg-tree-2026-05-17/presspage-corporation.html`

## 使用候補

- 会社概要の所在地確認。
- 現行HP内の情報矛盾リスト。
- リニューアル前の公開情報チェックリスト。

## 要確認 / 使わない運用

- PRESSPAGEを会社情報の最終正本にしない。
- 公開前に、ユーザー確認または国税庁法人番号公表サイト等の一次情報で所在地を確認する。
