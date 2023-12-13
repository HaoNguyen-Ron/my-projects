import { axiosClient } from "@/libraries/axiosClient";

export const getProductLimit = async () => {
  try {
      const res = await axiosClient.get('/query/getProductLimit')

      return res.data.payload || []
  } catch (error) {
      console.log('««««« apiError »»»»»', error);
  }
};

export const getUserTotalOrder = async (id) => {
  try {
      const res = await axiosClient.get('/query/filterOrderByCustomerId',{
        query: id,
      })

      return res.data.payload || []
  } catch (error) {
      console.log('««««« apiError »»»»»', error);
  }
};