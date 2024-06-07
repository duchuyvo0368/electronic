import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gio-hang" element={<Cart />} />
            <Route path="thanh-toan" element={<Checkout />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="san-pham" element={<OurStore />} />
            <Route path="san-pham/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="so-sanh-san-pham" element={<CompareProduct />} />
            <Route path="san-pham-ua-thich" element={<Wishlist />} />
            <Route path="dang-nhap" element={<Login />} />
            <Route path="quen-mat-khau" element={<Forgotpassword />} />
            <Route path="dat-lai-mat-khau" element={<Resetpassword />} />
            <Route path="dang-ky" element={<Signup />} />
            <Route path="chinh-sach-bao-mat" element={<PrivacyPolicy />} />
            <Route path="chinh-sach-doi-hang" element={<RefundPolicy />} />
            <Route path="chinh-sach-giao-hang" element={<ShippingPolicy />} />
            <Route path="dieu-khoan-dich-vu" element={<TermAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
