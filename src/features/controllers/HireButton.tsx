import { ContactIcon } from '@/assets';
import { BUTTONS_CONFIG, NAVIGATION_PATHS } from '@/configs';

import { NavLinkButton } from './NavLinkButton';

export const HireButton = () => (
  <NavLinkButton linkTo={NAVIGATION_PATHS.CONTACT}>
    <ContactIcon />
    <span>{BUTTONS_CONFIG.HIRE}</span>
  </NavLinkButton>
);
