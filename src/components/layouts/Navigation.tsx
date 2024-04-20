import { ReactChildren } from '@/interfaces';

interface NavigationProps extends ReactChildren {}

export const Navigation = ({
  children
}: NavigationProps): React.ReactElement => (
  <nav className="navbar max-w-[730px] px-[49px] py-[25px] bg-primary rounded-2xl">
    {children}
  </nav>
);
