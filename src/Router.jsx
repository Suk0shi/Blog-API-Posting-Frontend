import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Unpublished from "./components/unpublished";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import IndividualPost from "./components/IndividualPost";
import { useState } from 'react'
// import ErrorPage from "./ErrorPage";

const Router = () => {

  const [id, setId] = useState({});
  const [editInfo, setEditInfo] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App setId={setId} setEditInfo={setEditInfo}/>,
      // errorElement: <ErrorPage />,
    },
    {
      path: "unpublished",
      element: <Unpublished setId={setId} setEditInfo={setEditInfo}/>,
    },
    {
      path: "CreatePost",
      element: <CreatePost/>,
    },
    {
      path: "UpdatePost",
      element: <UpdatePost editInfo={editInfo}/>,
    },
    {
      path: "SignUp",
      element: <SignUp />,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "IndividualPost",
      element: <IndividualPost id={id}/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;