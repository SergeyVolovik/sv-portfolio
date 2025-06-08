import { ArrowRightIcon } from '@/assets';
import { BUTTONS_CONFIG, NAVIGATION_PATHS } from '@/configs';

import { NavLinkButton } from './NavLinkButton';

export const ViewAllButton = () => (
  <NavLinkButton
    className="justify-self-end bg-white border border-solid border-blackRgba10"
    linkTo={NAVIGATION_PATHS.PROJECTS}
  >
    <span className="text-black">{BUTTONS_CONFIG.VIEW_ALL}</span>
    <ArrowRightIcon />
  </NavLinkButton>
);
