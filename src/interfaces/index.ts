export interface ReactComponent {
  children: React.ReactNode;
  className?: string;
}

export interface TooltipProps extends ReactComponent {
  text: string;
}

export interface NavLinkButtonProps extends ReactComponent {
  linkTo: string;
}
export interface ButtonProps extends ReactComponent {
  onClick: () => void;
}

export interface IconWrapperProps extends ReactComponent {}
export interface PanelProps extends ReactComponent {}
export interface SectionWithTitleProps extends ReactComponent {
  sectionTitle?: string;
}

export interface SectionTitleProps extends ReactComponent {}
export interface ParagraphProps extends ReactComponent {}
export interface ButtonGroupProps extends ReactComponent {}
export interface IconProps {
  className?: string;
}

export interface ProjectBlockLinkProps {
  projectId: number;
  imgSrc?: string;
  title?: string;
  description?: string;
}

export interface AvatarProps extends ReactComponent {
  imgSrc?: string;
}
