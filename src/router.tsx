import { createBrowserRouter } from 'react-router-dom';

import { App } from '@/App';
import { AboutMe, Contact, Home, NotFound, Project, Projects } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/aboutme',
        element: <AboutMe />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/projects/:id',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
