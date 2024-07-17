import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<h1>This is Main</h1>
      },
      {
        path:'/signIn',
        element:<SignIn/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      }
    ]
  },
]);

export default router;