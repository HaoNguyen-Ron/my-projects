import React, { useEffect, useState } from 'react'

import SearchBarInput from './SearchBarInput';
import SearchBarDisplay from './SearchBarDisplay';

import { axiosClient } from '@/libraries/axiosClient';

import styles from '@/styles/searchbar.module.css'
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [searchList, setSearchList] = useState([]);
  const [queryResult, setQueryResult] = useState([])

  const [isSearched, setIsSearched] = useState(false)

  const route = useRouter()

  const getProductList = async () => {
    try {
      const res = await axiosClient.get('/products/all')

      return res.data.payload || []
    } catch (error) {
      console.log('««««« apiError »»»»»', error);
    }
  };


  useEffect(() => {
    if (route.isReady === true) {
      getProductList().then(data => {
        setQueryResult(data)
        setSearchList(data)
      })
    }

  }, []);
  return (
    <>
      <div className={styles.searchbar__input}>
        <div className='my-auto'>
          <SearchBarInput searchList={searchList} setQueryResult={setQueryResult} setIsSearched={setIsSearched} />
        </div>

        {
          isSearched ? (
            <div className={styles['searchbar__input-display']}>
              <SearchBarDisplay queryResult={queryResult} />
            </div>
          ) : (
            null
          )
        }

      </div>
    </>
  )
}

