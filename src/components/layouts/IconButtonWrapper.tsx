import { ReactChildren } from '@/interfaces';

interface IconButtonWrapperProps extends ReactChildren {}

export const IconButtonWrapper = ({ children }: IconButtonWrapperProps) => {
  return <div className="p-4 bg-primary rounded-2xl">{children}</div>;
};
