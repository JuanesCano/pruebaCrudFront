import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './screens/Login';
import { Register } from './screens/Register';
import { Homepage } from './screens/Homepage';
import { AddAndEditPostsPage } from './screens/AddAndEditPostsPage';

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
    },

    {
      path: '/AddOrEditPost',
      element: <AddAndEditPostsPage/>
    }
  ]);

  return (
    <RouterProvider router = {router}/>
  )
};