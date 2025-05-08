import { ArrowRightIcon } from '@/assets';
import { Button } from '@/components';
import { BUTTONS_CONFIG } from '@/configs';
import { useNavigate } from 'react-router-dom';

export const ViewAllButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      className="bg-white border border-blackRgba10"
      onClick={() => navigate('/projects')}
    >
      <span className="text-black">{BUTTONS_CONFIG.VIEW_ALL}</span>
      <ArrowRightIcon />
    </Button>
  );
};
