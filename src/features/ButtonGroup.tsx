import { ButtonGroupProps } from '@/interfaces';

export const ButtonGroup = ({ className, children }: ButtonGroupProps) => (
  <div className={`flex items-center gap-2 ${className || ''}`}>{children}</div>
);
