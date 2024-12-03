import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducrs } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';

const HomePage = () => {
    const { container } = styles;

    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        const query = { sortType: 0, page: 1, limit: 10 };
        getProducrs(query).then((res) => {
            setListProducts(res.contents);
        });
    }, []);
    return (
        <>
            <div className={container}>
                <Header />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct
                    data={listProducts.slice(2, listProducts.length)}
                />
                <SaleHomePage />
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
