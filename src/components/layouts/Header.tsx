import { ReactChildren } from '@/interfaces';

interface HeaderProps extends ReactChildren {}

export const Header = ({ children }: HeaderProps): React.ReactElement => {
  return (
    <header className="w-full max-w-[1598px] m-auto px-4 py-[36px] flex items-center justify-between gap-4 absolute top-0 left-1/2 -translate-x-1/2 z-10">
      {children}
    </header>
  );
};
