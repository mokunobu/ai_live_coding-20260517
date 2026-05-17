---
title: Project Information Vault
type: index
created: 2026-05-17
updated: 2026-05-17
---

# Project Information Vault

このディレクトリは、プロジェクトで使う情報をObsidianで蓄積し、後から実作業に使える形で管理する入口。

## まず見るもの

- [[card-system|カード管理ルール]]
- [[card-template|カードテンプレート]]
- [[source-moc|Source MOC]]
- [[info-moc|Info MOC]]
- [[knowledge-moc|Knowledge MOC]]
- [[work-moc|Work MOC]]
- [[use-moc|Use MOC]]

## 基本方針

- フォルダは少数の役割フォルダに限定する。
- 意味分類、テーマ分類、DIKW分類はフォルダで固定せず、frontmatter、タグ、リンク、MOCで扱う。
- 整理文書、過去成果物、AI要約を元ネタそのものとして扱わない。
- 元ネタ、確認済み事実、私の解釈、要確認、使わない運用を混ぜない。
- カードの作成日、更新日、元ネタ確認日時、証跡保存日時はMarkdown内に明示する。

## 役割フォルダ

- `sources/`: 出典カード。
- `info/`: 抽出情報カード。
- `knowledge/`: 再利用できる判断基準、手順、型。
- `work/`: 作業、判断、検証、成果物管理の記録。
- `files/`: 元ファイル、受領素材、PDF、画像、動画など。
- `evidence/`: スクリーンショット、HTML、ログ、検証出力などの証跡。
- `templates/`: カードやレポートのテンプレート。
- `inbox/`: 未整理の一時置き場。正式利用前にカード化または移動する。

## 注意

- `files/` と `evidence/` は原本や証拠の保管場所であり、結論や採用判断を書く場所ではない。
- `work/` は作業記録であり、元ネタではない。
- `knowledge/` は再利用ルールであり、案件固有の事実根拠ではない。
- 何かを成果物へ反映する前に、必ず該当する `SRC` と `INF` へ戻って確認する。
