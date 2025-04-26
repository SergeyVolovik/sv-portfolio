import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCircleNavLinkAnimation = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [hovered, setHovered] = useState<string | null>(null);
  const activeLink = linksRef.current[location.pathname];

  const moveCircleTo = (path: string) => {
    const link = linksRef.current[path];
    const circle = circleRef.current;
    const container = containerRef.current;

    if (link && circle && container) {
      const linkRect = link.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const centerX = linkRect.left - containerRect.left + linkRect.width / 2;

      activeLink?.classList.toggle('active__navlink');
      circle.style.left = `${centerX}px`;
    }
  };

  useEffect(() => {
    moveCircleTo(hovered || location.pathname);
  }, [hovered, location.pathname]);

  return {
    containerRef,
    circleRef,
    linksRef,
    setHovered
  };
};
