import { NAVIGATION_CHILDREN_CONFIG } from '@/configs';
import { useLocation } from 'react-router-dom';

export const usePage = () => {
  const location = useLocation();

  const isContactPage = location.pathname === '/contact';
  const isProjectPage = location.pathname.includes('/projects/');
  const is404Page =
    !NAVIGATION_CHILDREN_CONFIG.some((child) => {
      return child.path === location.pathname;
    }) && !isProjectPage;

  return { is404Page, isContactPage };
};
