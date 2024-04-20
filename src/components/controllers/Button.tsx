interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <button className="btn bg-primary" onClick={onClick}>
      Default
    </button>
  );
};
