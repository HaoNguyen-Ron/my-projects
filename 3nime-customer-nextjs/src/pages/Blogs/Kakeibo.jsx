import React, { useEffect, useState } from "react";
import abo from "@/pages/Blogs/instruct.module.css";
import Link from "next/link";
import Image from "next/image";
import Social from "@/components/social";
import pay from "@/styles/Payment.module.css";

function Kakeibo(props) {
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
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img
              src="https://theme.hstatic.net/1000160337/1000885200/14/blogs_banner_paralax.jpg?v=341"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12">
            <div className="my-4 text-muted">
              <h1>Kakeibo phương pháp tiết kiệm, chi tiêu hợp lý</h1>
            </div>
            <p className="text-center ">&nbsp;</p>
            <div className="contentAboutusDetail">
              <p className={`${abo["imageAbout"]} text-center`}>
                <Image
                  src="/assets/images/abc.png"
                  alt="facebook"
                  layout="fill"
                  objectFit="cover"
                />
              </p>
              <p className="text-justify" style={{ fontSize: "18px" }}>
                <b style={{ color: "purple" }}>
                  Thận nhiêu bao trái? <br />
                  Bán máu bao nhiêu cho đủ? <br />
                  Lại tốn tiền nữa rồi...
                </b>
              </p>
              <p
                className="text-justify"
                style={{ fontSize: "18px", color: "green" }}
              >
                <b>
                  Những câu hỏi quen thuộc đều nhằm vào 1 vấn đề chung: Làm sao
                  để chi tiêu hợp lí, <br />
                  không lãng phí luôn là một vấn đề đau đầu của bất kì ai. Người
                  Nhật có một thủ thuật tiết <br />
                  kiệm tiền cực kì đơn giản có tên gọi là Kakeibo chắc chắn sẽ
                  giúp bạn chi tiêu hợp lý hơn.
                </b>
              </p>
              <p className={`${abo["imageAbout"]} text-center`}>
                <Image
                  src="/assets/images/abc.png"
                  alt="facebook"
                  layout="fill"
                  objectFit="cover"
                />
              </p>
              <p className="text-justify">
                Khi khi có được 1 khoản tiền kha khá (từ lương, từ việc làm
                thêm, từ ba mẹ cấp cho v...v...) chắc chắn bạn đều cảm thấy rất
                hài <br />
                lòng và nhanh chóng lên một list những đồ dùng cần mua. Và rồi,
                đến giữa tháng sau, bạn lại bắt đầu than thở rằng túi mình đã{" "}
                <br />
                sạch sẽ, tháng này cạn kiệt. Cam đoan rằng một lúc nào đó, sau
                khi than thở, bạn sẽ mở ví rồi ngồi nhẩm lại xem mình đã mua thứ{" "}
                <br />
                gì mà hết từng này tiền, tại sao ngày hôm nay chỉ còn ít tiền
                như thế này…
              </p>
              <p className="text-justify">
                Dù có nghĩ đi nghĩ lại thì chắc chắn bạn vẫn sẽ luôn thấy có
                những khoản chẳng tiêu gì trong tháng vừa rồi mà vẫn hết tiền.
                Người <br />
                Nhật có một thủ thuật tiết kiệm tiền cực kì đơn giản có tên gọi
                là kakeibo chắc chắn sẽ giúp bạn chi tiêu hợp lý hơn và sẽ không
                có <br />
                những khoản chi vô lí nữa.
              </p>

              <p className="text-justify">
                Kakeibo trong tiếng Nhật có nghĩa là một cuốn số gia đình truyền
                thống. Trong cuốn sổ này, bạn sẽ viết ra kế hoạch chi tiêu chi
                tiết <br />
                của bản thân để có thể kiểm soát được ví tiền của mình dễ dàng
                hơn. Kakeibo khuyến khích mỗi người chúng ta nên nghiêm túc{" "}
                <br />
                ngồi xuống từ đầu tháng và lên kế hoạch cho chi tiêu bốn tuần
                tiếp theo.
              </p>

              <p className="text-justify">
                Đầu tiên, lấy một khoản tiền mặt nhất định từ số $ bạn nhận được
                (sau khi đã trừ đi khoản tiết kiệm) và lấy 4 phong <br />
                Tiếp theo, chia số tiền vào 4 phong bì, viết tên cho 4 nhu cầu
                cơ bản: <br />
                <b> 1.sinh hoạt</b> (thực phẩm, đi lại, sức khỏe) <br />
                <b> 2.nâng cao </b>(ăn hàng, shopping) <br />
                <b> 3.giải trí </b>(sách, truyện, nhạc, phim, Japan figure){" "}
                <br />
                <b> 4.phát sinh </b>(sửa xe, sửa máy tính, quỹ lớp).
              </p>
              <p className={`${abo["imageAbout"]} text-center`}>
                <Image
                  src="/assets/images/abcd.png"
                  alt="facebook"
                  layout="fill"
                  objectFit="cover"
                />
              </p>

              <p className="text-justify">
                Cuối mỗi tuần, bạn nên kiểm tra xem mình đã tiêu những khoản nào
                và trả lời 4 câu hỏi sau: <br />
                - Bạn có bao nhiêu tiền? <br />
                - Bạn muốn để dành bao nhiêu? <br />
                - Bạn thực sự tiêu bao nhiêu?
                <br />
                <b>
                  - Làm thế nào để cải thiện điều đó? (câu này quan trọng nhất)
                </b>
              </p>
              <p className="text-justify">
                Sau khi trả lời được hết những câu hỏi này, chắc chắn bạn sẽ nắm
                rõ được mong muốn của bản thân và cải thiện được những <br />
                khoản chi tiêu lãng phí. Còn nếu không trả lời được 4 câu hỏi
                này, chắc chắn bạn đã và đang không thực hiện nghiêm túc <br />
                pháp này.
              </p>
              <p className="text-justify">
                Ý tưởng tiết kiệm này xuất hiện từ năm 1904. Các chuyên gia cho
                biết cách này mang lại hiệu quả khá cao bởi vì việc viết ra trên{" "}
                <br />
                giấy sẽ giúp bạn chịu trách nhiệm về chi tiêu của chính mình.
                Khi tận mắt nhìn vào những gì mình ghi ra, bạn sẽ biết mình đã
                chi <br />
                tiêu hợp lí hay chưa. Bạn cũng sẽ nhận ra mình không đạt được
                mục tiêu tiết kiệm là do đang lãng phí vào những khoản nào.{" "}
                <br />
                Sổ chi tiêu đang quay trở lại với các gia đình Nhật thời gian
                gần đây, bởi người ta nhận ra dù cho đang ở thời đại công nghệ
                nhưng <br />
                không gì tốt hơn làm việc với các con số là trên những trang
                giấy. Cuốn sổ này là một cách để bạn đối chiếu mình đang chi
                tiêu tiết <br />
                kiệm chưa. Với kakeibo, người ta tin nó giúp bạn cắt giảm chi
                tiêu 35%.
              </p>

              <p className="text-justify">
                Biết được kiến thức này, hi vọng bạn ko phải lao tâm thổ huyết
                khi chạy theo những thú vui nhất thời, mà tập trung cho mục tiêu
                chính.
              </p>
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
    </>
  );
}

export default Kakeibo;
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
