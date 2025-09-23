'use client';

export function RetryButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
    >
      Try Again
    </button>
  );
}
