import { routePages } from '../components/pages/rout';
import { NavLink, Route, Routes } from 'react-router-dom';

const LazyLayout: React.FC<any> = ({  }) => {
  return (
    <>
      <ul>
           { routePages.map(route => (
              <li>
                <NavLink key={ route.path } to={route.path}>{ route.path }</NavLink>
              </li>
            ))
           }
      </ul>

      <Routes>
       {routePages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  );
};

export default LazyLayout;