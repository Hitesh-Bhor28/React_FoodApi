import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "./Body";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import ResMenu from "./Pages/ResMenu";


//lazy loading
const About = lazy(() => import("./Pages/About"))


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Body /> },
      {
        path: "about", element: (<Suspense fallback={<h1>loadi..........ng...</h1>}><About /></Suspense>)
      },
      { path: "contact", element: <Contact /> },
      { path: "restaurant/:resId", element: <ResMenu /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default Router;