import React, { useEffect, useMemo, useState } from 'react'

import styles from '../form.module.css'
import { getProductAll } from 'utils/Api';

import Modal from 'react-bootstrap/Modal';
import ProductSearch from 'components/Form/SearchId/product';

export default function SelectProduct({
    name,
    setSelectedProduct,
    productList
}) {
    const [show, setShow] = useState(false);

    const [queryResult, setQueryResult] = useState([])
    const [checkedProducts, setCheckedProducts] = useState([]);

    const handleClose = () => {
        setShow(false);
    }

    const handleOpenProductSelection = () => {
        setShow(true)
    }

    const handleCheckboxChange = (productId) => {
        const isProductChecked = checkedProducts.includes(productId);
    
        if (isProductChecked) {
          setCheckedProducts((prevSelected) =>
            prevSelected.filter((id) => id !== productId)
          );
        } else {
          setCheckedProducts((prevSelected) => [...prevSelected, productId]);
        }
      };

    useEffect(() => {
        if(productList){
            setQueryResult(productList)
        }
        setSelectedProduct(checkedProducts);
      }, [checkedProducts, setSelectedProduct, productList]);

    return (
        <div>
            <div>
                <button className={`btn ${styles.modal__btn}`} onClick={handleOpenProductSelection} >Add product</button>
            </div>

            <Modal show={show} onHide={handleClose} size="lg" style={{backgroundColor:'#ddd'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Product selection</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className=" mb-3" style={{ minHeight: '500px' }}>
                        <div className='mb-4'>
                            <ProductSearch setQueryResult={setQueryResult} productList={productList} />
                        </div>

                        <div className='border rounded mt-3' style={{ maxHeight: '600px', overflowY: 'auto' }}>
                            {queryResult && queryResult.map(product => {
                                return (
                                    <div key={product._id} className='px-1 px-lg-5 mt-2 d-flex justify-content-between align-items-center border-bottom'>
                                        <div className='d-flex align-items-center'>
                                            <input
                                                style={{ width: '30px', height: '30px', backgroundColor: 'var(--main-color)' }}
                                                type="checkbox"
                                                className='me-2'
                                                onChange={() => handleCheckboxChange(product._id)}
                                                checked={checkedProducts.includes(product._id)}
                                            />
                                        </div>

                                        <div className='text-center'>
                                            <b className={`${styles["searchbar__input-p"]}`} >{product.name}</b>
                                        </div>

                                        <div className='py-2'>
                                            <img
                                                src={product.description}
                                                alt=""
                                                className={`${styles["searchbar__input-img"]} me-3`}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className={`btn ${styles.modal__btn} fs-4`} onClick={handleClose}>Back</button>
                    </div>

                </Modal.Body>

            </Modal>
        </div>

    )

}
