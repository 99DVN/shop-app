import axiosClient from './axiosClient';

const getProducrs = async () => {
    const res = await axiosClient.get('/product');
    return res.data;
    console.log('res', res);
};

export { getProducrs };
