import React from "react";
import { Link } from "react-router-dom";
import {
  BsTwitter,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="" />
                <h2 className="mb-0 text-white">Đăng ký để nhận bản tin</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Địa chỉ email của bạn"
                  aria-label="Địa chỉ email của bạn"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Đăng ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-0">Liên hệ với chúng tôi</h4>
              <div>
                <address className="text-white fs-6">
                  Số 06, Trần Văn Ơn, Phú Hòa, Thủ Dầu Một, Bình Dương
                </address>
                <a
                  href="tel: 0123456789"
                  className="mt-3 d-block mb-1 text-white"
                >
                  0123456789
                </a>
                <a
                  href="mailto: trinhngcson@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  trinhngcson@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="https://twitter.com/?lang=vi" className="text-white">
                    <BsTwitter className="fs-4" />
                  </a>
                  <a href="https://www.facebook.com/" className="text-white">
                    <BsFacebook className="fs-4" />
                  </a>
                  <a href="https://github.com/" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                  <a href="https://www.instagram.com/" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="https://www.youtube.com/" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-0">Thông tin</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/chinh-sach-bao-mat" className="text-white mb-1 py-2">
                  Chính sách bảo mật
                </Link>
                <Link
                  to="/chinh-sach-doi-hang"
                  className="text-white mb-1 py-2"
                >
                  Chính sách đổi hàng
                </Link>
                <Link
                  to="/chinh-sach-giao-hang"
                  className="text-white mb-1 py-2"
                >
                  Chính sách vận chuyển
                </Link>
                <Link to="/dieu-khoan-dich-vu" className="text-white mb-1 py-2">
                  Điều khoản dịch vụ
                </Link>
                <Link to="/blogs" className="text-white mb-1 py-2">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-0">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">
                  Giới thiệu về chúng tôi
                </Link>
                <Link className="text-white mb-1 py-2">Câu hỏi thường gặp</Link>
                <Link className="text-white mb-1 py-2">Liên hệ</Link>
                <Link className="text-white mb-1 py-2">Giày</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-0">Liên kết nhanh</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Nón</Link>
                <Link className="text-white mb-1 py-2">Áo</Link>
                <Link className="text-white mb-1 py-2">Quần</Link>
                <Link className="text-white mb-1 py-2">Giày</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by XSON
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
