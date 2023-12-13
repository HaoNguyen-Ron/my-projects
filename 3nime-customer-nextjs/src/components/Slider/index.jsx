import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import x from "@/components/Slider/Slider.module.css";



const data = [
  {
    name: `Kakeibo phương pháp tiết kiệm, chi tiêu hợp lý`,
    img: `http://file.hstatic.net/1000160337/article/arisutan1401803956.jpeg`,
    review: `Thận nhiêu trái?Bán máu bao nhiêu cho đủ?Lại tốn tiền nữa rồi...
    Những câu hỏi quen thuộc đều nhằm vào 1 vấn đề chung: Làm sao để chi tiêu hợp lí,....`,
    link:`http://localhost:3000/Blogs/Kakeibo`
  },
  {
    name: `Khi nào 1 figure "có" tại Nhật Bản?`,
    img: `http://file.hstatic.net/1000160337/article/vi_sao_nen_dat_hang_som_tai_japanfigure.jpg`,
    review: `KHI NÀO 1 FIGURE "CÓ" TẠI NHẬT BẢN?
    KHI "CÓ" THÌ SỐ LƯỢNG NHIỀU KHÔNG?"CÓ" RỒI MỚI ĐẶT LIỆU KỊP KHÔNG? Đây là những câu hỏi được
     rất nhiều bạn quan tâm.Trước tiên, Figure Nhật...`,
     link:`http://localhost:3000/Blogs/appear`
  },
  {
    name: `Đây là cách giúp tui kiếm về 250K mỗi giờ`,
    img: `https://file.hstatic.net/1000160337/article/cach_tui_dang_kiem_250k_gio_miku_1f00f95d0ad6482791622801bcb4cb1b.png`,
    review: `Nhưng nếu kiên trì theo đúng từng hướng dẫn nhỏ, 
    thực hành trên giấy thật nhiều lần trước khi bắt đầu,
    thì việc bạn kiếm về 250K/ mỗi giờ như mình là hoàn toàn có thể.`,
     link:`http://localhost:3000/Blogs/instruct`
  },
];

function Sliders() {
  const settings = {
    infinite: true,
    speed: 0.5,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div style={{marginBottom:"50px"}}>
      <div className={` ${x["section"]}`}>
        <div className={` ${x["section-heading"]}`}>
          <h2 className={` ${x["hTitle"]}`}>
            <a href="collections/scale-figure">Dành Cho Người Mới Bắt Đầu</a>
          </h2>
          <p>Hướng dẫn cơ bản</p>
        </div>
      </div>
      <div className="w-3/4 m-auto">
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
                      style={{maxWidth:'100%'}}
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4"
                >
                  <h6 className={`${x["custom"]}`}>{d.name}</h6>
                  <p className={`${x["overflow-ellipsis"]}`} style={{ height: "150px" }}>{d.review}</p>
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
