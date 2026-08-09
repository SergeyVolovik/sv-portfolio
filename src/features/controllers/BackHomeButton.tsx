import { BUTTONS_CONFIG, NAVIGATION_PATHS } from '@/configs';

import { NavLinkButton } from './NavLinkButton';

export const BackHomeButton = () => (
  <NavLinkButton className="theme__nav-link" linkTo={NAVIGATION_PATHS.HOME}>
    <span className="theme__nav-link-text">{BUTTONS_CONFIG.BACK_TO_HOME}</span>
  </NavLinkButton>
);
