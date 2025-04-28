import { BUTTONS_CONFIG } from '@/configs/Buttons.config';
import { COMMON_CONSTANTS } from '@/constants';
import { useMemo, useState } from 'react';

export const useCopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMMON_CONSTANTS.EMAIL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const buttonText = useMemo(() => {
    return copied ? BUTTONS_CONFIG.COPIED : BUTTONS_CONFIG.COPY_EMAIL;
  }, [copied]);

  return {
    buttonText,
    handleCopyEmail
  };
};
