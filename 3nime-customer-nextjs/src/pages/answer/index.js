import React, { useEffect, useState } from "react";
import Social from "@/components/social";
import abo from "@/styles/AboutUs.module.css";
import Image from "next/image";
import Link from "next/link";
import pay from "@/styles/Payment.module.css";

function Answer(props) {
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
                    <span>Hỏi và Đáp</span>
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
                <h1>Hỏi và Đáp</h1>
              </div>
              <div className="contentAboutusDetail">
                <p className={`${abo["imageAbout"]} text-center`}>
                  <Image
                    src="/assets/images/hoi_dap.jpg"
                    alt="facebook"
                    layout="responsive"
                    width={500}
                    height={500}
                    priority
                    srcSet={{
                      base: "/assets/images/hoi_dap.jpg",
                      500: "/assets/images/hoi_dap.jpg 500w",
                      300: "/assets/images/hoi_dap.jpg 300w",
                    }}
                    sizes="(max-width: 767px) 300px, 500px"
                  />
                </p>

                <p className="text-center">&nbsp;</p>

                <h2 style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#ffffff" }}>
                      <span>
                        <span>
                          <span style={{ backgroundColor: "#27ae60" }}>
                            A. SẢN PHẨM
                          </span>
                        </span>
                      </span>
                    </span>
                  </strong>
                </h2>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(153, 51, 102)" }}>
                    <strong>
                      1.
                      <br />
                      Hỏi:
                    </strong>
                  </span>
                  &nbsp;Figure Nhật cao bao nhiêu&nbsp;?
                  <br />
                  <span style={{ color: "rgb(255, 0, 0)" }}>
                    <strong>Đáp:</strong>
                  </span>
                  &nbsp;Figure Nhật Bản được thu nhỏ theo 1 tỉ lệ nhất
                  định&nbsp;thường gặp là 1/10, 1/8, 1/7, 1/6, 1/5, hoặc các tỉ
                  lệ lớn hơn như 1/4, 1/3, 1/2.5, 1/2 và hiếm nhất là 1/1. Đây
                  gọi là Scale figure.
                </p>
                <p style={{ textAlign: "justify" }}>
                  [Chiều cao của figure = khoảng cách từ đáy cho tới điểm cao
                  nhất của figure đó.]
                  <br />
                  <br />
                  Khi gặp 1 figure 1/8 bạn sẽ hiểu là: &ldquo;Ah figure này cao
                  bằng 1/8 nguyên bản nhân vật trong phim/ truyện /game với đúng
                  tư thế đó&rdquo;.
                  <br />
                  Vd: Binh trưởng Levi cao 160cm&nbsp;(theo lời tác giả Hajime
                  Isayama)---&gt;figure 1/8 của anh cao 20cm. Đơn giản vậy thôi
                  NHƯNG 20cm này sẽ còn biến đổi khi&nbsp;nhân vật chạy, bay,
                  nhảy, đội mũ, mang giày, vác kiếm trên đầu, đứng 1
                  chân&nbsp;trên sa bàn...bla bla bla nhớ cộng trừ vào khi bạn
                  suy từ chiều cao figure ra chiều cao thật của nhân vật.
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(153, 51, 102)" }}>
                    <strong>2.</strong>
                  </span>
                  <br />
                  <span style={{ color: "rgb(153, 51, 102)" }}>
                    <strong>Hỏi:</strong>
                  </span>{" "}
                  Tôi có thể mua hàng nhái, hàng giả, hàng fake tại 3NIME Figure
                  được ko ?<br />
                  <span style={{ color: "rgb(255, 0, 0)" }}>
                    <strong>Đáp:</strong>
                  </span>{" "}
                  Không được, 3NIME Figure là nơi chỉ dành cho những sản phẩm có
                  bản quyền. Tất cả figure đều nhập khẩu từ Nhật Bản.
                </p>

                <p style={{ textAlign: "justify" }}>
                  <br />
                  <span style={{ color: "#993366" }}>
                    <strong>
                      3.
                      <br />
                      Hỏi:
                    </strong>
                  </span>
                  <span>
                    &nbsp;Làm sao để phân biệt được hàng thật và hàng giả?
                  </span>
                  <br />
                  <span style={{ color: "#ff0000" }}>
                    <strong>Đáp:</strong>
                  </span>
                  <span>
                    &nbsp;Dựa vào kinh nghiệm quan sát/ giá thành. 3NIME Figure
                    có 1 bài hướng dẫn
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "#993366" }}>
                    <strong>
                      4.
                      <br />
                      Hỏi:
                    </strong>
                  </span>
                  <span>
                    {" "}
                    Tại sao cùng 1 kích thước như nhau, số lượng phụ kiện tương
                    đồng, lượng nhựa tương tự nhau, mức độ chi tiết, thẩm mỹ
                    không hề kém cạnh...nhưng figure này lại cao giá hơn figrue
                    kia như vậy ?
                  </span>
                  <br />
                  <br />
                  <span style={{ color: "#ff0000" }}>
                    <strong>Đáp:</strong>
                  </span>
                  <br />
                  <span>
                    <span style={{ fontSize: "15pt" }}>
                      <strong>Có 2 lý do chính: HOT VÀ HIẾM&nbsp;</strong>
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <strong>
                      <span style={{ color: "rgb(51, 102, 255)" }}>
                        Thứ nhất HOT
                      </span>
                    </strong>{" "}
                    là độ nổi tiếng nhân vật khác nhau bạn ạ, trong cùng 1
                    series nhưng:&nbsp;
                    <br />
                    -Doraemon lúc nào cũng đắt gấp đôi Nobita, Shizuka là chuyện
                    thường thấy
                    <br />
                    -Son Goku phải đắt gấp 3 lần Vegeta là điều hiển nhiên.
                    <br />
                    -Giá Miku phải bằng Rin và Len cộng lại, là chuyện dễ gặp
                    <br />
                    -2 chị em song sinh, nhưng Rem lúc nào gấp đôi giá với Ram.
                    <br />
                    ...rất nhiều trường hợp tương tự khác.
                    <br />
                    Nhân vật nào được nhiều người yêu thích hơn, phủ sóng mạnh
                    hơn, tầm ảnh hưởng rộng hơn, bán cháy hàng hơn,...thì mặc
                    nhiên giá trị nhân vật đó phải cao hơn những nv còn lại.
                  </span>
                  <br />
                  &nbsp;
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <strong>
                      <span style={{ color: "rgb(51, 102, 255)" }}>
                        Thứ hai HIẾM
                      </span>
                      &nbsp;
                    </strong>
                    ngày phát hành là điều tối quan trọng bạn cần lưu tâm trong
                    1 loạt thông tin về 1 figure. 1 Figure chính hãng luôn có
                    ngày phát hành ấn định, đôi lúc lịch này bị trì hoãn do nhà
                    sản xuất. Nhưng nhìn chung, nếu bạn đặt mua 1 figure càng
                    sớm trước ngày phát hành bao nhiêu, thì bạn càng sẽ có được
                    giá tốt bấy nhiêu, biên độ an toàn là 4-6 tháng trước khi
                    phát hành.
                  </span>
                </p>

                <blockquote>
                  <span>
                    Trường hợp của Dark Angel Olivia là hết hàng chỉ 2 tiếng sau
                    khi mở bán vào tháng 9/2013 rồi đấy.
                  </span>
                </blockquote>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    Càng cận phát hành nguy cơ hết hàng càng cao, những nhân vật
                    càng nổi tiếng, càng limited thì sẽ càngcháy hàng trước khi
                    phát hành 2-3 tháng.
                    <br />
                    Đặc biệt sau khi phát hành, figure hot sẽ trở thành hiếm và
                    tăng giá theo thời gian mỗi tuần mỗi tháng.
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <em>
                    3NIME Figure sẽ cố gắng cập nhật giá trên web theo mỗi tháng
                    nhưng chắc chắn ko theo dõi được mỗi ngày biến động giá của
                    hàng triệu figure đã phát hành&nbsp;
                    <br />
                    Vậy nên bạn cần check giá của những [figure CẦN CỌC 50%]
                    trước với 3NIME Figure trước khi đồng ý mua hàng nhé.
                  </em>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "#993366" }}>
                    <strong>
                      5.
                      <br />
                      Hỏi:
                    </strong>
                  </span>
                  <span>
                    &nbsp;Tại sao figure Nhật lại biến động giá theo thời gian
                    như vậy?
                  </span>
                  <br />
                  <span style={{ color: "#ff0000" }}>
                    <strong>Đáp:</strong>
                  </span>
                  <span>
                    &nbsp;Figure Nhật Bản là những mặt hàng có&nbsp;bản quyền và
                    được sản xuất với số lượng giới hạn. Sản phẩm limited dao
                    động từ 500-3000 hộp, sản phẩm standard đại trà hơn thì có
                    thể lên 10.000-50.000 hộp. Nhưng dù cho&nbsp;sản xuất nhiều
                    thế nào thì vẫn khó sánh được với lượng người mua, otaku,
                    fan hâm mộ đông đảo trên kháp thế giới (trong đó có
                    VN).&nbsp;
                  </span>
                  Figure càng nổi tiếng thì sẽ càng khan hiếm dần theo thời
                  gian, giá trị figure sẽ tăng dần theo mỗi năm, mỗi tháng hoặc
                  thậm chí mỗi tuần. Cứ 1 đại lý hết hàng thì những đại lý khác
                  sẽ tăng giá. Dẫn tới giá trị thực khi về VN cũng tăng theo.
                </p>

                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#8e44ad" }}>6.</span>
                    <br />
                    <span style={{ color: "rgb(128, 0, 0)" }}>Hỏi:</span>
                  </strong>
                  <span>&nbsp;Figure hot lúc nào giảm giá ko ?&nbsp;</span>
                  <br />
                  <span style={{ color: "rgb(255, 0, 0)" }}>
                    <strong>Đáp: </strong>
                    <span style={{ color: "rgb(0, 0, 0)" }}>
                      Có, giảm giá khi được TÁI PHÁT HÀNH. Và thời gian tái phát
                      hành phụ thuộc vào nhà phát hành.
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#993366" }}>7.</span>
                  </strong>
                  <br />
                  <strong>
                    <span style={{ color: "#993366" }}>Hỏi:</span>
                  </strong>
                  <span>
                    &nbsp;Ngoài những sản phẩm trên web, 3NIME Figure có nhận
                    đặt hàng những figure khác ko?
                  </span>
                  <br />
                  <strong>
                    <span style={{ color: "#ff0000" }}>Đáp:</span>
                  </strong>
                  <span>
                    &nbsp;Có. Nếu bạn có nhu cầu đặt những figure Nhật khác, vui
                    lòng liên hẹ tụi mình qua mail support@3nimefigure.vn
                  </span>
                </p>

                <h2 style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#ffffff" }}>
                      <span>
                        <span style={{ backgroundColor: "#27ae60" }}>
                          B. THỜI GIAN
                        </span>
                      </span>
                    </span>
                  </strong>
                </h2>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "#993366" }}>
                    <strong>
                      1.
                      <br />
                      Hỏi:
                    </strong>
                  </span>
                  <span>
                    &nbsp;Ngày phát hành là gì, nó có quan trọng không?
                  </span>
                  <br />
                  <span style={{ color: "#ff0000" }}>
                    <strong>Đáp:</strong>
                  </span>
                  <span>
                    &nbsp;Ngày phát hành là ngày chính thức một 1 figure xuất
                    hiện trên thị trường, là ngày sản phẩm bắt đầu được chuyển
                    đến tay người mua. Đây là thời điểm cực kỳ quan trọng, bạn
                    phải lưu tâm cao độ vì nó ảnh hưởng trực tiếp tới giá thành
                    sản phẩm.
                    <br />
                    Bạn đặt mua trước ngày phát hành ---&gt; bạn mua được với
                    giá tốt nhất từ nhà sản xuất.
                    <br />
                    Bạn chờ tới ngày phát hành rồi mới mua ---&gt;&nbsp;nguy cơ
                    hết hàng cao, giá tăng dần theo mỗi tháng vì độ hiếm. Tốc độ
                    tăng giá sẽ chóng mặt khi đó là figure nổi tiếng + khó tìm.
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <span style={{ color: "#993366" }}>
                      <strong>
                        2.
                        <br />
                        Hỏi:
                      </strong>
                    </span>
                    <span>
                      &nbsp;Tôi có thể đặt mua trước ngày phát hành bao lâu?
                    </span>
                    <br />
                    <span style={{ color: "#ff0000" }}>
                      <strong>Đáp:</strong>
                    </span>
                    <span>
                      &nbsp;Từ 3 tháng, 6 tháng tới 1 năm tùy sản phẩm và tùy
                      vào nhu cầu của bạn. Các nhà phát hành 3NIME Figure đều mở
                      Pre-order/ đặt mua trước &lsquo;ngày phát hành&rsquo; 1
                      khoảng thời gian dài. Mục đích là để bạn có thể kịp chuẩn
                      bị $, mặt khác là để họ thăm dò thị trường, nhắm xem sản
                      xuất số lượng bao nhiêu là đủ.&nbsp;
                    </span>
                  </span>
                  <span>
                    <span>
                      Bạn đặt càng sớm thì giá sẽ càng tốt vì như 3NIME Figure
                      có nói ở trên, giá figure sẽ có khuynh hướng tăng dần theo
                      thời gian.
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <span>
                      <span style={{ color: "#993366" }}>
                        <strong>
                          3.
                          <br />
                          Hỏi:
                        </strong>
                      </span>
                      <span>
                        &nbsp;Ngày ra mắt, có giống như ngày phát hành ko ?
                      </span>
                      <br />
                      <span style={{ color: "#ff0000" }}>
                        <strong>Đáp:</strong>
                      </span>
                      <span>
                        &nbsp;Không. 1 figure sản phẩm mẫu thường được ra mắt
                        khá lâu trước khi phát tháng (6 tháng - 1 năm). Figure
                        được ra mắt trong triễn lãm, trong các kỳ lễ hội hay
                        trong các bài blog giới thiệu sản phẩm mới. Khi nhận
                        thấy figure này được quan tâm nhiều, thì sau đó mới tiến
                        hành tô vẽ, sản xuất hàng loạt rồi tiến tới phát hành.
                        <br />
                        Cũng với lý do trên, rất nhiều figure đã &lsquo;ra
                        mắt&rsquo; nhưng không được &lsquo;phát hành&rsquo;.
                      </span>
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <span style={{ color: "#993366" }}>
                      <strong>
                        4.
                        <br />
                        Hỏi:
                      </strong>
                    </span>
                    <span>&nbsp;Khi nào tôi mới nhận được hàng ?</span>
                    <br />
                    <span style={{ color: "#ff0000" }}>
                      <strong>Đáp:</strong>
                    </span>
                    <span>
                      &nbsp;2 tuần tính từ ngày phát hành. Nếu sản phẩm đã phát
                      hành rồi, thời gian hàng về VN sẽ là 1-2 tuần tính từ lúc
                      bạn cọc tiền. Và thời gian hàng từ 3NIME Figure về tới nhà
                      bạn là 1-6 ngày tùy địa chỉ của bạn. 3NIME Figure ship
                      toàn lãnh thổ VN.
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <span style={{ color: "#993366" }}>
                      <strong>
                        5.
                        <br />
                        Hỏi:
                      </strong>
                    </span>
                    &nbsp;Tôi ở HCM, liệu tôi có thể đến shop nhận hàng ngay khi
                    có hàng được ko ?<br />
                    <span style={{ color: "#ff0000" }}>
                      <strong>Đáp:</strong>
                    </span>
                    &nbsp;Tất nhiên là được, bạn vui lòng hẹn trước khi đến
                    (điện thoại, nhắn tin, fb, chat...)
                  </span>
                </p>

                <h2 style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ color: "#ffffff" }}>
                      <span>
                        <span style={{ backgroundColor: "#27ae60" }}>
                          C.&nbsp;CÁCH THỨC THANH TOÁN
                        </span>
                      </span>
                    </span>
                  </strong>
                </h2>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(0, 0, 0)" }}>
                    <span style={{ color: "rgb(153, 51, 102)" }}>
                      <strong>
                        1.
                        <br />
                        Hỏi:
                      </strong>
                      &nbsp;Tôi có thể mua hàng có sẵn bằng cách COD-nhận hàng +
                      thanh toán tại nhà được ko&nbsp;?
                      <br />
                      <span style={{ color: "#000000" }}>
                        <span style={{ color: "#ff0000" }}>
                          <strong>Đáp:</strong>
                        </span>
                        &nbsp;Được. với hàng có sẵn, bạn có thể mua ngay và
                        thanh toán tại nhà. Bạn được quyền kiểm tra hàng trước
                        khi trả tiền. Nếu là hàng cũ, bạn có thể kiểm tra nội
                        dung bên trong
                      </span>
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(0, 0, 0)" }}>
                    <span style={{ color: "rgb(153, 51, 102)" }}>
                      <strong>
                        2.
                        <br />
                        Hỏi:
                      </strong>
                    </span>
                    &nbsp;Tôi có thể mua hàng đặt trước/ hàng order mà không cần
                    cọc trước được ko ?
                  </span>
                  <br />
                  <span style={{ color: "rgb(0, 0, 0)" }}>
                    <span style={{ color: "rgb(255, 0, 0)" }}>
                      <strong>Đáp:</strong>
                    </span>{" "}
                    Không được. Figure Nhật Bản&nbsp;là những mặt hàng cao cấp
                    và có giá trị không nhỏ, khi đặt trước bằng &lsquo;lời
                    nói&rsquo; thì ko có gì chắc chắn bạn sẽ mua khi hàng được
                    nhập về xong cả.&nbsp;3NIME Figure chỉ đặt về sau khi nhận
                    được khoản cọc từ bạn.
                  </span>
                </p>

                <h2 style={{ textAlign: "justify" }}>
                  <span style={{ color: "#ffffff" }}>
                    <strong>
                      <span>
                        <span style={{ backgroundColor: "#27ae60" }}>
                          D. CÁCH THỨC VẬN CHUYỂN
                        </span>
                      </span>
                    </strong>
                  </span>
                </h2>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(51, 102, 255)" }}>
                    <span style={{ color: "#000000" }}>
                      <span style={{ color: "#993366" }}>
                        <strong>
                          1.
                          <br />
                          Hỏi:
                        </strong>
                      </span>
                      &nbsp;Sản phẩm được đóng gói an toàn không?
                    </span>
                    <br />
                    <span style={{ color: "#000000" }}>
                      <span style={{ color: "#ff0000" }}>
                        <strong>Đáp:</strong>
                      </span>
                      &nbsp;Mỗi sản phẩm tại 3NIME Figure đều được đóng gói kỹ
                      lưỡng, bao lót chống sốc đầy đủ trước khi chuyển đi. Bạn
                      có thể làm rớt kiện hàng từ độ cao 2 mét mà không sợ ảnh
                      hưởng nội dung bên trong.
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(51, 102, 255)" }}>
                    <span style={{ color: "#000000" }}>
                      <span style={{ color: "#993366" }}>
                        <strong>
                          2.
                          <br />
                          Hỏi:
                        </strong>
                      </span>
                      &nbsp;Phí vận chuyển là bao nhiêu?
                      <br />
                      <span style={{ color: "#000000" }}>
                        <span style={{ color: "#ff0000" }}>
                          <strong>Đáp:</strong>
                        </span>
                        &nbsp;Dao động từ 20.000đ-150.000đ tùy kích thước kiện
                        hàng và tùy địa chỉ của bạn xa hay gần. 3NIME Figure
                        miễn phí ship khi bạn mua hàng từ 1.000.000đ trở lên,
                        phạm vi áp dụng TOÀN QUỐC.
                      </span>
                    </span>
                  </span>
                </p>

                <p style={{ textAlign: "justify" }}>
                  <span>
                    <span>
                      <span>
                        <strong>
                          <span style={{ color: "#993366" }}>
                            3.
                            <br />
                            Hỏi:&nbsp;
                          </span>
                        </strong>
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          Tôi muốn hẹn giờ giao có được ko?
                        </span>
                        <br />
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          <strong>
                            <span style={{ color: "#ff0000" }}>Đáp:</span>
                          </strong>
                          &nbsp;Không được. Giờ giấc sẽ tùy thuộc vào dịch vụ
                          chuyển phát. Họ sẽ đến trong giờ hành chính và gọi
                          điện trước cho bạn. Khi bạn bắt máy, xác nhận, thì
                          nhân viên giao hàng sẽ đến giao hàng cho bạn.
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ color: "rgb(51, 102, 255)" }}>
                    <span style={{ color: "#000000" }}>
                      <span style={{ color: "#993366" }}>
                        <strong>
                          4.
                          <br />
                          Hỏi:
                        </strong>
                      </span>
                      &nbsp;Nếu khi hàng được giao tới nhưng tôi đang bận, không
                      tiện nhận, phải làm thế nào?
                      <br />
                      <span style={{ color: "#000000" }}>
                        <span style={{ color: "#ff0000" }}>
                          <strong>Đáp:&nbsp;</strong>
                          <span style={{ color: "rgb(0, 0, 0)" }}>
                            Bạn có thể hẹn lại người giao hàng, giao lại vào
                            thời điểm khác trong ngày, hoặc giao lại vào ngày
                            hôm khác.
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
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
                <div className={`${abo["group-sidebox-banner"]}`}>
                  <figure className="mb-0 mt-4">
                    <a className={`${abo["about-head-a"]}`} href="#">
                      <Image
                        className="position-static"
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
                        image="/assets/images/blog_1.jpg"
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

export default Answer;

const BlogItem = ({ image, title, title2, title3, title4, date, href }) => {
  return (
    <>
      <li>
        <div className={`${pay["item-article"]} d-flex clearfix`}>
          <div className="post-image">
            <a href={href}>
              <Image
                className={`${pay["lazyloaded"]}`}
                src={image}
                alt={title}
                width={70}
                height={70}
              />
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
