import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Nav';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        Home
      </div>
    ),
  },
  {
    path: '/news',
    element: (
      <div>
        <Navbar />
        News
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
