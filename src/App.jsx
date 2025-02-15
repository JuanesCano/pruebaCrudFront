import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { Homepage } from './screens/Homepage';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },

    {
      path: '/register',
      element: <Register/>
    },

    {
      path: '/homepage',
      element: <Homepage/>
    }
  ]);

  return (
    <RouterProvider router = {router}/>
  )
};