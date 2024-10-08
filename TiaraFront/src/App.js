import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SingleServiceDetails from "./pages/singleServiceDetails";
import ErrorPage from "./pages/ErrorPage";
import EmailPage from "./pages/EmailPage";
import VendorClient from "./pages/VendorClient";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} errorElement={<ErrorPage />}>
          <Route index element={<div><h2>Main</h2></div>} />
          <Route path='test' element={<div><h2>Test</h2></div>} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<SingleServiceDetails />}/>
      <Route path='/signup'>
          <Route path='email' element={<EmailPage />} />
      </Route>
    </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}