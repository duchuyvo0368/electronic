import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title="Tạo tài khoản" />
      <BreadCrumb title="Đăng ký" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="action-customer">
              <h3 className="text-center text-uppercase">Đăng ký</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Tên khách hàng"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Số điện thoại"
                />

                <CustomInput type="email" name="email" placeholder="Email" />

                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                />
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <Link to="" className="signup button" type="submit">
                      Đăng ký
                    </Link>
                  </div>

                  <Link
                    to="/"
                    className="d-flex align-items-center gap-10 mt-3"
                  >
                    <BiArrowBack className="fs-4" /> Quay lại trang chủ
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
