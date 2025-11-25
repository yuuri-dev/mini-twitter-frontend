# test user

```
test@example.com
pass123
```

# ファイル構成

```

app/
├── (public)/ ← ログイン不要のページ
│ ├── auth/
│ │ ├── login/page.tsx
│ │ └── signup/page.tsx
│ └── page.tsx ← LP or redirect
│
├── (protected)/ ← ログイン必須の領域（layout でガード）
│ ├── layout.tsx
│ ├── home/page.tsx ← タイムライン
│ ├── profile/
│ │ ├── [userId]/page.tsx
│ │ └── me/page.tsx
│ ├── tweets/
│ │ ├── new/page.tsx ← 新規投稿ページ（任意）
│ │ └── [tweetId]/page.tsx (任意)
│ └── notifications/page.tsx (後回し)
│
├── components/
│ ├── layout/
│ ├── ui/
│ ├── feature/
│ └── common/
│
└── lib/
├── api.ts
├── auth.ts ← ログインチェックロジック
└── types.ts

```

```

```
