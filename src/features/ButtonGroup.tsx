import { ContactIcon, CopyEmailIcon } from '@/assets';
import { Button } from '@/components';
import { BUTTONS_CONFIG } from '@/configs/Buttons.config';

export const ButtonGroup = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className || ''}`}>
    <Button onClick={() => {}}>
      <ContactIcon />
      <span>{BUTTONS_CONFIG.HIRE}</span>
    </Button>
    <Button className="bg-white border border-blackRgba7" onClick={() => {}}>
      <CopyEmailIcon />
      <span className="text-black">{BUTTONS_CONFIG.COPY_EMAIL}</span>
    </Button>
  </div>
);
