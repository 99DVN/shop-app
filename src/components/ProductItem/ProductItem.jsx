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

const ProductItem = ({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomepage = true
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
        if (!userId) {
            setIsOpen(true);
            setType('login');
            toast.warning('Please login to add to cart!');

            return;
        }
        if (!sizeChoose) {
            toast.warning('Please choose size!');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };
        setIsLoading(true);
        addProductTocart(data)
            .then((res) => {
                setIsOpen(true);
                setType('cart');

                // toast.success('Add Product to cart successfully!');
                setIsLoading(false);
                handleGetListProductsCart(userId, 'cart');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Add Product to cart failed!');
                setIsLoading(false);
            });
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

            <div className={isShowGrid ? '' : content}>
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
