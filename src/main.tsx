import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import global from 'global.css'
import PageHeader from '@/components/pageHeader.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<PageHeader></PageHeader>,
  },{
    path: "/teste",
    element: <>teste</>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
