import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const FadeUpComponent = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return <div className={`fade-up ${isVisible ? 'show' : ''}`}>{children}</div>;
};
