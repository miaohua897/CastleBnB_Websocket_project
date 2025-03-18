import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import SingleSpotPage from '../components/SingleSpotPage/SingleSpotPage';
import Layout from './Layout';
import Discussion  from '../components/Discussion';
import CreateASpotPage from '../components/CreateASpot/CreateASpotPage';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <SingleSpotPage />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      }
      ,{
        path: "discussion",
        element: <Discussion />,
      },
      {
        path:'spots/new',
        element: <CreateASpotPage />
      },
    ],
  },

]);
