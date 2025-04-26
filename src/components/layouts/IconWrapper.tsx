import { IconWrapperProps } from '@/interfaces';

export const IconWrapper = ({ className, children }: IconWrapperProps) => (
  <div className={`w-fit flex gap-2 flex-wrap md:gap-4 ${className || ''}`}>
    {children}
  </div>
);
