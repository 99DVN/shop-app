import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductTocart } from '@/apis/cartService';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import { LiaEyeSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';
import { handleAddProductTocartCommon } from '@/utils/helper';

const ProductItem = ({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true,
    slideItem = false
}) => {
    // const { isShowGrid } = useContext(OurShopContext);
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const [sizeChoose, setSizeChoose] = useState('');
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProductsCart, setDetailProduct } =
        useContext(SideBarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        boxImg,
        showImgWhenHover,
        showFncWhenHover,
        boxIcon,
        title,
        priceBox,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        containerItem,
        leftBtn,
        largImg,
        isAcctiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose('');
    };

    const handleAddtoCart = () => {
        handleAddProductTocartCommon(
            userId,
            setIsOpen,
            setType,
            toast,
            sizeChoose,
            details._id,
            1,
            setIsLoading,
            handleGetListProductsCart
        );
    };

    const handleShowDetailProductSideBar = () => {
        setIsOpen(true);
        setType('detail');

        setDetailProduct(details);
    };

    const handleNavigateToDetails = () => {
        const path = `/product/${details._id}`;
        navigate(path);
    };

    useEffect(() => {
        if (isHomepage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomepage, ourShopStore?.isShowGrid]);

    useEffect(() => {
        if (slideItem) setIsShowGrid(true);
    }, [slideItem]);

    return (
        <div
            className={isShowGrid ? '' : containerItem}
            style={{
                cursor: 'pointer'
            }}
        >
            <div className={cls(boxImg, { [largImg]: !isShowGrid })}>
                <img src={src} alt='image' />
                <img
                    src={prevSrc}
                    alt='prevImage'
                    className={showImgWhenHover}
                    onClick={handleNavigateToDetails}
                />
                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid
                            style={{
                                fontSize: '20px'
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart
                            style={{
                                fontSize: '23px'
                            }}
                        />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <div
                        className={boxIcon}
                        onClick={handleShowDetailProductSideBar}
                    >
                        <LiaEyeSolid
                            style={{
                                fontSize: '19px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div
                className={isShowGrid ? '' : content}
                style={{
                    marginTop: slideItem && '10px'
                }}
            >
                {!isHomepage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cls(size, {
                                        [isAcctiveSize]:
                                            sizeChoose === item.name
                                    })}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}
                <div className={cls(title, { [textCenter]: !isHomepage })}>
                    {name}
                </div>
                {!isHomepage && (
                    <div className={textCenter} style={{ color: '#888' }}>
                        Brand 01
                    </div>
                )}
                <div
                    className={cls(priceBox, { [textCenter]: !isHomepage })}
                    style={{
                        color: isHomepage ? '#333' : '#888'
                    }}
                >
                    ${price}
                </div>
                {!isHomepage && (
                    <div className={cls(boxBtn, { [leftBtn]: !isShowGrid })}>
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    'ADD TO CART'
                                )
                            }
                            onClick={handleAddtoCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
