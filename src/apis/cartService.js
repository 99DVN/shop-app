import axiosClient from './axiosClient';

const addProductTocart = async (data) => {
    return await axiosClient.post('/cart', data);
};

const getCart = async (userId) => {
    return await axiosClient.get(`/cart/${userId}`);
};

const deleteItem = async (body) => {
    return await axiosClient.delete(`/cart/deleteItem`, {
        data: body
    });
};

export { addProductTocart, getCart, deleteItem };
