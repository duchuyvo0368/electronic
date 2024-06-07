import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <>
      <Meta title="Đặt lại mật khẩu" />
      <BreadCrumb title="Đặt lại mật khẩu" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="action-customer">
              <h3 className="text-center text-uppercase mb-3">
                Đặt lại mật khẩu
              </h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                />

                <CustomInput
                  type="password"
                  name="cfpassword"
                  placeholder="Nhập lại mật khẩu"
                />

                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3 flex-column">
                    <button className="button border-0" type="submit">
                      Gửi
                    </button>
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

export default Resetpassword;
