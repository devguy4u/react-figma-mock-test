import React from "react";
import { useRoutes } from "react-router-dom";
import Contact from "./pages/Contact";

const Routes = () => {
  let element = useRoutes([{ path: "/", element: <Contact /> }]);
  return element;
};
export default Routes;
