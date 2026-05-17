---
id: KNW-015
title: Stitch DESIGN.md運用
type: knowledge
status: draft
created: 2026-05-17
updated: 2026-05-17
source_cards:
  - WRK-005-Stitchデザインシステム-2026-05-17
tags:
  - scope/domain
  - knowledge/workflow
  - domain/ai-design
  - domain/design-system
  - stitch
---

# KNW-015 Stitch DESIGN.md運用

## 目的

Stitchでデザインシステムを作り、出力をMCP経由でCodexへ戻すとき、接続不良、手順ミス、取得漏れを混同しない。

## 核となる主張

Stitch MCPが一部RPCで失敗しても、基本操作が成功しているなら接続障害とは限らない。DESIGN.mdはルート `DESIGN.md` を正本にし、品質ゲートを確認してからアップロード経由で使う。Stitch出力は `get_project`, `list_screens`, `get_screen` でCodexが直接取得する。

## 適用範囲

- Stitchで会社HP、LP、アプリUIのデザインシステムを作る。
- 判断カードをAIデザイン用ブリーフへ変換する。
- Stitch MCPの失敗理由を切り分ける。
- Stitchで生成された画面をCodex側へ取得してWRK/SRC化する。

使わない場面:
- Stitchツール自体が一覧に出ていない。
- 認証エラー、権限エラー、全RPC無反応が継続している。

## 参照・証跡

- 直接確認した仕様: Stitch MCP tool schema: `upload_design_md` の後に `create_design_system_from_design_md` を呼ぶ指示。
- 作業記録: [[../work/WRK-005-Stitchデザインシステム-2026-05-17|WRK-005]]
- 関連判断: [[KNW-016-DESIGN-md品質ゲート|KNW-016]]

## 確認済み事実

- Stitch MCPの `create_project` は成功し、`projects/11625866599977877928` が作成された。
- `create_design_system` の直接作成は `invalid argument` で失敗した。
- Stitch MCPには、`upload_design_md` の後に `create_design_system_from_design_md` を呼ぶ流れが用意されている。
- Stitch MCPには、プロジェクトを取得する `get_project`、画面一覧を取得する `list_screens`、画面詳細を取得する `get_screen` がある。

## 私の解釈

- 今回の失敗はMCP接続断ではなく、デザインシステム作成RPCの使い方に起因する可能性が高い。
- DESIGN.mdは、Stitchに直接考えさせるための雑なプロンプトではなく、判断カードと品質ゲートを束ねたデザイン仕様として作る方がよい。
- Stitch出力は、URLやスクリーンショットを手で拾う前に、MCP経由でCodexが直接取得するのが正規ルート。
- URL、スクリーンショット、エクスポートは、MCPで取得できない場合や視覚差分確認が必要な場合の補助証跡。

## 再現手順

1. Stitch MCPで `create_project` などの基本操作が成功するか確認する。
2. ルート `DESIGN.md` を正本として確認し、[[KNW-016-DESIGN-md品質ゲート|KNW-016]] に照合する。
3. `upload_design_md` でDESIGN.mdをアップロードする。
4. 返ってきた `selectedScreenInstance` を使って `create_design_system_from_design_md` を呼ぶ。
5. `get_project` でプロジェクト状態を取得する。
6. `list_screens` で画面一覧を取得する。
7. `get_screen` で対象画面の詳細を取得する。
8. 取得結果を `WRK` に記録し、後続作業の元ネタにする場合だけ `SRC` を作る。
9. 失敗した場合は、接続、引数、権限、Stitch UI反映、画面取得のどれが問題か分けて記録する。

## 判断基準

採用条件:
- Stitchでデザインシステムを作る。
- DESIGN.mdを使う。
- 一部RPCの失敗を切り分ける。

不採用条件:
- Stitchを使わず、ローカル実装だけで進める。

失敗条件:
- 1回の `invalid argument` をMCP接続切れと判断する。
- ルート `DESIGN.md` を確認せず、Stitchへ直接投げる。
- `docs/files/` や `docs/work/` の古いDESIGN.md相当メモを正本として扱う。
- Stitch出力を `KNW` のレビューなしに採用する。
- Stitch MCPで取得できる画面を、最初からURL、スクリーンショット、エクスポートだけで扱う。

## AIへの指示 / 作業への使い方

```text
Stitchでデザインシステムを作る場合は、まずルート DESIGN.md を正本として読み、KNW-016の品質ゲートに照合してください。create_design_systemが失敗した場合は接続障害と決めつけず、upload_design_md -> create_design_system_from_design_md の順で実行してください。出力は get_project -> list_screens -> get_screen でMCP経由取得してください。
```

## レビュー質問

- Stitchの失敗は接続、認証、引数、UI反映のどれか。
- ルート `DESIGN.md` を読んだか。
- DESIGN.mdは[[KNW-016-DESIGN-md品質ゲート|KNW-016]]を満たしているか。
- DESIGN.mdはSRC、INF、KNWへ戻れるか。
- Stitch出力をMCP経由で取得したか。
- Stitch出力を判断カードでレビューしたか。

## 検証 / 完了条件

- StitchプロジェクトIDが記録されている。
- ルート `DESIGN.md` の正本がある。
- DESIGN.mdの品質ゲート確認結果がWRKに残っている。
- Stitchへ渡した手順がWRKに残っている。
- Stitch画面IDと `get_screen` の取得結果がWRKに残っている。

## 関連カード

- SRC: [[../sources/SRC-014-DESIGN-md仕様とライブラリ参照元|SRC-014]]
- INF: [[../info/INF-014-DESIGN-md品質要件|INF-014]]
- WRK: [[../work/WRK-005-Stitchデザインシステム-2026-05-17|WRK-005]]
- supports: [[KNW-003-デザイン判断カード運用|KNW-003]], [[KNW-013-デザイントークンは役割と状態で管理する|KNW-013]], [[KNW-016-DESIGN-md品質ゲート|KNW-016]]
- contradicts:
- applies_to: Stitchデザインシステム作成、AIデザインブリーフ、DESIGN.md運用
