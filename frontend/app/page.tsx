"use client";

import { useState } from "react";
import { NotebookPen, Save, ChevronDown } from "lucide-react";

export default function MemoPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = ["仕事", "プライベート", "アイデア", "タスク", "その他"];

  const handleSave = () => {
    console.log({ title, category, content });
  };

  const handleCancel = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* Left Panel */}
      <div className="relative flex w-[720px] shrink-0 flex-col items-center justify-center gap-8 overflow-hidden bg-[var(--color-primary)] p-20">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_30%,rgba(59,130,246,0.6),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,rgba(30,64,175,0.5),transparent)]" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white">
            <NotebookPen className="h-6 w-6 text-[var(--color-primary)]" />
          </div>
          <span className="text-[28px] font-bold text-white">MemoApp</span>
        </div>

        {/* Brand Text */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <h1 className="text-center text-[40px] font-bold text-white">
            Memo
          </h1>
          <p className="max-w-[440px] text-center text-[16px] leading-[1.6] text-white/80">
            アイデアやタスクを素早くメモに残して、いつでも見返せるようにしましょう。
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 flex-col items-center justify-center p-20">
        <div className="flex w-[400px] flex-col gap-8">
          {/* Form Header */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-semibold tracking-[-0.5px] text-[var(--color-text-primary)]">
              メモを登録
            </h2>
            <p className="text-[15px] text-[var(--color-text-secondary)]">
              新しいメモを作成します
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-5">
            {/* Title Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[var(--color-text-primary)]">
                タイトル
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="メモのタイトルを入力"
                className="h-12 w-full rounded-[8px] border-[1.5px] border-[var(--color-border)] px-4 text-[15px] text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-primary)]"
              />
            </div>

            {/* Category Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[var(--color-text-primary)]">
                カテゴリ
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex h-12 w-full items-center justify-between rounded-[8px] border-[1.5px] border-[var(--color-border)] px-4 text-[15px] outline-none focus:border-[var(--color-primary)]"
                >
                  <span
                    className={
                      category
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-tertiary)]"
                    }
                  >
                    {category || "カテゴリを選択"}
                  </span>
                  <ChevronDown className="h-[18px] w-[18px] text-[var(--color-text-tertiary)]" />
                </button>
                {isCategoryOpen && (
                  <ul className="absolute z-20 mt-1 w-full rounded-[8px] border-[1.5px] border-[var(--color-border)] bg-white py-1 shadow-lg">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() => {
                            setCategory(cat);
                            setIsCategoryOpen(false);
                          }}
                          className="w-full px-4 py-2.5 text-left text-[14px] text-[var(--color-text-primary)] hover:bg-[#F4F4F5]"
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Content Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[var(--color-text-primary)]">
                内容
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="メモの内容を入力してください..."
                className="h-[160px] w-full resize-none rounded-[8px] border-[1.5px] border-[var(--color-border)] p-4 text-[15px] leading-[1.6] text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={handleSave}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-[var(--color-primary)] text-[15px] font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              メモを保存
              <Save className="h-[18px] w-[18px]" />
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex h-12 w-full items-center justify-center rounded-[8px] border-[1.5px] border-[var(--color-border)] text-[15px] font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[#F4F4F5]"
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
