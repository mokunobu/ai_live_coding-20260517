---
id: SRC-001
title: 現行Google Sites会社HP
type: source
status: captured
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17 07:43 JST
evidence_captured_at: 2026-05-17 07:44 JST
tags:
  - source/current-site
  - site/company
---

# SRC-001 現行Google Sites会社HP

## 目的

株式会社ナレッジグローツリーの現行会社HPを一新するときに、既存の掲載情報、ページ構成、事業説明、会社情報、電子公告リンクへ戻れるようにする。

## 元ネタ

- 公開URL: `https://sites.google.com/view/klg-tree/`
- サイト名: `株式会社ナレッジグローツリー`
- 取得日時: 2026-05-17 07:43-07:44 JST
- 取得方法: `curl -L` で公開HTMLを保存し、HTMLからテキストを抽出。

## 記録場所

- トップ: `docs/evidence/klg-tree-2026-05-17/home.html`
- トップ抽出テキスト: `docs/evidence/klg-tree-2026-05-17/home.txt`
- 事業内容: `docs/evidence/klg-tree-2026-05-17/business.html`
- 事業内容抽出テキスト: `docs/evidence/klg-tree-2026-05-17/business.txt`
- システム開発事業: `docs/evidence/klg-tree-2026-05-17/system-development.html`
- システム開発事業抽出テキスト: `docs/evidence/klg-tree-2026-05-17/system-development.txt`
- インフラ構築事業: `docs/evidence/klg-tree-2026-05-17/infrastructure.html`
- インフラ構築事業抽出テキスト: `docs/evidence/klg-tree-2026-05-17/infrastructure.txt`
- IT人材研修支援事業: `docs/evidence/klg-tree-2026-05-17/it-training.html`
- IT人材研修支援事業抽出テキスト: `docs/evidence/klg-tree-2026-05-17/it-training.txt`
- テレワーク・配信支援: `docs/evidence/klg-tree-2026-05-17/telework-streaming.html`
- テレワーク・配信支援抽出テキスト: `docs/evidence/klg-tree-2026-05-17/telework-streaming.txt`
- 会社情報: `docs/evidence/klg-tree-2026-05-17/company.html`
- 会社情報抽出テキスト: `docs/evidence/klg-tree-2026-05-17/company.txt`
- 会社情報配下の会社情報: `docs/evidence/klg-tree-2026-05-17/company-profile.html`
- 会社情報配下の会社情報抽出テキスト: `docs/evidence/klg-tree-2026-05-17/company-profile.txt`
- 電子公告: `docs/evidence/klg-tree-2026-05-17/electronic-notice.html`
- 電子公告抽出テキスト: `docs/evidence/klg-tree-2026-05-17/electronic-notice.txt`

## 確認済み事実

- 現行サイトのタイトルは `株式会社ナレッジグローツリー`。
- トップページには、`株式会社ナレッジグローツリーでは、ITに関する様々な問題に対し様々な、軸からアプローチし解決を行います。` とある。
- ナビには `About`、`事業内容`、`システム開発事業`、`インフラ構築事業`、`IT人材研修支援事業`、`テレワーク・配信支援`、`会社情報`、`電子公告` がある。
- トップページには `DX推進支援` と `AI導入利活用支援` の訴求がある。
- 事業内容には、`システム開発事業`、`インフラ構築事業`、`IT人材研修支援事業`、`テレワーク・配信支援` がある。
- 電子公告ページには `令和4年決算書`、`令和3年決算書`、`令和2年決算書` のGoogle Driveリンクがある。

## 私の解釈

- 現行サイトは、会社の信頼情報より先に事業カテゴリを並べる構成になっている。
- 会社HP一新では、`DX推進支援` と `AI導入利活用支援` を上位価値として扱い、4事業を支える提供領域として再整理できる可能性がある。
- `様々な` が重なるトップコピーは、刷新時に具体的な対象課題と提供価値へ分解した方がよい。

## 再現手順

```sh
curl -L https://sites.google.com/view/klg-tree/ -o docs/evidence/klg-tree-2026-05-17/home.html
curl -L 'https://sites.google.com/view/klg-tree/事業内容' -o docs/evidence/klg-tree-2026-05-17/business.html
curl -L 'https://sites.google.com/view/klg-tree/事業内容/システム開発事業' -o docs/evidence/klg-tree-2026-05-17/system-development.html
curl -L 'https://sites.google.com/view/klg-tree/事業内容/インフラ構築事業' -o docs/evidence/klg-tree-2026-05-17/infrastructure.html
curl -L 'https://sites.google.com/view/klg-tree/事業内容/it人材研修支援事業' -o docs/evidence/klg-tree-2026-05-17/it-training.html
curl -L 'https://sites.google.com/view/klg-tree/事業内容/テレワーク配信支援' -o docs/evidence/klg-tree-2026-05-17/telework-streaming.html
curl -L 'https://sites.google.com/view/klg-tree/会社情報' -o docs/evidence/klg-tree-2026-05-17/company.html
curl -L 'https://sites.google.com/view/klg-tree/会社情報/会社情報' -o docs/evidence/klg-tree-2026-05-17/company-profile.html
curl -L 'https://sites.google.com/view/klg-tree/会社情報/電子公告' -o docs/evidence/klg-tree-2026-05-17/electronic-notice.html
```

HTMLから本文抽出:

```sh
ruby -rcgi -e 'html=File.read(ARGV[0]); html.gsub!(/<script\b.*?<\/script>/mi, " "); html.gsub!(/<style\b.*?<\/style>/mi, " "); html.gsub!(/<[^>]+>/, "\n"); text=CGI.unescapeHTML(html); lines=text.lines.map{|l| l.strip}.reject{|l| l.empty?}; puts lines' path/to/page.html
```

## エビデンス

- `docs/evidence/klg-tree-2026-05-17/`

## 使用候補

- 会社HP刷新の現行情報整理。
- ページ構成案。
- 事業紹介文の再構成。
- 会社概要、電子公告の移行チェック。

## 要確認 / 使わない運用

- 会社情報ページ内で本社所在地が2種類あるため、公開前に正本を確認する。
- Google Sitesの `Page updated` 表示やHTML内タイムスタンプは、取得時刻と近く、コンテンツ更新日時としては扱わない。
- 現行HTMLや抽出テキストを、刷新後の公開コピー正本としてそのまま使わない。
