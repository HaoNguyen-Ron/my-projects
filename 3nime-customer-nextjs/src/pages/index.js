import Services from "@/components/services";
import { Inter } from "next/font/google";
import CardList from "@/components/CardList/index";
import Sliders from "@/components/Slider";
import { axiosClient } from "@/libraries/axiosClient";
import Social from "@/components/social";

const inter = Inter({ subsets: ["latin"] });

export default function Home(products) {
  // console.log('««««« products »»»»»', products);c
  return (
    <>
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
