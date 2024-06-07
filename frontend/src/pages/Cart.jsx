import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";

import watch from "../images/watch.jpg";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title="Giỏ Hàng" />
      <BreadCrumb title="Giỏ hàng" />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="cart-header d-flex justify-content-between align-items-center py-3">
              <h4 className="cart-col-1">Tên Sản Phẩm</h4>
              <h4 className="cart-col-2">Giá</h4>
              <h4 className="cart-col-3">Số lượng</h4>
              <h4 className="cart-col-4">Tổng cộng</h4>
            </div>
            <div className="cart-data d-flex justify-content-between align-items-center py-3">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} alt="watch" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p className="text-uppercase">aaa</p>
                  <p>Size: aaa</p>
                  <p>Color: aaa</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">500.000</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger fs-3" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">500.000</h5>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/san-pham" className="button">
                  Tiếp tục mua sắm
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Thành Tiền: 1.000.000</h4>
                  <Link to="/thanh-toan" className="button">
                    Thanh Toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
