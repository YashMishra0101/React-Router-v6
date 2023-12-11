import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Address from "./component/Address.jsx";
import ContactUs from "./component/ContactUs.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";
import ProductId from "./component/ProductId.jsx";
// import { BrowserRouter } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> // iss ke baadh se saare path start honge 
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}>
        <Route path="address" element={<Address />} />
        <Route path="contactNo" element={<ContactUs />} />
      </Route>
      <Route path="productdetails" element={<ProductsDetails />}>// productdetails/
        <Route path=":id" element={<ProductId />} />productdetails/id
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  // <App />
  <RouterProvider router={router} />
  // </BrowserRouter>
);
