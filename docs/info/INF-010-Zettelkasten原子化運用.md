---
id: INF-010
title: Zettelkasten原子化運用
type: info
status: draft
created: 2026-05-17
updated: 2026-05-17
source_cards:
  - SRC-009-Zettelkasten原子化とEvergreen-Notes参照元
tags:
  - info/zettelkasten
  - knowledge/atomic
---

# INF-010 Zettelkasten原子化運用

## 目的

Zettelkastenの考え方に沿って、KLGサイト刷新用の情報をどの粒度で分けるかを整理する。

## 元ネタ

- [[../sources/SRC-009-Zettelkasten原子化とEvergreen-Notes参照元|SRC-009]]

## 確認済み事実

- Zettelkasten Method overviewは、Atomicityを1ノート1トピックへ制限する原則として説明している。
- 同overviewは、ノート同士をリンクし、関連を作る必要があると説明している。
- Zettelkasten関連の出典では、元ネタを集めるだけでなく、自分の言葉で解釈したノートへ変える必要があると説明されている。
- Andy MatuschakのEvergreen notesは、ノートを「一つのこと」について書くべきだが、広すぎても細かすぎてもリンク品質が落ちると説明している。

## 私の解釈

- このVaultの `SRC -> INF -> KNW` は、Zettelkastenの source/literature/permanent note を実務に合わせたもの。
- `KNW` は出典単位ではなく、後から使える概念、判断基準、手順、失敗条件、レビュー質問の単位で作る。
- 「良いサイト」「AIっぽくないサイト」のようなまとまりは、まず `INF` または `MOC` で受け、制作前に小さな `KNW` へ分解する。

## 使用候補

- [[../knowledge/KNW-003-デザイン判断カード運用|KNW-003]]
- [[../knowledge/KNW-010-参照サイト三段階分解|KNW-010]]
- [[../knowledge/KNW-014-参照ギャラリー使い分け|KNW-014]]
- [[../use-moc|use-moc]]

## 要確認

- 原子化しすぎて、カード単体で使えない断片になっていないか。
- 1枚の `KNW` に複数の判断条件が混ざっていないか。

## 使わない運用

- 元ネタカードを自分の知識カードとして扱わない。
- ギャラリー名や記事名のカードを、そのまま `KNW` にしない。
