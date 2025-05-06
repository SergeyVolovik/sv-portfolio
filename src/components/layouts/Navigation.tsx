import { ReactComponent } from '@/interfaces';

export const Navigation = ({ children }: ReactComponent) => (
  <nav className="navbar navbar-sticky w-full max-w-[590px] p-0 px-[15px] justify-between bg-transparent gap-4 top-[20px] left-1/2 -translate-x-1/2 rounded-md border-none shadow-none">
    {children}
  </nav>
);
