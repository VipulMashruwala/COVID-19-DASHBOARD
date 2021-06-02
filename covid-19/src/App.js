import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import MainHeader from './components/MainHeader';
import LoadingSpinner from './components/UI/LoadingSpinner';


const ScrollToTop =React.lazy(()=>import('./components/ScrollToTop'))
const CovidIndia = React.lazy(()=>import('./pages/CovidIndia'))
const CovidWorld = React.lazy(()=>import('./pages/CovidWorld'))
const DistrictCases = React.lazy(()=>import('./pages/DistrictCases'))


function App() {
  return (
    <div>
      <div className="body">
        <main>
            <h1 className="header">COVID-19 DASHBOARD</h1>
            <MainHeader />
          <Suspense 
            fallback={
              <div className="loading-spinner-all">
                <LoadingSpinner />
              </div>
            }>
            <Switch>
                <Route exact path="/" >
                  <Redirect to="/world"/>
                </Route>
                <Route  path="/world" component={CovidWorld}>
                  <CovidWorld />
                </Route>

                <Route exact path="/india" component={CovidIndia}>
                  <CovidIndia />
                  <ScrollToTop />
                </Route>

                <Route exact path="/india/:stateName">
                    <DistrictCases />
                  
                    <ScrollToTop />
                </Route>

            </Switch>
          </Suspense>
          
        </main>
      </div>
       
    </div>
  );
}

export default App;
