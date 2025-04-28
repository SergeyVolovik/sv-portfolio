import { ContactIcon } from '@/assets';
import { Button } from '@/components';
import { BUTTONS_CONFIG } from '@/configs/Buttons.config';

export const HireButton = () => {
  return (
    <Button onClick={() => {}}>
      <ContactIcon />
      <span>{BUTTONS_CONFIG.HIRE}</span>
    </Button>
  );
};
