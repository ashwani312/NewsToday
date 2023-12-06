import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import SingleNews from "./Components/SingleNews/SingleNews";


const Layout = () =>{
  return(
    <div className="App">
    <Navbar/>
    <Outlet />
    <Footer/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
{
  path : "/",
  element : <Layout/>,
  children : [
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/:cat",
      element : <Home/>
    },
    {
      path : "/:news",
      element : <SingleNews/>
    },
    {
      path : "/register",
      element : <SignUp/>
    },
    {
      path : "/login",
      element : <SignIn/>
    },
  ]

}
  ]);
  return (
          <RouterProvider router={router} />
  );
}

export default App;


// https://dribbble.com/shots/23015148-Adventure-Today-News-Website