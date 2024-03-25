import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import global from '@/global.css'
import { Dashboard } from '@/components/dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageHeader from './components/pageHeader'
import { About } from '@/components/About'
import { Home } from '@/components/home'
const router = createBrowserRouter([
  {
    path: "*",
    element: <>404</>
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/about",
    element: <About />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
