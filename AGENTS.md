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

- `companion-core/00-index.md`
- `companion-core/card-system.md`
- `companion-core/card-template.md`
- `companion-core/use-moc.md`

カードを追加・更新した場合は、該当索引を更新する。

作業開始で何度も使う経路だけ、該当する想起MOCへ追加する。

- `companion-core/source-index.md`
- `companion-core/info-index.md`
- `companion-core/knowledge-index.md`
- `companion-core/work-index.md`
- `companion-core/use-moc.md`

## 情報Vaultの扱い

`companion-core/` は、非公開の実知識repo `companion-core-vault` へ分離する対象として扱う。
現時点でローカルディレクトリの場合も、将来submoduleになる前提で親リポジトリ側のコード、ビルド設定、公開物と混ぜない。

将来の展望として、`companion-core-vault` の運用から安定した仕組み、テンプレート、ルール、scripts、skills、promptsだけを公開kit repoへ抽出する。公開kit側の候補名は `open-vault-kit` とする。公開kitは、DIKW / Zettelkasten / MOCを実行するための仕組みであり、実際のSRC / INF / KNW / WRK / evidence / filesは含めない。

Vault内のカード、出典、作業記録、テンプレートを追加・更新する場合は、先に `companion-core/` 側のルールを読む。

- `companion-core/AGENTS.md`
- `companion-core/00-index.md`
- `companion-core/card-system.md`
- `companion-core/card-template.md`
- `companion-core/use-moc.md`

submodule化後に `companion-core/` 内のMarkdown本文を変更した場合は、まず `companion-core/` の中でcommit / pushする。親リポジトリ側のcommitは、submodule pointerをこの案件で固定したい場合だけ行う。

情報カード、作業記録、証跡、テンプレートは原則としてVault側に置く。親リポジトリ側に残すのは、コード、ビルド設定、公開物、ルート `DESIGN.md` など、案件成果物として直接参照される正本に限定する。案件固有カードは、`scope/local` と出典を明示してVault側で管理する。

Skillを作る場合は、カード本文を詰め込まず、読む入口、禁止事項、MOC更新、将来のsubmodule内commit手順だけを書く。

## カード分類

`SRC / INF / KNW / WRK / MOC` は情報処理の段階を示す。

`KNW` には、知識の適用範囲として原則次のどれかを付ける。

- `scope/global`: KLGや案件に限らず広く使える知識
- `scope/domain`: B2B、AI/DX、研修、Web制作など領域内で使える知識
- `scope/local`: KLG固有、または今回案件固有の知識

KLG固有の話を、情報収集方針や汎用ルールと混ぜない。

## 会社HP刷新・AIデザイン作業

KLG会社HP刷新、AIデザイン依頼、デザインレビューを行う場合は、先に `companion-core/use-moc.md` の次の入口を見る。

- `companion-core/moc-company-site.md`
- `companion-core/moc-ai-design.md`

特に次の判断カードを確認する。

- `companion-core/knowledge/KNW-003-デザイン判断カード運用.md`
- `companion-core/knowledge/KNW-004-判断カード-余白と近接.md`
- `companion-core/knowledge/KNW-005-判断カード-視覚階層とスケール.md`
- `companion-core/knowledge/KNW-006-判断カード-タイポグラフィと可読性.md`
- `companion-core/knowledge/KNW-007-判断カード-コントラストとアクセシビリティ.md`
- `companion-core/knowledge/KNW-008-判断カード-ブランドメタファー木と知識.md`
- `companion-core/knowledge/KNW-009-判断カード-AIっぽさ回避.md`
- `companion-core/knowledge/KNW-010-参照サイト三段階分解.md`
- `companion-core/knowledge/KNW-011-B2B-AI-DXサイトは成長プロセスで見せる.md`
- `companion-core/knowledge/KNW-012-AI生成UIは初稿として状態とフローでレビューする.md`
- `companion-core/knowledge/KNW-013-デザイントークンは役割と状態で管理する.md`
- `companion-core/knowledge/KNW-014-参照ギャラリー使い分け.md`
- `companion-core/knowledge/KNW-016-DESIGN-md品質ゲート.md`
- `companion-core/knowledge/KNW-017-判断カード-キャッチコピーは相手の変化を具体化する.md`
- `companion-core/knowledge/KNW-018-判断カード-キャッチコピーは一語単位で根拠を持つ.md`
- `companion-core/work/WRK-006-KLGサイトコピー原稿-2026-05-17.md`
- `companion-core/work/WRK-007-KLGキャッチコピー設計書-2026-05-17.md`
- `DESIGN.md`

コピー原稿を変更する場合は、先に `companion-core/work/WRK-007-KLGキャッチコピー設計書-2026-05-17.md` の語別設計表を更新する。TextLint通過は必要条件であり、語別根拠がないコピーを採用しない。

## Stitch / DESIGN.md

Stitch、DESIGN.md、AIデザインシステムを作成する場合は、先に次を読む。

- `companion-core/knowledge/KNW-015-Stitch-DESIGN-md運用.md`
- `companion-core/knowledge/KNW-016-DESIGN-md品質ゲート.md`
- `DESIGN.md`
- `companion-core/work/WRK-005-Stitchデザインシステム-2026-05-17.md`
- `companion-core/files/klg-stitch-design.md` は初期ブリーフの保管コピーとして読む。正本として使わない。

Stitch MCPの一部RPCが失敗しても、すぐに接続断と判断しない。`create_project` などの基本操作が成功していれば接続は生きている可能性が高い。

DESIGN.mdを使う場合は、ルート `DESIGN.md` を正本として扱い、原則として次の順で進める。

1. ルート `DESIGN.md` が品質ゲートを満たすか確認する。
2. `upload_design_md` でアップロードする。
3. `create_design_system_from_design_md` でデザインシステム化する。
4. `get_project`, `list_screens`, `get_screen` でStitch出力をMCP経由取得する。
5. Stitch出力を判断カードでレビューする。

## 外部調査

外部サイト、最新情報、X、Design.md集、企業デザインシステム、ツール仕様を扱う場合はWeb確認する。

サブエージェント結果、検索結果一覧、AI要約は元ネタ扱いしない。採用する場合は、URLを直接確認して `SRC` に残す。

## 変更報告

変更前後の差分はチャットで見える化する。

編集後は、どのファイルを変更したか、どのルールに基づくか、未確認事項が何かを簡潔に報告する。
