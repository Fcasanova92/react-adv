import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Suspense } from 'react';

import { LazyLayout } from '../01-lazyLoad/layout';
import { NavBar } from '../01-lazyLoad/components/ui/NavBar';


export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <div className="main-layout">
        <NavBar />
        <LazyLayout />
      </div>
    </Router>
    </Suspense>
  );
}