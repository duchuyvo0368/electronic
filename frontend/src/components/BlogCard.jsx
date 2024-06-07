import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">28-3-2023</p>
        <h5 className="title">AAA</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          error magnam cum odio dolor! Repellat accusamus eius itaque officiis
          quasi iusto enim perferendis, voluptates velit rerum quidem
          reiciendis, assumenda quod?
        </p>
        <Link to="/blog/:id" className="button">
          Đọc tiếp
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
