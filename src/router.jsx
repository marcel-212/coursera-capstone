import {
  createBrowserRouter
} from "react-router-dom";

import App from './App';
import Home from './layouts/Home';
import Menu from './layouts/Menu';
import NotFound from './layouts/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "menu", element: <Menu />},
      { path: "*", element: <NotFound />}
    ]
  }
]);

export default router;