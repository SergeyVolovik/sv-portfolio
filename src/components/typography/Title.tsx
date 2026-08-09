import { ReactComponent } from '@/interfaces';

export const Title = ({ children }: ReactComponent) => (
  <h1 className="text-3xl font-bold text-black dark:text-white">{children}</h1>
);
