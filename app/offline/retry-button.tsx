'use client';

export function RetryButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.reload()}
      className="btn-brutal"
    >
      Try Again
    </button>
  );
}
