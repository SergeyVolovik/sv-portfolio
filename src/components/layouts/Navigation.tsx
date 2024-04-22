import { ReactChildren } from '@/interfaces';

interface NavigationProps extends ReactChildren {}

export const Navigation = ({
  children
}: NavigationProps): React.ReactElement => (
  <nav className="navbar navbar-sticky max-w-[730px] px-[49px] py-[25px] justify-between top-[38px] left-1/2 -translate-x-1/2 bg-primary rounded-2xl">
    {children}
  </nav>
);
