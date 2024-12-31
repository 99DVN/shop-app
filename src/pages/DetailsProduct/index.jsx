import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '@components/Button/Button';

const DetailProduct = () => {
    const {
        container,
        functionBox,
        boxDetailProduct,
        textDetailProduct,
        specialText,
        btnBack,
        contentSection,
        imgBox,
        boxContent,
        price,
        description,
        boxSize,
        size,
        titleSize,
        functionInfo,
        boxInfo,
        incrementAmount,
        orSection
    } = styles;
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };

    const handleClickToHomePage = () => {
        navigate('/');
    };

    const handleClickGoToShop = () => {
        navigate('/shop');
    };
    return (
        <>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div className={boxDetailProduct}>
                            <div className={textDetailProduct}>
                                <span
                                    onClick={handleClickToHomePage}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Home
                                </span>{' '}
                                &gt;{' '}
                                <span
                                    className={specialText}
                                    onClick={handleClickGoToShop}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    Men
                                </span>
                            </div>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            {' '}
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div className={contentSection}>
                        <div className={imgBox}>
                            <img src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg' />
                            <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.2-min.jpg' />
                            <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg' />
                            <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.4-min.jpg' />
                        </div>
                        <div className={boxContent}>
                            <h1>Amet faucibus nunc</h1>
                            <p className={price}>$1,879.99</p>
                            <p className={description}>
                                Amet, elit tellus, nisi odio velit ut. Euismod
                                sit arcu, quisque arcu purus orci leo.
                            </p>
                            <p className={titleSize}>Size</p>
                            <div className={boxSize}>
                                <div className={size}>L</div>
                                <div className={size}>M</div>
                                <div className={size}>S</div>
                            </div>

                            <div className={functionInfo}>
                                <div className={incrementAmount}>
                                    <div>-</div>
                                    <div>1</div>
                                    <div>+</div>
                                </div>

                                <div className={boxInfo}>
                                    <Button content={'ADD TO CART'} />
                                </div>
                            </div>

                            <div className={orSection}>
                                <div></div>
                                <span>OR</span>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default DetailProduct;
