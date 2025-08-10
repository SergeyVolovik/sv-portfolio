import { COMMON_CONSTANTS } from '@/constants';
import { useEffect, useState } from 'react';

const { BREAK_POINTS } = COMMON_CONSTANTS;
const { MOBILE, TABLET } = BREAK_POINTS;

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > MOBILE && window.innerWidth <= TABLET
  );
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > TABLET);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE);
      setIsTablet(window.innerWidth > MOBILE && window.innerWidth <= TABLET);
      setIsDesktop(window.innerWidth > TABLET);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop
  };
};
