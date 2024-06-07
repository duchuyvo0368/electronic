import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  let location = useLocation();
  return (
    <div
      className={`${
        location.pathname === "/san-pham" ? `gr-${props.grid}` : `col-3`
      }`}
    >
      <Link
        to={`${location.pathname === "/san-pham" ? `:id` : `/san-pham/:id`}`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product_image" />
          <img src={watch1} className="img-fluid" alt="product_image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Biluxury</h6>
          <h5 className="product-title">
            Áo Polo Vải Cotton Mềm Mịn, Thoáng Mát, Thấm Hút Nhanh, Chống Nhăn
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p
            className={`description ${
              props.grid === 12 ? "d-block" : "d-none"
            } my-2`}
          >
            Áo Sơ Mi Ngắn Tay Từ Sợi Tre, Kháng Khuẩn, Mềm Mịn, Thấm Hút Tốt
          </p>
          <p className="price">499.000đ</p>
        </div>
        <div className="action_bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="add_cart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
