import axiosClient from './axiosClient';

const getProducrs = async () => {
    const res = await axiosClient.get('/product');
    console.log('product', res);
};

export { getProducrs };
