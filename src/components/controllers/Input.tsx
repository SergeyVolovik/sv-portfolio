import { InputProps } from '@/interfaces';

export const Input = ({
  className = '',
  type = 'text',
  placeholder = 'Enter text',
  required = false,
  ...props
}: InputProps) => (
  <input
    className={`input input-block bg-blackRgba7 border border-blackRgba10 text-darkGray text-sm rounded-md !ring-0 hover:border-darkGray focus:border-darkGray ${className}`}
    placeholder={placeholder}
    type={type}
    required={required}
    {...props}
  />
);
