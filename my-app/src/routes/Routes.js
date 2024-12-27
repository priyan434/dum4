import Login from '../pages/log-in/login';
import Signup from '../pages/sign-up/Signup';
import ProtectedRoute from './ProtectedRoutes';
import AdminLayout from '../layouts/admin-layout/AdminLayout';
import DashBoard from '../pages/admin/dashboard/DashBoard';
import Graph from '../pages/admin/graph/Graph';
import Summary from '../pages/admin/summary/Summary';
import MainLayout from '../layouts/main-layout/MainLayout';
import About from '../pages/about/About';
import Home from '../pages/Home/Home';
import data from '../shared/data';
import NotFound from '../pages/not-found/NotFound';

const routes = (currentUser, setUser) => [
  {
    path: '/login',
    element: <Login setUser={setUser} />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute userRole={currentUser?.role} allowedRoles={[data.roles.admin]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <DashBoard />
      },
      {
        path: 'graph',
        element: <Graph />
      },
      {
        path: 'summary',
        element: <Summary />
      }
    ]
  },
  {
    path: '/',
    element: (
        <MainLayout />
    ),
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
