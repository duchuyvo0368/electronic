import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const Singleblog = () => {
  return (
    <>
      <Meta title="Blog Name" />
      <BreadCrumb title="Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <BiArrowBack className="fs-4" />
                Trang chủ Blog
              </Link>

              <h3 className="title">
                Thời trang nam 4.0: Sau "ăn ngon, mặc đẹp" sẽ là "ăn sạch, mặc
                xanh"
              </h3>
              <img src={blog} alt="blog" className="img-fluid w-100  my-4" />
              <p>
                (Dân trí) - Theo các chuyên gia, sự quan tâm của công chúng về
                thời trang đã có sự biến đổi, từ lúc chỉ cần "ăn no, mặc ấm",
                hiện tại là "ăn ngon, mặc đẹp" trong tương lai sẽ là "ăn sạch,
                mặc xanh" Chia sẻ tại talkshow Xu hướng thời trang nam 4.0, ông
                Đoàn Đức Thuận - Phó Tổng giám đốc CTCP Thời trang Kowil Việt
                Nam cho hay, sự quan tâm của công chúng về thời trang đã có
                những biến đổi. Chúng ta đi qua những thời gọi là "ăn đói, mặc
                rách" cho đến nhu cầu "ăn no, mặc ấm", ở hiện tại là "ăn ngon,
                mặc đẹp" và trong tương lai sẽ là "ăn sạch, mặc xanh" và còn
                nhiều nhu cầu hơn nữa. Cách đánh giá thời trang cũng là một phần
                của cuộc sống, phản ánh đúng nhu cầu của xã hội và con người.
                Trước kia nhiều người nghĩ rằng người có điều kiện mới quan tâm
                đến thời trang. Nhưng bây giờ khái niệm thời trang đã trở nên
                gần gũi hơn rồi. Chỉ cần tôi mặc đẹp, tôi tự tin như vậy cũng đã
                là thời trang.
                <br />
                Lý giải về việc thời trang nam giới hiện nay vẫn được đánh giá
                là khá đơn điệu so với nữ giới, Phó Tổng giám đốc CTCP Thời
                trang Kowil Việt Nam phân tích, điều này xuất phát từ hai lý do.
                Thứ nhất là do nam giới chưa dành sự quan tâm nhiều cho thời
                trang. Có thể nam giới cho rằng thời trang không phải là một nhu
                cầu thiết yếu trong đời sống hàng ngày. Lý do thứ hai có thể do
                nam giới còn "ngại" nổi bật và "ngại" chọn đồ. "Bản thân tôi
                cũng có một chút ngại khi phải kết hợp nhiều món đồ với nhau,
                lựa chọn chất liệu phù hợp. Trong một cuộc khảo sát của Owen có
                một dòng sản phẩm nam giới yêu thích đó chính là dòng áo có tính
                năng chống nhăn. Chúng ta cứ nghĩ rằng đó không phải là tính
                năng quan trọng nhất, nhưng đó lại là tính năng được nam giới đề
                cao. Tôi nhớ có một số nhân vật nổi tiếng trong giới công nghệ
                như Mark Zuckerberg hay Steve Jobs trước khi trở thành những
                người nổi tiếng họ luôn mặc áo polo. Họ nói rằng lựa chọn áo
                polo để tiết kiệm thời gian cho công việc. Điều đó chứng tỏ việc
                lựa chọn những sản phẩm thời trang đơn điệu với nam giới có thể
                xuất phát từ một chữ "ngại. Nếu nam giới có thể vượt qua được
                chữ "ngại" thì hoàn toàn có thể tạo được phong cách thời trang
                ấn tượng. "", ông Thuận nói. Thời trang là một khái niệm "mở"
                nên để có một giải pháp mang tính toàn diện theo ông Thuận là
                khá mơ hồ. Bởi lẽ, giải pháp có thể phù hợp với người này nhưng
                lại không phù hợp với người kia. "Tôi nghĩ rằng giải pháp đưa ra
                sẽ dựa trên hai yếu tố: Thứ nhất là "hợp cách", tức là ăn mặc có
                nhiều phong cách nhưng vẫn nên dựa trên các nguyên tắc cơ bản.
                Thứ hai là "đồng bộ", một bộ đồ đẹp thôi chưa đủ, nó cần phù hợp
                với vóc dáng cơ thể mỗi người. Quần áo không phải cứ đắt là đẹp,
                thật ra trang phục phải "vừa" mới thật sự đẹp. "Vừa" ở đây có
                nghĩa là sự phù hợp với trạng thái của người mặc", ông Thuận
                nhấn mạnh. Bà Phạm Thị Tuyết - Tổng giám đốc CTCP Thời trang
                Kowil Việt Nam cho rằng, đại dịch đã thay đổi rất nhiều thứ trên
                thế giới và thời trang cũng không ngoại trừ. Trước đây người ta
                thường nhắc nhiều tới cụm từ "fast fashion", nhưng khi Covid-19
                xảy ra cụm từ đó ít được nhắc đến trong làng thời trang nữa, mà
                thay vào đó là thời trang mang tính bền vững.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
