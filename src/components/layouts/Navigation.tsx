import { ReactComponent } from '@/interfaces';

export const Navigation = ({ children }: ReactComponent) => (
  <nav className="navbar fixed w-full max-w-[590px] p-0 px-[18px] justify-between bg-transparent gap-4 top-[20px] rounded-md border-none shadow-none z-50">
    {children}
  </nav>
);
