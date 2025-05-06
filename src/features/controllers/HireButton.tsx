import { ContactIcon } from '@/assets';
import { Button } from '@/components';
import { BUTTONS_CONFIG } from '@/configs/Buttons.config';
import { useNavigate } from 'react-router-dom';

export const HireButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate('/contact')}>
      <ContactIcon />
      <span>{BUTTONS_CONFIG.HIRE}</span>
    </Button>
  );
};
