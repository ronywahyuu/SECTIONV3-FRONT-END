import { 
    createBrowserRouter, 
    RouterProvider 
  } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import TimeLine from "./pages/TimeLine";
import Register from "./pages/Register";

function App() {
  

  // browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/faq",
          element: <FAQ/>
        },
        {
          path: "/timeline",
          element: <TimeLine/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
    // redirect if no match
    {
      path: "*",
      element: <MainLayout/>,
    }
    
  ])

  return (
    <div className="">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
