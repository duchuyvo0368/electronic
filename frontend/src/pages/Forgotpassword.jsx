import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title="Quên mật khẩu" />
      <BreadCrumb title="Quên mật khẩu" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="action-customer">
              <h3 className="text-center text-uppercase mb-3">
                Đặt lại mật khẩu
              </h3>
              <p className="text-center text-uppercase mt-2 mb-3">
                Khôi phục bằng email
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="email" name="email" placeholder="Email" />

                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3 flex-column">
                    <button className="button border-0" type="submit">
                      Gửi
                    </button>
                    <Link to="/dang-nhap">Huỷ</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
