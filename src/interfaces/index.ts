export interface ReactComponent {
  children: React.ReactNode;
  className?: string;
}

export interface TooltipProps extends ReactComponent {
  text: string;
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
