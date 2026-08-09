import { ParagraphProps } from '@/interfaces';

export const Paragraph = ({ className = '', children }: ParagraphProps) => (
  <p className={`text-darkGray dark:text-lightGray ${className}`}>{children}</p>
);
