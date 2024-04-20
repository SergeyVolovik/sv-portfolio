import { ReactChildren } from '@/interfaces';

interface WrapperProps extends ReactChildren {}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className="w-full h-full max-w-[1598px] m-auto px-4 py-[36px] ">
      {children}
    </section>
  );
};
