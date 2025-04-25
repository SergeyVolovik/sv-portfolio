export const CurrentStatus = ({ status }: { status: string }) => (
  <div className="badge p-[8px] bg-green-100 flex items-center justify-between gap-2">
    <span className="dot w-[7px] h-[7px] min-w-[7px] min-h-[7px] bg-emerald-500"></span>
    <span className="hidden md:inline-block text-[12px] text-emerald-500">
      {status.toUpperCase()}
    </span>
  </div>
);
