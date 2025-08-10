import { CopyEmailIcon } from '@/assets';
import { Button } from '@/components';
import { useCopyEmail } from '@/hooks';

export const CopyEmailButton = () => {
  const { buttonText, handleCopyEmail, copied } = useCopyEmail();

  return (
    <Button
      className="bg-white border border-blackRgba10"
      onClick={handleCopyEmail}
    >
      <CopyEmailIcon />
      <span
        className={`w-full min-w-[85px] text-black ${copied ? 'text-emerald-500' : ''}`}
      >
        {buttonText}
      </span>
    </Button>
  );
};
