import Services from "@/components/services";
import { Inter } from "next/font/google";
import CardList from "@/components/CardList/index";
import Sliders from "@/components/Slider";
import { axiosClient } from "@/libraries/axiosClient";
import Social from "@/components/social";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home(products) {
    return (
    <>
      <Carousel/>
      <CardList products={products.products} />
      <Services />
      <Sliders />
      <Social />
    </>
  );
}

export async function getStaticProps() {
  const res = await axiosClient.get("/products/all");
  const products = res.data.payload;

  return {
    props: {
      products,
    },
  };
}
