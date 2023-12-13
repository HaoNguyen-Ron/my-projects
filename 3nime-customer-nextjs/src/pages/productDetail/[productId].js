// pages/[productId].js
import ProductDetail from '@/components/productDetail'; // Adjust the import path
import { axiosClient } from '@/libraries/axiosClient';
import { useState } from 'react';

const ProductDetailPage = ({ product }) => {

  return (
    <div>
      <ProductDetail
       products={product} 
      />
    </div>
  );
};

export async function getStaticPaths() {
    // Fetch the list of product IDs from your API
    const res = await axiosClient.get("/products/all");
    const products = res.data.payload;
  
    // Map the product IDs to the paths that Next.js should generate
    const paths = products.map((product) => ({
      params: { productId: product._id.toString() },
    }));
  
    // Return the paths to Next.js
    return {
      paths,
      fallback: false, // Set to false if you want 404 for unknown paths
    };
  }

  export async function getStaticProps({ params }) {
    // Fetch the product data based on the productId
    const { productId } = params;
    const res = await axiosClient.get(`/products/${productId}`);
    const product = res.data.payload;
  
    // Return the product as props
    return {
      props: {
        product,
      },
    };
  }

export default ProductDetailPage;
