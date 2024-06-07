import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div>
            <div className="special-product-content">
              <h5 className="brand">biluxury</h5>
              <h6 className="title">
                Áo Sơ Mi Dài Tay Từ Sợi Tre, Kháng Khuẩn, Bền Màu, Chống Nhăn
                6SMDS001DEN
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">499</span> &nbsp;
                <strike>575</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  Còn <b>5</b> ngày
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Số lượng: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    a-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Mua ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
