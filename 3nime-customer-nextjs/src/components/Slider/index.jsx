import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import x from "@/components/Slider/Slider.module.css";

const data = [
  {
    name: `Đặt mua và thanh toán`,
    img: `https://file.hstatic.net/1000160337/article/01_e149a60016384204a9d75871f3ca6c5d_large.jpg`,
    review: `Figure giả là mặt hàng trái phép được làm dựa trên figure chính hãng mà 
    không được cấp phép từ Good Smile Company, do đó, chúng ta không nên ủng hộ các loại
     figure giả. Nhiều trường hợp các figure giả vẫn có logo chính hãng của Good Smile Company
      hoặc các công ty phát hành, tuy nhiên những logo này được sử dụng trái phép. 
      Hãy luôn cẩn thận khi mua hàng online.`,
    link: `/payment-instructions`,
  },
  {
    name: `Kakeibo phương pháp tiết kiệm, chi tiêu hợp lý`,
    img: `http://file.hstatic.net/1000160337/article/arisutan1401803956.jpeg`,
    review: `Thận nhiêu trái?Bán máu bao nhiêu cho đủ?Lại tốn tiền nữa rồi...
    Những câu hỏi quen thuộc đều nhằm vào 1 vấn đề chung: Làm sao để chi tiêu hợp lí,....`,
    link: `/Blogs/Kakeibo`,
  },
  {
    name: `Khi nào 1 figure "có" tại Nhật Bản?`,
    img: `http://file.hstatic.net/1000160337/article/vi_sao_nen_dat_hang_som_tai_japanfigure.jpg`,
    review: `KHI NÀO 1 FIGURE "CÓ" TẠI NHẬT BẢN?
    KHI "CÓ" THÌ SỐ LƯỢNG NHIỀU KHÔNG?"CÓ" RỒI MỚI ĐẶT LIỆU KỊP KHÔNG? Đây là những câu hỏi được
     rất nhiều bạn quan tâm.Trước tiên, Figure Nhật...`,
    link: `/Blogs/appear`,
  },
  {
    name: `Đây là cách giúp tui kiếm về 250K mỗi giờ`,
    img: `https://file.hstatic.net/1000160337/article/cach_tui_dang_kiem_250k_gio_miku_1f00f95d0ad6482791622801bcb4cb1b.png`,
    review: `Nhưng nếu kiên trì theo đúng từng hướng dẫn nhỏ, 
    thực hành trên giấy thật nhiều lần trước khi bắt đầu,
    thì việc bạn kiếm về 250K/ mỗi giờ như mình là hoàn toàn có thể.`,
    link: `/Blogs/instruct`,
  },
];

function Sliders() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <div className={` ${x["section"]}`}>
        <div className={` ${x["section-heading"]}`}>
          <h2 className={` ${x["hTitle"]}`}>
            <a href="collections/scale-figure">Dành Cho Người Mới Bắt Đầu</a>
          </h2>
          <p>Hướng dẫn cơ bản</p>
        </div>
      </div>
      <div className="w-full m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <div
                    className={x["groupbanner-hover"]}
                    style={{ height: "300px" }}
                  >
                    <img
                      src={d.img}
                      alt=""
                      className="h-44 w-44 rounded-full"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <h6 className={`${x["custom"]}`}>{d.name}</h6>
                  <p
                    className={`${x["overflow-ellipsis"]}`}
                    style={{ height: "150px" }}
                  >
                    {d.review}
                  </p>
                  <a href={d.link}>
                    <button type="button" className="btn btn-outline-danger">
                      Xem Chi Tiết
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Sliders;
