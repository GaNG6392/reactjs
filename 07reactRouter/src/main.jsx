import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/home.jsx';
import About from './components/About/about.jsx';
import Contact from './components/contact/contact.jsx';
import Login from './components/login/login.jsx';
import Getstarted from './components/getstarted/getstarted.jsx';
import Signup from './components/signup/signup.jsx';
import User from './components/user/user.jsx';
import Github, { githubInfoLoader } from './components/github/github.jsx';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contact',
//         element: <Contact />,
//       },
//       {
//         path: 'github',
//         element: <Github />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//       {
//         path: 'signup',
//         element: <Signup />,
//       },
//       {
//         path: 'getstarted',
//         element: <Getstarted />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
      <Route path='login' element={<Login />} />
      <Route path='getstarted' element={<Getstarted />} />
      <Route path='signup' element={<Signup />} />
      <Route path='user/:userId' element={<User />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
