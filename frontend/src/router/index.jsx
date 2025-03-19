import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import SingleSpotPage from '../components/SingleSpotPage/SingleSpotPage';
import Layout from './Layout';
import Discussion  from '../components/Discussion';
import CreateASpotPage from '../components/CreateASpotPage';
import SignleSpotDetail from '../components/SignleSpotDetail';
import UpdateASpotPage from '../components/UpdateASpotPage';
import ManageSpots from '../components/ManageSpots';
import ManageReviews  from '../components/ManageReviews';

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
      {
        path: '/spots/:spotId',
        element: <SignleSpotDetail />
      },
      {
        path: '/spots/:id/edit',
        element: <UpdateASpotPage />
      },
      {
        path:'/spots/current',
        element: <ManageSpots />
      },
      {
        path:'/reviews/current',
        element: <ManageReviews />
      }
    ],
  },

]);
