import React, { Fragment } from 'react';

import {
   BrowserRouter as Router,
   Navigate,
   Route,
   Routes,
} from 'react-router-dom';

import Impact from './Impact';
import Forum from './Forum';
import NotFoundPage from './Error404';
import Swap from './Swap';
import DEEMUApp from './DEEMUApp';
import SignUp from './SignUp';
import Home from './Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdatePassword from './UpdatePassword';
import ForgotPassword from './ForgotPassword';

import IsLogged from '../Firebase/IsLogged';

function App() {
   return (
      <Fragment>
         <Router>
            <Routes>
               <Route
                  exact
                  path='/'
                  element={<Home />}
               />
               <Route
                  exact
                  path='/impacto-social'
                  element={<Impact />}
               />
               <Route
                  exact
                  path='/foro'
                  element={<Forum />}
               />
               <Route
                  exact
                  path='/swap'
                  element={<Swap />}
               />
               <Route
                  exact
                  path='/deemu-app'
                  element={<DEEMUApp />}
               />
               <Route
                  exact
                  path='/registrarse'
                  element={
                     <IsLogged
                        logged={
                           <Navigate to='/foro' />
                        }
                        notLogged={<SignUp />}
                     />
                  }
               />
               <Route
                  exact
                  path='/actualizar-contrasena'
                  element={
                     <IsLogged
                        logged={
                           <UpdatePassword />
                        }
                        notLogged={
                           <Navigate to='/foro' />
                        }
                     />
                  }
               />
               <Route
                  exact
                  path='/cambiar-contrasena'
                  element={
                     <IsLogged
                        logged={
                           <Navigate to='/foro' />
                        }
                        notLogged={
                           <ForgotPassword />
                        }
                     />
                  }
               />
               <Route
                  exact
                  path='/404'
                  element={<NotFoundPage />}
               />
               <Route
                  path='*'
                  element={<Navigate to='404' />}
               />
            </Routes>
         </Router>

         <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
         />
      </Fragment>
   );
}
export default App;
