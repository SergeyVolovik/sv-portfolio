import { ReactChildren } from '@/interfaces';

interface HeaderProps extends ReactChildren {}

export const Header = ({ children }: HeaderProps): React.ReactElement => {
  return (
    <header className="flex items-center justify-between gap-4">
      {children}
    </header>
  );
};
