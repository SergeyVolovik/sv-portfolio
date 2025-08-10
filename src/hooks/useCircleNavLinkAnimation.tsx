import { NAVIGATION_LINKS_CONFIG } from '@/configs';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCircleNavLinkAnimation = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [hovered, setHovered] = useState<string | null>(null);
  const activeLinkClassName = 'active__navlink';
  const locationPath = location.pathname;
  const activeLink = linksRef.current[locationPath];

  const moveCircleTo = (path: string) => {
    const link = linksRef.current[path];
    const circle = circleRef.current;
    const container = containerRef.current;

    const isLinkIncluded = NAVIGATION_LINKS_CONFIG.some(
      (link) => link.to === path
    );

    if (!link && !isLinkIncluded) {
      circle?.style.setProperty('opacity', '0');
      return;
    } else {
      circle?.style.setProperty('opacity', '1');
    }

    if (link && circle && container) {
      const linkRect = link.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const centerX = linkRect.left - containerRect.left + linkRect.width / 2;

      if (activeLink !== link) {
        activeLink?.classList.remove(activeLinkClassName);
      } else {
        activeLink?.classList.add(activeLinkClassName);
      }

      circle.style.left = `${centerX}px`;
    }
  };

  useEffect(() => {
    moveCircleTo(hovered || locationPath);
  }, [hovered, locationPath, moveCircleTo]);

  return {
    containerRef,
    circleRef,
    linksRef,
    setHovered
  };
};
