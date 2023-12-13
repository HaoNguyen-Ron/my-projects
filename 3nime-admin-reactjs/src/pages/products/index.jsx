import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';

import { getProductAll } from 'utils/Api';

import ProductDisplay from './ProductDisplay';
import ProductRegisterForm from 'components/Form/RegisterFormProduct';
import ProductFilterSupplier from './ProductFilterSupplier';
import ProductFilterCategory from './ProductFilterCategory';
import ProductFilterPrice from './ProductFilterPrice';
import ProductSort from './ProductSort';

import styles from './product.module.css'
import ProductSearch from 'components/Form/SearchId/product';

export default function ProductPage() {
    const [productList, setProductList] = useState([]);
    const [queryResult, setQueryResult] = useState([])

    const [show, setShow] = useState(false);

    const handleAddProduct = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getProductAll().then(data => {
            setProductList(data)
            setQueryResult(data)
        })
    }, []);

    return (
        <div className='px-0 px-sm-4'>
            <div className='data_header d-flex justify-content-between align-items-center mb-3'>
                <h1> Products </h1>

                <div>
                    <button
                        className={`btn ${styles.btn}`}
                        onClick={handleAddProduct}
                    >
                        Add
                        <i className="fa-solid fa-plus text-white ms-2"></i>
                    </button>
                </div>
            </div>

            <div className='product__nav mb-3 row'>
                <div className='col-6 col-lg-3 text-center'>
                    <ProductFilterSupplier productsList={productList} setQueryResult={setQueryResult} />
                </div>

                <div className='col-6 col-lg-3  text-center'>
                    <ProductFilterCategory productsList={productList} setQueryResult={setQueryResult} />
                </div>

                <div className='col-6 col-lg-3  text-center'>
                    <ProductFilterPrice productsList={productList} setQueryResult={setQueryResult} />
                </div>

                <div className='col-6 col-lg-3  text-center'>
                    <ProductSort productsList={productList} setQueryResult={setQueryResult} />
                </div>

            </div>

            <div>
                <ProductSearch productList={productList} setQueryResult={setQueryResult} />
            </div>
            <div className='data_body'>
                <div className='data_list'>
                </div>

                <table className=" table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th className='d-none d-xl-table-cell text-center' scope="col">Price</th>
                            <th className='d-none d-xl-table-cell text-center' scope="col">Discount</th>
                            <th className='text-center' scope="col">Stock</th>
                            <th className='d-none d-xl-table-cell text-center' scope="col">Category</th>
                            <th className='d-none d-xl-table-cell text-center' scope="col">Supplier</th>

                            <th className='d-table-cell d-xl-none text-center' scope="col">Price</th>
                            <th className='d-table-cell d-xl-none text-center' scope="col">Origin</th>

                            <th className='ps-3' scope="col">Edit</th>

                        </tr>
                    </thead>

                    <ProductDisplay queryResult={queryResult} />
                </table>
            </div>

            {/* Add product */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add new product </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <ProductRegisterForm />

                </Modal.Body>

            </Modal>
        </div>
    )
}
