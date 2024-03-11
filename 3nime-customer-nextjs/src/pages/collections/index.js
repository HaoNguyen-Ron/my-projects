import React, { useEffect, useState } from "react";
import Card from "@/components/CardList/Card";
import Filter from "@/components/Filter";
import Social from "@/components/social";
import { axiosClient } from "@/libraries/axiosClient";
import { useRouter } from "next/router";

function Collection({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [selectedPriceOptions, setSelectedPriceOptions] = useState([]);
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [slecttedProducts, setSlecttedProducts] = useState([...products]);

  const router = useRouter();
  // const [cart,setCart] = useState([]);

  //addToCart
  const handleAddToCart = (selectedProduct) => {
    if (router.isReady === true) {
      const checkForToken = localStorage.getItem("TOKEN");
      if (!checkForToken) {
        router.push("/login");
      } else {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log('««««« cart »»»»»', cart);
        const updatedCart = [...cart];
        const existingProductIndex = updatedCart.findIndex(
          (item) => item._id === selectedProduct._id
        );

        if (existingProductIndex !== -1) {
          if (
            updatedCart[existingProductIndex].quantity < selectedProduct.stock
          ) {
            alert(" đã thêm sản phẩm vào giỏ hàng.");
            updatedCart[existingProductIndex].quantity += 1;
          } else {
            alert(" đã hết sản phẩm.");
            return;
          }
        } else {
          updatedCart.push({ ...selectedProduct, quantity: 1 });
          alert(" đã thêm sản phẩm vào giỏ hàng.");
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }
  };

  //suplier----------------------------------------------------------------
  const handleSuppllierChange = (label) => {
    // Kiểm tra nếu nhãn đã có trong danh sách nhà cung cấp đã chọn
    if (selectedSuppliers.includes(label)) {
      // Nếu có, loại bỏ nó
      const updatedSuppliers = selectedSuppliers.filter(
        (supplier) => supplier !== label
      );
      setSelectedSuppliers(updatedSuppliers);
    } else {
      // Nếu không, thêm nó vào
      const updatedSuppliers = [...selectedSuppliers, label];
      setSelectedSuppliers(updatedSuppliers);
    }
  };
  // price -------------------------------------------------------------------
  const handlePriceChange = (label) => {
    const isOptionSelected = selectedPriceOptions.includes(label);

    let updatedSelectedPriceOptions;

    if (isOptionSelected) {
      updatedSelectedPriceOptions = selectedPriceOptions.filter(
        (selectedOption) => selectedOption !== label
      );
    } else {
      updatedSelectedPriceOptions = [...selectedPriceOptions, label];
    }

    setSelectedPriceOptions(updatedSelectedPriceOptions);
  };
  //Xắp xếp Tăng dần
  //Hàm để cập nhật danh sách sản phẩm khi sắp xếp
  const updateSelectedProducts = (sortedProducts) => {
    setFilteredProducts(sortedProducts);
  };

  // Hàm sắp xếp tăng dần theo giá
  const handleAscPrice = () => {
    const sortedProducts = [...slecttedProducts];
    sortedProducts.sort((a, b) => a.price - b.price);
    updateSelectedProducts(sortedProducts);
    console.log("««««« Tăng Dần »»»»»", sortedProducts);
  };
  const handleDescPrice = () => {
    const sortedProducts = [...slecttedProducts];
    sortedProducts.sort((a, b) => b.price - a.price);
    updateSelectedProducts(sortedProducts);
    console.log("««««« Giảm dần »»»»»", sortedProducts);
  };

  const handleAscName = () => {
    const sortedProducts = [...slecttedProducts];
    sortedProducts.sort((a, b) => String(a.name).localeCompare(String(b.name)));
    updateSelectedProducts(sortedProducts);
    console.log("««««« A-Z »»»»»", sortedProducts);
  };

  const handleDescName = () => {
    const sortedProducts = [...slecttedProducts];
    sortedProducts.sort((a, b) => String(b.name).localeCompare(String(a.name)));
    updateSelectedProducts(sortedProducts);
    console.log("««««« Z-A »»»»»", sortedProducts);
  };

  useEffect(() => {
    // console.log("selectedPriceOptions changed:", selectedPriceOptions);
    // price-------------------------------------------------------------
    const filterProductsByPrice = () => {
      if (selectedPriceOptions.length === 0) {
        return products;
      }

      return products.filter((product) => {
        const productPrice = product.price;

        return selectedPriceOptions.some((option) => {
          const [minPrice, maxPrice] = getPriceRangeFromOption(option);

          return (
            (minPrice === undefined || productPrice >= minPrice) &&
            (maxPrice === undefined || productPrice <= maxPrice)
          );
        });
      });
    };
    //suplier ------------------------------------------------
    const filterProductsBySupplier = () => {
      if (selectedSuppliers.length === 0) {
        return products;
      }

      return products.filter((product) =>
        selectedSuppliers.includes(product.supplier.name)
      );
    };

    const priceFilteredProducts = filterProductsByPrice();
    const supplierFilteredProducts = filterProductsBySupplier();
    const finalFilteredProducts = priceFilteredProducts.filter((product) =>
      supplierFilteredProducts.includes(product)
    );

    setFilteredProducts(finalFilteredProducts);
  }, [selectedPriceOptions, selectedSuppliers, products]);
  // Hàm để chuyển đổi lựa chọn giá thành khoảng giá
  const getPriceRangeFromOption = (selectedPriceOption) => {
    switch (selectedPriceOption) {
      case "Dưới 1.000.000₫":
        return [undefined, 1000000];
      case "1.000.000₫ - 2.000.000₫":
        return [1000000, 2000000];
      case "2.000.000₫ - 3.000.000₫":
        return [2000000, 3000000];
      case "3.000.000₫ - 4.000.000₫":
        return [3000000, 4000000];
      case "Trên 4.000.000₫":
        return [4000000, 80000000];
      default:
        return [];
    }
  };

  return (
    <>
      <Filter
        itemName={["Giá: Tăng dần", "Giá: Giảm dần", "Tên: A-Z", "Tên: Z-A"]}
        itemSuplier={[
          "Nhật Bản",
          "Việt Nam",
          "Trung Quốc",
          "Thái Lan",
          "Hoa Kỳ",
        ]}
        itemPrice={[
          "Dưới 1.000.000₫",
          "1.000.000₫ - 2.000.000₫",
          "2.000.000₫ - 3.000.000₫",
          "3.000.000₫ - 4.000.000₫",
          "Trên 4.000.000₫",
        ]}
        sortByPriceAscending={handleAscPrice}
        sortByPriceDescending={handleDescPrice}
        sortByNameAzAsc={handleAscName}
        sortByNameZaDesc={handleDescName}
        onCheckboxChangePrice={handlePriceChange}
        onCheckboxChangeSupplier={handleSuppllierChange}
      />

      <div className="container">
        <p className="text-danger">
          Tùy chọn giá:
          <span className="text-success mx-2">
            {selectedPriceOptions.join(" , ")}
          </span>
          <br />
          Tùy chọn thương hiệu:
          <span className="text-success mx-2">
            {selectedSuppliers.join(" , ")}
          </span>
        </p>
      </div>

      <div className="collection-listproduct">
        <div className="container">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) =>
                product.stock > 0 ? (
                  <div className="col-md-3 col-sm-4 col-xs-6" key={product._id}>
                    <Card
                      id={`/productDetail/${product._id}`}
                      products={product}
                      handleAddToCart={handleAddToCart}
                    />
                  </div>
                ) : null
              )
            ) : (
              <p>Không có sản phẩm nào</p>
            )}
          </div>
        </div>
      </div>

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

export default Collection;
