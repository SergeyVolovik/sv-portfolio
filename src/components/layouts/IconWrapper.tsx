import { ReactChildren } from '@/interfaces';

interface IconWrapperProps extends ReactChildren {
  className?: string;
}

export const IconWrapper = ({ className, children }: IconWrapperProps) => (
  <div className={`w-fit p-4 bg-primary rounded-2xl ${className}`}>
    {children}
  </div>
);
