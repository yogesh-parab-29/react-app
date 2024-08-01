import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import Contacts from "./src/Components/Contacts";
import RestaurantPage from "./src/Components/RestaurantPage";
import UserContext from "./src/utils/userContext";
import Cart from "./src/Components/Cart";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [userName = "", setUserName] = useState();

  useEffect(() => {
    const data = { name: "Yogesh" };
    setUserName(data.name);
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
