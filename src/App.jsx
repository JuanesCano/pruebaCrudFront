import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './screens/Login';
import { Register } from './screens/Register';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: ""
    },

    {
      path: '/login',
      element: <Login/>
    },

    {
      path: '/register',
      element: <Register/>
    },
  ]);

  return (
    <RouterProvider router = {router}/>
  )
};