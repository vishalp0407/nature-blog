export default function Pagination({
  page = 1,
  totalPages = 1,
  onPrev = () => {},
  onNext = () => {},
}) {
  const disabledPrev = page <= 1;
  const disabledNext = page >= totalPages;

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <button
        onClick={onPrev}
        disabled={disabledPrev}
        className="px-3 py-1.5 rounded-md border border-border text-sm disabled:opacity-40 hover:bg-card"
      >
        ← Prev
      </button>
      <span className="text-sm text-muted-foreground">
        Page {page} / {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={disabledNext}
        className="px-3 py-1.5 rounded-md border border-border text-sm disabled:opacity-40 hover:bg-card"
      >
        Next →
      </button>
    </div>
  );
}
