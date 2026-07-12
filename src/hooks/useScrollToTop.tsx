import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.scrollY === 0) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
};
