import {Navigate, createBrowserRouter} from 'react-router-dom';
import NotFound from './views/NotFound';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import DefaultLayout from './components/DefaultLayout';
import GuestLayout from './components/GuestLayout';
import Dashboard from './views/Dashboard';
import UserForm from './views/UserForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: '/Dashboard',
        element: <Dashboard />
      },
      {
        path: '/Users',
        element: <Users />
      },
      {
        path: '/Users/new',
        element: <UserForm key="userCreate"/>
      },
      {
        path: '/Users/:id',
        element: <UserForm key="userUpdate"/>
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