import React, { useEffect, useState } from 'react'

import Modal from 'react-bootstrap/Modal';



import { getCategoryAll } from 'utils/Api';

import CategoryDisplay from './CategoryDisplay';
import CategorySort from './CategorySort';
import CategoryRegisterForm from 'components/Form/RegisterFormCategory';

import styles from './category.module.css'
import CategorySearch from 'components/Form/SearchId/category';

export default function CategoryPage() {
    const [categoryList, setProductList] = useState([]);
    const [queryResult, setQueryResult] = useState([])

    const [show, setShow] = useState(false);

    const handleAddProduct = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        getCategoryAll().then(data => {
            setProductList(data)
            setQueryResult(data)
        })
    }, []);

    return (
        <div className='px-0 px-sm-4'>
            <div className='data_header d-flex justify-content-between align-items-center mb-3'>
                <h1> Categories </h1>

                <div className='col-6 col-lg-6  text-center'>
                    <CategorySort categoryList={categoryList} setQueryResult={setQueryResult} />
                </div>

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

            <div>
                <CategorySearch categoryList={categoryList} setQueryResult={setQueryResult} />
            </div>
            <div className='data_body'>
                <div className='data_list'>
                </div>

                <table className=" table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col" className='text-center'>Description</th>
                            <th scope="col" className='text-center'>Created time</th>
                   
                            <th className='ps-3' scope="col">Edit</th>

                        </tr>
                    </thead>

                    <CategoryDisplay queryResult={queryResult} />
                </table>
            </div>

            {/* Add product */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add new category </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <CategoryRegisterForm/>

                </Modal.Body>

            </Modal>
        </div>
    )
}
