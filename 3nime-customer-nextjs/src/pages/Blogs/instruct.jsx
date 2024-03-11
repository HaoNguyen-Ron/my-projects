import React, { useEffect, useState } from "react";
import abo from "@/pages/Blogs/instruct.module.css";
import Link from "next/link";
import Image from "next/image";
import Social from "@/components/social";
import pay from "@/styles/Payment.module.css";

function Instruct(props) {
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

  const toggleCategory2 = () => {
    setIsCategoryOpen2(!isCategoryOpen2);
  };
  return (
    <>
      <div>
        <div className={abo["about-head"]}>
          <div className="container">
            <div className="navbar navbar-expand-lg">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="/" target="_self">
                    <span className={abo["about-head-span"]}>Trang chủ</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link disabled"
                    href="/aboutUs"
                    target="_self"
                  >
                    <span>Cách Tôi Kiếm 250k Mỗi Giờ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className=" text-center">
              <img
                src="https://theme.hstatic.net/1000160337/1000885200/14/blogs_banner_paralax.jpg?v=341"
                alt=""
                style={{ maxWidth: "100%" }}
              />
            </div>
            <div className="col-lg-9 col-sm-12 col-xs-12">
              <div className="my-4 text-muted">
                <h1>Cách Tôi Kiếm Được 250k Mỗi Giờ</h1>
              </div>
              <div className="contentAboutusDetail">
                <p className={`${abo["imageAbout"]} text-center`}>
                  <Image
                    src="/assets/images/imges.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="cover"
                  />
                </p>

                <div className="text-center">
                  <iframe
                    width="100%"
                    height={360}
                    src="https://www.youtube.com/embed/agph5NgEfBw?si=TW6daacMJ1wbWWG"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>

                <p className="text-center ">&nbsp;</p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  Trước hết,
                  <br />
                  Đừng kỳ vọng bài viết này giúp bạn giàu nhanh trong 1 phút.
                  <br />
                  Chuyện đó là ảo tưởng! <br />
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  Không viễn vông,
                  <br />
                  không lòng vòng,
                  <br />
                  ở đây chỉ nói chuyện thực tế. <br />
                  Tân làm được cái gì thì chia sẻ lại đúng cái đó. <br />
                  Bạn tinvà làm theo? Thì bạn có ít nhất 10-15 triệu/ tháng.{" "}
                  <br />
                  Bạn thấy nực cười? Vui lòng lướt qua trong vui vẻ.
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  1 người bình thường chỉ kiếm được đúng số $ <br />
                  mà bản thân hình dung được <br />& lên kế hoạch cụ thể ngay từ
                  đầu, không hơn.
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  <i>&ldquo;Tôi muốn có được Luffy 1 triệu 4 trong vòng 7 ngày!&rdquo;</i>{" "}
                  <br />
                  Ok vậy 1 ngày chỉ cần kiếm 200K là đủ <br />
                  <i>&ldquo;Tôi muốn có được Miku 5 triệu 5 trong vòng 30 ngày!&rdquo;</i>{" "}
                  <br />
                  Ok vậy 1 ngày chỉ cần kiếm 183K là đủ

                </p>
                <div className="text-center">
                  <iframe
                    width="100%"
                    height={360}
                    src="https://www.youtube.com/embed/TxJLmmSLYfE?si=ZTW28blsTeuHEFqf"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>

                <p className="text-center">&nbsp;</p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  <b style={{ color: "orange" }}>
                    {" "}
                    Tốc độ kiếm $ của bạn trong 1 ngày phụ thuộc vào <br />
                  </b>
                  Thời gian trải nghiệm <br />
                  Kỷ luật với số $ mục tiêu mình đặt ra từ đầu <br />
                  Cách bạn quản lý vốn <br />
                  Nhận trách nhiệm về mình trong mọi quyết định
                </p>

                <p className="text-center">&nbsp;</p>
                <p className="text-justify" style={{ fontSize: "18px" }}>
                  Lời khuyên của mình, <br />
                  bạn 1 người mới bắt đầu, <br />
                  chưa có kinh nghiệm gì hết, <br />
                  chỉ cần 1 ngày dành ra khoảng{" "}
                  <b>1 tiếng kiếm 10đô ~250k là đã đủ rồi </b>
                  <br />
                  (1 tháng tự khắc có ~7 triệu rưỡi) <br />
                  Muốn kiếm nhiều hơn thì dò trước xem bạn có bao nhiêu trong
                  list trên
                </p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/instruc2.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>
                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/instruc2.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  Đã rất nhiều anh em kiên định <br />
                  follow từng hướng dẫn nhỏ bên dưới & thành công. <br />
                  Hãy thực hành trên giấy thật nhiều lần <br />
                  trước khi thật sự bấm nút.
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  Cách chơi đơn giản-an toàn-đều đặn
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  <b> Nếu làm được,</b> <br />
                  thì việc bạn kiếm về 250K/ mỗi giờ <br />
                  như mình là trong tầm tay.
                </p>

                <p className="text-justify" style={{ fontSize: "18px" }}>
                  <b> Nếu cảm thấy &ldquo;không làm được&rdquo;,</b> <br />
                  thì vui vẻ đóng tab này đi cho đỡ tốn thời gian của bạn.{" "}
                  <br />
                  Miễn bạn hài lòng với công việc hiện tại, cứ tiếp tục. <br />
                  Tân Vũ chỉ cộng tác với người ít chê $
                </p>

                <div className="text-center">
                  <iframe
                    width="100%"
                    height={360}
                    src="https://www.youtube.com/embed/agph5NgEfBw?si=NTlO638_8V-wRKIg"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/instruc3.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p className="text-center">&nbsp;</p>
                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/instruc4.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>
                <p className="text-center">&nbsp;</p>

                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#3333ff" }}>#</span>
                    <a href="http://japanfigure.vn/collections/artbook">
                      <span style={{ color: "#3333ff" }}>Artbook</span>
                    </a>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#3333ff" }}>#</span>
                    <a href="https://www.facebook.com/media/set/?set=a.599326660108007">
                      <span style={{ color: "#3333ff" }}>Hàng đã bán</span>
                    </a>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#3333ff" }}>#</span>
                    <a
                      target="_blank"
                      title="youtube"
                      href="https://www.youtube.com/channel/UCoOXLGsa5joTIO05WF7ZGGA"
                    >
                      <span style={{ color: "#3333ff" }}>Youtube Channel</span>
                    </a>
                  </strong>
                </p>

                <p className="text-center">&nbsp;</p>
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
                        className={`fa fa-angle-${isNavVisible ? "up" : "down"
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
                      className={`${abo["about-head-ul"]} ${isNavVisible ? "d-none" : "d-lg-block"
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
                        className="position-static"
                        src="/assets/images/about_sibar.jpg"
                        alt="about-side"
                        layout="fill"
                        objectFit="cover"
                      />
                    </a>
                  </figure>
                </div>
              </aside>
              <aside className={pay["side"]}>
                {/* phần bài viết mới */}
                <div
                  className={`${pay["group-sidebox"]} ${isMdScreen ? "active" : isCategoryOpen ? "active" : ""
                    }`}
                >
                  <div
                    className={`${pay["sidebox-title"]}`}
                    onClick={toggleCategory}
                  >
                    <h3
                      className={`${pay["htitle"]} d-flex align-items-center`}
                    >
                      Bài viết mới nhất
                      <span
                        className={`fa ${isCategoryOpen ? "fa-angle-up" : "fa-angle-down"
                          } d-block d-md-none position-absolute`}
                        style={{ right: "0" }}
                      />
                    </h3>
                  </div>

                  {/* phần content bài viết */}
                  <div
                    className={`${pay["sidebox-content "]} ${isMdScreen || isCategoryOpen ? "d-md-block" : "d-none"
                      }`}
                  >
                    <ul
                      className={`${pay["menuList-links"]} ${isMdScreen || isCategoryOpen ? "d-md-block" : "d-none"
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
      </div>
      <Social />
    </>
  );
}

export default Instruct;
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
