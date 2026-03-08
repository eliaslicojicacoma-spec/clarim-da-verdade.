import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from '../App';
import { AppProviders } from '../providers/AppProviders';
import { LocaleWrapper } from '../components/layout/LocaleWrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/pt" replace />,
  },
  {
    path: "/:locale",
    element: (
      <LocaleWrapper>
        <App />
      </LocaleWrapper>
    ),
  },
  {
    path: "/:locale/about",
    element: <div>About Page (Placeholder)</div>,
  },
  {
    path: "/:locale/blog",
    element: <div>Blog Page (Placeholder)</div>,
  },
  {
    path: "/:locale/estudos-biblicos",
    element: <div>Estudos Bíblicos (Placeholder)</div>,
  },
  {
    path: "/:locale/hinario",
    element: <div>Hinário (Placeholder)</div>,
  },
  {
    path: "/:locale/livros",
    element: <div>Livros (Placeholder)</div>,
  },
  {
    path: "/:locale/contato",
    element: <div>Contato (Placeholder)</div>,
  },
]);

export const AppRouter = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};
