import React from 'react';
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import Private_Routes from './Private_Routes';
import Public_Routes from './Public_Routes';
import { Login } from '../components/Login';
import DashBoard from '../Pages/DashBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Public_Routes />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<Private_Routes />}>
        <Route path="/" element={<DashBoard />} />
      </Route>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
