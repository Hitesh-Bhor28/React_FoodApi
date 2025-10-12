import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "./Body";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import ResMenu from "./Pages/ResMenu";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Body /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <ResMenu /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default Router;
