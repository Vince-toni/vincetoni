const STATUS_STYLES = {
  development: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "coming-soon": "bg-white/5 text-white/50 border-white/10",
  released: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "in-progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function StatusBadge({ status, statusType, className = "" }) {
  const style = STATUS_STYLES[statusType] || STATUS_STYLES.development;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] ${style} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
      {status}
    </span>
  );
}

export function ProgressBar({ progress, className = "" }) {
  return (
    <div className={`h-px w-full overflow-hidden bg-white/10 ${className}`}>
      <div
        className="h-full bg-white/60 transition-all duration-700 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

export function ProgressBarLight({ progress, className = "" }) {
  return <ProgressBar progress={progress} className={className} />;
}
