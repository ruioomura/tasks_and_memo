# 開発ルール（命名規則・ディレクトリ規約）

最終更新: 2026-02-05  
対象: 本プロジェクトに参加する開発者全員  
目的: 命名と配置を統一し、可読性・保守性・レビュー効率を上げる

---

## 1. 基本方針

- **読んで意味が分かる名前**にする（略語・数字 suffix を避ける）
- **同じ役割は同じ命名パターン**に統一する
- URL / DB / Schema / 関数名が、可能な限り **対応関係を持つ**こと

---

## 2. 命名規則（Python）

### 2.1 クラス名（Class）
- **PascalCase（UpperCamelCase）**
- 役割を suffix で表す

例:
- `Memo`
- `MemoRepository`
- `MemoService`
- `MemoCreate`, `MemoRead`, `MemoUpdate`

### 2.2 関数名（Function）
- **snake_case**
- CRUD は定番動詞を使う

CRUD の推奨:
- 作成: `create_*`
- 取得(1件): `get_*`
- 一覧: `list_*`
- 更新: `update_*`
- 削除: `delete_*`

例:
- `create_memo()`
- `get_memo(memo_id)`
- `list_memos()`
- `update_memo(memo_id)`
- `delete_memo(memo_id)`

### 2.3 変数名（Variable）
- **snake_case**
- ID は `*_id` に統一

例:
- `memo_id`, `account_id`
- `created_at`, `updated_at`

### 2.4 定数（Constant）
- **UPPER_SNAKE_CASE**

例:
- `DEFAULT_LIMIT = 20`

---

## 3. 命名規則（FastAPI Router）

### 3.1 エンドポイント命名（URL）
- リソースは **複数形**（memos, tasks）
- バージョンは `/api/v1`

例:
- `POST /api/v1/createMemo`
- `GET /api/v1/getMemos`
- `POST /api/v1/updateMemo`
- `POST /api/v1/deleteMemo`

### 3.2 ルーター関数名
- URL と対応する動詞を使用
- `*_endpoint` suffix を付けて層を明確化してもよい

例:
- `create_memo_endpoint`
- `list_memos_endpoint`
- `get_memo_endpoint`

### 3.3 HTTPメソッドの使用ルール

本プロジェクトでは、APIのHTTPメソッドは **GET と POST のみを使用する。**

#### 採用理由
- 実装と運用をシンプルに保つため  
- フロントエンド実装の複雑化を防ぐため  
- 初学者でも理解しやすい設計にするため  

#### 原則
| 操作 | 使用メソッド |
|------|--------------|
| 取得（一覧・詳細） | GET |
| 作成・更新・削除 | POST |

#### 例

- メモ作成  
  `POST /api/v1/memos/create`

- メモ更新  
  `POST /api/v1/memos/update`

- メモ削除  
  `POST /api/v1/memos/delete`

- メモ一覧  
  `GET /api/v1/memos`

- メモ詳細  
  `GET /api/v1/memos/{memo_id}`

---

## 4. レイヤー（層）別の役割と命名

### 4.1 Router（HTTP受け口）
- バリデーション（Pydantic）
- 認証情報の取得（例: current_user）
- Service 呼び出し
- HTTP ステータス / レスポンス整形

### 4.2 Service（業務ロジック）
- ルール・制約の実装（例: 所有者チェック）
- Repository を組み合わせる
- トランザクション境界（必要に応じて）

### 4.3 Repository（DBアクセス）
- DB CRUD のみ（ビジネス判断はしない）
- SQLAlchemy を使用したクエリ実装

---

## 5. Pydantic スキーマ命名

- `XxxBase`：共通フィールド
- `XxxCreate`：作成用
- `XxxUpdate`：更新用（PATCH）
- `XxxRead`：返却用

例:
- `MemoBase`
- `MemoCreate`
- `MemoUpdate`
- `MemoRead`

---

## 6. ディレクトリ構成（推奨）

例: `backend/` 配下

