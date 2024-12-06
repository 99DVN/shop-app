import axiosClient from './axiosClient';

const addProductTocart = async (data) => {
    return await axiosClient.post('/cart', data);
};

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
};

export { addProductTocart, getCart };
