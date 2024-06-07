import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title="Cửa hàng" />
      <BreadCrumb title="Cửa hàng" />
      <Container class1="store-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Bộ sưu tập</h3>
              <div>
                <ul className="ps-0">
                  <li>aaa</li>
                  <li>sss</li>
                  <li>ddd</li>
                  <li>ccc</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Lọc danh mục</h3>
              <div>
                <h5 className="sub-title">Tình trạng</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Còn hàng (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      checked
                    />
                    <label className="form-check-label" htmlFor="">
                      Hết hàng (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Giá tiền</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="formId1"
                      id="formId1"
                      placeholder=""
                    />
                    <label htmlFor="formId1">Từ</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      name="formId2"
                      id="formId2"
                      placeholder=""
                    />
                    <label htmlFor="formId2">Đến</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <div className="d-flex flex-wrap">
                    <Color />
                  </div>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      XS
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      S
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      M
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      L
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      XL
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      X
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Tags sản phẩm</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Áo Nam
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Quần Nam
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Giày
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Sandal
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
              <div>
                <div className="random-products d-flex mb-3">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Áo Khoác Dạ Regular Phối Vai AK046 Màu Đen</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>545.000</p>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Áo Khoác Dạ Regular Phối Vai AK046 Màu Đen</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>545.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 w-100">Sắp Xếp</p>
                  <select
                    className="form-select form-control"
                    style={{ width: "250px" }}
                    name=""
                    id=""
                  >
                    <option selected value="aaa">
                      Mặc định
                    </option>
                    <option value="">Sản phẩm bán chạy nhất</option>
                    <option value="">Thứ tự chữ cái từ A-Z</option>
                    <option value="">Thứ tự chữ cái từ Z-A</option>
                    <option value="">Giá tăng dần</option>
                    <option value="">Giá giảm dần</option>
                    <option value="">Sản phẩm mới nhất</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">336 sản phẩm</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
