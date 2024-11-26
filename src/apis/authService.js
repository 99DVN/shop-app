import axiosClient from './axiosClient';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};

const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};

const getInfo = async () => {
    return await axiosClient.get(
        '/user/info/c01b6feb-e134-4916-b540-e1525b3e7cae'
    );
};

export { register, signIn, getInfo };
