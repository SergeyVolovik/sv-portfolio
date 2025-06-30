import { ReactComponent } from '@/interfaces';

export const Header = ({ children }: ReactComponent) => {
  return (
    <header className="w-full flex items-center justify-center">
      {children}
    </header>
  );
};
