import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Pages & Components
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Users from "./pages/Users";
import ProductDetail from "./pages/ProductDetail";
import PaymentDetailsPage from "./pages/PaymentDetailsPage";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        
        path: "/product/:id", 
        element: <ProductDetail />,
      },
      {
        path: "/users",
        element: <Users />,
      },
       {
        path: "/productdetail",
        element: <ProductDetailPage/>,
      },
      {
        path: "/payment",
        element: <PaymentDetailsPage/>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
