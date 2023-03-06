import React from 'react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  redirect
} from "react-router-dom";
import './App.css';

function Home() {
  return <>
    This is the home Page
  </>
}

function About() {
  return <>
    This is the home Page
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    // We can use the children data to create a menu/nav bar
    children: [
        {
          index:true,
          loader: async ()=> {
            // Programatically redirect to right page.
            return redirect('/home');
          }
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
    ]
  },
]);



function Layout(props: any) {
  return <div>
    <div> Hello to our site </div>
    {props.children}
    <div>©2023, 14768540 Canada, Inc.</div>
  </div>
}


function Root() {
  return <Layout>
    <Outlet/>
  </Layout>
}



function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
