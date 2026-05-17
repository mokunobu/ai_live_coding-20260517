# AGENTS.md

このプロジェクトでは、情報整理、ナレッジ化、Webサイト制作、Stitch利用の前に、必要なルールカードを確認する。

## 基本姿勢

ユーザーの「時間をかけたくない」は、雑に早くではなく、最初に丁寧に整理して手戻りを減らすという意味。

情報整理では、必ず次を分ける。

- 元ネタ
- 確認済み事実
- 私の解釈
- 要確認

整理文書、過去成果物、AI要約、既存カードは元ネタ扱いしない。

ユーザーの指摘に安易に迎合しない。疑問や違和感が示された場合は、まず実ファイル、既存ルール、合意済み内容を確認してから判断する。

## ナレッジ運用をするとき

Obsidian / Zettelkasten / MOC / DIKW / 判断カード / 情報収集方針に関わる作業では、先に次を読む。

- `docs/00-index.md`
- `docs/card-system.md`
- `docs/card-template.md`
- `docs/use-moc.md`

カードを追加・更新した場合は、該当MOCを更新する。

- `docs/source-moc.md`
- `docs/info-moc.md`
- `docs/knowledge-moc.md`
- `docs/work-moc.md`
- `docs/use-moc.md`

## カード分類

`SRC / INF / KNW / WRK / MOC` は情報処理の段階を示す。

`KNW` には、知識の適用範囲として原則次のどれかを付ける。

- `scope/global`: KLGや案件に限らず広く使える知識
- `scope/domain`: B2B、AI/DX、研修、Web制作など領域内で使える知識
- `scope/local`: KLG固有、または今回案件固有の知識

KLG固有の話を、情報収集方針や汎用ナレッジと混ぜない。

## 会社HP刷新・AIデザイン作業

KLG会社HP刷新、AIデザイン依頼、デザインレビューを行う場合は、先に `docs/use-moc.md` の次の入口を見る。

- `会社HP刷新を始める`
- `AIで会社HPデザイン案を作る`
- `参照サイトを収集してカード化する`

特に次の判断カードを確認する。

- `docs/knowledge/KNW-003-デザイン判断カード運用.md`
- `docs/knowledge/KNW-004-判断カード-余白と近接.md`
- `docs/knowledge/KNW-005-判断カード-視覚階層とスケール.md`
- `docs/knowledge/KNW-006-判断カード-タイポグラフィと可読性.md`
- `docs/knowledge/KNW-007-判断カード-コントラストとアクセシビリティ.md`
- `docs/knowledge/KNW-008-判断カード-ブランドメタファー木と知識.md`
- `docs/knowledge/KNW-009-判断カード-AIっぽさ回避.md`
- `docs/knowledge/KNW-010-参照サイト三段階分解.md`
- `docs/knowledge/KNW-011-B2B-AI-DXサイトは成長プロセスで見せる.md`
- `docs/knowledge/KNW-012-AI生成UIは初稿として状態とフローでレビューする.md`
- `docs/knowledge/KNW-013-デザイントークンは役割と状態で管理する.md`
- `docs/knowledge/KNW-014-参照ギャラリー使い分け.md`
- `docs/knowledge/KNW-016-DESIGN-md品質ゲート.md`
- `docs/knowledge/KNW-017-判断カード-キャッチコピーは相手の変化を具体化する.md`
- `docs/knowledge/KNW-018-判断カード-キャッチコピーは一語単位で根拠を持つ.md`
- `docs/work/WRK-006-KLGサイトコピー原稿-2026-05-17.md`
- `docs/work/WRK-007-KLGキャッチコピー設計書-2026-05-17.md`
- `DESIGN.md`

コピー原稿を変更する場合は、先に `docs/work/WRK-007-KLGキャッチコピー設計書-2026-05-17.md` の語別設計表を更新する。TextLint通過は必要条件であり、語別根拠がないコピーを採用しない。

## Stitch / DESIGN.md

Stitch、DESIGN.md、AIデザインシステム作成を行う場合は、先に次を読む。

- `docs/knowledge/KNW-015-Stitch-DESIGN-md運用.md`
- `docs/knowledge/KNW-016-DESIGN-md品質ゲート.md`
- `DESIGN.md`
- `docs/work/WRK-005-Stitchデザインシステム-2026-05-17.md`
- `docs/files/klg-stitch-design.md` は初期ブリーフの保管コピーとして読む。正本として使わない。

Stitch MCPの一部RPCが失敗しても、すぐに接続断と判断しない。`create_project` などの基本操作が成功していれば接続は生きている可能性が高い。

DESIGN.mdを使う場合は、ルート `DESIGN.md` を正本として扱い、原則として次の順で進める。

1. ルート `DESIGN.md` が品質ゲートを満たすか確認する。
2. `upload_design_md` でアップロードする。
3. `create_design_system_from_design_md` でデザインシステム化する。
4. `get_project`, `list_screens`, `get_screen` でStitch出力をMCP経由取得する。
5. Stitch出力を判断カードでレビューする。

## 外部調査

外部サイト、最新情報、X、Design.md集、企業デザインシステム、ツール仕様を扱う場合はWeb確認を行う。

サブエージェント結果、検索結果一覧、AI要約は元ネタ扱いしない。採用する場合は、URLを直接確認して `SRC` に残す。

## 変更報告

変更前後の差分はチャットで見える化する。

編集後は、どのファイルを変更したか、どのルールに基づくか、未確認事項が何かを簡潔に報告する。
