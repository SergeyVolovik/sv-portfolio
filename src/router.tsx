import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { NAVIGATION_CHILDREN_CONFIG } from '@/configs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: NAVIGATION_CHILDREN_CONFIG
  }
]);
