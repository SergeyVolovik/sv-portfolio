import { PanelProps } from '@/interfaces';
export const Panel = ({
  className = '',
  children
}: PanelProps): React.ReactElement => (
  <div
    className={`w-full h-full bg-white border border-solid border-blackRgba10 rounded-lg shadow-[rgba(10,10,10,0.06)_0px_1.2px_1.2px_0px,rgba(10,10,10,0.04)_0px_5px_10px_0px] ${className}`}
  >
    {children}
  </div>
);
