import React, { useEffect, useState } from "react";
import Social from "@/components/social";
import abo from "@/styles/AboutUs.module.css";
import pay from "@/styles/Payment.module.css";
import Image from "next/image";
import Link from "next/link";

function AboutUS(props) {
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
                    <span>Giới thiệu về Japan Figure</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-12 col-xs-12">
              <div className="my-4 text-muted">
                <h1>Giới thiệu về Japan Figure</h1>
              </div>
              <div className="contentAboutusDetail">
                <p className={`${abo["imageAbout"]} text-center`}>
                  <Image
                    src="/assets/images/banner-about.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="cover"
                  />
                </p>

                <p className="text-center">&nbsp;</p>

                <p className="text-justify">
                  <span style={{ color: "rgb(153, 51, 102)" }}>
                    <strong>► Figure là gì ?</strong>
                  </span>
                </p>

                <p className="text-justify">
                  <span style={{ color: "#000" }}>
                    Là mô hình, là tượng, là bất kỳ cách gọi nào liên quan đến
                    những tạo tác 3D cầm nắm được trên tay, mô phỏng lại nhân
                    vật trong bức vẽ, phim, truyện, game... Thông thường figure
                    mang hình dạng con người, đôi khi là động vật, thực vật,
                    quái vật, yêu tinh, thần thánh, thậm chí là sinh vật ngoài
                    tinh...nhân vật nào được điêu khắc thành 3D thì được gọi
                    chung là figure.
                  </span>
                </p>

                <p className="text-center">&nbsp;</p>

                <div className="text-center">
                  <iframe
                    width="100%"
                    height={360}
                    src="https://www.youtube.com/embed/j6-p9L9b3WA?si=NiZ78XNOlx3y80_H"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                  />
                </div>
                <p style={{ textAlign: "center" }}>
                  <em>Game Prize Figure và những điều cần biết</em>
                </p>

                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-1.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p className="text-center">&nbsp;</p>

                <p className="text-justify">
                  <span style={{ color: "rgb(153, 51, 102)" }}>
                    <strong>► Japan Figure là gì ?</strong>
                  </span>
                </p>

                <ol>
                  <li style={{ textAlign: "justify" }}>
                    Là những figure được các họa sĩ Nhật Bản sáng tạo, vẽ minh
                    họa, điêu khắc&nbsp;và hoàn thiện thiết kế&nbsp;đầu tiên -
                    prototype tại Nhật Bản.&nbsp;
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    Sau đó phần lớn thiết kế này được gửi đi&nbsp;sản xuất hàng
                    loạt tại Trung Quốc.&nbsp;Nên sản phẩm cuối cùng bạn cầm
                    trên tay có chữ “Made in China” là chuyện rất bình thường.
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    Vì xuất xứ từ Nhật nên hiển nhiên Japan figure mang đậm văn
                    hóa Nhật&nbsp;từ Anime, Manga, Game, Light novel, J-pop cho
                    đến ca sĩ ảo, streamer ảo&nbsp;v…v…
                  </li>
                </ol>

                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-2.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-3.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>
                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-4.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>
                <p style={{ textAlign: "center" }}>
                  <em>
                    Cách chơi figure với sa bàn. Ảnh của tác giả : Exkurogane
                  </em>
                </p>

                <p style={{ textAlign: "justify" }}>
                  Với công nghệ của Nhật và quy trình sản xuất được giám sát
                  nghiêm ngặt, những sản phẩm figure được hoàn thành rất có hồn
                  của nhân vật gốc, chi tiết sắc bén, màu sắc sống động, đóng
                  gói hỉnh chu.
                </p>

                <p style={{ textAlign: "justify" }}>
                  Nhờ đó, figure Nhật Bản&nbsp;đã làm mãn lòng fan hâm mộ trên
                  toàn thế giới.
                </p>

                <h4
                  className="woo-sc-quote boxed"
                  style={{ textAlign: "justify" }}
                >
                  <em>
                    <code>Tới đây hẳn bạn đang thắc mắc:</code>
                  </em>
                  <br />
                  <em>
                    <code>
                      Làm thế nào để phân biệt được hàng Nhật và hàng nhái từ
                      Trung Quốc?
                    </code>
                  </em>
                </h4>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    Yên tâm nhé Japan Figure đã chuẩn bị sẵn cho bạn 1 số mẹo
                    phân biệt cực ký hữu ích.
                  </span>
                  <br />
                  <span style={{ fontSize: 14 }}>
                    <strong>
                      <a
                        target="_blank"
                        href="http://japanfigure.vn/blogs/tin-tuc/cach-phan-biet-figure-nhat-chinh-hang-hang-nhai-tu-trung-quoc"
                      >
                        <span style={{ color: "#3333ff" }}>
                          click vào đây để tìm hiểu.
                        </span>
                      </a>
                    </strong>
                  </span>
                </p>

                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-5.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p style={{ textAlign: "center" }}>
                  <em>Một bộ sưu tầm Figure chibi của 1 người chơi lâu năm</em>
                </p>

                <p className="text-center">&nbsp;</p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-6.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p style={{ textAlign: "center" }}>
                  <em>
                    Sử dụng Figure để lấp đầy cảm hứng cho không gian làm việc
                  </em>
                </p>

                <span style={{ color: "rgb(153, 51, 102)" }}>
                  <strong>►Japan Figure</strong>
                </span>

                <p style={{ textAlign: "justify" }}>
                  Là nơi chuyên cung cấp figure chính hãng của Nhật Bản tại Việt
                  Nam
                </p>

                <p style={{ textAlign: "justify" }}>
                  <br />
                  Japan Figure là thiên đường&nbsp;với những bạn quan tâm, theo
                  đuổi vẻ đẹp toàn vẹn, đam mê figure cao cấp và&nbsp;đây mê
                  hoặc của Nhật Bản.
                </p>
                <p style={{ textAlign: "justify" }}>
                  <br />
                  Nếu nhu cầu&nbsp;của bạn chỉ dừng lại ở&nbsp;figure&nbsp;chất
                  lượng thấp, hàng nhái, giả, không có bản quyền… thì rất tiếc
                  Japan Figure không phải là nơi phù hợp dành cho bạn.
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span>
                    Từ tháng 8/2012, sau 11 năm phục vụ, Japan Figure rất vui
                    nhận được sự ủng hộ đông đảo từ người sưu tầm&nbsp;trên khắp
                    VN.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <br />
                  <span>Tại Japan Figure chúng tôi:</span>
                </p>
                <ul>
                  <li style={{ textAlign: "justify" }}>
                    Chuyên cung cấp figure chất lượng cao của Nhật Bản
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    Cập nhật thông tin sản phẩm mới mỗi ngày.
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <span>
                      Giải đáp cho bạn mọi thắc mắc về figure, cách mua hàng, hỗ
                      trợ vận chuyển miễn phí.
                    </span>
                  </li>
                  <li style={{ textAlign: "justify" }}>
                    <span>Săn tìm figure từ hiếm cho đến cực hiếm</span>
                  </li>
                </ul>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "#993366" }}>
                    <strong>
                      <strong>►</strong>Mục tiêu&nbsp;của Japan Figure là:
                    </strong>
                  </span>
                </p>

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-7.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="contain"
                  />
                </p>

                <p style={{ textAlign: "justify" }}>
                  Bạn thích chơi figure đơn lẻ hay đi cùng 1 series với nhau?
                </p>
                <p style={{ textAlign: "justify" }}>
                  Bạn thích figure tự sơn hay sơn sẵn?
                </p>
                <p style={{ textAlign: "justify" }}>
                  Bạn thích kích cỡ lớn hay nhỏ, có cần thay đổi gương mặt
                  không? Giữ yên 1 tư thé (tĩnh) hay đổi tư thế thường xuyên
                  (động)?
                </p>
                <p style={{ textAlign: "justify" }}>
                  Bạn muốn trưng bày tất cả figure ngay trước mặt để tăng cảm
                  hứng làm việc, hay tạo không gian riêng cho từng bé để tăng
                  tính nghệ thuật?
                </p>
                <p style={{ textAlign: "justify" }}>
                  Hãy chọn cho mình một figure yêu thích và cách chơi phù hợp
                  nhé.
                </p>
                <p style={{ textAlign: "justify" }}>&nbsp;</p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ textDecoration: "underline" }}>
                      Có thể bạn quan tâm:
                    </span>
                  </strong>
                  <br />
                  <br />
                  <strong>
                    <a href="http://japanfigure.vn/collections/hang-co-san">
                      <span style={{ color: "#3333ff" }}>#Hàng có sẵn</span>
                    </a>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#3333ff" }}>#</span>
                    <a href="http://japanfigure.vn/collections/hang-order">
                      <span style={{ color: "#3333ff" }}>Hàng order</span>
                    </a>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#3333ff" }}>#</span>
                    <a href="https://www.facebook.com/groups/japanfigure/">
                      <span style={{ color: "#3333ff" }}>
                        Sàn Giao Dịch Figure chính hãng -&nbsp;Japan Figure T
                      </span>
                    </a>
                    <a href="https://bit.ly/jftrade">
                      <span style={{ color: "#3333ff" }}>rading</span>
                    </a>
                  </strong>
                </p>
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
                    <a href="http://japanfigure.vn/pages/lien-he">
                      <span style={{ color: "#3333ff" }}>
                        Thông tin liên hệ
                      </span>
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

                <p className={`${abo.imageAbout1} text-center`}>
                  <Image
                    src="/assets/images/about_img-8.png"
                    alt="facebook"
                    layout="fill"
                    objectFit="cover"
                  />
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
              <aside class={pay["side"]}>
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
                    <h3
                      className={`${pay["htitle"]} d-flex align-items-center`}
                    >
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
      </div>
      <Social />
    </>
  );
}

export default AboutUS;
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
