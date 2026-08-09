import { CopyEmailIcon } from '@/assets';
import { Button } from '@/components';
import { useCopyEmail } from '@/hooks';

export const CopyEmailButton = () => {
  const { buttonText, handleCopyEmail, copied } = useCopyEmail();

  return (
    <Button className="border" onClick={handleCopyEmail}>
      <CopyEmailIcon />
      <span
        className={`w-full min-w-[85px] ${copied ? 'text-emerald-500' : ''}`}
      >
        {buttonText}
      </span>
    </Button>
  );
};
