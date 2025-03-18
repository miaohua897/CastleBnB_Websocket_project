import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import SingleSpotPage from '../components/SingleSpotPage/SingleSpotPage';
import Layout from './Layout';
// import Splash from '../components/Splash';
import Discussion  from '../components/Discussion';

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
    ],
  },

]);
