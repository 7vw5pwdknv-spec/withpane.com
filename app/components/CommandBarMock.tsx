export function CommandBarMock() {
  return (
    <div className="command-mock relative">
      {/* Glow behind the panel */}
      <div className="absolute -inset-8 rounded-3xl bg-accent/[0.08] blur-[60px] pointer-events-none" />

      {/* Panel */}
      <div className="relative rounded-2xl border border-border-bright bg-bg/80 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Titlebar dots */}
        <div className="flex items-center gap-1.5 px-4 pt-3 pb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>

        {/* Command input */}
        <div className="mx-3 mb-3 rounded-xl bg-white/[0.04] border border-border px-4 py-3 flex items-center gap-3">
          <span className="text-text-subtle text-sm shrink-0 font-mono">
            {"\u2318"}
          </span>
          <div className="flex-1 min-w-0 relative">
            <span className="command-mock-typing text-sm text-text font-mono">
              Schedule team standup for Monday 9am
            </span>
            <span className="command-mock-caret text-accent font-mono text-sm">
              |
            </span>
          </div>
        </div>

        {/* Action cards */}
        <div className="px-3 pb-3 space-y-2">
          {/* Card 1: Calendar event */}
          <div className="command-mock-card-1 rounded-lg bg-white/[0.03] border border-border p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #FF6363, #E04545)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="white" strokeWidth="1.5" />
                <path d="M2 6.5h12" stroke="white" strokeWidth="1.2" />
                <path d="M5.5 1.5v3M10.5 1.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-text">
                Create Calendar Event
              </div>
              <div className="text-[11px] text-text-muted">
                Monday 9:00 AM &mdash; Team Standup
              </div>
            </div>
          </div>

          {/* Card 2: Reminder */}
          <div className="command-mock-card-2 rounded-lg bg-white/[0.03] border border-border p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #FF9F0A, #E08A00)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" />
                <path d="M5.5 8l1.5 1.5 3.5-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-text">Set Reminder</div>
              <div className="text-[11px] text-text-muted">
                Prepare agenda &mdash; Sunday 8 PM
              </div>
            </div>
          </div>
        </div>

        {/* Approve / Edit actions */}
        <div className="command-mock-actions px-3 pb-4 flex items-center gap-2">
          <button className="command-mock-approve cursor-default px-4 py-1.5 rounded-lg bg-accent text-accent-ink text-xs font-bold">
            Approve All
          </button>
          <button className="cursor-default px-4 py-1.5 rounded-lg bg-white/[0.06] border border-border text-xs font-medium text-text-muted">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
