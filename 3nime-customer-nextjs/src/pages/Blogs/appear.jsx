import React, { useEffect, useState } from "react";
import x from "@/pages/Blogs/instruct.module.css";
import abo from "@/styles/AboutUs.module.css";
import pay from "@/styles/Payment.module.css";
import Link from "next/link";
import Social from "@/components/social";
import Image from "next/image";

function Appper(props) {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCategoryOpen2, setIsCategoryOpen2] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(true);

  useEffect(() => {
    // Sử dụng window.innerWidth để xác định kích thước màn hình
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); // Đặt breakpoint 768px cho màn hình md
    };

    // Đăng ký sự kiện resize để theo dõi thay đổi kích thước màn hình
    window.addEventListener("resize", handleResize);
    // Kiểm tra kích thước màn hình khi component được tạo ra
    handleResize();

    // Hủy đăng ký sự kiện khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <img 
              src="https://theme.hstatic.net/1000160337/1000885200/14/blogs_banner_paralax.jpg?v=341"
              alt=""
              className={`${x["image_width"]} text-center`}
            />
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12">
            <div className="my-4 text-muted">
              <h1>Khi nào 1 figure &ldquo;CÓ&rdquo; tại Nhật Bản?</h1>
            </div>
            <div className="contentAboutusDetail">
              <div className={` ${x["image_width"]}`}>
                <img
                  src="http://file.hstatic.net/1000160337/article/vi_sao_nen_dat_hang_som_tai_japanfigure.jpg"
                  alt=""
                />
              </div>

              <div className="text-justify fs-25">
                <h4>KHI NÀO 1 FIGURE &ldquo;CÓ&rdquo; TẠI NHẬT BẢN?</h4>
                <h4>KHI &ldquo;CÓ&rdquo; THÌ SỐ LƯỢNG NHIỀU KHÔNG?</h4>
                <h4>&ldquo;CÓ&rdquo; RỒI MỚI ĐẶT LIỆU KỊP KHÔNG?</h4>

                <p>
                  Đây là những câu hỏi được rất nhiều bạn quan tâm. Trước tiên,{" "}
                  <br />
                  <b>
                    Figure Nhật Bản là những sản phẩm sản xuất HÀNG LOẠT là
                    đúng!
                  </b>{" "}
                  <br />
                  Tuy nhiên bạn thừa biết 1 bản nhạc hit bùng lên trong 1 thời
                  điểm rồi cũng đến lúc nhường vị trí xếp hạng <br /> cho 1 hit
                  khác 1 kiểu áo bắt mắt bạn hôm nay rồi cũng bị thay thế bởi 1
                  kiểu áo khác. <br />1 nhân vật vạn người mê rồi cũng đến lúc
                  nhường sự chú ý cho 1 nhân vật khác.
                </p>

                <p>
                  <b style={{ color: "#000", fontSize: "20px" }}>
                    Khi &ldquo;CÓ&rdquo; thì số lượng nhiều không? <br />
                  </b>
                  Đây là những câu hỏi được rất nhiều bạn quan tâm. <br />
                  Trước tiên,
                  <b>
                    Figure Nhật Bản là những sản phẩm sản xuất HÀNG LOẠT là
                    đúng!
                  </b>{" "}
                  <br />
                  Tuy nhiên bạn thừa biết 1 bản nhạc hit bùng lên trong 1 thời
                  điểm rồi cũng đến lúc nhường <br />
                  vị trí xếp hạng cho 1 hit khác 1 <br />
                  kiểu áo bắt mắt bạn hôm nay rồi cũng bị thay thế bởi 1 kiểu áo
                  khác.
                </p>

                <p style={{ color: "green" }}>
                  Nên là <br />1 hãng thông thường chỉ sản xuất hàng loạt 1
                  phiên bản <br />
                  của 1 nhân vật trong 1 khoảng thời gian giới hạn <br /> đủ số
                  lượng thị trường cần. <br />
                  <b style={{ color: "red" }}>
                    &ldquo;Chúng tôi mở bán từ tháng X đến tháng Y Bạn đặt bao
                    nhiêu, hãng làm bấy nhiêu, rồi ngưng.&rdquo;
                  </b>
                </p>

                <p>
                  Vậy nên Japan Figure mong bạn hiểu được điểm này <br />{" "}
                  <b style={{ color: "red" }}>
                    {" "}
                    Figure Nhật Bản là những sản phẩm sản xuất HÀNG LOẠT với số
                    lượng CÓ HẠN
                  </b>
                </p>

                <p>
                  Với những nhân vật đã qua thời điểm HOT thì có lý do gì để
                  hãng phải sản xuất tiếp? <br />
                  Thay vào đó họ tập trung tạo hình những nhân vật mới, được số
                  đông hưởng ứng, thì doanh thu hàng tháng sẽ đậm đà hơn. <br />
                  Bạn đồng ý chứ? Từ lẽ hiển nhiên này, những figure nào không
                  còn sản xuất nữa, sẽ hiếm dần mỗi ngày, mỗi tháng. <br />
                  <b style={{ color: "red" }}>
                    VÀ GIÁ CỦA &ldquo;ANH ĐÓ&rdquo;, &ldquo;EM ĐÓ&rdquo;,
                    &ldquo;BÉ ĐÓ&rdquo;, &ldquo;CON FIGURE ĐÓ&rdquo; SẼ TĂNG DẦN
                    THEO THỜI GIAN.
                  </b>
                </p>

                <p>
                  Khi figure bạn thích không còn bán chính thức tại Nhật nữa,{" "}
                  <br />
                  <span>
                    không còn cho &ldquo;đặt hàng trước&rdquo; nữa, <br />
                    đồng nghĩa là bạn chỉ có thể sở hữu figure đó bằng cách{" "}
                    <br />
                  </span>
                  <b style={{ color: "green" }}>
                    {" "}
                    -mua lại hàng mới từ những người đã nhanh tay đặt hàng từ
                    sớm,
                  </b>{" "}
                  <br />
                  <b style={{ color: "green" }}>
                    -mua lại hàng cũ từ những người đã sưu tầm,
                  </b>{" "}
                  <br />
                  <b style={{ color: "green" }}>
                    {" "}
                    -tranh giành để mua trên sàn đấu giá.
                  </b>
                </p>

                <p>
                  Vậy thì canh mua figure Nhật thế nào để được giá tốt nhất có
                  thể ? <br /> Đọc đến đây thì bạn cũng đã biết câu trả lời rồi:{" "}
                  <br />
                  <b style={{ color: "orange" }}>
                    {" "}
                    &ldquo;NGAY THỜI ĐIỂM MỞ BÁN.&rdquo;
                  </b>{" "}
                  <br />
                  Sơ đồ dưới đây mô tả lộ trình{" "}
                  <b style={{ color: "orange" }}>
                    1 figure cầm được trên tay thì mất bao lâu?{" "}
                  </b>
                  <br />
                  Hãy theo dõi hãng sản xuất yêu thích của bạn, follow facebook,
                  follow Twitter, Instagram,subscribe Youtube của họ, tiết kiệm
                  và nhanh tay đúng thời điểm, bạn sẽ có nhân vật bạn thích,
                  phiên bản bạn thích với giá tốt nhất!
                </p>

                <p>
                  <img
                    src="//file.hstatic.net/1000160337/file/quy_trinh_dat_hang-01-01.jpg"
                    alt=""
                    className={`${x["image_width"]} text-center`}
                  />
                </p>

                <p>Chúc bạn sớm được chạm đến với nhân vật bạn thích.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-xs-12">
            <aside className="sidebar-page">
              <div
                className={`${abo["sidebox"]} mt-4 mobile-dropdown`}
                onClick={toggleNav}
              >
                <div className={`${abo["about-head-ul"]} py-2`}>
                  <h4
                    className={`${abo["about-head-ul"]}} d-flex align-items-center`}
                  >
                    Danh mục
                    <span
                      className={`fa fa-angle-${
                        isNavVisible ? "up" : "down"
                      } d-block d-lg-none position-absolute`}
                      style={{
                        fontSize: "18px",
                        right: "0",
                      }}
                    />
                  </h4>
                </div>
                <div
                  className={`d-lg-block ${isNavVisible ? "block" : "none"}`}
                >
                  <ul
                    className={`${abo["about-head-ul"]} ${
                      isNavVisible ? "d-none" : "d-lg-block"
                    }`}
                  >
                    <li className={`${abo["about-head-li"]} border-top py-2`}>
                      <Link
                        href="/"
                        title="Tìm kiếm"
                        className={`${abo["about-head-a"]}`}
                      >
                        <span>Tìm kiếm</span>
                      </Link>
                    </li>
                    <li
                      className={`${abo["about-head-li"]} nav-item border-top py-2`}
                    >
                      <Link
                        className={`${abo["about-head-a"]}`}
                        href="/about-us"
                        title="Giới thiệu"
                      >
                        <span>Giới thiệu</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group-sidebox-banner">
                <figure className="mb-0 mt-4">
                  <a className={`${abo["about-head-a"]}`} href="#">
                    <Image
                      className="position-static text-center"
                      style={{ width: "100%" }}
                      src="/assets/images/about_sibar.jpg"
                      alt="about-side"
                      // objectFit="cover"
                      priority
                      width={215}
                      height={150}
                    />
                  </a>
                </figure>
              </div>
            </aside>
            <aside className={pay["side"]}>
              {/* phần bài viết mới */}
              <div
                className={`${pay["group-sidebox"]} ${
                  isMdScreen ? "active" : isCategoryOpen ? "active" : ""
                }`}
              >
                <div
                  className={`${pay["sidebox-title"]}`}
                  onClick={toggleCategory}
                >
                  <h3 className={`${pay["htitle"]} d-flex align-items-center`}>
                    Bài viết mới nhất
                    <span
                      className={`fa ${
                        isCategoryOpen ? "fa-angle-up" : "fa-angle-down"
                      } d-block d-md-none position-absolute`}
                      style={{ right: "0" }}
                    />
                  </h3>
                </div>

                {/* phần content bài viết */}
                <div
                  className={`${pay["sidebox-content "]} ${
                    isMdScreen || isCategoryOpen ? "d-md-block" : "d-none"
                  }`}
                >
                  <ul
                    className={`${pay["menuList-links"]} ${
                      isMdScreen || isCategoryOpen ? "d-md-block" : "d-none"
                    }`}
                  >
                    <BlogItem
                      image="https://file.hstatic.net/1000160337/article/vi_sao_nen_dat_hang_som_tai_japanfigure.jpg"
                      title="Figure Nhật Bản là những sản phẩm sản xuất HÀNG LOẠT là đúng!"
                      title2="Figure Nhật Bản là những sản phẩm sản xuất HÀNG LOẠT là đúng!"
                      title3="Tin Tức"
                      date=" - 17/02/2023"
                      href="/Blogs/appear"
                    />

                    <BlogItem
                      image="/assets/images/blog_2.jpg"
                      title="Cách Tôi Kiếm Được 250k Mỗi Giờ"
                      title2="Cách Tôi Kiếm Được 250k Mỗi Giờ"
                      title3="Tin Tức"
                      date=" - 12/02/2022"
                      href="/Blogs/instruct"
                    />
                    <BlogItem
                      image="/assets/images/blog_3.jpg"
                      title="Kakeibo phương pháp tiết kiệm, chi tiêu hợp lý"
                      title2="Kakeibo phương pháp tiết kiệm, chi tiêu hợp lý"
                      title3="Hưỡng Dẫn"
                      date=" - 23/04/2022"
                      href="/Blogs/Kakeibo"
                    />
                    <BlogItem
                      image="/assets/images/blog_4.jpg"
                      title="Hỏi Và Đáp"
                      title2="Hỏi Và Đáp"
                      title3="Tin Tức"
                      date=" - 23/04/2022"
                      href="/answer"
                    />
                  </ul>
                </div>
              </div>

              {/* phần danh mục */}
              {/* <div className={`${pay["group-sidebox"]}`}>
                  <div
                    className={`${pay["sidebox-title"]}`}
                    onClick={toggleCategory2}
                  >
                    <h3
                      className={`${pay["htitle"]} d-flex align-items-center`}
                    >
                      Danh Mục
                      <span
                        className={`fa ${
                          isCategoryOpen2 ? "fa-angle-up" : "fa-angle-down"
                        } d-block d-md-none position-absolute`}
                        style={{ right: "0" }}
                      />
                    </h3>
                  </div>

            
                  <div
                    className={`${pay["sidebox-content "]} ${
                      isMdScreen || isCategoryOpen2 ? "d-md-block" : "d-none"
                    }`}
                  >
                  
                    
                  </div>
                </div> */}
            </aside>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
}

export default Appper;
const BlogItem = ({ image, title, title2, title3, title4, date, href }) => {
  return (
    <>
      <li>
        <div className={`${pay["item-article"]} d-flex clearfix`}>
          <div className="post-image">
            <a href={href}>
              <img className={`${pay["lazyloaded"]}`} src={image} alt={title} />
            </a>
          </div>
          <div className={`${pay["post-content"]} ms-2`}>
            <h3 className={`${pay["fs14"]} mb-0`}>
              <a href={href} className={pay["fs14_hover"]}>
                {title2}
              </a>
            </h3>
            <p className="mb-0">
              <span>
                <a href={href} className={pay["tag"]}>
                  {title3}
                </a>
              </span>
              <span>
                <a href={href}>{title4}</a>
              </span>
              <span className="date">{date}</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};
