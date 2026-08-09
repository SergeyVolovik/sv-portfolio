import { ArrowRightIcon } from '@/assets';
import { BUTTONS_CONFIG, NAVIGATION_PATHS } from '@/configs';

import { NavLinkButton } from './NavLinkButton';

export const ViewAllButton = () => (
  <NavLinkButton
    className="theme__nav-link justify-self-end border"
    linkTo={NAVIGATION_PATHS.PROJECTS}
  >
    <span className="theme__nav-link-text">{BUTTONS_CONFIG.VIEW_ALL}</span>
    <ArrowRightIcon />
  </NavLinkButton>
);
