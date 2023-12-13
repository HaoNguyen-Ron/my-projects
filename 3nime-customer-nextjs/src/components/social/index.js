import React, { useEffect, useState } from "react";
import soci from "@/styles/Social.module.css";
import Image from "next/image";

function Social(props) {
  const [isActive, setIsActive] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsActive(scrollY > 50);
  };

  const handleBtnBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`${soci.social} ${isActive ? soci.visible : ""}`}>
        <a
          href="https://www.facebook.com"
          className={soci["social_a"]}
          target="_blank"
        >
          <Image
            src="/assets/images/fb.png"
            alt="facebook"
            width={25}
            height={25}
          />
          Fanpage
        </a>

        <a
          href="https://www.messenger.com/"
          className={soci["social_a"]}
          target="_blank"
        >
          <Image
            src="/assets/images/mess.png"
            alt="Messenger"
            width={25}
            height={25}
          />
          Messenger
        </a>

        <a
          href="https://www.instagram.com/"
          className={soci["social_a"]}
          target="_blank"
        >
          <Image
            src="/assets/images/inta.png"
            alt="Instagram"
            width={25}
            height={25}
          />
          Instagram
        </a>

        <a
          href="https://id.zalo.me/"
          className={soci["social_a"]}
          target="_blank"
        >
          <Image
            src="/assets/images/zalo.png"
            alt="Zalo"
            width={25}
            height={25}
          />
          Zalo
        </a>

        <a
          href="https://web.telegram.org/"
          className={soci["social_a"]}
          target="_blank"
        >
          <Image
            src="/assets/images/telegram.png"
            alt="Telegram"
            width={25}
            height={25}
          />
          Telegram
        </a>
      </div>

      <div className={`${soci.addthisContact} ${isActive ? soci.active : ""}`}>
        <ul className={soci["addThis_ul"]}>
          <li className={soci["addThis_li"]}>
            <a
              className={soci["addThis_a"]}
              href=""
              rel="nofollow"
              aria-label="phone"
            >
              <span className={soci["addThis_title"]}>
                Gọi ngay cho chúng tôi
              </span>
              <i className="fa-solid fa-phone"></i>
            </a>
          </li>
          <li className={soci["addThis_li"]}>
            <a
              className={soci["addThis_a"]}
              data-toggle="modal"
              href=""
              aria-label="email"
            >
              <span className={soci["addThis_title"]}>Liên hệ qua mail</span>
              <i className="fa-regular fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`${soci.btnBackToTop} ${isActive ? soci.active : ""}`}
        onClick={handleBtnBackToTopClick}
      >
        <i
          className="fa-solid fa-arrow-up"
          style={{ color: "#fff", marginTop: "12px" }}
        ></i>
      </div>
    </>
  );
}

export default Social;
