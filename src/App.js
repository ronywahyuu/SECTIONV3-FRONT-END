import { 
    createBrowserRouter, 
    RouterProvider 
  } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";

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
    <div className="bg-gradient-to-b from-primary to-secondary w-screen h-screen">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
