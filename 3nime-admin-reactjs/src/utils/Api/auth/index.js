import axiosClient from "utils/axiosClient";

export const getMe = async () => {
    try {
        const res = await axiosClient.get('/auth/profile')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};