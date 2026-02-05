# API設計書

## memo機能
### メモ一覧取得
`GET /api/v1/getMemos?limit=20&offset=0`

Response:
```
{
  "items": [
    {
      "memo_id": "019...",
      "title": "買うもの",
      "content": "牛乳…",
      "created_at": "...",
      "updated_at": "..."
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0


### メモ詳細取得
`GET /api/v1/getMemoDetail/{memo_id}`

Response:


### メモ作成
`POST /api/v1/createMemo`

Request:
```
{
  "title": "買うもの",
  "content": "牛乳、卵、パン"
}
```

Response
```
{
  "memo_id": "019xxxxxxxxx",
  "title": "買うもの",
  "content": "牛乳、卵、パン",
  "created_at": "2026-02-05T07:10:00+09:00",
  "updated_at": "2026-02-05T07:10:00+09:00"
}
```


### メモ更新
`POST /api/v1/updateMemo/{memo_id}`

Request:
```
{
  "title": "買うもの（更新）",
  "content": "牛乳、卵、パン、バター"
}
```


### メモ削除
`POST /api/v1/deleteMemo/{memo_id}`
