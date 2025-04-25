export interface ReactChildren {
  children: React.ReactNode;
}

export interface TooltipProps extends ReactChildren {
  text: string;
}

export interface ButtonProps extends ReactChildren {
  className?: string;
  onClick: () => void;
}

export interface IconWrapperProps extends ReactChildren {
  className?: string;
}
export interface PanelProps extends ReactChildren {
  className?: string;
}
export interface SectionWithNameProps extends ReactChildren {
  sectionName?: string;
  className?: string;
}
