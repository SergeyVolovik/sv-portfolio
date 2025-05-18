import { BUTTONS_CONFIG, NAVIGATION_PATHS } from '@/configs';

import { NavLinkButton } from './NavLinkButton';

export const BackHomeButton = () => (
  <NavLinkButton
    className="bg-white border border-solid border-blackRgba10"
    linkTo={NAVIGATION_PATHS.HOME}
  >
    <span className="text-black">{BUTTONS_CONFIG.BACK_TO_HOME}</span>
  </NavLinkButton>
);
