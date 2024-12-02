import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import Filter from '@/pages/OurShop/components/Filter';

const OurShop = () => {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handkeBackPreviousPage = () => {
        navigate(-1);
    };

    return (
        <OurShopProvider>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handkeBackPreviousPage()}
                        >
                            {' '}
                            &lt; Return to previous page
                        </div>
                    </div>
                </div>
                <Banner />

                <div>
                    <Filter />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
};

export default OurShop;
