import {Navigate, createBrowserRouter} from 'react-router-dom';
import NotFound from './views/NotFound';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" />
      },
      {
        path: '/Dashboard',
        element: <Dashboard />
      },
      {
        path: '/Users',
        element: <Users />
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/Signup',
        element: <Signup />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  },
])

export default router;