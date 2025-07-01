import { ReactComponent } from '@/interfaces';

export const Navigation = ({ children }: ReactComponent) => (
  <nav className="navbar fixed w-full max-w-[590px] mt-[81px] p-0 px-[18px] justify-between bg-transparent gap-4 rounded-md border-none shadow-none z-50">
    {children}
  </nav>
);
