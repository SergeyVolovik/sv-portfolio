import { ReactChildren } from '@/interfaces';

export const Header = ({ children }: ReactChildren) => {
  return <header className="w-full">{children}</header>;
};
