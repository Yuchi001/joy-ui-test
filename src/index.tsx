import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/inter';
import {DefaultRoot} from "./Routing/DefaultRoot/DefaultRoot";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {CssVarsProvider} from "@mui/joy";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultRoot/>
    },
]);

root.render(
  <CssVarsProvider>
      <RouterProvider router={router} />
  </CssVarsProvider>
);
