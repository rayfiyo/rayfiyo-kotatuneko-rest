module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: [
    "fix",
    "feat",
    "docs",
    "test",
    "refactor",
    "setting",
    "style",
    "ci",
    "perf",
  ],
  maxMessageLength: 64,
  minMessageLength: 1,
  questions: ["type", "scope", "subject", "issues"],
  scopes: [],
  types: {
    ci: {
      description: "🎡CIに関する更新",
      emoji: "🎡",
      value: "ci",
    },
    docs: {
      description: "📄ドキュメント更新",
      emoji: "📄",
      value: "docs",
    },
    feat: {
      description: "🍻新機能実装",
      emoji: "🍻",
      value: "feat",
    },
    fix: {
      description: "🐛不具合修正",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "🚀パフォーマンス改善",
      emoji: "🚀",
      value: "perf",
    },
    refactor: {
      description: "💡リファクタリング",
      emoji: "💡",
      value: "refactor",
    },
    style: {
      description:
        "💄コーディングスタイルの更新（空白，フォーマット，記号，…）",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "🧪テストの更新",
      emoji: "🧪",
      value: "test",
    },
    setting: {
      description: "🔧設定ファイルの更新",
      emoji: "🔧",
      value: "setting",
    },
  },
  messages: {
    type: "どんなコミットですかっ！:",
    subject: "じゃあ，変更点簡潔に教えて！:\n",
    issues: "issue番号いくつ～？\n",
    confirmCommit: "この内容でコミットするよ！いいかな？\n",
  },
};