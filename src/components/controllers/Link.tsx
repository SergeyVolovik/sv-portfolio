import { AnchorHTMLAttributes, ClassAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';

export const Link = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  return <a {...props} />;
};
