import { ParagraphProps } from '@/interfaces';

export const Paragraph = ({ className = '', children }: ParagraphProps) => (
  <p className={`text-darkGray ${className}`}>{children}</p>
);
