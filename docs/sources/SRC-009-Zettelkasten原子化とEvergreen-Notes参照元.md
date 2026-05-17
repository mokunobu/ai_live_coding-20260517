---
id: SRC-009
title: Zettelkasten原子化とEvergreen Notes参照元
type: source
status: verified
created: 2026-05-17
updated: 2026-05-17
source_observed_at: 2026-05-17T08:26:28+0900
evidence_captured_at:
tags:
  - source/zettelkasten
  - knowledge/atomic
---

# SRC-009 Zettelkasten原子化とEvergreen Notes参照元

## 目的

Zettelkastenで知識をどう分解するか、`card-system.md` の原子化ルールの元ネタを管理する。

## 元ネタ

- Zettelkasten Method overview: `https://zettelkasten.de/overview/`
- Create Zettel from Reading Notes: `https://zettelkasten.de/posts/create-zettel-from-reading-notes/`
- Stop Relying on a Source and Have Faith in Your own Thoughts: `https://zettelkasten.de/posts/dont-rely-on-source-have-faith-in-yourself/`
- Search Alone Is Not Enough: `https://zettelkasten.de/posts/search-alone-is-not-enough/`
- Andy Matuschak Evergreen notes should be atomic: `https://notes.andymatuschak.org/Evergreen_notes_should_be_atomic`

## 記録場所

- 原本: 上記URL
- 保存ファイル: なし
- 証跡: 2026-05-17にWeb確認

## 確認済み事実

- Zettelkasten Method overviewは、Atomicityを「一つのノートに一つのトピックを制限する」原則として紹介している。
- 同overviewは、検索だけでは不十分で、ノート同士をリンクすることを案内している。
- 同overviewは、情報を集めるだけでは知識は増えず、出典を解釈して自分の思考にする必要があると説明している。
- Create Zettel from Reading Notesは、関連するものは1つのZettelに入れつつ、関心ごとは分ける、というAtomicityの考え方を説明している。
- Stop Relying on a Sourceは、原典を集めるだけではなく、自分の言葉で解釈したノートを作る必要があると説明している。
- Andy MatuschakのEvergreen notes should be atomicは、ノートは「一つのこと」について書き、広すぎても細かすぎても接続品質が落ちると説明している。

## 私の解釈

- このVaultでの `SRC -> INF -> KNW` は、元ネタ、抽出、自分の言葉で使える知識を分けるための実務対応である。
- `KNW` は記事別に作るのではなく、再利用できる概念別に作る。
- デザイン判断カードも、出典ページや参照サイト単位ではなく、余白、階層、導線、状態、ブランドなどの概念単位へ分ける。

## 再現手順

1. 上記URLを開く。
2. Zettelkastenの原子化、リンク、自分の言葉での解釈に関する記述を確認する。
3. ルール化する場合は、[[../info/INF-010-Zettelkasten原子化運用|INF-010]] と [[../knowledge/KNW-003-デザイン判断カード運用|KNW-003]] へ接続する。

## エビデンス

- 上記URL
- ローカルHTML保存は未実施。

## 使用候補

- [[../info/INF-010-Zettelkasten原子化運用|INF-010 Zettelkasten原子化運用]]
- [[../knowledge/KNW-003-デザイン判断カード運用|KNW-003 デザイン判断カード運用]]
- [[../knowledge/KNW-010-参照サイト三段階分解|KNW-010 参照サイト三段階分解]]

## 要確認 / 使わない運用

- Zettelkastenの思想を厳密な宗教的ルールとして扱わない。
- 原子化しすぎて、カード単体で意味が分からない状態にしない。
- 元ネタカードを自分の解釈カードとして使わない。
