import { ReactComponent } from '@/interfaces';

export const Wrapper = ({ children }: ReactComponent) => {
  return (
    <section className="w-full min-h-screen max-w-[590px] mx-auto px-4 pt-[90px] pb-[25px] flex flex-col items-center justify-start gap-4">
      {children}
    </section>
  );
};
