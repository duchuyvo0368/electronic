import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import watch from "../images/watch.jpg";
import Container from "../components/Container";
const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Thời Trang Nam XSON</h3>
              <nav
                className="--bs-breadcrumb-divider: '>';"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-dark">
                      Trang Chủ
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/gio-hang" className="text-dark">
                      Giỏ hàng
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                    Thông tin khách hàng
                  </li>
                  <li className="breadcrumb-item active">
                    Thông tin giao hàng
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Thông tin liên hệ</h4>
              <p className="user-details total">
                Trịnh Ngọc Sơn (trinhngcson@gmail.com)
              </p>
              <h4 className="mb-3">Địa chỉ giao hàng</h4>
              <form
                action=""
                className="d-flex gap-15 justify-content-between flex-wrap"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="aaa" selected disabled>
                      Chọn quốc gia
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Họ"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Địa chỉ"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số nhà, khu phố, ..."
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="bbb" selected disabled>
                      Chọn tỉnh / thành phố
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="ccc" selected disabled>
                      Chọn quận / huyện
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Zipcode"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/gio-hang" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Trở lại giỏ hàng
                    </Link>
                    <Link to="/gio-hang" className="button">
                      Tiếp tục thanh toán
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white
                       rounded-circle p-2 position-absolute "
                    >
                      1
                    </span>
                    <img src={watch} alt="product" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">aaa</h5>
                    <p className="total-price">s / qweqweqw</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">1.0000.000</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Tạm tính</p>
                <p className="total-price">1.000.000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Phí vận chuyển</p>
                <p className="mb-0 total-price">1.000.000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Tổng cộng</h4>
              <h5 className="total-price">1.000.000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
