import { IconWrapperProps } from '@/interfaces';

export const IconWrapper = ({ className = '', children }: IconWrapperProps) => (
  <div className={`w-fit flex flex-wrap gap-1 xs:gap-2 md:gap-4  ${className}`}>
    {children}
  </div>
);
