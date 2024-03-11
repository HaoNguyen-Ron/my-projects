import styles from "@/styles/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className=" d-block">
      <div className={` ${styles.footer_banner}`}>
        <div className="d-flex">
          <div className={`col-2 ${styles.gallery_item}`}>
            <a
              className={` ${styles.groupbanner_hover}`}
              href="//www.instagram.com/japanfigure.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={` ${styles.lazyloaded}`}
                data-src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_1_img.jpg?v=316"
                src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_1_img.jpg?v=316"
                alt="instagram"
              />
            </a>
          </div>

          <div className={`col-2 ${styles.gallery_item}`}>
            <a
              className={` ${styles.groupbanner_hover}`}
              href="//www.instagram.com/japanfigure.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={` ${styles.lazyloaded}`}
                data-src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_2_img.jpg?v=316"
                src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_2_img.jpg?v=316"
                alt="instagram"
              />
            </a>
          </div>

          <div className={`col-2 ${styles.gallery_item}`}>
            <a
              className={` ${styles.groupbanner_hover}`}
              href="//www.instagram.com/japanfigure.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={` ${styles.lazyloaded}`}
                data-src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_3_img.jpg?v=316"
                src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_3_img.jpg?v=316"
                alt="instagram"
              />
            </a>
          </div>

          <div className={`col-2 ${styles.gallery_item}`}>
            <a
              className={` ${styles.groupbanner_hover}`}
              href="//www.instagram.com/japanfigure.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={` ${styles.lazyloaded}`}
                data-src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_4_img.jpg?v=316"
                src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_4_img.jpg?v=316"
                alt="instagram"
              />
            </a>
          </div>

          <div className={`col-2 ${styles.gallery_item}`}>
            <a
              className={` ${styles.groupbanner_hover}`}
              href="//www.instagram.com/japanfigure.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={` ${styles.lazyloaded}`}
                data-src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_5_img.jpg?v=316"
                src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_5_img.jpg?v=316"
                alt="instagram"
              />
            </a>
          </div>

          <div className={`col-2 ${styles.gallery_item}`}>
            <a
              className={` ${styles.groupbanner_hover}`}
              href="//www.instagram.com/japanfigure.vn/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={` ${styles.lazyloaded}`}
                data-src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_6_img.jpg?v=316"
                src="//theme.hstatic.net/1000160337/1000885200/14/gallery_item_6_img.jpg?v=316"
                alt="instagram"
              />
            </a>
          </div>

        </div>
      </div>

      <div
        className={`d-md-flex d-lg-flex justify-content-center align-item-center ${styles.footer_bg}`}
      >
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-3">
              <h3 className={styles.footer_title}>
                <span className={styles.color_3nime}>3NIME </span> Figure
              </h3>
              <p>
                <span className={styles.color_3nime}>3NIME </span>Figure shop
                tại Đà Nẵng chuyên bán các sản phẩm mô hình figure anime chính
                hãng Nhật Bản như gameprize, nendoroid, mô hình scale..
              </p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3">
              <p>
                <bold>Địa chỉ:</bold> Hòa xuân, Cẩm Lệ, Đà Nẵng
              </p>
              <p>
                <span className={styles.color_3nime}>3NIME </span> Figure chưa
                có không gian trưng bày, bạn vui lòng hẹn trước khi đến
              </p>
              <p>Điện thoại: +84 985655221</p>
              <p>Email: support@japanfigure.vn</p>
            </div>
            <div className="col col-12 col-md-6 col-lg-3">
              <h3>Hỗ trợ khách hàng</h3>
              <ul>
                <li>
                  <Link href='/aboutUs'>Tìm kiếm</Link>
                </li>
                <li>
                  <Link href="/">Giới thiệu</Link>
                </li>
              </ul>
            </div>
            <div className="col col-12 col-md-6 col-lg-3">
              <h3>Chăm sóc khách hàng</h3>
              <div className="d-flex align-items-center gap-2">
                <div>
                  <i
                    className={`fa-solid fa-phone ${styles.phone_bigsize}`}
                  ></i>
                </div>
                <div>
                  <div>0965 587 662</div>
                  <div>support@3nimefigure.vn</div>
                </div>
              </div>
              <h3>Follow Japan Figure</h3>

              <div className={`${styles.logo_icon} d-flex`}>
                <Link href="">
                  <i className="fa-solid fa-location-pin" />
                </Link>
                <Link href="">
                  <i className="fa-brands fa-twitter" />
                </Link>
                <Link href="">
                  <i className="fa-brands fa-pinterest" />
                </Link>
                <Link href="">
                  <i className="fa-brands fa-google-plus-g" />
                </Link>
                <Link href="">
                  <i className="fa-brands fa-square-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bg_under}>
        <div className="container d-flex justify-content-center align-item-center">
          Copyright © 2023 Japan Figure. Powered by Haravan
        </div>
      </div>
    </footer>
  );
}

export default Footer;
