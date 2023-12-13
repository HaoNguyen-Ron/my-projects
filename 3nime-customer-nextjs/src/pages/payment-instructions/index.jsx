import React, { useEffect, useState } from "react";
import pay from "@/styles/Payment.module.css";
import Image from "next/image";
import Social from "@/components/social";
import { useRouter } from "next/router";

function PaymentInstructions(props) {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(router.pathname);

  const onClickTab = () => {
    setActiveTab(router.pathname);
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
      <div className={pay["payment-head"]}>
        <div className="container">
          <div className="row">
            <div className={`col-md-9 col-sm-12 col-xs-12`}>
              <div className={`mt-4 text-muted`}>
                <h1>HƯỚNG DẪN ĐẶT HÀNG &amp; THANH TOÁN TẠI 3NIME FIGURE</h1>
                <div className={`${pay["article-post-meta"]}`}>
                  <span className="author">Bởi: Admin </span>
                  <span className="date">
                    <time pubdate="" dateTime="11 Tháng 11, 2023">
                      11 Tháng 11, 2023
                    </time>
                  </span>
                </div>
              </div>
              <div className={`${pay["payment-content-pc"]}`}>
                <p className={`${pay["imageAbout"]} mt-3`}>
                  <Image
                    src="/assets/images/payment-1.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>

                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "20pt", color: "#000000" }}>
                    <strong>
                      <em>Hướng dẫn đặt hàng </em>
                    </strong>
                  </span>
                  <br />
                  <span style={{ fontSize: "20pt", color: "#000000" }}>
                    <strong>
                      <em>&amp; thanh toán tại 3NIMEFigure.vn</em>
                    </strong>
                  </span>
                </p>

                <p style={{ textAlign: "center" }}>&nbsp;</p>

                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "26.6667px" }}>
                    <b>
                      <i>--A.Đặt hàng--</i>
                    </b>
                  </span>
                </p>

                <p style={{ textAlign: "left" }}>
                  Để đặt hàng tại 3NIMEfigure.vn bạn làm như sau:
                </p>

                <p style={{ textAlign: "left" }}>
                  <strong>Bước 1.</strong> Chọn sản phẩm bạn cần mua + số lượng
                </p>
                <p style={{ textAlign: "left" }}>
                  <strong>Bước 2.</strong> 3NIME Figure có 2 loại sản phẩm
                </p>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <strong>
                      <span style={{ color: "rgb(255, 0, 0)" }}>MUA NGAY</span>
                    </strong>{" "}
                    --&gt; Hàng có sẵn, bạn có thể mua ngay
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <span style={{ color: "#ff0000" }}>
                      <b>ĐẶT TRƯỚC</b>
                    </span>
                    &nbsp;--&gt;Hàng ko có sẵn, bạn cần đặt trước 50%
                  </li>
                </ul>

                <p className={`${pay["imageAbout"]} mt-3`}>
                  <Image
                    src="/assets/images/dat_hang_1_grande.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>

                <p style={{ textAlign: "left" }}>
                  <strong>Bước 3.</strong> Nhập thông tin tên, địa chỉ, sđt,
                  email của bạn.
                </p>

                <p className={`${pay["imageAbout"]} mt-3`}>
                  <Image
                    src="/assets/images/dat_hang_2_grande.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>

                <p style={{ textAlign: "left" }}>
                  <strong>Bước 4.</strong> Nhập mã giảm giá (nếu có).
                </p>

                <p className={`${pay["imageAbout"]} mt-3`}>
                  <Image
                    src="/assets/images/dat_hang_3_grande.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>

                <p style={{ textAlign: "left" }}>
                  <strong>Bước 5.</strong>Chọn phương thức nhận hàng.
                </p>

                <p style={{ textAlign: "left" }}>
                  <strong>Bước 6.</strong>Chọn phương thức thanh toán.
                </p>

                <ul>
                  <li style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "13.3333px" }}>
                      Xem kỹ hàng của bạn là{" "}
                      <span style={{ color: "rgb(255, 0, 0)" }}>
                        <strong>MUA NGAY</strong>
                      </span>{" "}
                      hay{" "}
                      <strong>
                        <span style={{ color: "rgb(255, 0, 0)" }}>
                          ĐẶT TRƯỚC
                        </span>
                      </strong>
                      , để chọn phương thức thanh toán phù hợp.
                    </span>
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <span style={{ fontSize: "13.3333px" }}>
                      Đơn hàng của bạn sẽ{" "}
                      <strong>
                        <span style={{ color: "rgb(255, 0, 0)" }}>
                          MẶC ĐỊNH BỊ HỦY NẾU
                        </span>
                      </strong>
                      &nbsp;bạn chọn món{" "}
                      <strong>
                        <span style={{ color: "rgb(255, 0, 0)" }}>
                          ĐẶT TRƯỚC + COD&nbsp;
                        </span>
                      </strong>
                      <br />
                      <span style={{ color: "rgb(0, 0, 0)" }}>
                        (Thật vô lý khi yêu cầu giao hàng ngay 1 món đồ ko có
                        sẵn, phải ko ? ^^)
                      </span>
                    </span>
                  </li>
                </ul>

                <p className={`${pay["imageAbout"]} mt-3`}>
                  <Image
                    src="/assets/images/dat_hang_4_grande.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>

                <p style={{ textAlign: "left" }}>
                  <strong>Bước 7.</strong>Chọn phương thức thanh toán.
                </p>

                <ul>
                  <li style={{ textAlign: "left" }}>
                    <span>Kiểm tra hộp mail của bạn để xác nhận đơn hàng</span>
                  </li>
                  <li style={{ textAlign: "left" }}>
                    <span>
                      Gửi tiền cọc cho 3NIME Figure khi bạn mua món&nbsp;
                      <strong style={{ color: "rgb(255, 0, 0)" }}>
                        Đặt trước
                      </strong>
                      .
                    </span>
                  </li>
                </ul>

                <p style={{ textAlign: "center" }}>&nbsp;</p>

                <hr />

                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "26.6667px" }}>
                    <b>
                      <i>--B.Thanh toán--</i>
                    </b>
                  </span>
                </p>

                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ color: "#ff0000" }}>
                      <em>
                        <span style={{ textDecoration: "underline" }}>
                          <Image
                            src="/assets/images/payment-2.jpg"
                            alt=""
                            width={100}
                            height={100}
                          />
                          &nbsp; &nbsp;
                        </span>
                      </em>
                      <span style={{ fontSize: "12pt", color: "#ff6600" }}>
                        Cách 1. Thanh toán trực tiếp,&nbsp;cọc trực tiếp:
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <br />
                  <span style={{ fontSize: "10pt" }}>
                    Địa Chỉ: Hòa Xuân, Cẩm Lệ, Đà Nẵng
                  </span>
                  <br />
                  <span style={{ fontSize: "10pt" }}>
                    Hotline <strong>(+84)965.587.662</strong>
                    <strong>(Vui lòng gọi trước khi đến)</strong>
                  </span>
                </p>

                <hr />

                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ color: "#ff0000" }}>
                      <em>
                        <span style={{ textDecoration: "underline" }}>
                          <Image
                            src="/assets/images/payment-3.jpg"
                            alt=""
                            width={100}
                            height={100}
                          />
                          &nbsp; &nbsp;
                        </span>
                      </em>
                      <span style={{ fontSize: "12pt", color: "#ff6600" }}>
                        Cách 2. Gửi tiền vào TK của 3NIME Figure:
                      </span>
                    </span>
                  </strong>
                </p>

                <p>
                  <span style={{ fontSize: "10pt" }}>
                    Với các bạn ở xa có thể gửi vào 1 trong 10 tài khoản sau:
                  </span>
                </p>

                <h2>
                  <span
                    style={{ fontSize: "13.3333px", color: "rgb(255, 0, 255)" }}
                  >
                    NỘI DUNG CHUYỂN TIỀN LÀ MÃ SỐ ĐƠN HÀNG CỦA BẠN
                    <br />
                    Vd: Cọc 50% cho #0123456 (mã sẽ có sau khi bạn đặt hàng trên
                    web)
                  </span>
                </h2>

                <p>
                  <strong>1. Ngân hàng Techcombank</strong>
                  <br />
                  Chủ TK: Nguyễn văn A
                  <br />
                  Số TK: 123456789
                  <br />
                  Chi nhánh: Đà Nẵng
                </p>

                <p>
                  <strong>2. Ngân hàng Sacombank</strong>
                  <br />
                  Chủ TK: Nguyễn văn B
                  <br />
                  Số TK: 1234567890
                  <br />
                  Chi nhánh: Đà Nẵng
                </p>

                <p>
                  <strong>3. Ngân hàng Tiên Phong</strong>
                  <br />
                  Chủ TK: Nguyễn văn A
                  <br />
                  Số TK: 234567891
                  <br />
                  Chi nhánh: Đà Nẵng
                </p>

                <p style={{ textAlign: "center" }}>&nbsp;</p>
                <p style={{ textAlign: "center" }}>&nbsp;</p>
                <hr />

                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ color: "rgb(255, 102, 0)" }}>
                      ♦♦♦♦♦♦♦♦
                      <br />
                      <span style={{ fontSize: "12pt" }}>
                        Câu hỏi: Nếu tôi&nbsp;không có tài khoản cá nhân, ko có
                        thẻ?{" "}
                      </span>
                      <br />
                      <span style={{ fontSize: "12pt" }}>
                        Đừng lo lắng, bạn vẫn gửi $ được hoàn toàn bình thường.
                        Cách thức đơn giản như sau:
                      </span>
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "center" }}>&nbsp;</p>

                <p>1.Đến ngân hàng gần nhà bạn nhất</p>
                <p>2.Hỏi xin nhân viên phiếu: Nộp tiền vào tài khoản</p>
                <p>
                  3.Điền đủ thông tin của bạn và tài khoản của 3NIME Figure.
                  <br />
                  Dòng Nội dung gửi tiền điền như sau:
                  <br />
                  <strong>Cọc 50% cho #12345</strong> hoặc Thanh toán.
                  <strong>100% cho #MãĐơnHàng</strong>
                  <br />
                  <em>
                    #Mã đơn hàng sẽ có sau khi bạn đặt hàng trên web xong.
                  </em>
                </p>
                <p>4.Nộp đủ tiền cho nhân viên.</p>
                <p>5.Ký tên, nở nụ cười thật tươi và cầm biên nhận ra về..</p>
                <p>6.Nhắn tin cho Japan Figure biết bạn đã gửi tiền xong</p>
                <p className={`${pay["imageAbout"]} mt-3`}>
                  <Image
                    src="/assets/images/nop_ngan_hang.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>
                <p style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ color: "rgb(255, 102, 0)" }}>
                      <em>♦♦♦♦♦♦♦♦</em>
                      <br />
                      <span style={{ fontSize: "12pt" }}>
                        Câu hỏi: Tôi muốn chuyển tiền tại nhà, ko cần tới Ngân
                        Hàng?
                      </span>
                    </span>
                  </strong>
                  <br />
                  <span style={{ fontSize: "12pt" }}>
                    <strong>
                      Trả lời: Ok, vậy chỉ cần mở 1 tài khoản ngân hàng là xong.
                    </strong>
                  </span>
                </p>
                <p>
                  <span>
                    Yên tâm cách đăng ký vô cùng dễ
                    <br />
                    1. Cầm theo CMND đến ngân hàng gần nhà nhất.
                    <br />
                    2. Gặp nhân viên, cười tươi và nói TRẪM MUỐN MỞ TÀI KHOẢN
                    <br />
                    3. Điền phiếu, ký tên là xong, nhân viên sẽ hướng dẫn bạn cụ
                    thể.
                    <br />
                    Tất cả chỉ mất chừng 10 phút!
                  </span>
                </p>

                <p>&nbsp;</p>

                <hr />

                <p style={{ textAlign: "center" }}>
                  <Image
                    src="/assets/images/home.jpg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  &nbsp; &nbsp;
                  <span style={{ fontSize: "12pt" }}>
                    <strong>
                      <span style={{ fontSize: "12pt", color: "#ff6600" }}>
                        Cách 3.&nbsp;Nhận hàng và thanh toán tại nhà&nbsp;
                      </span>
                    </strong>
                    <strong>
                      <span style={{ color: "rgb(255, 102, 0)" }}>
                        (chỉ áp dụng cho Hàng có sẵn)
                      </span>
                    </strong>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt", color: "#000000" }}>
                    1.Bạn đặt hàng trên hệ thống web của Japan Figure
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt", color: "#000000" }}>
                    2.Điền đủ thông tin tên họ, địa chỉ, sđt của bạn. Hàng sẽ
                    được giao sau khi&nbsp;có xác nhận từ Japan Figure
                    <br />
                    Thời gian giao hàng từ 1-6 ngày làm việc tùy vào địa chỉ của
                    bạn.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt", color: "#000000" }}>
                    3.Nhân viên giao hàng sẽ gọi điện trước khi đến, và chỉ giao
                    hàng khi bạn bắt máy + cho phép họ đến nhà bạn giao hàng.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt", color: "#000000" }}>
                    4.Bạn có thể thanh toán 100% $ khi nhận hàng.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt", color: "#000000" }}>
                    <strong>Lưu ý:</strong> Nếu bạn từng đặt mua&nbsp;
                    <strong>[Hàng Order] , </strong>sau khi hàng về VN, bạn cũng
                    có thể nhận hàng bằng COD bình thường.
                  </span>
                </p>
                <hr />
                <p style={{ textAlign: "center" }}>
                  <Image
                    src="/assets/images/momo.jpg"
                    alt=""
                    width={50}
                    height={50}
                  />
                  &nbsp; &nbsp;
                  <strong>
                    <span style={{ fontSize: "12pt", color: "#ff6600" }}>
                      Cách 4. Chuyển tiền qua ví điện tử Momo
                    </span>
                  </strong>
                </p>
                <p>
                  <br />
                  <span>
                    <span style={{ color: "#993366" }}>
                      <strong>MoMo</strong>
                    </span>{" "}
                    là ứng dụng tài chính đầu tiên tại Việt Nam cho phép chuyển
                    nhận tiền siêu nhanh qua số điện thoại di động vô cùng tiện
                    lợi. Với những bạn ở xa, khi sử dụng Momo, bạn có thể thực
                    hiện thanh toán với Japan Figure&nbsp;ngay tức khắc.
                  </span>
                  <br />
                  Ứng dụng này tiện dụng đến mức, bạn thậm chí có thể gửi tiền
                  và:
                  <br />
                  <br />
                  <strong>_Không cần chờ đợi Ngân Hàng mở cửa.</strong>
                  <br />
                  <strong>
                    _Không cần đến trực tiếp Ngân Hàng để giao dịch.&nbsp;
                  </strong>
                  <br />
                  &nbsp;
                </p>
                <p>
                  <span style={{ color: "rgb(255, 0, 255)" }}>
                    <strong>
                      NỘI DUNG CHUYỂN TIỀN LÀ MÃ SỐ ĐƠN HÀNG CỦA BẠN
                      <br />
                      Vd: Cọc 50% cho #0123456 (mã sẽ có sau khi bạn đặt hàng
                      trên web)
                    </strong>
                  </span>
                </p>
                <p>
                  <em>
                    <strong>Cách thực hiện như sau:</strong>
                  </em>
                </p>

                <p style={{ paddingLeft: 30 }}>
                  <strong>
                    <span
                      style={{ color: "#ffffff", backgroundColor: "#cc99ff" }}
                    >
                      <span style={{ fontSize: "10pt" }}>
                        1. Cài đặt app Momo vào smartphone của bạn.
                      </span>
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "left" }}>
                  <Image
                    src="/assets/images/dt_momo.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>
                <p style={{ paddingLeft: 30 }}>
                  <span
                    style={{
                      fontSize: "10pt",
                      backgroundColor: "#cc99ff",
                      color: "#ffffff",
                    }}
                  >
                    <strong>2. Vào mục khuyến mãi, nhập 098abcxxxx</strong>
                  </span>
                </p>
                <p style={{ paddingLeft: 30 }}>
                  <Image
                    src="/assets/images/km_momo.jpg"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                    className="position-relative"
                  />
                </p>
                <p style={{ paddingLeft: 30 }}>
                  <span
                    style={{
                      fontSize: "10pt",
                      backgroundColor: "#cc99ff",
                      color: "#ffffff",
                    }}
                  >
                    <strong>3.Nạp tiền vào Momo.</strong>{" "}
                  </span>
                </p>
                <p style={{ paddingLeft: 60 }}>
                  <span style={{ textDecoration: "underline" }}>
                    <span style={{ fontSize: "10pt" }}>Có 2 cách:</span>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt" }}>
                    A. Đến nạp tiền tại các cửa hàng có giao dịch Momo gần nhà
                    bạn.
                  </span>
                  <br />
                  <span style={{ fontSize: "10pt" }}>
                    B. Nạp từ tài khoản Ngân Hàng liên kết.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "10pt" }}>&nbsp;</span>
                </p>
                <p style={{ paddingLeft: 30 }}>
                  <span style={{ fontSize: "10pt" }}>
                    <span
                      style={{ backgroundColor: "#cc99ff", color: "#ffffff" }}
                    >
                      <strong>
                        4.Trên ứng dụng Momo, bạn vào [Chuyển Tiền]
                      </strong>
                    </span>
                  </span>
                </p>
                <ul>
                  <li style={{ paddingLeft: 30 }}>
                    <span style={{ fontSize: "10pt" }}>
                      Điền sđt người nhận 0908268007.{" "}
                    </span>
                  </li>
                  <li style={{ paddingLeft: 30 }}>
                    <span style={{ fontSize: "10pt" }}>
                      Nội dung gửi là <strong>#MãĐơnHàng</strong> của bạn.
                      <br />
                      Vd: Cọc 50% #0123456, Thanh toán 100% #0123456
                    </span>
                    <div className="answer">&nbsp;</div>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "15pt" }}>
                    <strong>
                      <span
                        style={{
                          backgroundColor: "rgb(255, 0, 0)",
                          color: "rgb(255, 255, 255)",
                        }}
                      >
                        Hướng dẫn chi tiết
                      </span>
                    </strong>
                  </span>
                </p>
                <div className="accordion">
                  <ul className="list-unstyled">
                    <li>
                      <div className="question">
                        <p>
                          <strong>1. Hướng dẫn nạp tiền vào Momo</strong>
                        </p>
                      </div>
                      <div className="answer">
                        <ul className="list-unstyled">
                          <li>
                            <div className="answer">
                              <p>
                                Có nhiều cách nạp tiền vào Ví MoMo vô cùng đơn
                                giản, nhanh và an toàn.
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    <b>
                                      Cách 1: Tại gần 4.000 Điểm giao dịch của
                                      MoMo:
                                    </b>
                                    Để biết điểm giao dịch gần nhất, vào tính
                                    năng <b>Tìm điểm Nạp/Rút tiền</b>trên menu
                                    chính của Ứng dụng.
                                  </p>
                                  <p>
                                    <Image
                                      src="/assets/images/rut_momo.jpg"
                                      alt=""
                                      layout="fill"
                                      objectFit="contain"
                                      className="position-relative"
                                    />
                                  </p>
                                  <p>&nbsp;</p>Đến cửa hàng, bạn hỏi nhân viên/
                                  chủ tiệm là bạn cần nạp tiền vào Momo, và bạn
                                  sẽ được hướng dẫn cụ thể. Nhớ cầm theo CMND
                                  nhé.
                                  <p>
                                    <Image
                                      src="/assets/images/ch_momo.jpg"
                                      alt=""
                                      layout="fill"
                                      objectFit="contain"
                                      className="position-relative"
                                    />
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <p>
                              <b>
                                Cách 2: Nạp tiền với tài khoản/thẻ ngân hàng.
                                Bạn có thể nạp vào từ 3 nguồn sau:
                              </b>
                            </p>
                          </li>
                        </ul>
                        <ul />
                        <p>
                          - Nguồn tiền tử những các tài khoản ngân hàng có liên
                          kết với Ví MoMo (Vietcombank, VPBank, TPBank, OCB,
                          ACB, VietinBank, Eximbank, Sacombank...). Thực hiện
                          liên kết theo hướng dẫn{" "}
                          <a href="https://momo.vn">tại đây.</a>
                          <br />- Nguồn tiền từ 25 thẻ ATM nội địa
                          <br />- Nguồn tiền Thẻ quốc tế (Visa/Master)
                        </p>
                        <p>
                          <Image
                            src="/assets/images/22_nganhang.jpg"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                            className="position-relative"
                          />
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="question">
                        <p>
                          <strong>2. Hướng dẫn rút tiền từ Momo</strong>
                        </p>
                      </div>
                      <div className="answer">
                        <p>
                          Để rút tiền khỏi ví, bạn có thể đến bất kỳ Điểm giao
                          dịch nào của MoMo và yêu cầu rút (khi đi nhớ mang theo
                          CMND). Bạn có thể tìm địa chỉ ĐGD khi chọn Điểm
                          Nạp/Rút tại màn hình trong ví MoMo.
                        </p>
                        <p>
                          Ngoài ra, nếu Ví MoMo của bạn đã liên kết với 1 trong
                          8 ngân hàng sau: Vietcombank, VPBank, TPBank, OCB,
                          ACB, VietinBank, Eximbank, Sacombank (hướng dẫn liên
                          kết
                          <a href="https://momo.vn">tại đây</a>
                          ), bạn có thể rút bất kỳ lúc nào từ ví MoMo về tài
                          khoản ngân hàng .
                        </p>
                        <p>
                          <Image
                            src="/assets/images/rtien_momo.jpg"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                            className="position-relative"
                          />
                        </p>
                        <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        <p style={{ textAlign: "justify" }}>&nbsp;</p>
                        <p style={{ textAlign: "justify" }}>&nbsp;</p>

                        <p style={{ textAlign: "center" }}>
                          <span style={{ fontSize: "10pt" }}>
                            Email hỗ trợ&nbsp;
                            <a href="mailto:support@3nimefigure.vn">
                              support@3nimefigure.vn
                            </a>
                            <br />
                            Hotline <strong>090.xxx.xxx</strong>
                            <strong>(Vui lòng gọi trước khi đến)</strong>
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-article-tags">
                  <strong className="tags-title">Tags: </strong>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #Hướng dẫn,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #đặt hàng,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #thanh toán,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #Japan Figure,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #gửi tiền,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #chuyển khoản,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #Ví Momo,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #Momo,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #Ví điện tử,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #COD,
                  </a>
                  <a
                    className={`${pay["tag"]}`}
                    href="http://localhost:3000/payment-instructions"
                  >
                    #giao dịch,
                  </a>
                  <hr />
                </div>
              </div>
            </div>

            <div
              className={`col-md-3 col-sm-12 col-xs-12 mb-5 ${pay["article-post-meta"]}`}
            >
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

export default PaymentInstructions;

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
