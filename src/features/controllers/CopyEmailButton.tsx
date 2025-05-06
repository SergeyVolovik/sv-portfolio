import { CopyEmailIcon } from '@/assets';
import { Button } from '@/components';
import { useCopyEmail } from '@/hooks';

export const CopyEmailButton = () => {
  const { buttonText, handleCopyEmail } = useCopyEmail();

  return (
    <Button
      className="bg-white border border-blackRgba7"
      onClick={handleCopyEmail}
    >
      <CopyEmailIcon />
      <span className="w-full min-w-[80px] text-black">{buttonText}</span>
    </Button>
  );
};
