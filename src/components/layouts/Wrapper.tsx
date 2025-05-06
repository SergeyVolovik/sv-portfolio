import { ReactComponent } from '@/interfaces';

export const Wrapper = ({ children }: ReactComponent) => {
  return (
    <section className="w-full max-w-[590px] mx-auto px-4 pt-[100px] pb-[36px] flex flex-col items-center justify-center gap-4">
      {children}
    </section>
  );
};
