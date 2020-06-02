import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Header from './components/parts/header';
import Footer from './components/parts/footer';
import HomePage from './views/HomePage';
import LogoutPage from './views/auth/Logout';
import SnapPage from './views/snap/index';
import ShowSnaps from './views/snap/showAll';
import {UserConsumer, UserProvider} from './context/context';
import AuthPage from './views/auth/auth';

function App () {
  //const isAuth = isAuthenticated();

  return (
    <div>
      <UserProvider>
        <UserConsumer>
          {({ isAuth }) =>
            <div>
              {!isAuth && <AuthPage />}
              {isAuth &&
             <Router>
               <Header />
               <div className="container">
                 <div className="row">
                   <div className="col-md-12">
                     <Switch>
                       <Route exact path="/">
                         <HomePage />
                       </Route>
                       <Route path="/logout">
                         <LogoutPage />
                       </Route>
                       <Route path="/snap">
                         <SnapPage />
                       </Route>
                       <Route path="/snaps">
                         <ShowSnaps />
                       </Route>
                     </Switch>
                   </div>
                 </div>
               </div>
               <Footer />
             </Router>
              }
            </div>
          }
        </UserConsumer>
      </UserProvider>
    </div>
  );
}

export default App;