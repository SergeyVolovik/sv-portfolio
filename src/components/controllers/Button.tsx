import { ReactChildren } from '@/interfaces';

interface ButtonProps extends ReactChildren {
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="btn bg-primary px-[19px] py-[28px] items-center justify-between flex-nowrap text-nowrap gap-1"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
