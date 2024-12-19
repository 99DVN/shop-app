import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import Filter from '@/pages/OurShop/components/Filter';
import ListProducts from '@/pages/OurShop/components/ListProducts';

const OurShop = () => {
    const {
        container,
        functionBox,
        specialText,
        btnBack,
        boxHomeShop,
        textHome
    } = styles;
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    const handleToHomePage = () => {
        navigate('/');
    };

    return (
        <OurShopProvider>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div className={boxHomeShop}>
                            <div
                                className={textHome}
                                onClick={handleToHomePage}
                            >
                                Home
                            </div>{' '}
                            &gt; <span className={specialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            {' '}
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>
                <Banner />

                <div>
                    <Filter />
                    <ListProducts />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
};

export default OurShop;
